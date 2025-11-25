import { User } from '../types';

const USERS_KEY = 'nebula_users';
const CURRENT_USER_KEY = 'nebula_current_user';

// Admin account details
const ADMIN_ACCOUNT = {
  id: 'admin-001',
  name: 'Admin',
  email: 'admin@nebula.com',
  password: '1234567',
  avatar: 'https://ui-avatars.com/api/?name=Admin&background=000&color=fff',
  library: []
};

// Ensure admin exists helper
const ensureAdminExists = () => {
  const usersStr = localStorage.getItem(USERS_KEY);
  let users = usersStr ? JSON.parse(usersStr) : [];
  
  // Check by name for Admin
  const adminExists = users.find((u: any) => u.name === ADMIN_ACCOUNT.name);
  if (!adminExists) {
    users.push(ADMIN_ACCOUNT);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    console.log('Admin account created automatically.');
  }
};

export const AuthService = {
  // Updated to take username instead of email
  login: (username: string, password: string): User | null => {
    ensureAdminExists(); // Check admin existence on login attempt

    const usersStr = localStorage.getItem(USERS_KEY);
    const users = usersStr ? JSON.parse(usersStr) : [];
    
    // Check against name (username)
    const user = users.find((u: any) => u.name === username && u.password === password);
    
    if (user) {
      const { password, ...safeUser } = user; // Şifreyi state'e alma
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(safeUser));
      window.dispatchEvent(new Event('auth-change'));
      return safeUser;
    }
    return null;
  },

  register: (name: string, email: string, password: string): User | null => {
    ensureAdminExists();
    
    const usersStr = localStorage.getItem(USERS_KEY);
    const users = usersStr ? JSON.parse(usersStr) : [];

    // Check if username already exists
    if (users.find((u: any) => u.name === name)) {
      throw new Error('Bu kullanıcı adı zaten alınmış.');
    }

    // Check if email already exists (optional but good practice)
    if (users.find((u: any) => u.email === email)) {
      throw new Error('Bu email adresi zaten kayıtlı.');
    }

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password, // Gerçek uygulamada ASLA şifreyi düz metin saklamayın!
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`,
      library: []
    };

    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    
    // Otomatik giriş yap
    const { password: _, ...safeUser } = newUser;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(safeUser));
    window.dispatchEvent(new Event('auth-change'));
    
    return safeUser;
  },

  logout: () => {
    localStorage.removeItem(CURRENT_USER_KEY);
    window.dispatchEvent(new Event('auth-change'));
  },

  getCurrentUser: (): User | null => {
    const userStr = localStorage.getItem(CURRENT_USER_KEY);
    return userStr ? JSON.parse(userStr) : null;
  },
  
  // Kullanıcı oyun satın aldığında
  addToLibrary: (gameId: string) => {
    const userStr = localStorage.getItem(CURRENT_USER_KEY);
    if (!userStr) return false;
    
    const user = JSON.parse(userStr);
    if (!user.library.includes(gameId)) {
        user.library.push(gameId);
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
        
        // Ana veritabanını da güncelle (simülasyon)
        const usersStr = localStorage.getItem(USERS_KEY);
        if (usersStr) {
            const users = JSON.parse(usersStr);
            const idx = users.findIndex((u: any) => u.id === user.id);
            if (idx !== -1) {
                users[idx].library = user.library;
                localStorage.setItem(USERS_KEY, JSON.stringify(users));
            }
        }
        
        window.dispatchEvent(new Event('auth-change'));
        return true;
    }
    return false;
  }
};
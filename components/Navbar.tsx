
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Gamepad2, Menu, X, Search, User as UserIcon, LogOut, ShoppingBag } from 'lucide-react';
import { AuthService } from '../services/authService';
import { User } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(AuthService.getCurrentUser());
  const [showUserMenu, setShowUserMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthChange = () => {
      setUser(AuthService.getCurrentUser());
    };

    window.addEventListener('auth-change', handleAuthChange);
    return () => window.removeEventListener('auth-change', handleAuthChange);
  }, []);

  const handleLogout = () => {
    AuthService.logout();
    navigate('/');
    setShowUserMenu(false);
  };

  const isActive = (path: string) => location.pathname === path ? "text-white bg-cyan-700 md:bg-transparent md:text-cyan-400" : "text-gray-300 hover:bg-gray-700 md:hover:bg-transparent md:hover:text-white";

  const handleNav = (path: string) => {
    navigate(path);
    setIsOpen(false);
  }

  return (
    <nav className="fixed w-full z-50 top-0 start-0 glass-panel border-b border-gray-700/50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div onClick={() => navigate('/')} className="flex items-center space-x-3 rtl:space-x-reverse group cursor-pointer">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <Gamepad2 className="w-6 h-6 text-white" />
          </div>
          <span className="self-center text-2xl font-bold whitespace-nowrap tracking-tight">
            <span className="text-white">Alp</span><span className="text-blue-600">arslan</span>
          </span>
        </div>
        
        <div className="flex md:order-2 items-center space-x-3 relative">
          <button className="p-2 text-gray-400 hover:text-white transition-colors hidden sm:block">
            <Search className="w-5 h-5" />
          </button>
          
          {user ? (
            <div className="relative">
              <button 
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors focus:outline-none"
              >
                <img src={user.avatar} alt="Avatar" className="w-8 h-8 rounded-full border-2 border-cyan-500" />
                <span className="hidden md:block">{user.name}</span>
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-xl py-1 z-50 animate-fade-in">
                  <div className="px-4 py-2 border-b border-slate-700">
                    <p className="text-sm text-white font-bold truncate">{user.name}</p>
                    <p className="text-xs text-gray-400 truncate">{user.email}</p>
                  </div>
                  <button onClick={() => { navigate('/store'); setShowUserMenu(false); }} className="flex w-full items-center px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white">
                    <ShoppingBag className="w-4 h-4 mr-2" /> Kütüphanem ({user.library.length})
                  </button>
                  <button onClick={handleLogout} className="flex w-full items-center px-4 py-2 text-sm text-red-400 hover:bg-slate-700 hover:text-red-300">
                    <LogOut className="w-4 h-4 mr-2" /> Çıkış Yap
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button onClick={() => navigate('/login')} className="hidden md:block text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all shadow-lg shadow-cyan-500/20">
              Giriş Yap
            </button>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            <span className="sr-only">Menu</span>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-700 rounded-lg bg-gray-800/50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <button onClick={() => handleNav('/')} className={`block py-2 px-3 rounded md:p-0 w-full text-left ${isActive('/')}`}>Ana Sayfa</button>
            </li>
            <li>
              <button onClick={() => handleNav('/store')} className={`block py-2 px-3 rounded md:p-0 w-full text-left ${isActive('/store')}`}>Mağaza</button>
            </li>
            <li>
              <button onClick={() => handleNav('/community')} className={`block py-2 px-3 rounded md:p-0 w-full text-left ${isActive('/community')}`}>Topluluk</button>
            </li>
            {!user && (
                 <li className="md:hidden">
                    <button onClick={() => handleNav('/login')} className="block py-2 px-3 text-cyan-400 font-bold w-full text-left">Giriş Yap</button>
                 </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

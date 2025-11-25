
import { Post } from './types';

export const COMMUNITY_POSTS: Post[] = [
  {
    id: 'p1',
    userId: 'u1',
    userName: 'Ahmet Yılmaz',
    userAvatar: 'https://ui-avatars.com/api/?name=Ahmet+Yilmaz&background=0D8ABC&color=fff',
    title: 'Cyber Horizon 2077 gizli sonu bulan var mı?',
    content: 'Dün gece oynarken haritanın köşesinde garip bir NPC buldum ve beni farklı bir görev serisine soktu. İnanılmazdı! Johnny ile olan ilişki seviyeniz %70 üzerindeyse açılıyor sanırım.',
    likes: 142,
    comments: [
      { id: 'c1', userName: 'Caner', userAvatar: 'https://ui-avatars.com/api/?name=Caner&background=random', content: 'Evet, o sonu geçen hafta bitirdim. Kesinlikle en iyi son!', date: '1 saat önce' },
      { id: 'c2', userName: 'Mehmet', userAvatar: 'https://ui-avatars.com/api/?name=Mehmet&background=random', content: 'Koordinatları verebilir misin?', date: '30 dk önce' }
    ],
    tags: ['Spoiler', 'Cyberpunk', 'EasterEgg'],
    date: '2 saat önce'
  },
  {
    id: 'p2',
    userId: 'u2',
    userName: 'Zeynep K.',
    userAvatar: 'https://ui-avatars.com/api/?name=Zeynep+K&background=a855f7&color=fff',
    title: 'Ethereal Legends lonca alımları başladı!',
    content: 'Yeni kurduğumuz "Nightfall" loncasına aktif oyuncular arıyoruz. Discord zorunludur. Raid günleri Salı ve Perşembe akşamları 21:00.',
    likes: 89,
    comments: [
      { id: 'c3', userName: 'Ali Veli', userAvatar: 'https://ui-avatars.com/api/?name=Ali&background=random', content: 'Hangi serverdasınız?', date: '4 saat önce' }
    ],
    tags: ['Guild', 'Recruitment', 'MMO'],
    date: '5 saat önce'
  },
  {
    id: 'p3',
    userId: 'u3',
    userName: 'RetroGamer',
    userAvatar: 'https://ui-avatars.com/api/?name=Retro+Gamer&background=f59e0b&color=fff',
    title: 'Pixel oyunları neden hala bu kadar popüler?',
    content: 'Grafikler her yıl gelişiyor ama pixel art oyunların verdiği tadı AAA oyunlarda bulamıyorum. Stardew Valley veya Terraria gibi oyunların ruhu bambaşka.',
    likes: 256,
    comments: [
      { id: 'c4', userName: 'OldSchool', userAvatar: 'https://ui-avatars.com/api/?name=OS&background=random', content: 'Kesinlikle katılıyorum. Hayal gücüne daha çok yer bırakıyor.', date: 'Dün' },
      { id: 'c5', userName: 'GrafikCanavari', userAvatar: 'https://ui-avatars.com/api/?name=GC&background=random', content: 'Bence nostalji faktörü. Ben 4K texture severim.', date: 'Dün' }
    ],
    tags: ['Tartışma', 'Indie', 'Retro'],
    date: '1 gün önce'
  },
  {
    id: 'p4',
    userId: 'u4',
    userName: 'FPS_Master',
    userAvatar: 'https://ui-avatars.com/api/?name=FPS+Master&background=ef4444&color=fff',
    title: 'Valorant yeni ajan çok bozuk!',
    content: 'Dün gelen güncelleme ile yeni ajanın yetenekleri oyunu kilitliyor resmen. Nerf gelmesi lazım yoksa dereceli girilmez.',
    likes: 345,
    comments: [],
    tags: ['Valorant', 'Riot', 'Update'],
    date: '3 saat önce'
  },
  {
    id: 'p5',
    userId: 'u5',
    userName: 'StrategyKing',
    userAvatar: 'https://ui-avatars.com/api/?name=Strategy+King&background=10b981&color=fff',
    title: 'HOI4 Türkiye rehberi isteyen?',
    content: 'Yeni DLC ile Türkiye oynamak biraz zorlaştı ama Osmanlıyı tekrar kurmak için mükemmel bir strateji geliştirdim. Video linkini aşağıya bırakıyorum.',
    likes: 56,
    comments: [
      { id: 'c6', userName: 'Tarihçi', userAvatar: 'https://ui-avatars.com/api/?name=Tarih&background=random', content: 'Bekliyoruz reis!', date: '10 dk önce' }
    ],
    tags: ['HOI4', 'Strategy', 'Guide'],
    date: '6 saat önce'
  },
  {
    id: 'p6',
    userId: 'u6',
    userName: 'SimRacer_TR',
    userAvatar: 'https://ui-avatars.com/api/?name=Sim+Racer&background=3b82f6&color=fff',
    title: 'Direksiyon seti önerisi (Bütçe 15k)',
    content: 'Arkadaşlar giriş seviyesi üstü, force feedback hissi iyi olan bir direksiyon seti arıyorum. Logitech G923 mü yoksa Thrustmaster mı?',
    likes: 23,
    comments: [
      { id: 'c7', userName: 'DriftKing', userAvatar: 'https://ui-avatars.com/api/?name=DK&background=random', content: 'Thrustmaster T300RS al, pişman olmazsın.', date: '2 gün önce' }
    ],
    tags: ['Hardware', 'Racing', 'Help'],
    date: '2 gün önce'
  },
  {
    id: 'p7',
    userId: 'u7',
    userName: 'HorrorFan',
    userAvatar: 'https://ui-avatars.com/api/?name=Horror+Fan&background=000000&color=fff',
    title: 'Silent Hill 2 Remake beklentileriniz?',
    content: 'Konami sonunda efsaneyi geri döndürüyor. Sizce atmosferi koruyabilecekler mi yoksa aksiyona mı kayacak?',
    likes: 189,
    comments: [],
    tags: ['Horror', 'Konami', 'Remake'],
    date: '12 saat önce'
  },
  {
    id: 'p8',
    userId: 'u8',
    userName: 'SpeedRunner01',
    userAvatar: 'https://ui-avatars.com/api/?name=Speed+Runner&background=f43f5e&color=fff',
    title: 'Minecraft 1.21 güncellemesi efsane!',
    content: 'Yeni zindanlar ve crafting sistemi oyuna acayip derinlik katmış. Speedrun rotaları tamamen değişecek.',
    likes: 412,
    comments: [
      { id: 'c8', userName: 'CreeperLover', userAvatar: 'https://ui-avatars.com/api/?name=CL&background=random', content: 'Bakır blokların kullanımı çok iyi olmuş.', date: '1 gün önce' }
    ],
    tags: ['Minecraft', 'Update', 'Mojang'],
    date: '1 gün önce'
  },
  {
    id: 'p9',
    userId: 'u9',
    userName: 'HardwareGuru',
    userAvatar: 'https://ui-avatars.com/api/?name=Hardware+Guru&background=6366f1&color=fff',
    title: 'RTX 5090 sızıntıları doğru mu?',
    content: 'İnternette dolaşan özelliklere göre güç tüketimi 600W olacakmış. PSU değiştirmemiz gerekecek galiba.',
    likes: 78,
    comments: [],
    tags: ['Hardware', 'Nvidia', 'GPU'],
    date: '3 gün önce'
  },
  {
    id: 'p10',
    userId: 'u10',
    userName: 'IndieLover',
    userAvatar: 'https://ui-avatars.com/api/?name=Indie+Lover&background=8b5cf6&color=fff',
    title: 'Hollow Knight: Silksong ne zaman çıkacak???',
    content: 'Artık beklemekten yaşlandım. Bir haber, bir fragman, herhangi bir şey...',
    likes: 999,
    comments: [
      { id: 'c9', userName: 'ClownMask', userAvatar: 'https://ui-avatars.com/api/?name=CM&background=random', content: '🤡 Makyajımızı tazeleyelim.', date: 'Her gün' }
    ],
    tags: ['HollowKnight', 'Indie', 'Hype'],
    date: '1 hafta önce'
  }
];

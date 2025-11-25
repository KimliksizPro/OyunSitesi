
import React, { useState, useEffect } from 'react';
import { MemoryRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameCard from './components/GameCard';
import NexusChat from './components/NexusChat';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import GameDetailsPage from './pages/GameDetailsPage';
import StorePage from './pages/StorePage';
import CommunityPage from './pages/CommunityPage';
import { Zap, Trophy, Globe, Shield, Bot, ArrowRight, Instagram } from 'lucide-react';
import { GameDataService } from './services/gameDataService';
import { Game } from './types';
import { ALL_GAMES } from './data/games'; // Fallback initial data

// A simple Footer component
const Footer = ({ onOpenChat }: { onOpenChat: () => void }) => {
  const navigate = useNavigate();
  
  return (
  <footer className="bg-slate-950 border-t border-slate-800 py-12">
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
             <Zap className="w-5 h-5 text-cyan-500" /> Alparslan
          </h3>
          <p className="text-gray-400 text-sm">Yeni nesil oyun deneyiminin merkezi. Yapay zeka destekli keşif.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Keşfet</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><button onClick={() => navigate('/store')} className="hover:text-cyan-400 transition-colors text-left">Yeni Çıkanlar</button></li>
            <li><button onClick={() => navigate('/store')} className="hover:text-cyan-400 transition-colors text-left">Çok Satanlar</button></li>
            <li><button onClick={() => navigate('/store')} className="hover:text-cyan-400 transition-colors text-left">Yakında</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Topluluk</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><button onClick={() => navigate('/community')} className="hover:text-cyan-400 transition-colors text-left">Blog</button></li>
            <li><button onClick={() => navigate('/community')} className="hover:text-cyan-400 transition-colors text-left">Forumlar</button></li>
            <li><button onClick={onOpenChat} className="hover:text-cyan-400 transition-colors text-left">Nexus Asistan</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">İletişim</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="mailto:alparslanakdeniz5@gmail.com" className="hover:text-cyan-400 transition-colors cursor-pointer">alparslanakdeniz5@gmail.com</a></li>
            <li className="mt-4">
                <a href="https://instagram.com/alp_arslannn4" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors font-medium">
                    <Instagram className="w-5 h-5" />
                    <span>alp_arslannn4</span>
                </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 mt-12 pt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Alparslan Gaming. Tüm hakları saklıdır.
      </div>
    </div>
  </footer>
  );
};

const FeatureItem = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50 transition-all hover:-translate-y-1 duration-300 group">
        <div className="p-4 rounded-full bg-cyan-500/10 text-cyan-400 mb-4 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
            <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-white font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{desc}</p>
    </div>
)

const HomePage = ({ games }: { games: Game[] }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToGames = () => {
    document.getElementById('featured-games')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Split games into featured and trending dynamically if possible, or use logic
  // For simplicity, we can just take the first 4 as featured, rest as trending, or rely on original logic if ids match
  // But since data comes from API, let's filter or slice.
  // Assuming "Featured" are high quality AAA titles
  const featured = games.slice(0, 4);
  const trending = games.slice(4);

  return (
    <main className="bg-slate-900 min-h-screen pb-20 selection:bg-cyan-500/30 selection:text-cyan-100">
      <Navbar />
      <Hero onOpenChat={() => setIsChatOpen(true)} onScrollToGames={scrollToGames} />
      
      {/* Features Bar */}
      <section className="max-w-screen-xl mx-auto px-4 -mt-16 relative z-20">
        <div className="glass-panel rounded-2xl p-6 shadow-2xl shadow-black/50 grid grid-cols-1 md:grid-cols-4 gap-6 border-t border-white/10">
            <FeatureItem icon={Zap} title="Anında Teslimat" desc="Oyun kodların saniyeler içinde kütüphanende." />
            <FeatureItem icon={Shield} title="Güvenli Ödeme" desc="256-bit SSL şifreleme ile maksimum güvenlik." />
            <FeatureItem icon={Trophy} title="Özel Ödüller" desc="Alışveriş yaptıkça Nebula Puan kazan." />
            <FeatureItem icon={Globe} title="7/24 Destek" desc="Nexus AI ve uzman ekibimiz her zaman yanında." />
        </div>
      </section>

      {/* Featured Games Section */}
      <section id="featured-games" className="max-w-screen-xl mx-auto px-4 py-24">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Öne Çıkanlar</h2>
            <p className="text-gray-400">Editörün seçtiği haftanın en iyi oyunları.</p>
          </div>
          <button 
            onClick={() => navigate('/store')}
            className="group flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
          >
            Tümünü Gör 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* Trending / Vertical Cards */}
      <section className="bg-slate-950/50 py-24 border-y border-slate-800 relative overflow-hidden">
         {/* Decorative background elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px] -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-900/20 rounded-full blur-[100px] translate-y-1/2"></div>

        <div className="max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Trend Olanlar</h2>
            <div className="flex gap-2">
                <button className="px-5 py-2 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-sm font-medium hover:bg-cyan-500/20 transition-colors">Çok Satanlar</button>
                <button className="px-5 py-2 rounded-full bg-slate-800 text-gray-400 border border-slate-700 hover:border-gray-500 hover:text-white text-sm transition-colors">Yeni Çıkanlar</button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
             {trending.map(game => (
                <GameCard key={game.id} game={game} variant="portrait" />
             ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-indigo-900/80"></div>
          <img src="https://picsum.photos/1920/600?random=99" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50" alt="CTA Background" />
          
          <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-md mb-6 border border-white/20 animate-float">
                <Bot className="w-8 h-8 text-cyan-300" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Nexus AI ile Tanışın</h2>
              <p className="text-xl text-gray-200 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
                  Kararsız mı kaldın? Yapay zeka asistanımız Nexus, oyun zevkini analiz eder ve sana en uygun maceraları önerir.
              </p>
              <button 
                onClick={() => setIsChatOpen(true)} 
                className="inline-flex items-center gap-3 bg-white text-indigo-900 font-bold py-4 px-10 rounded-full hover:bg-cyan-50 transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)]"
              >
                  <Bot className="w-5 h-5" />
                  Asistanı Başlat
              </button>
          </div>
      </section>

      <Footer onOpenChat={() => setIsChatOpen(true)} />
      <NexusChat isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </main>
  );
};

// Chat wrapper to handle global chat state even in sub-pages if needed, 
// but here we attach it individually or via context. For simplicity in this structure,
// we keep the chat primarily on Home or handle it locally.
// Ideally, NexusChat should be in a Layout component wrapping Routes.

const LayoutWithChat = ({ children }: { children?: React.ReactNode }) => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    return (
        <>
            {children}
            <NexusChat isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
        </>
    )
}

const App: React.FC = () => {
  const [games, setGames] = useState<Game[]>(ALL_GAMES);

  useEffect(() => {
    const loadGames = async () => {
      const fetchedGames = await GameDataService.fetchGames();
      setGames(fetchedGames);
    };
    loadGames();
  }, []);

  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<HomePage games={games} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/game/:id" element={<LayoutWithChat><GameDetailsPage games={games} /></LayoutWithChat>} />
        <Route path="/store" element={<LayoutWithChat><StorePage games={games} /></LayoutWithChat>} />
        <Route path="/community" element={<LayoutWithChat><CommunityPage /></LayoutWithChat>} />
      </Routes>
    </MemoryRouter>
  );
};

export default App;

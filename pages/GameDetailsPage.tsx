
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Game, User } from '../types';
import Navbar from '../components/Navbar';
import { Star, Calendar, Code, Globe, ShoppingCart, Check, Monitor, HardDrive, Cpu, Download, Play } from 'lucide-react';
import { AuthService } from '../services/authService';

interface GameDetailsPageProps {
  games: Game[];
}

const GameDetailsPage: React.FC<GameDetailsPageProps> = ({ games }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState<Game | null>(null);
  const [user, setUser] = useState<User | null>(AuthService.getCurrentUser());
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'reviews'>('overview');
  const [isOwned, setIsOwned] = useState(false);

  useEffect(() => {
    if (games.length > 0) {
        const foundGame = games.find(g => g.id === id);
        if (foundGame) {
            setGame(foundGame);
            window.scrollTo(0, 0);
            
            const currentUser = AuthService.getCurrentUser();
            setUser(currentUser);
            if (currentUser && currentUser.library.includes(foundGame.id)) {
                setIsOwned(true);
            }
        }
    }
  }, [id, games]);

  const handleBuy = () => {
    if (!user) {
        navigate('/login');
        return;
    }
    if (game) {
        const success = AuthService.addToLibrary(game.id);
        if (success) setIsOwned(true);
    }
  };

  const handleDownload = () => {
    if (game?.downloadUrl) {
      window.open(game.downloadUrl, '_blank');
    } else {
      alert("İndirme bağlantısı şu an mevcut değil.");
    }
  };

  if (!game) return <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">Yükleniyor...</div>;

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      
      {/* Hero Header */}
      <div className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/30 to-transparent"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-screen-xl mx-auto">
             <div className="flex flex-wrap gap-3 mb-4">
                {game.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-sm font-medium backdrop-blur-md">
                        {tag}
                    </span>
                ))}
             </div>
             <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">{game.title}</h1>
             <div className="flex items-center gap-6 text-gray-300 mb-8">
                <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-bold text-white">{game.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{game.releaseDate}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    <span>{game.developer}</span>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
            
            {/* Tabs */}
            <div className="flex gap-6 border-b border-slate-700">
                {['overview', 'specs', 'reviews'].map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab as any)}
                        className={`pb-4 px-2 text-lg font-medium capitalize transition-colors border-b-2 ${activeTab === tab ? 'border-cyan-500 text-cyan-400' : 'border-transparent text-gray-400 hover:text-white'}`}
                    >
                        {tab === 'overview' ? 'Genel Bakış' : tab === 'specs' ? 'Sistem Gereksinimleri' : 'Yorumlar'}
                    </button>
                ))}
            </div>

            <div className="min-h-[400px]">
                {activeTab === 'overview' && (
                    <div className="animate-fade-in space-y-6">
                        <p className="text-gray-300 leading-relaxed text-lg">
                            {game.longDescription || game.description}
                        </p>
                        
                        {game.gallery && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                {game.gallery.map((img, idx) => (
                                    <img key={idx} src={img} alt="Screenshot" className="rounded-lg border border-slate-700 hover:border-cyan-500 transition-colors w-full" />
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'specs' && game.systemRequirements && (
                     <div className="animate-fade-in grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
                            <h3 className="text-xl font-bold mb-4 text-cyan-400">Minimum</h3>
                            <ul className="space-y-4 text-sm text-gray-300">
                                <li className="flex gap-3"><Monitor className="w-5 h-5 text-gray-500" /> {game.systemRequirements.minimum.os}</li>
                                <li className="flex gap-3"><Cpu className="w-5 h-5 text-gray-500" /> {game.systemRequirements.minimum.processor}</li>
                                <li className="flex gap-3"><HardDrive className="w-5 h-5 text-gray-500" /> {game.systemRequirements.minimum.memory}</li>
                                <li className="flex gap-3"><Globe className="w-5 h-5 text-gray-500" /> {game.systemRequirements.minimum.graphics}</li>
                            </ul>
                        </div>
                        <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700">
                            <h3 className="text-xl font-bold mb-4 text-green-400">Önerilen</h3>
                             <ul className="space-y-4 text-sm text-gray-300">
                                <li className="flex gap-3"><Monitor className="w-5 h-5 text-gray-500" /> {game.systemRequirements.recommended.os}</li>
                                <li className="flex gap-3"><Cpu className="w-5 h-5 text-gray-500" /> {game.systemRequirements.recommended.processor}</li>
                                <li className="flex gap-3"><HardDrive className="w-5 h-5 text-gray-500" /> {game.systemRequirements.recommended.memory}</li>
                                <li className="flex gap-3"><Globe className="w-5 h-5 text-gray-500" /> {game.systemRequirements.recommended.graphics}</li>
                            </ul>
                        </div>
                     </div>
                )}

                {activeTab === 'reviews' && (
                     <div className="animate-fade-in space-y-4">
                        {game.reviews?.map(review => (
                            <div key={review.id} className="bg-slate-800/30 p-4 rounded-xl border border-slate-700">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-bold text-white">{review.user}</span>
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <span className="text-sm">{review.rating}</span>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm">{review.comment}</p>
                                <span className="text-xs text-gray-500 mt-2 block">{review.date}</span>
                            </div>
                        ))}
                        {(!game.reviews || game.reviews.length === 0) && (
                            <p className="text-gray-500 italic">Henüz yorum yapılmamış.</p>
                        )}
                     </div>
                )}
            </div>
        </div>

        {/* Sticky Sidebar */}
        <div className="lg:col-span-1">
            <div className="sticky top-24 bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-2xl p-6 shadow-2xl">
                <div className="mb-6">
                    <span className="text-gray-400 text-sm block mb-1">Fiyat</span>
                    <span className="text-3xl font-bold text-white">{game.price}</span>
                </div>
                
                {isOwned ? (
                    <button 
                        onClick={handleDownload}
                        className="w-full py-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold shadow-lg shadow-green-500/20 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                        <Download className="w-5 h-5" />
                        İndir / Oyna
                    </button>
                ) : (
                    <button 
                        onClick={handleBuy}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold shadow-lg shadow-cyan-500/20 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                        <ShoppingCart className="w-5 h-5" />
                        Satın Al
                    </button>
                )}

                <div className="mt-6 space-y-3 text-sm text-gray-400">
                    <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span>Geliştirici</span>
                        <span className="text-white">{game.developer}</span>
                    </div>
                     <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span>Yayıncı</span>
                        <span className="text-white">{game.publisher || game.developer}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-700/50 pb-2">
                        <span>Platform</span>
                        <span className="text-white">PC (Windows)</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetailsPage;

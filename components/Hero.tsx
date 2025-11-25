import React from 'react';
import { Play, Info, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenChat: () => void;
  onScrollToGames?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenChat, onScrollToGames }) => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://ikincielaliyoruz.com/wp-content/uploads/2024/07/En-iyi-oyun-bilgisayari.png" 
          alt="Hero Background" 
          className="w-full h-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 w-full pt-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-cyan-500/10 text-cyan-300 text-sm font-semibold mb-8 border border-cyan-500/20 backdrop-blur-sm animate-bounce-slow">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            YENİ SEZON BAŞLADI
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
            Sınırların <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-x">
              Ötesine Geç
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 font-light leading-relaxed max-w-xl drop-shadow-lg">
            Geleceğin savaş alanlarında yerinizi alın. Ultra gerçekçi grafikler ve sürükleyici hikaye anlatımı ile oyun deneyimini yeniden tanımlayın.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
                onClick={onScrollToGames}
                className="group flex items-center gap-2 bg-white text-slate-900 hover:bg-cyan-50 font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <Play className="w-5 h-5 fill-current" />
              Oyunları Keşfet
            </button>
            <button 
                onClick={onOpenChat}
                className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white backdrop-blur-md border border-white/10 hover:border-white/30 font-semibold py-4 px-8 rounded-full transition-all"
            >
              <Info className="w-5 h-5 text-cyan-400 group-hover:text-white transition-colors" />
              Asistan'a Sor
              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient glow */}
      <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
    </section>
  );
};

export default Hero;
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFE000]/20 rounded-full blur-[160px] animate-pulse pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl">
          <span className="inline-block bg-[#FFE000] text-black text-[10px] font-black uppercase tracking-[0.4em] px-3 py-1 mb-8 rounded-sm">
            Especialistas en Shopify
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[120px] font-black leading-[0.85] mb-10 uppercase tracking-tighter">
            TRANSFORMAMOS TU <br/>
            <span className="text-transparent" style={{ WebkitTextStroke: '1px #FFE000' }}>ECOMMERCE</span> <br/>
            EN UNA <span className="text-[#FFE000]">MÁQUINA</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <p className="text-xl md:text-2xl text-zinc-400 font-medium leading-tight max-w-xl">
                Auditamos, diseñamos y desarrollamos tiendas Shopify de alto rendimiento con un enfoque obsesivo en la conversión (CRO) y la experiencia de usuario (UX).
              </p>
            </div>
            
            <div className="md:col-span-5 flex flex-col items-start md:items-end">
              <button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative bg-[#FFE000] text-black px-12 py-6 rounded-md font-black text-2xl uppercase overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">Empieza Ahora</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-[1px] h-16 bg-zinc-800 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[#FFE000] animate-infinite-scroll"></div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-infinite-scroll {
          animation: scroll 2s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
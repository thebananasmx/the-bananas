import React from 'react';

interface StyleGuideProps {
  onNavigate?: (to: string) => void;
}

const StyleGuide: React.FC<StyleGuideProps> = ({ onNavigate }) => {
  const handleHomeClick = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <header className="mb-16">
          <div className="inline-block bg-[#FFFE55] px-5 py-1.5 rounded-full mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest">design system v1.1</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter lowercase leading-[0.8] mb-6">
            guía de <br/><span className="text-zinc-300">estilo</span>
          </h1>
          <p className="text-xl font-medium text-zinc-500 max-w-xl leading-tight">
            identidad visual de thebananas: minimalismo boutique, tipografía lowercase y pesos equilibrados.
          </p>
        </header>

        {/* 01. Paleta de Colores */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl font-black text-zinc-200">01.</span>
            <h2 className="text-3xl font-black tracking-tight lowercase">paleta de colores</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'amarillo bananas', hex: '#FFFE55' },
              { name: 'negro puro', hex: '#000000' },
              { name: 'blanco boutique', hex: '#FFFFFF' },
              { name: 'gris neutro', hex: '#F4F4F4' }
            ].map((color) => (
              <div key={color.hex} className="space-y-3 group">
                <div 
                  className="h-32 w-full rounded-[30px] flex items-end p-4 border border-zinc-100"
                  style={{ backgroundColor: color.hex }}
                >
                  <span className={`font-bold text-xs ${color.hex === '#000000' ? 'text-white' : 'text-black'}`}>{color.hex}</span>
                </div>
                <h4 className="font-black text-sm lowercase tracking-tight">{color.name}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* 02. Tipografía */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl font-black text-zinc-200">02.</span>
            <h2 className="text-3xl font-black tracking-tight lowercase">tipografía</h2>
          </div>
          <div className="space-y-10 bg-zinc-50 p-10 rounded-[40px]">
            <div>
              <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mb-4">display / archivo 900 / lowercase</p>
              <h3 className="text-5xl md:text-6xl font-black tracking-tighter lowercase leading-[0.8]">
                diseñamos tiendas <br/> que convierten.
              </h3>
            </div>
            <div className="h-px bg-zinc-200 w-full"></div>
            <div>
              <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest mb-4">body / archivo 500</p>
              <p className="text-xl md:text-2xl font-medium max-w-2xl leading-snug">
                auditamos, diseñamos y desarrollamos tiendas shopify de alto rendimiento con un enfoque obsesivo en la conversión.
              </p>
            </div>
          </div>
        </section>

        {/* 03. Botones y Elementos UI */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl font-black text-zinc-200">03.</span>
            <h2 className="text-3xl font-black tracking-tight lowercase">componentes ui</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6 border border-zinc-100 p-8 rounded-[30px]">
              <h4 className="font-bold uppercase tracking-widest text-zinc-400 text-[9px]">botones / regular weight</h4>
              <div className="flex flex-wrap gap-4">
                <button className="bg-black text-white px-8 py-3 rounded-full font-medium text-sm uppercase">Primario</button>
                <button className="border-[1.5px] border-black px-8 py-3 rounded-full font-medium text-sm uppercase">Secundario</button>
              </div>
            </div>

            <div className="space-y-6 border border-zinc-100 p-8 rounded-[30px]">
              <h4 className="font-bold uppercase tracking-widest text-zinc-400 text-[9px]">inputs / rounded</h4>
              <input 
                type="text" 
                placeholder="input lowercase" 
                className="w-full bg-[#F4F4F4] p-4 rounded-full font-medium outline-none text-sm"
              />
            </div>
          </div>
        </section>

        <footer className="pt-12 border-t border-zinc-100 flex flex-col items-center">
          <a href="/" onClick={handleHomeClick} className="group flex flex-col items-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-300 group-hover:text-black transition-colors mb-2">volver</span>
            <span className="text-2xl font-black tracking-tighter lowercase">thebananas</span>
          </a>
        </footer>
      </div>
    </div>
  );
};

export default StyleGuide;
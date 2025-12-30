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
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <header className="mb-24">
          <div className="inline-block bg-[#FFFE55] px-6 py-2 rounded-full mb-8">
            <span className="text-xs font-black uppercase tracking-widest">Design System v1.0</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-8">
            Guía de <br/><span className="text-zinc-300">Estilo</span>
          </h1>
          <p className="text-2xl font-bold text-zinc-500 max-w-2xl leading-tight">
            Identidad visual de The Bananas: Una mezcla de minimalismo boutique y energía vibrante.
          </p>
        </header>

        {/* 01. Paleta de Colores */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-4xl font-black text-zinc-200">01.</span>
            <h2 className="text-4xl font-black tracking-tight uppercase">Paleta de Colores</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Amarillo Bananas', hex: '#FFFE55', desc: 'Acento principal, energía y visibilidad.', contrast: 'text-black' },
              { name: 'Negro Puro', hex: '#000000', desc: 'Textos, botones y autoridad visual.', contrast: 'text-white' },
              { name: 'Blanco Boutique', hex: '#FFFFFF', desc: 'Espacio negativo y limpieza.', contrast: 'text-black', border: 'border' },
              { name: 'Gris Neutro', hex: '#EBEBEB', desc: 'Fondo de tarjetas y elementos secundarios.', contrast: 'text-black' }
            ].map((color) => (
              <div key={color.hex} className="space-y-4 group">
                <div 
                  className={`h-48 w-full rounded-[40px] flex items-end p-6 shadow-sm transition-transform group-hover:scale-[1.02] ${color.border ? 'border border-zinc-100' : ''}`}
                  style={{ backgroundColor: color.hex }}
                >
                  <span className={`font-black text-lg ${color.contrast}`}>{color.hex}</span>
                </div>
                <div>
                  <h4 className="font-black text-xl uppercase tracking-tighter">{color.name}</h4>
                  <p className="text-zinc-500 text-sm font-bold mt-1">{color.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 02. Tipografía */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-4xl font-black text-zinc-200">02.</span>
            <h2 className="text-4xl font-black tracking-tight uppercase">Tipografía</h2>
          </div>
          <div className="space-y-16 bg-zinc-50 p-12 rounded-[60px]">
            <div>
              <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-6">Display Extra Heavy / Archivo 900</p>
              <h3 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">
                Diseñamos tiendas <br/> que convierten.
              </h3>
            </div>
            <div className="h-px bg-zinc-200 w-full"></div>
            <div>
              <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-6">Body Bold / Archivo 700</p>
              <p className="text-2xl md:text-3xl font-bold max-w-3xl leading-snug">
                Auditamos, diseñamos y desarrollamos tiendas Shopify de alto rendimiento con un enfoque obsesivo en la conversión.
              </p>
            </div>
            <div className="h-px bg-zinc-200 w-full"></div>
            <div>
              <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-6">Utility Caps / Archivo 900</p>
              <p className="text-xs font-black uppercase tracking-[0.4em]">
                Han confiado en nosotros • Estrategia CRO • Shopify Pro
              </p>
            </div>
          </div>
        </section>

        {/* 03. Botones y Elementos UI */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-4xl font-black text-zinc-200">03.</span>
            <h2 className="text-4xl font-black tracking-tight uppercase">Componentes UI</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Botones */}
            <div className="space-y-10 border border-zinc-100 p-10 rounded-[40px]">
              <h4 className="font-black uppercase tracking-widest text-zinc-400 text-xs">Botones / Pill Style</h4>
              <div className="flex flex-col gap-6">
                <button className="bg-black text-white px-10 py-5 rounded-full font-black text-lg uppercase hover:scale-[1.02] transition-transform w-full md:w-fit shadow-lg">
                  Botón Primario
                </button>
                <button className="border-2 border-black bg-white text-black px-10 py-5 rounded-full font-black text-lg uppercase hover:bg-black hover:text-white transition-all w-full md:w-fit">
                  Botón Secundario
                </button>
                <div className="flex items-center gap-4">
                   <button className="border-2 border-black rounded-full px-6 py-2 text-[10px] font-black uppercase tracking-widest">Shop</button>
                   <button className="border-2 border-black rounded-full px-6 py-2 text-[10px] font-black uppercase tracking-widest bg-black text-white">Active</button>
                </div>
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-10 border border-zinc-100 p-10 rounded-[40px]">
              <h4 className="font-black uppercase tracking-widest text-zinc-400 text-xs">Inputs / Form Fields</h4>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Input placeholder" 
                  className="w-full bg-[#EBEBEB] border-2 border-transparent focus:border-black p-6 rounded-full font-bold outline-none transition-all"
                />
                <textarea 
                  placeholder="Textarea content..." 
                  className="w-full bg-[#EBEBEB] border-2 border-transparent focus:border-black p-8 rounded-[30px] font-bold outline-none transition-all resize-none h-32"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-32">
           <div className="flex items-center gap-4 mb-12">
            <span className="text-4xl font-black text-zinc-200">04.</span>
            <h2 className="text-4xl font-black tracking-tight uppercase">Cards & Containers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="aspect-[3/4] bg-[#EBEBEB] rounded-[60px] p-10 flex flex-col justify-end group cursor-pointer hover:bg-[#FFFE55] transition-colors duration-500">
                <h4 className="text-2xl font-black uppercase tracking-tighter leading-none">Tarjeta de <br/> Servicio</h4>
             </div>
             <div className="aspect-[3/4] border-2 border-zinc-100 rounded-[60px] p-10 flex flex-col justify-center items-center text-center">
                <div className="w-20 h-20 bg-zinc-100 rounded-full mb-6"></div>
                <h4 className="text-xl font-black uppercase tracking-tighter">Variación Outline</h4>
             </div>
             <div className="aspect-[3/4] bg-black text-white rounded-[60px] p-10 flex flex-col justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#FFFE55]">Premium</span>
                <h4 className="text-3xl font-black uppercase tracking-tighter">Dark Mode <br/> Variant</h4>
             </div>
          </div>
        </section>

        <footer className="pt-20 border-t border-zinc-100 flex flex-col items-center">
          <a 
            href="/" 
            onClick={handleHomeClick}
            className="group flex flex-col items-center"
          >
            <span className="text-xs font-black uppercase tracking-[0.4em] text-zinc-300 group-hover:text-black transition-colors mb-4">Volver al inicio</span>
            <span className="text-4xl font-black tracking-tighter transition-transform group-hover:scale-110">thebananas</span>
          </a>
        </footer>
      </div>
    </div>
  );
};

export default StyleGuide;
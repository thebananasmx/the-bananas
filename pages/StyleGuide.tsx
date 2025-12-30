
import React from 'react';

const StyleGuide: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6">
        <header className="mb-20">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">guía de <span className="bg-[rgb(255,254,85)] px-4">estilo.</span></h1>
          <p className="text-2xl font-bold text-zinc-400">sistema de diseño visual para the bananas agency.</p>
        </header>

        {/* Colors */}
        <section className="mb-24">
          <h2 className="text-4xl font-black mb-10 tracking-tight uppercase italic underline decoration-[rgb(255,254,85)] decoration-8 underline-offset-8">01. colores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-4">
              <div className="h-40 w-full bg-[#000000] rounded-[40px] border-4 border-zinc-100 shadow-xl"></div>
              <div>
                <p className="font-black text-xl">negro puro</p>
                <p className="font-mono text-zinc-400">#000000</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-40 w-full bg-[rgb(255,254,85)] rounded-[40px] border-4 border-zinc-100 shadow-xl"></div>
              <div>
                <p className="font-black text-xl">amarillo bananas</p>
                <p className="font-mono text-zinc-400">#FFFE55</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-40 w-full bg-[#FFFFFF] rounded-[40px] border-4 border-zinc-100 shadow-xl"></div>
              <div>
                <p className="font-black text-xl">blanco puro</p>
                <p className="font-mono text-zinc-400">#FFFFFF</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-40 w-full bg-zinc-100 rounded-[40px] border-4 border-zinc-100 shadow-xl"></div>
              <div>
                <p className="font-black text-xl">gris light</p>
                <p className="font-mono text-zinc-400">#F4F4F5</p>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-24">
          <h2 className="text-4xl font-black mb-10 tracking-tight uppercase italic underline decoration-[rgb(255,254,85)] decoration-8 underline-offset-8">02. tipografía</h2>
          <div className="space-y-12">
            <div>
              <p className="text-sm font-black text-zinc-300 uppercase mb-4">h1 - extra heavy</p>
              <h3 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8]">agencia shopify expert.</h3>
            </div>
            <div>
              <p className="text-sm font-black text-zinc-300 uppercase mb-4">h2 - chunky title</p>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter">hablemos negocio.</h3>
            </div>
            <div>
              <p className="text-sm font-black text-zinc-300 uppercase mb-4">body - bold emphasis</p>
              <p className="text-2xl font-bold leading-tight max-w-2xl">optimizamos la conversión de tu ecommerce con diseño estratégico de alto rendimiento.</p>
            </div>
          </div>
        </section>

        {/* Components */}
        <section className="mb-24">
          <h2 className="text-4xl font-black mb-10 tracking-tight uppercase italic underline decoration-[rgb(255,254,85)] decoration-8 underline-offset-8">03. componentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <p className="text-sm font-black text-zinc-300 uppercase">botones</p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-black text-white px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform">primario</button>
                <button className="border-2 border-black px-10 py-5 rounded-full font-black text-lg hover:bg-black hover:text-white transition-all">secundario</button>
              </div>
            </div>
            <div className="space-y-8">
              <p className="text-sm font-black text-zinc-300 uppercase">inputs</p>
              <input 
                type="text" 
                placeholder="input placeholder" 
                className="w-full bg-zinc-50 border-2 border-transparent focus:border-black p-6 rounded-full text-black font-bold outline-none transition-all"
              />
            </div>
          </div>
        </section>

        <div className="pt-12 border-t border-zinc-100">
          <a href="/" className="font-black text-xl hover:text-[rgb(255,254,85)] transition-colors">← volver al inicio</a>
        </div>
      </div>
    </div>
  );
};

export default StyleGuide;

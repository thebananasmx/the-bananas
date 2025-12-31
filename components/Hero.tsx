import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-24 pb-12 px-6">
      <div className="w-full max-w-[1200px] relative">
        {/* The Giant Yellow Pill Background */}
        <div className="w-full aspect-[21/8] bg-[#FFFE55] rounded-full flex flex-col items-center justify-center relative overflow-hidden px-10">
          
          <div className="text-center z-10 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-8 tracking-tighter lowercase">
              hacemos que tu tienda <br/> venda como churros
            </h1>
            <div className="flex justify-center">
              <button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#1A1A1A] text-white px-10 py-4 rounded-full font-medium text-base uppercase hover:scale-105 transition-all shadow-lg"
              >
                ¡quiero vender más!
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-center text-xl font-medium max-w-xl mx-auto leading-tight text-zinc-800">
            en thebananas no hacemos webs aburridas. creamos experiencias suaves como helado de plátano que hacen que tus clientes no quieran soltar el carrito.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
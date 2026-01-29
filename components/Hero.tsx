import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-32 pb-12 px-6">
      <div className="w-full max-w-[1200px] relative">
        {/* Responsive Yellow Container */}
        <div className="w-full md:aspect-[21/8] bg-[#FFFE55] rounded-[60px] md:rounded-full flex flex-col items-center justify-center relative overflow-hidden px-6 py-20 md:py-0 md:px-10 shadow-sm">
          
          <div className="text-center z-10 max-w-5xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[0.9] mb-8 tracking-tighter lowercase">
              hacemos que tu tienda <br className="hidden md:block"/> venda como churros de coyoacán
            </h1>
            <div className="flex justify-center">
              <button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#1A1A1A] text-white px-8 py-4 md:px-10 md:py-4 rounded-full font-medium text-base md:text-lg uppercase hover:scale-105 transition-all shadow-lg active:scale-95"
              >
                ¡quiero vender más!
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-12">
          <p className="text-center text-lg md:text-xl font-medium max-w-xl mx-auto leading-tight text-zinc-800">
            Con más de 15 años desmenuzando interfaces, identificamos los obstáculos que frenan tus ventas. No usamos corazonadas, usamos datos para que tu camino de compra sea más suave que un helado de plátano en verano. 🍌
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';

const SocialProof: React.FC = () => {
  const clients = ['librerías gandhi', 'lzense', 'ecommerce corp', 'future store', 'shopify partner'];
  
  return (
    <section id="clientes" className="py-32 bg-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-xs font-black mb-20 uppercase tracking-[0.5em] text-zinc-500">
          han confiado en nosotros
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center opacity-30 hover:opacity-100 transition-opacity duration-1000">
          {clients.map((brand, i) => (
            <div key={i} className="flex justify-center">
              <span className="text-xl md:text-3xl font-black text-white hover:text-bananas transition-colors cursor-default whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

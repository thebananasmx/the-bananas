import React from 'react';

const SocialProof: React.FC = () => {
  const clients = [
    { name: 'Librerías Gandhi', logo: 'GANDHI' },
    { name: 'Lzense', logo: 'LZENSE' },
    { name: 'Ecommerce Corp', logo: 'ECOMM' },
    { name: 'Future Store', logo: 'FUTURE' }
  ];

  return (
    <section id="clientes" className="py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-xs font-black mb-16 tracking-[0.4em] uppercase text-zinc-500">
          Han confiado en nosotros
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 hover:opacity-100 transition-opacity duration-700">
          {clients.map((client, i) => (
            <div key={i} className="flex flex-col items-center group">
              <span className="text-3xl md:text-5xl font-black text-white group-hover:text-[#FFE000] transition-colors cursor-default tracking-tighter">
                {client.logo}
              </span>
              <span className="text-[10px] mt-2 font-bold uppercase tracking-widest text-zinc-600 group-hover:text-zinc-400">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
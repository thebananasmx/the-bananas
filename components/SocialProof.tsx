import React from 'react';

const SocialProof: React.FC = () => {
  const clients = [
    { name: 'Librerías Gandhi', logo: 'GANDHI' },
    { name: 'Lzense', logo: 'LZENSE' },
    { name: 'Ecommerce Corp', logo: 'ECOMM' },
    { name: 'Future Store', logo: 'FUTURE' }
  ];

  return (
    <section id="clientes" className="py-32 bg-white overflow-hidden border-t border-zinc-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-[10px] font-bold mb-16 tracking-[0.4em] uppercase text-zinc-400">
          marcas que ya se pelaron con nosotros
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 hover:opacity-100 transition-opacity duration-700">
          {clients.map((client, i) => (
            <div key={i} className="flex flex-col items-center group">
              <span className="text-3xl md:text-5xl font-black text-black group-hover:text-[#FFFE55] transition-colors cursor-default tracking-tighter">
                {client.logo}
              </span>
              <span className="text-[9px] mt-2 font-bold uppercase tracking-widest text-zinc-400">
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
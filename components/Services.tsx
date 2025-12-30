import React from 'react';

const Services: React.FC = () => {
  const services = [
    { 
      title: 'Auditoría UX/UI', 
      desc: 'Analizamos cada punto de fricción en tu tienda para optimizar el viaje de compra y reducir el abandono de carrito.', 
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    { 
      title: 'Desarrollo Shopify Pro', 
      desc: 'Expertos en Liquid y aplicaciones privadas. Creamos tiendas veloces, escalables y optimizadas para SEO.', 
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    { 
      title: 'Estrategia CRO', 
      desc: 'No solo traemos tráfico, lo convertimos. Estrategias basadas en datos para maximizar tu Retorno de Inversión.', 
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <section id="servicios" className="py-32 bg-black border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase leading-none">
              Nuestros <span className="text-[#FFE000]">Servicios</span>
            </h2>
            <p className="text-xl text-zinc-500 font-medium">
              Especialización profunda para marcas que no se conforman con lo ordinario.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="group bg-zinc-900/50 p-10 rounded-md border-2 border-zinc-800 hover:border-[#FFE000] hover:border-[4px] transition-all duration-200 flex flex-col justify-between min-h-[400px]"
            >
              <div className="text-[#FFE000] mb-8 transition-transform group-hover:scale-110 duration-300">
                {s.icon}
              </div>
              <div>
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">{s.title}</h3>
                <p className="text-zinc-400 text-lg leading-snug">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
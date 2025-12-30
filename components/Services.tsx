import React from 'react';

const Services: React.FC = () => {
  const services = [
    { 
      title: 'Auditoría UX/UI', 
      desc: 'Eliminamos las barreras que impiden que tus clientes finalicen su compra. Optimización basada en comportamiento real.', 
      icon: '01'
    },
    { 
      title: 'Shopify Pro', 
      desc: 'Desarrollo a medida sin límites. Desde integraciones complejas hasta migraciones críticas desde otras plataformas.', 
      icon: '02'
    },
    { 
      title: 'Estrategia CRO', 
      desc: 'Aumentamos tu ticket promedio y tasa de conversión mediante experimentación continua y análisis de datos.', 
      icon: '03'
    }
  ];

  return (
    <section id="servicios" className="py-40 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
            SOLUCIONES DE <span className="text-[#FFE000]">ALTO VOLTAJE</span>
          </h2>
          <div className="w-24 h-2 bg-[#FFE000]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="group relative bg-black p-12 border border-zinc-900 hover:border-[#FFE000] transition-all duration-300 flex flex-col justify-between min-h-[450px] overflow-hidden"
            >
              {/* Card Number Background */}
              <div className="absolute -right-8 -top-8 text-[180px] font-black text-zinc-900/30 group-hover:text-[#FFE000]/10 transition-colors">
                {s.icon}
              </div>

              <div className="relative z-10">
                <div className="w-12 h-1 bg-[#FFE000] mb-8 group-hover:w-24 transition-all duration-500"></div>
                <h3 className="text-4xl font-black mb-6 uppercase leading-none tracking-tighter">{s.title}</h3>
                <p className="text-zinc-500 group-hover:text-zinc-300 text-lg leading-snug transition-colors">
                  {s.desc}
                </p>
              </div>
              
              <div className="relative z-10 mt-12">
                <button className="text-[10px] font-black uppercase tracking-widest text-[#FFE000] flex items-center group-hover:gap-4 transition-all">
                  Saber más <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
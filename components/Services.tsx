
import React from 'react';

const Services: React.FC = () => {
  const services = [
    { 
      title: 'auditoría ux/ui', 
      desc: 'analizamos cada paso de tu funnel de ventas para identificar fricciones y oportunidades de mejora visual.', 
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      )
    },
    { 
      title: 'desarrollo shopify pro', 
      desc: 'creación y optimización de tiendas shopify de alto rendimiento, escalables y totalmente personalizadas.', 
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      )
    },
    { 
      title: 'estrategia cro', 
      desc: 'maximizamos tu tasa de conversión a través de pruebas a/b y análisis de datos para escalar resultados.', 
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="servicios" className="py-32 bg-black border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-5xl md:text-8xl font-black mb-8 leading-[0.8] tracking-tighter">
            especialistas <br/>
            en <span className="text-bananas">conversión.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((s, i) => (
            <div key={i} className="group p-10 border-2 border-white/10 hover:border-bananas transition-all duration-500 rounded-sm flex flex-col justify-between min-h-[400px] hover:bg-zinc-900/50">
              <div className="text-bananas group-hover:scale-110 transition-transform origin-left mb-10">
                {s.icon}
              </div>
              <div>
                <h3 className="text-3xl font-black mb-6 tracking-tight group-hover:text-bananas transition-colors">{s.title}</h3>
                <p className="text-zinc-400 text-lg font-bold leading-snug">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

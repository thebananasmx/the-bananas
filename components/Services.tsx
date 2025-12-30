import React from 'react';

const Services: React.FC = () => {
  const services = [
    { title: 'Auditoría UX/UI', icon: '🔍' },
    { title: 'Desarrollo Shopify', icon: '💻' },
    { title: 'Estrategia CRO', icon: '📈' },
    { title: 'Optimización SEO', icon: '🚀' },
    { title: 'Diseño Web', icon: '🎨' }
  ];

  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-black mb-16 tracking-tight">Featured services</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-[#EBEBEB] rounded-[40px] mb-4 flex items-center justify-center text-6xl group-hover:scale-[1.02] transition-all">
                {s.icon}
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Nuevo</span>
                  <h3 className="text-sm font-black uppercase leading-none mt-1">{s.title}</h3>
                </div>
                <span className="text-xs font-bold text-zinc-400">$PRO</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
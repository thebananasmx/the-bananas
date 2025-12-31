import React from 'react';

const Services: React.FC = () => {
  const services = [
    { title: 'pulir la experiencia', icon: '✨' },
    { title: 'optimizar páginas', icon: '⚡' },
    { title: 'afinar flujos de pago', icon: '🛒' },
    { title: 'platanal de productos', icon: '🍌' },
    { title: 'diseño que resbala', icon: '🧼' }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-black mb-10 tracking-tight lowercase">nuestro menú de soluciones</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {services.map((s, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-[#F4F4F4] rounded-[30px] mb-3 flex items-center justify-center text-5xl group-hover:scale-[1.02] transition-all">
                {s.icon}
              </div>
              <div className="flex justify-between items-start px-1">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">especialidad</span>
                  <h3 className="text-xs font-black lowercase leading-none mt-1">{s.title}</h3>
                </div>
                <span className="text-[10px] font-bold text-zinc-400">$top</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
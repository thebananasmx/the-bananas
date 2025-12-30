import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <span className="text-3xl font-black tracking-tighter text-[#FFE000]">THE BANANAS</span>
            <p className="text-zinc-600 text-sm mt-2 font-medium uppercase tracking-[0.2em]">Agencia de eCommerce</p>
          </div>
          
          <div className="flex space-x-8 text-xs font-black uppercase tracking-widest text-zinc-500">
            <a href="#" className="hover:text-[#FFE000] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[#FFE000] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#FFE000] transition-colors">Clutch</a>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-700">
          <p>© {new Date().getFullYear()} The Bananas. Todos los derechos reservados.</p>
          <p>Basado en México para el mundo.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
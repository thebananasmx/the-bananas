import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-white border-t border-zinc-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <span className="text-3xl font-black tracking-tighter">thebananas</span>
            <p className="text-zinc-400 text-xs mt-2 font-bold uppercase tracking-widest">Agencia de eCommerce</p>
          </div>
          
          <div className="flex space-x-6">
            {['Instagram', 'LinkedIn', 'Clutch'].map((item) => (
              <a key={item} href="#" className="text-xs font-black uppercase tracking-widest border-2 border-transparent hover:border-black rounded-full px-4 py-2 transition-all">
                {item}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-zinc-100 flex justify-between text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
          <p>© {new Date().getFullYear()} The Bananas.</p>
          <p>Hecho en México.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
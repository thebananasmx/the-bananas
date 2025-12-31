import React from 'react';

interface FooterProps {
  onNavigate?: (to: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleStyleGuideClick = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('/style-guide');
    }
  };

  return (
    <footer className="py-20 bg-white border-t border-zinc-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <span className="text-3xl font-black tracking-tighter lowercase">thebananas</span>
            <p className="text-zinc-500 text-base mt-2 font-medium lowercase leading-none italic">creando el platanal del éxito en shopify</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['instagram', 'linkedin', 'clutch'].map((item) => (
              <a key={item} href="#" className="text-base font-medium lowercase tracking-tight border-[1.5px] border-transparent hover:border-black rounded-full px-5 py-2 transition-all">
                {item}
              </a>
            ))}
            <a 
              href="/style-guide" 
              onClick={handleStyleGuideClick}
              className="text-base font-medium lowercase tracking-tight border-[1.5px] border-[#FFFE55] bg-[#FFFE55]/20 rounded-full px-5 py-2 hover:bg-[#FFFE55] transition-all"
            >
              style guide
            </a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-zinc-50 flex flex-col md:flex-row justify-between items-center gap-4 text-base font-medium lowercase tracking-tight text-zinc-400">
          <p>© {new Date().getFullYear()} the bananas. expertos en churros y ventas.</p>
          <p>hecho con 🍌 en méxico.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
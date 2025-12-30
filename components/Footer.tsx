
import React from 'react';

const Footer: React.FC = () => {
  const navigate = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <footer className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-16 text-bananas">thebananas</h2>
        
        <div className="flex flex-wrap justify-center gap-12 mb-20 font-black text-xs uppercase tracking-[0.3em]">
          <a href="#" className="hover:text-bananas transition-colors">instagram</a>
          <a href="#" className="hover:text-bananas transition-colors">linkedin</a>
          <a href="#" className="hover:text-bananas transition-colors">clutch</a>
          <a 
            href="/guia-de-estilo" 
            onClick={(e) => navigate(e, '/guia-de-estilo')}
            className="text-bananas underline decoration-2 underline-offset-8"
          >
            style guide
          </a>
        </div>
        
        <div className="max-w-md mx-auto">
          <p className="text-zinc-600 font-bold text-[10px] uppercase tracking-[0.2em] leading-relaxed">
            © {new Date().getFullYear()} the bananas agency <br/>
            especialistas en shopify & ux/ui <br/>
            basado en la cdmx para el mundo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

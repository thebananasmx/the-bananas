import React, { useState } from 'react';
import { ContactFormData } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '', email: '', storeUrl: '', message: ''
  });
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      alert('¡listo! tu mensaje ya está en el frutero. te escribimos pronto.');
      setFormData({ name: '', email: '', storeUrl: '', message: '' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-[#FFFE55] rounded-[40px] mx-6 mb-12">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <span className="inline-block border-[1.5px] border-black rounded-full px-3 py-0.5 text-[9px] font-bold uppercase mb-4">auditoría</span>
          <h2 className="text-5xl md:text-7xl font-black lowercase tracking-tighter leading-none mb-4">
            ¿quieres un platanal <br/> de ventas?
          </h2>
          <p className="text-lg font-medium">deja de resbalarte con estrategias viejas. vamos a escalar tu shopify al siguiente nivel.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              required
              type="text"
              name="name"
              placeholder="tu nombre"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white/40 border-[1.5px] border-transparent focus:border-black p-5 rounded-full font-medium outline-none transition-all placeholder:text-zinc-600 text-sm"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="tu email de trabajo"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white/40 border-[1.5px] border-transparent focus:border-black p-5 rounded-full font-medium outline-none transition-all placeholder:text-zinc-600 text-sm"
            />
          </div>
          <input
            type="text"
            name="storeUrl"
            placeholder="url de tu tienda actual"
            value={formData.storeUrl}
            onChange={handleChange}
            className="w-full bg-white/40 border-[1.5px] border-transparent focus:border-black p-5 rounded-full font-medium outline-none transition-all placeholder:text-zinc-600 text-sm"
          />
          <textarea
            required
            name="message"
            placeholder="cuéntanos tu mayor reto hoy..."
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-white/40 border-[1.5px] border-transparent focus:border-black p-6 rounded-[25px] font-medium outline-none transition-all resize-none placeholder:text-zinc-600 text-sm"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-5 rounded-full font-medium text-lg uppercase hover:scale-[1.01] transition-all disabled:opacity-50"
          >
            {loading ? 'procesando...' : 'pedir mi auditoría gratis'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
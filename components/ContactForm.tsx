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
      alert('¡Recibido! Nos pondremos en contacto contigo en breve.');
      setFormData({ name: '', email: '', storeUrl: '', message: '' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-32 bg-[#FFFE55] rounded-[60px] mx-6 mb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="inline-block border-2 border-black rounded-full px-4 py-1 text-[10px] font-black uppercase mb-6">Nuevo</span>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
            Hablemos Negocio
          </h2>
          <p className="text-xl font-bold">Estrategas en Shopify y especialistas en UX/UI.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              required
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white/50 border-2 border-transparent focus:border-black p-6 rounded-full font-bold outline-none transition-all placeholder:text-zinc-600"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Tu email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white/50 border-2 border-transparent focus:border-black p-6 rounded-full font-bold outline-none transition-all placeholder:text-zinc-600"
            />
          </div>
          <textarea
            required
            name="message"
            placeholder="¿En qué podemos ayudarte?"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-white/50 border-2 border-transparent focus:border-black p-8 rounded-[40px] font-bold outline-none transition-all resize-none placeholder:text-zinc-600"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-6 rounded-full font-black text-xl uppercase hover:scale-[1.02] transition-all disabled:opacity-50"
          >
            {loading ? 'Enviando...' : 'Agregar a la lista'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
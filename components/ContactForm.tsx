
import React, { useState } from 'react';
import { ContactFormData } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '', email: '', storeUrl: '', message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enviando:', formData);
    alert('Mensaje enviado. ¡Nos pondremos en contacto!');
    setFormData({ name: '', email: '', storeUrl: '', message: '' });
  };

  return (
    <section id="contacto" className="py-32 bg-black">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-8xl font-black mb-8 leading-[0.8] tracking-tighter">
            listo para <br/>
            <span className="text-bananas italic">vender más?</span>
          </h2>
          <p className="text-xl md:text-2xl text-zinc-500 font-bold max-w-2xl mx-auto leading-tight">
            cuéntanos sobre tu tienda y diseñemos el futuro de tu marca.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-4">nombre completo</label>
              <input
                required
                type="text"
                name="name"
                placeholder="juan pérez"
                value={formData.name}
                onChange={handleChange}
                className="bg-zinc-900 border-2 border-transparent focus:border-bananas p-6 rounded-sm text-white font-bold outline-none transition-all placeholder:text-zinc-700"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-4">email corporativo</label>
              <input
                required
                type="email"
                name="email"
                placeholder="hola@tuempresa.com"
                value={formData.email}
                onChange={handleChange}
                className="bg-zinc-900 border-2 border-transparent focus:border-bananas p-6 rounded-sm text-white font-bold outline-none transition-all placeholder:text-zinc-700"
              />
            </div>
          </div>
          
          <div className="flex flex-col space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-4">url de tu tienda shopify</label>
            <input
              type="text"
              name="storeUrl"
              placeholder="https://tu-marca.com"
              value={formData.storeUrl}
              onChange={handleChange}
              className="w-full bg-zinc-900 border-2 border-transparent focus:border-bananas p-6 rounded-sm text-white font-bold outline-none transition-all placeholder:text-zinc-700"
            />
          </div>

          <div className="flex flex-col space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-4">cuéntanos tu reto</label>
            <textarea
              required
              name="message"
              rows={4}
              placeholder="¿en qué podemos ayudarte hoy?"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-zinc-900 border-2 border-transparent focus:border-bananas p-8 rounded-sm text-white font-bold outline-none transition-all resize-none placeholder:text-zinc-700"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-bananas text-black p-8 rounded-sm font-black text-2xl hover:scale-[1.01] active:scale-[0.99] transition-all shadow-2xl shadow-bananas/20 uppercase tracking-tighter"
          >
            enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

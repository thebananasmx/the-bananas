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
      console.log('Lead recibido:', formData);
      await new Promise(resolve => setTimeout(resolve, 1500));
      alert('¡Recibido! Nos pondremos en contacto contigo en breve.');
      setFormData({ name: '', email: '', storeUrl: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-40 bg-black relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="bg-zinc-900/30 p-8 md:p-20 rounded-2xl border border-zinc-800 relative overflow-hidden">
          {/* Accent glow for the box */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#FFE000]/10 rounded-full blur-[100px]"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
            <div>
              <h2 className="text-6xl md:text-8xl font-black mb-8 uppercase leading-[0.85] tracking-tighter">
                ¿TIENES UNA <br/><span className="text-[#FFE000]">META?</span>
              </h2>
              <p className="text-xl text-zinc-400 font-medium mb-12 max-w-sm">
                Escalamos tiendas de $10k a $100k+ mensuales. Cuéntanos tu situación actual y tracemos el plan.
              </p>
              
              <div className="space-y-4">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-zinc-600">Contacto Directo</p>
                <a href="mailto:hola@thebananas.com.mx" className="text-2xl font-bold hover:text-[#FFE000] transition-colors underline decoration-zinc-800 underline-offset-8 decoration-2">
                  hola@thebananas.com.mx
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Tu nombre completo"
                  onChange={handleChange}
                  className="bg-black/50 border border-zinc-800 focus:border-[#FFE000] p-5 rounded-lg text-white font-medium outline-none transition-all placeholder:text-zinc-600"
                />
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email de trabajo"
                  onChange={handleChange}
                  className="bg-black/50 border border-zinc-800 focus:border-[#FFE000] p-5 rounded-lg text-white font-medium outline-none transition-all placeholder:text-zinc-600"
                />
              </div>
              
              <input
                type="text"
                name="storeUrl"
                value={formData.storeUrl}
                placeholder="Enlace de tu tienda actual (si tienes)"
                onChange={handleChange}
                className="w-full bg-black/50 border border-zinc-800 focus:border-[#FFE000] p-5 rounded-lg text-white font-medium outline-none transition-all placeholder:text-zinc-600"
              />

              <textarea
                required
                name="message"
                rows={4}
                value={formData.message}
                placeholder="¿Cuál es tu mayor reto hoy?"
                onChange={handleChange}
                className="w-full bg-black/50 border border-zinc-800 focus:border-[#FFE000] p-5 rounded-lg text-white font-medium outline-none transition-all resize-none placeholder:text-zinc-600"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#FFE000] text-black py-6 rounded-lg font-black text-xl uppercase hover:bg-white hover:text-black transition-all disabled:opacity-50 shadow-[0_10px_40px_-10px_rgba(255,224,0,0.3)]"
              >
                {loading ? 'Procesando...' : 'Solicitar Auditoría Gratis'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
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
    
    // Skeleton for Firebase Firestore integration
    try {
      console.log('Enviando datos a la nube...', formData);
      // await addDoc(collection(db, "leads"), { ...formData, timestamp: new Date() });
      
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      alert('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
      setFormData({ name: '', email: '', storeUrl: '', message: '' });
    } catch (error) {
      console.error('Error al enviar:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-32 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl md:text-8xl font-black mb-8 uppercase leading-[0.85]">
              Hablemos <br/><span className="text-[#FFE000]">Negocio.</span>
            </h2>
            <p className="text-xl text-zinc-400 font-medium mb-12 max-w-md">
              ¿Listo para escalar? Déjanos tus datos y un estratega senior analizará tu caso en menos de 24 horas.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-zinc-900 rounded-md flex items-center justify-center text-[#FFE000]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <span className="font-bold text-zinc-300">hola@thebananas.com.mx</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col space-y-2">
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Tu Nombre"
                  onChange={handleChange}
                  className="bg-transparent border-b-2 border-zinc-800 focus:border-[#FFE000] py-4 text-white font-medium outline-none transition-all placeholder:text-zinc-700"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email Corporativo"
                  onChange={handleChange}
                  className="bg-transparent border-b-2 border-zinc-800 focus:border-[#FFE000] py-4 text-white font-medium outline-none transition-all placeholder:text-zinc-700"
                />
              </div>
            </div>
            
            <input
              type="text"
              name="storeUrl"
              value={formData.storeUrl}
              placeholder="URL de tu tienda (opcional)"
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-zinc-800 focus:border-[#FFE000] py-4 text-white font-medium outline-none transition-all placeholder:text-zinc-700"
            />

            <textarea
              required
              name="message"
              rows={4}
              value={formData.message}
              placeholder="¿Cómo podemos ayudarte?"
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-zinc-800 focus:border-[#FFE000] py-4 text-white font-medium outline-none transition-all resize-none placeholder:text-zinc-700"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#FFE000] text-black py-6 rounded-md font-black text-xl uppercase hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
            >
              {loading ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
import React, { useState } from 'react';

const MaintenanceLanding: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        alert(data.error || 'Hubo un error al procesar tu solicitud.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error de conexión. Por favor intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
        <div className="mb-10">
          <span className="text-3xl font-black tracking-tighter lowercase">thebananas</span>
        </div>
        <div className="bg-[#FFFE55] p-12 rounded-[60px] max-w-2xl shadow-sm">
          <h1 className="text-5xl md:text-7xl font-black lowercase tracking-tighter leading-none mb-6">
            ¡listo! ya estás <br/> en el frutero.
          </h1>
          <p className="text-xl font-medium mb-8">
            te avisaremos en cuanto pelemos la nueva version 🍌
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-sm font-bold uppercase underline tracking-widest hover:opacity-70 transition-opacity"
          >
            volver
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-6 py-20">
      <div className="w-full max-w-4xl text-center">
        {/* Logo */}
        <div className="mb-6">
          <span className="text-3xl font-black tracking-tighter lowercase">thebananas</span>
        </div>

        {/* Badge */}
        <div className="mb-8">
          <span className="inline-block border-[1.5px] border-black rounded-full px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
            estamos madurando
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black lowercase tracking-tighter leading-[0.85] mb-10">
          estamos pelando <br/> algo <span className="bg-[#FFFE55] px-4 rounded-full">increíble</span>
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-12 text-zinc-800 leading-tight">
          no te resbales, estamos ajustando los últimos detalles para que tu ecommerce venda más que nunca. deja tu email y sé el primero en morder la nueva versión.
        </p>

        {/* Simple Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto w-full flex flex-col sm:flex-row gap-3">
          <input
            required
            type="email"
            placeholder="tu email de trabajo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-zinc-100 border-[1.5px] border-transparent focus:border-black p-5 rounded-full font-medium outline-none transition-all placeholder:text-zinc-500 text-sm"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white px-8 py-5 rounded-full font-bold text-sm uppercase hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 whitespace-nowrap"
          >
            {loading ? 'espera...' : 'avisame'}
          </button>
        </form>

        {/* Footer Hint */}
        <div className="mt-12 text-zinc-400 font-mono text-[10px] uppercase tracking-[0.2em]">
          the bananas © 2026 • pronto volvemos
        </div>
      </div>
    </div>
  );
};

export default MaintenanceLanding;

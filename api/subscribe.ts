import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Solo permitir peticiones POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      console.warn("RESEND_API_KEY no configurada en Vercel.");
      // En desarrollo o si falta la clave, simulamos éxito para no romper la UI
      return res.status(200).json({ 
        success: true, 
        message: "Modo simulación: Configura RESEND_API_KEY en Vercel para envíos reales." 
      });
    }

    const resend = new Resend(resendApiKey);

    const { data, error } = await resend.emails.send({
      from: 'The Bananas <onboarding@resend.dev>',
      to: ['hector@thebananas.com.mx'],
      subject: 'Nuevo suscriptor en el frutero! 🍌',
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #000;">¡Nuevo suscriptor! 🍌</h2>
          <p>Alguien quiere saber más de The Bananas:</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #666;">Este correo fue enviado automáticamente desde tu landing page.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Error de Resend:", error);
      return res.status(500).json({ error: "No se pudo enviar el correo" });
    }

    return res.status(200).json({ success: true, data });
  } catch (err) {
    console.error("Error del servidor:", err);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}

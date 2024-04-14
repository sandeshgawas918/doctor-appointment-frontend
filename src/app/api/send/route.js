import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {

    const response=await req.json()
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [response.data.Email],
      subject: 'SG Hospitals - Verification mail',
      react: EmailTemplate(),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}

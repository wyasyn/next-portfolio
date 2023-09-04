import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const apiKey = process.env.Footer_API_KEY;

if (!apiKey) {
  throw new Error('Missing RESEND_API_KEY environment variable.');
}

const resend = new Resend(apiKey);

export async function POST( response: any ) {

  try {
    const body = await response.json();
    const { message} = body
    const data = await resend.emails.send({
        from: 'Yasin Walum <email@ywalum.com>',
        to: 'ywalum@gmail.com',
        subject: 'Message from Footer!',
        text: message,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

import React from 'react'
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { Email } from '@/components';

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  throw new Error('Missing RESEND_API_KEY environment variable.');
}

const resend = new Resend(apiKey);

export async function POST( response: any ) {

  try {
    const body = await response.json();
    const { email, yourName, message, subject} = body
    const data = await resend.emails.send({
      from: 'Yasin Walum <email@ywalum.com>',
      to: 'ywalum@gmail.com',
      subject: subject as string,
      reply_to: email as string,
      react: React.createElement(Email, {
        message: message as string,
        email: email as string,
        name: yourName as string,
      })
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
if (accountSid === undefined) {
  throw new Error('TWILIO_ACCOUNT_SID is not defined');
}
const authToken = process.env.TWILIO_AUTH_TOKEN;
if (authToken === undefined) {
  throw new Error('TWILIO_AUTH_TOKEN is not defined');
}
const client = twilio(accountSid, authToken);

const toWhatsApp = process.env.TWILIO_WHATSAPP_TO;
if(toWhatsApp === undefined) {
  throw new Error('TWILIO_WHATSAPP_TO is not defined');
}
const fromWhatsApp = process.env.TWILIO_WHATSAPP_FROM;
if(fromWhatsApp === undefined) {
  throw new Error('TWILIO_WHATSAPP_FROM is not defined');
}

export async function POST(request: NextRequest) {
  try {
    // Parse JSON from request
    const { name, phone, message } = await request.json();

    // Validate the data
    if (!name || !phone) {
      return NextResponse.json(
        { message: 'Name and phone are required' },
        { status: 400 }
      );
    }

    // Format the message for WhatsApp
    const whatsappMessage = `
🏠 Новая заявка с сайта Madiyar Qurylys!

👤 Имя: ${name}
📱 Телефон: ${phone}
${message ? `💬 Сообщение: ${message}` : ''}

Дата заявки: ${new Date().toLocaleString('ru-RU')}
    `.trim();

    // Send WhatsApp message
    const messageResponse = await client.messages.create({
      body: whatsappMessage,
      from: fromWhatsApp,  // Ensure this is a valid Twilio WhatsApp number
      to: "whatsapp:+77055221122",  // Ensure this is a valid recipient number
    });

    console.log('Message sent successfully', messageResponse.sid);

    // Return success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    return NextResponse.json(
      { message: 'Error sending message', error: (error as Error).message },
      { status: 500 }
    );
  }
}

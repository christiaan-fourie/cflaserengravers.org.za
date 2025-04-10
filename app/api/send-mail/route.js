import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req, res) {

    if (req.method !== 'POST') {
        return NextResponse.json({ message: 'Only POST requests are allowed' }, { status: 405 });
    }

    try {
        const { email, name } = await req.json();

        if (!email || !name) {
            return NextResponse.json({ message: 'Email and name are required' }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            host: 'mail.cflaserengravers.org.za',
            port: 465,   
            secure: true, // SSL/TLS
            auth: {
                user: process.env.EMAIL_USER, // Your email address.
                pass: process.env.EMAIL_PASS, // Your email password or app-specific password
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER, // Your email address
            to: 'christiaanfourie60@gmail.com', // The email address where you want to receive the messages
            subject: `New Contact Form Submission from ${name}`,
            text: `You have received a new message from ${name} (${email})`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        console.error('Error details:', {
            message: error.message,
            stack: error.stack,
            code: error.code, // If available
            errno: error.errno, // If available
        });
        return NextResponse.json({ message: 'Failed to send email', error: error.message }, { status: 500 });
    }
}
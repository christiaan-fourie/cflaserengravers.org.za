const nodemailer = require('nodemailer');

// Configure email server
const transporter = nodemailer.createTransport({
  host: 'mail.cflaserengravers.org.za',
  port: 465,
  secure: true, // SSL/TLS
  auth: {
    user: process.env.EMAIL_USERNAME, // Store username in Vercel environment variable
    pass: process.env.EMAIL_PASSWORD, // Store password in Vercel environment variable
  },
});


// Open The API to make post
export async function POST(req) {
  
    
  const body = await req.json(); // Parse JSON payload from request body
  const { name, email, message } = body; // Extract client details

  console.log(body);
  // Send email using your preferred method (e.g., nodemailer)

  const mailOptions = {
    from: process.env.EMAIL_USERNAME, // Set sender info
    to: 'christiaanfourie60@gmail.com', // Set recipient email address
    subject: `Contact Form Submission - ${name}`, // Set email subject
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `, // Email content with client details
  };


  try {
    await transporter.sendMail(mailOptions);
      return new Response(JSON.stringify({ 
        message: 'Email sent successfully!', 
        status: 200, 
      }));
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ 
      message: 'Error sending email!', 
      status: 500, 
    }));
  }
}

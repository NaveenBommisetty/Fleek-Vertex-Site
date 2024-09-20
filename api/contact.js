// pages/api/send-email.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, company, subject, message } = req.body;

    // Create a Nodemailer transporter using your SMTP configuration
    let transporter = nodemailer.createTransport({
      host: 'fleekvertex.com', // e.g., 'smtp.gmail.com' for Gmail
      port: 465, // Use 465 for secure, 587 for unsecure
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'naveen@fleekvertex.com', // Your email address
        pass: 'Naveen@4210', // Your email password or app-specific password
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: '"Your Name" ${email}' , // sender address
        to: 'naveen@fleekvertex.com', // list of receivers
        subject: `New Contact Form Submission: ${subject}`, // Subject line
        text: `You have a new contact form submission from:
               Name: ${name}
               Email: ${email}
               Phone: ${phone}
               Company: ${company}
               Message: ${message}`, // plain text body
        html: `<p>You have a new contact form submission from:</p>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Phone:</strong> ${phone}</p>
               <p><strong>Company:</strong> ${company}</p>
               <p><strong>Message:</strong><br />${message}</p>`, // HTML body
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

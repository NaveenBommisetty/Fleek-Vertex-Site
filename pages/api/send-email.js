import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, company, subject, message } = req.body;

    // Log request body for debugging
    console.log(req.body);

    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true, // Use SSL
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    try {
      await transporter.verify(); // Check if the SMTP server is reachable

      await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: process.env.SMTP_USER, // Send to your email
        subject: subject,
        text: message,
      });

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('SMTP error:', error); // Log the error for debugging
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

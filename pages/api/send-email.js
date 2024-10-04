import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, company, subject, message } = req.body;

    // Log request body for debugging
    console.log(req.body);

    let transporter = nodemailer.createTransport({
      host: 'smtp.mailersend.net', // SMTP server
      port: 587, // TLS uses port 587
      secure: false, // TLS is not the same as SSL (use false for port 587)
      auth: {
        user: 'ms_xfkzhf@fleekvertex.com', // Username
        pass: 'KgwUpx8wEBKEk9wf', // Password
      },
      tls: {
        rejectUnauthorized: false, // Allow self-signed certificates if needed
      },
    });

    try {
      await transporter.verify(); // Check if the SMTP server is reachable

      await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: 'ms_xfkzhf@fleekvertex.com', // Send to your email
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

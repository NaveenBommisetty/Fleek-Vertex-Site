import nodemailer from 'nodemailer';

export default async function homepag(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone,  subject, message } = req.body;

    const pageIdentifier = 'Jira Page';

    let transporter = nodemailer.createTransport({
      host: 'fleekvertex.com', // SMTP server
      port: 465, // TLS uses port 587
      secure: true, // TLS is not the same as SSL (use false for port 587)
      auth: {
        user: 'naveen@fleekvertex.com', // Username
        pass: 'Naveen@4210', // Password
      },
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false, // Allow self-signed certificates if needed
      },
    });

    try {
      await transporter.verify((err, success) => {
        // if (err) {
        //   console.log(err);
          
        // }
      }); // Check if the SMTP server is reachable
      const finalSubject = `*${pageIdentifier}* ${subject}`;

      await transporter.sendMail({
        // from: `"${name}" <${email}>`,
        from: 'naveen@fleekvertex.com',
        to: 'naveen@fleekvertex.com', // Send to your email
        subject:finalSubject,
        text: message, 
          html: `
          <p>Name: ${name} </p>
          <p>Email: ${email} </p>
          <p>Phone: ${phone} </p>
          <p>Message: ${message} </p>
          `,         
          
      });

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      // Log the error for debugging
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Set up Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASS, // Your Gmail password or App password
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.GMAIL_USER, // Your Gmail address
      to: process.env.GMAIL_USER,   // Your Gmail address
      subject: `Contact form submission from ${name}`,
      text: `You have received a new message from your website contact form.\n\n` +
            `Here are the details:\n\n` +
            `Name: ${name}\n\n` +
            `Email: ${email}\n\n` +
            `Message:\n${message}`
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error sending email', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

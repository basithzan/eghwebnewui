import nodemailer from 'nodemailer';
import 'dotenv/config';
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, phoneNumber, email, sector, message } = req.body;

    // Create a transporter using the provided SMTP credentials
    const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // Use TLS
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    try {
      // Send email to the user
      await transporter.sendMail({
        from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
        to: email,
        subject: 'Thank You for Contacting Elite Cars',
        text: `Dear ${fullName},\n\nThank you for contacting Elite Cars. We have received your message and will get back to you soon.\n\nBest regards,\nThe Elite Cars Team`,
        html: `<p>Dear ${fullName},</p><p>Thank you for contacting Elite Cars. We have received your message and will get back to you soon.</p><p>Best regards,<br>The Elite Cars Team</p>`,
      });

      // Send email to the company
      await transporter.sendMail({
        from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
        to: process.env.MAIL_FROM_ADDRESS,
        subject: 'New Contact Form Submission',
        text: `New contact form submission:\n\nName: ${fullName}\nPhone: ${phoneNumber}\nEmail: ${email}\nSector: ${sector}\nMessage: ${message}`,
        html: `<h2>New contact form submission:</h2><p><strong>Name:</strong> ${fullName}</p><p><strong>Phone:</strong> ${phoneNumber}</p><p><strong>Email:</strong> ${email}</p><p><strong>Sector:</strong> ${sector}</p><p><strong>Message:</strong> ${message}</p>`,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
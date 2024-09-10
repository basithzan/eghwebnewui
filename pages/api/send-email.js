import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, phoneNumber, email, sector, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: 'tecformsdxb@gmail.com',
        pass: 'qvuvawjzppfbsjyo'
      }
    });

    try {
      // Send thank you email to user
      await transporter.sendMail({
        from: '"Elite Group Holding" <tecformsdxb@gmail.com>',
        to: email,
        subject: 'Thank You for Contacting Elite Cars.',
        text: `Dear ${fullName},\n\nThank you for contacting Elite Group Holding. We have received your message and will get back to you soon.\n\nBest regards,\nElite Group Holding Team`
      });

      // Send notification email to company
      await transporter.sendMail({
        from: '"Elite Group Holding" <tecformsdxb@gmail.com>',
        to: 'inquiry@elitegroupholding.com, suraj.nair@theelitecars.com',
        subject: 'New EGH Contact Form Submission',
        text: `New contact form submission:\n\nName: ${fullName}\nPhone: ${phoneNumber}\nEmail: ${email}\nSector: ${sector}\nMessage: ${message}`
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
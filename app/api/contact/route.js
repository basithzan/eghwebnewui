import nodemailer from 'nodemailer';

export async function POST(req) {
  const body = await req.json();

  const transporter = nodemailer.createTransport({
    host: "mail.globalpageantest.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "basith@globalpageantest.com", // SMTP username
      pass: "Gp@786313@", // SMTP password
    },
  });

  try {
    await transporter.sendMail({
      from: '"Elite Group" <basith@globalpageantest.com>', // Sender address
      to: "basithzan07@gmail.com", // Receiver's email
      subject: "New Contact Form Submission", // Subject line
      html: `
        <p><strong>Full Name:</strong> ${body.fullName}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Sector:</strong> ${body.sector}</p>
        <p><strong>Message:</strong> ${body.message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, message: "Error sending email." }), { status: 500 });
  }
}

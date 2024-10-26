import nodemailer from 'nodemailer';

export async function POST(request) {
    const body = await request.json();
    const { email } = body;

    const password = Math.random().toString(36).slice(-8);

    const transporter = nodemailer.createTransport({
        // service: 'gmail',
        secure: true,
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: email,
        subject: 'Your New Password',
        text: `Your password is: ${password}`
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'Mail sent successfully' }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
    }
}

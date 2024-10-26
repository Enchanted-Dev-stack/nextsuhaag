import nodemailer from "nodemailer";

export async function POST(request) {
  const body = await request.json();
  const { email } = body;

  const password = Math.random().toString(36).slice(-8);

  const transporter = nodemailer.createTransport({
    // service: 'gmail',
    secure: true,
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Suhaag Matrimony Verification",
    html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Suhaag Matrimony Verification</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        max-width: 600px;
                        margin: 20px auto;
                        background-color: #ffffff;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    }
                    .header {
                        text-align: center;
                        padding: 10px 0;
                    }
                    .header h1 {
                        color: #ff4081;
                        font-size: 24px;
                        margin: 0;
                    }
                    .content {
                        font-size: 16px;
                        color: #333333;
                        line-height: 1.6;
                        margin-top: 20px;
                    }
                    .password-box {
                        display: block;
                        margin: 20px 0;
                        padding: 10px;
                        font-size: 18px;
                        text-align: center;
                        background-color: #f0f0f0;
                        color: #333;
                        font-weight: bold;
                        border-radius: 5px;
                    }
                    .footer {
                        text-align: center;
                        font-size: 12px;
                        color: #888888;
                        margin-top: 20px;
                    }
                    .footer p {
                        margin: 0;
                    }
                    .btn {
                        display: inline-block;
                        padding: 10px 20px;
                        font-size: 16px;
                        color: #ffffff;
                        background-color: #ff4081;
                        text-decoration: none;
                        border-radius: 5px;
                        margin-top: 20px;
                    }
                    .fontblack{
                        color: black;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Welcome to Suhaag Matrimony!</h1>
                    </div>
                    <div class="content">
                        <p>Dear User,</p>
                        <p>Thank you for choosing Suhaag Matrimony to find your perfect match. To ensure your account security, we have generated a OTP for you to log in. Please find your OTP below:</p>
                        <div class="password-box">${password}</div>
                        <p>We recommend that you change your password after your first login to keep your account secure.</p>
                        <p>If you have any questions or need assistance, please don’t hesitate to reach out to our support team.</p>
                        <a href="https://www.suhaagmatrimony.com/login" class="btn fontblack">Login to Suhaag Matrimony</a>
                    </div>
                    <div class="footer">
                        <p>&copy; ${new Date().getFullYear()} Suhaag Matrimony. All rights reserved.</p>
                        <p>1234 Matrimony Lane, City, Country</p>
                    </div>
                </div>
            </body>
            </html>
        `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "Mail sent successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Plain-text version (helps avoid spam filters)
    const textBody = `
New enquiry from Divine India Exports website

Name:    ${name}
Email:   ${email}
Subject: ${subject}

Message:
${message}

---
Sent via the contact form on divineindiaexports.com
    `.trim();

    await transporter.sendMail({
      from: `Divine India Exports <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Enquiry: ${subject}`,
      text: textBody,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #273221;">
          <p style="font-size: 16px; margin-bottom: 4px;">Hi,</p>
          <p style="font-size: 15px; color: #4a5444;">
            You have received a new enquiry from the Divine India Exports website.
          </p>

          <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 14px;">
            <tr style="background: #f9f6f0;">
              <td style="padding: 10px 14px; font-weight: bold; width: 90px; color: #555;">Name</td>
              <td style="padding: 10px 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 14px; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 10px 14px;">
                <a href="mailto:${email}" style="color: #4c6a48;">${email}</a>
              </td>
            </tr>
            <tr style="background: #f9f6f0;">
              <td style="padding: 10px 14px; font-weight: bold; color: #555;">Subject</td>
              <td style="padding: 10px 14px;">${subject}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 16px 20px; background: #f9f6f0; border-left: 3px solid #4c6a48;">
            <p style="font-weight: bold; margin: 0 0 8px; color: #555; font-size: 14px;">Message</p>
            <p style="margin: 0; line-height: 1.7; font-size: 14px; white-space: pre-wrap;">${message}</p>
          </div>



        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact/route] Nodemailer error:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}


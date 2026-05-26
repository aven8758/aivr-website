import { NextResponse } from "next/server";

export type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  city?: string;
  cooperation?: string;
  remarks?: string;
  preferPhone?: boolean;
  preferEmail?: boolean;
};

function formatEmailBody(data: ContactPayload): string {
  return [
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `City: ${data.city?.trim() || "Not provided"}`,
    `Organization type: ${data.cooperation?.trim() || "Not selected"}`,
    `Notes: ${data.remarks?.trim() || "None"}`,
    `Prefer phone contact: ${data.preferPhone ? "Yes" : "No"}`,
    `Prefer email contact: ${data.preferEmail ? "Yes" : "No"}`,
  ].join("\n");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "liruomeng@gmail.com";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "AIVR Website <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured. Set RESEND_API_KEY on the server." },
      { status: 503 }
    );
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim();
  const phone = body.phone?.trim();
  const email = body.email?.trim();

  if (!name || !phone || !email) {
    return NextResponse.json(
      { error: "Name, phone, and email are required." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `Website contact: ${name}`,
        text: formatEmailBody({ ...body, name, phone, email }),
      }),
    });

    const data = (await res.json().catch(() => ({}))) as { message?: string };

    if (!res.ok) {
      console.error("Resend API error:", data);
      return NextResponse.json(
        { error: data.message || "Failed to send email." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}

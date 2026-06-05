import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type LeadBody = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  agency_name?: string;
  team_size?: string;
  annual_issued_premium?: string;
};

const REQUIRED: (keyof LeadBody)[] = ["firstName", "lastName", "phone", "email"];

export async function POST(req: Request) {
  const webhookUrl = process.env.GHL_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { ok: false, error: "Lead webhook is not configured." },
      { status: 500 }
    );
  }

  let body: LeadBody;
  try {
    body = (await req.json()) as LeadBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const missing = REQUIRED.filter((k) => !String(body[k] ?? "").trim());
  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: `Missing required fields: ${missing.join(", ")}` },
      { status: 400 }
    );
  }

  const payload = {
    firstName: body.firstName,
    lastName: body.lastName,
    phone: body.phone,
    email: body.email,
    agency_name: body.agency_name ?? "",
    team_size: body.team_size ?? "",
    annual_issued_premium: body.annual_issued_premium ?? "",
    lead_source: "BDE Capital Partnership Page",
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: `Lead service returned ${res.status}.` },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not reach the lead service. Please try again." },
      { status: 502 }
    );
  }
}

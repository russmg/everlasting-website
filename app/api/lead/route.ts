import { NextRequest, NextResponse } from "next/server";
import { submitLeadToGhl, type LeadPayload } from "@/lib/ghl";
import { EMAIL_RE, PHONE_RE, LEAD_FIELD_MAX_LENGTHS } from "@/lib/validation";

export async function POST(req: NextRequest) {
  let body: Partial<LeadPayload> & { company?: string };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const { firstName, lastName, phone, email, service, city, message, source, company } = body;

  // Honeypot: real users never fill this hidden field. Report success
  // without forwarding so bots don't learn the check exists.
  if (company) {
    return NextResponse.json({ ok: true, forwarded: false });
  }

  if (!firstName || !lastName || !phone || !email || !service || !city) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 }
    );
  }

  const tooLong = Object.entries({ firstName, lastName, email, phone, service, city, message, source }).some(
    ([field, value]) =>
      typeof value === "string" &&
      value.length > LEAD_FIELD_MAX_LENGTHS[field as keyof typeof LEAD_FIELD_MAX_LENGTHS]
  );
  if (tooLong) {
    return NextResponse.json({ ok: false, error: "One or more fields is too long" }, { status: 400 });
  }

  if (!EMAIL_RE.test(email) || !PHONE_RE.test(phone)) {
    return NextResponse.json(
      { ok: false, error: "Invalid email or phone format" },
      { status: 400 }
    );
  }

  const result = await submitLeadToGhl({
    firstName,
    lastName,
    phone,
    email,
    service,
    city,
    message: message ?? "",
    source: source ?? "website",
  });

  if (!result.ok && result.reason === "not_configured") {
    // GHL isn't wired yet (Phase 2). Treat as a soft success so the
    // homeowner still sees confirmation — the lead is logged server-side.
    console.log("[lead] received (GHL not configured):", { firstName, lastName, phone, email, service, city });
    return NextResponse.json({ ok: true, forwarded: false });
  }

  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: result.detail ?? "Failed to submit lead" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, forwarded: true });
}

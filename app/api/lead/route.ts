import { NextRequest, NextResponse } from "next/server";
import { submitLeadToGhl, type LeadPayload } from "@/lib/ghl";

export async function POST(req: NextRequest) {
  let body: Partial<LeadPayload>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const { name, phone, email, service, city, message, source } = body;

  if (!name || !phone || !email || !service || !city) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 }
    );
  }

  const result = await submitLeadToGhl({
    name,
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
    console.log("[lead] received (GHL not configured):", { name, phone, email, service, city });
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

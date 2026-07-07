/**
 * Lead submission → GoHighLevel Contacts API.
 *
 * Submits leads directly to GHL via the Contacts API (v2, "2021-07-28")
 * using a location-scoped API key, tagging each contact "landing-page-lead"
 * and attaching service/message as custom fields. GHL_API_KEY and
 * GHL_LOCATION_ID are a Phase 2 dependency (sub-account configuration is
 * not yet complete) — this is intentionally stubbed behind env vars. Until
 * both are set, submissions log a clear warning and resolve as "not
 * configured" so the UI can show a friendly fallback instead of crashing.
 */

const GHL_CONTACTS_URL = "https://services.leadconnectorhq.com/contacts/";

export interface LeadPayload {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  service: string;
  city: string;
  message: string;
  source: string;
}

export type GhlSubmitResult =
  | { ok: true }
  | { ok: false; reason: "not_configured" | "request_failed"; detail?: string };

export async function submitLeadToGhl(payload: LeadPayload): Promise<GhlSubmitResult> {
  const apiKey = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;

  if (!apiKey || !locationId) {
    console.warn(
      "[ghl] GHL_API_KEY / GHL_LOCATION_ID are not set — lead was not forwarded. This is expected until Phase 2 GHL sub-account setup is complete."
    );
    return { ok: false, reason: "not_configured" };
  }

  try {
    const res = await fetch(GHL_CONTACTS_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Version: "2021-07-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        locationId,
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        phone: payload.phone,
        city: payload.city,
        customFields: [
          { key: "service_type", field_value: payload.service },
          { key: "message", field_value: payload.message },
        ],
        tags: ["landing-page-lead"],
        source: payload.source,
      }),
    });

    if (!res.ok) {
      return { ok: false, reason: "request_failed", detail: `HTTP ${res.status}` };
    }

    return { ok: true };
  } catch (error) {
    return {
      ok: false,
      reason: "request_failed",
      detail: error instanceof Error ? error.message : "unknown error",
    };
  }
}

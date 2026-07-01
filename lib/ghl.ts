/**
 * Lead submission → GoHighLevel webhook.
 *
 * GHL_WEBHOOK_URL is a Phase 2 dependency (sub-account configuration is not
 * yet complete) — this is intentionally stubbed behind an env var. Until
 * it's set, submissions log a clear warning and resolve as "not configured"
 * so the UI can show a friendly fallback instead of crashing.
 */

export interface LeadPayload {
  name: string;
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
  const webhookUrl = process.env.GHL_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn(
      "[ghl] GHL_WEBHOOK_URL is not set — lead was not forwarded. This is expected until Phase 2 GHL sub-account setup is complete."
    );
    return { ok: false, reason: "not_configured" };
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
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

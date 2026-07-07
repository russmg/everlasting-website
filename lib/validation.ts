/**
 * Shared lead-form validation — used client-side (LeadForm) and
 * server-side (api/lead/route) so the two can't drift out of sync.
 */

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_RE = /^[0-9()+\-.\s]{7,}$/;

export const LEAD_FIELD_MAX_LENGTHS = {
  firstName: 80,
  lastName: 80,
  email: 254,
  phone: 20,
  service: 100,
  city: 60,
  message: 2000,
  source: 100,
} as const;

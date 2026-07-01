"use client";

import { useState, type FormEvent } from "react";
import { CTAButton } from "./CTAButton";
import { serviceDropdownOptions, siteConfig } from "@/lib/site-config";
import { trackLeadSubmitted } from "@/lib/tracking";

type Status = "idle" | "submitting" | "success" | "error";

export function LeadForm({
  defaultService,
  variant = "light",
  source = "website",
}: {
  defaultService?: string;
  variant?: "light" | "dark";
  source?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const isDark = variant === "dark";
  const fieldClasses = isDark
    ? "w-full rounded-lg border border-border-inverse/20 bg-white/10 px-4 py-3 text-on-inverse placeholder:text-on-inverse/50 focus:border-brand-gold focus:outline-none"
    : "w-full rounded-lg border border-border/20 bg-surface-raised px-4 py-3 text-content placeholder:text-content-muted/60 focus:border-brand-gold focus:outline-none";
  const labelClasses = isDark ? "text-sm font-medium text-on-inverse/90" : "text-sm font-medium text-content";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      service: String(data.get("service") ?? ""),
      city: String(data.get("city") ?? ""),
      message: String(data.get("message") ?? ""),
      source,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Please call us instead.");
      }

      setStatus("success");
      trackLeadSubmitted();
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className={`rounded-xl p-6 text-center ${isDark ? "bg-white/10 text-on-inverse" : "bg-surface-sunken text-heading"}`}
      >
        <p className="font-display text-xl font-semibold">Request received!</p>
        <p className="mt-2 text-sm">
          We&apos;ll reach out within one business day. Need it faster? Call us at{" "}
          <a href={siteConfig.contact.phoneHref} className="font-semibold underline">
            {siteConfig.contact.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="name" className={labelClasses}>
            Full Name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={fieldClasses} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="phone" className={labelClasses}>
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={fieldClasses} />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="email" className={labelClasses}>
          Email
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={fieldClasses} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="service" className={labelClasses}>
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue={defaultService ?? ""}
            className={fieldClasses}
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceDropdownOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <label htmlFor="city" className={labelClasses}>
            City
          </label>
          <select id="city" name="city" required defaultValue="" className={fieldClasses}>
            <option value="" disabled>
              Select your city
            </option>
            {siteConfig.allServiceCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className={labelClasses}>
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className={fieldClasses}
          placeholder="Room size, timeline, anything that helps us prepare"
        />
      </div>

      {status === "error" && errorMessage && (
        <p role="alert" className="text-sm font-medium text-red-600">
          {errorMessage}
        </p>
      )}

      <CTAButton type="submit" variant="gold" className="w-full">
        {status === "submitting" ? "Submitting…" : "Request Your Free Estimate"}
      </CTAButton>

      <p className={`text-center text-xs ${isDark ? "text-on-inverse/60" : "text-content-muted"}`}>
        No spam. We typically respond within one business day.
      </p>
    </form>
  );
}

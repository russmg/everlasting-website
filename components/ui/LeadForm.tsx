"use client";

import { useEffect, useReducer, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CTAButton } from "./CTAButton";
import { serviceDropdownOptions, siteConfig } from "@/lib/site-config";
import { trackLeadSubmitted } from "@/lib/tracking";
import { EMAIL_RE, PHONE_RE } from "@/lib/validation";

type Status = "idle" | "submitting" | "success" | "error";

interface WizardState {
  step: 1 | 2 | 3;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  city: string;
  message: string;
}

type WizardAction =
  | { type: "SET_FIELD"; field: keyof Omit<WizardState, "step">; value: string }
  | { type: "GO_TO_STEP"; step: WizardState["step"] };

function wizardReducer(state: WizardState, action: WizardAction): WizardState {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "GO_TO_STEP":
      return { ...state, step: action.step };
    default:
      return state;
  }
}

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
  const [honeypot, setHoneypot] = useState("");
  const [state, dispatch] = useReducer(wizardReducer, {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: defaultService ?? "",
    city: "",
    message: "",
  });

  const step1FocusRef = useRef<HTMLInputElement>(null);
  const step2FocusRef = useRef<HTMLInputElement>(null);
  const step3FocusRef = useRef<HTMLSelectElement>(null);

  const reduceMotion = useReducedMotion();

  function focusCurrentStep() {
    if (state.step === 1) step1FocusRef.current?.focus();
    if (state.step === 2) step2FocusRef.current?.focus();
    if (state.step === 3) step3FocusRef.current?.focus();
  }

  useEffect(() => {
    // covers initial mount; for animated step changes the incoming field
    // isn't mounted yet here, so onExitComplete below re-fires the focus
    focusCurrentStep();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.step]);

  const stepVariants = reduceMotion
    ? { enter: { opacity: 1, x: 0 }, center: { opacity: 1, x: 0 }, exit: { opacity: 1, x: 0 } }
    : {
        enter: { opacity: 0, x: 24 },
        center: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -24 },
      };

  const isDark = variant === "dark";
  const fieldClasses = isDark
    ? "w-full rounded-lg border border-border-inverse/20 bg-white/10 px-4 py-3 text-on-inverse placeholder:text-on-inverse/50 focus:border-brand-gold focus:outline-none"
    : "w-full rounded-lg border border-border/20 bg-surface-raised px-4 py-3 text-content placeholder:text-content-muted/60 focus:border-brand-gold focus:outline-none";
  const labelClasses = isDark ? "text-sm font-medium text-on-inverse/90" : "text-sm font-medium text-content";

  const step1Valid = state.firstName.trim().length > 0 && state.lastName.trim().length > 0;
  const step2Valid = EMAIL_RE.test(state.email.trim()) && PHONE_RE.test(state.phone.trim());

  function setField(field: keyof Omit<WizardState, "step">, value: string) {
    dispatch({ type: "SET_FIELD", field, value });
  }

  function goToStep(step: WizardState["step"]) {
    dispatch({ type: "GO_TO_STEP", step });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const payload = {
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      phone: state.phone,
      service: state.service,
      city: state.city,
      message: state.message,
      source,
      company: honeypot,
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

  const dotBase = "h-1.5 flex-1 rounded-full transition-colors";
  const dotFilled = "bg-brand-gold";
  const dotEmpty = isDark ? "bg-white/15" : "bg-border/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <input
        type="text"
        name="company"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
      />

      <div
        className="flex gap-2"
        role="progressbar"
        aria-label={`Step ${state.step} of 3`}
        aria-valuenow={state.step}
        aria-valuemin={1}
        aria-valuemax={3}
      >
        {[1, 2, 3].map((n) => (
          <span key={n} className={`${dotBase} ${n <= state.step ? dotFilled : dotEmpty}`} />
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false} onExitComplete={focusCurrentStep}>
      {state.step === 1 && (
        <motion.div
          key="step-1"
          variants={stepVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor="firstName" className={labelClasses}>
                First Name
              </label>
              <input
                ref={step1FocusRef}
                id="firstName"
                name="firstName"
                type="text"
                required
                autoComplete="given-name"
                className={fieldClasses}
                value={state.firstName}
                onChange={(e) => setField("firstName", e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="lastName" className={labelClasses}>
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                autoComplete="family-name"
                className={fieldClasses}
                value={state.lastName}
                onChange={(e) => setField("lastName", e.target.value)}
              />
            </div>
          </div>

          <CTAButton
            type="button"
            variant="gold"
            className={`w-full ${!step1Valid ? "pointer-events-none opacity-50" : ""}`}
            onClick={() => {
              if (step1Valid) goToStep(2);
            }}
          >
            Continue
          </CTAButton>
        </motion.div>
      )}

      {state.step === 2 && (
        <motion.div
          key="step-2"
          variants={stepVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
        >
          <div className="space-y-1.5">
            <label htmlFor="email" className={labelClasses}>
              Email
            </label>
            <input
              ref={step2FocusRef}
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={fieldClasses}
              value={state.email}
              onChange={(e) => setField("email", e.target.value)}
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="phone" className={labelClasses}>
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              className={fieldClasses}
              value={state.phone}
              onChange={(e) => setField("phone", e.target.value)}
            />
          </div>

          <div className="flex gap-3">
            <CTAButton type="button" variant="outline" className="flex-1" onClick={() => goToStep(1)}>
              Back
            </CTAButton>
            <CTAButton
              type="button"
              variant="gold"
              className={`flex-1 ${!step2Valid ? "pointer-events-none opacity-50" : ""}`}
              onClick={() => {
                if (step2Valid) goToStep(3);
              }}
            >
              Continue
            </CTAButton>
          </div>
        </motion.div>
      )}

      {state.step === 3 && (
        <motion.div
          key="step-3"
          variants={stepVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor="service" className={labelClasses}>
                Service Needed
              </label>
              <select
                ref={step3FocusRef}
                id="service"
                name="service"
                required
                className={fieldClasses}
                value={state.service}
                onChange={(e) => setField("service", e.target.value)}
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
              <select
                id="city"
                name="city"
                required
                className={fieldClasses}
                value={state.city}
                onChange={(e) => setField("city", e.target.value)}
              >
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
              value={state.message}
              onChange={(e) => setField("message", e.target.value)}
            />
          </div>

          {status === "error" && errorMessage && (
            <p role="alert" className="text-sm font-medium text-red-600">
              {errorMessage}
            </p>
          )}

          <div className="flex gap-3">
            <CTAButton type="button" variant="outline" className="flex-1" onClick={() => goToStep(2)}>
              Back
            </CTAButton>
            <CTAButton
              type="submit"
              variant="gold"
              className={`flex-1 ${status === "submitting" ? "pointer-events-none opacity-50" : ""}`}
            >
              {status === "submitting" ? "Submitting…" : "Request Your Free Estimate"}
            </CTAButton>
          </div>
        </motion.div>
      )}
      </AnimatePresence>

      <p className={`text-center text-xs ${isDark ? "text-on-inverse/60" : "text-content-muted"}`}>
        No spam. We typically respond within one business day.
      </p>
    </form>
  );
}

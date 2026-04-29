"use client";

import { useState } from "react";
import { Phone, Mail } from "lucide-react";

const contactInfo = [
  { Icon: Phone, label: "Phone", value: "(604) 365-2049", href: "tel:+16043652049" },
  { Icon: Mail, label: "Email", value: "info@latussky.com", href: "mailto:info@latussky.com" },
];

const projectTypes = [
  "Website Design",
  "E-commerce",
  "App Development",
  "SEO",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New inquiry from ${form.name}${form.projectType ? ` — ${form.projectType}` : ""}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : null,
      form.projectType ? `Project type: ${form.projectType}` : null,
      "",
      "Message:",
      form.message,
    ].filter(Boolean).join("\n");
    window.location.href = `mailto:info@latussky.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "12px",
    padding: "14px 16px",
    color: "#fff",
    fontSize: "14px",
    outline: "none",
    transition: "all 0.2s ease",
    appearance: "none",
    WebkitAppearance: "none",
  };

  return (
    <section id="contact" style={{ padding: "128px 32px", maxWidth: "1280px", margin: "0 auto" }}>
      {/* Top */}
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.2em",
            color: "#fa145a",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: "20px",
          }}
        >
          GET IN TOUCH
        </p>
        <h2
          style={{
            fontSize: "clamp(56px, 8vw, 112px)",
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            margin: "0 0 24px",
          }}
        >
          <span style={{ display: "block", color: "#fff" }}>Ready to grow</span>
          <span
            style={{
              display: "block",
              background: "linear-gradient(135deg, #fa145a 0%, #ff3cac 50%, #00f5d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            your business online?
          </span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "17px", margin: 0 }}>
          Tell us about your project and get a free consultation within 24 hours. No obligation, no pressure — just honest advice.
        </p>
      </div>

      {/* Bottom grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "start",
        }}
      >
        {/* Left — Contact Info */}
        <div>
          <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#fff", marginBottom: "32px" }}>
            Ready to start?
          </h3>

          {contactInfo.map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
                marginBottom: "24px",
                textDecoration: "none",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const v = e.currentTarget.querySelector<HTMLDivElement>("[data-value]");
                if (v) v.style.color = "#fa145a";
              }}
              onMouseLeave={(e) => {
                const v = e.currentTarget.querySelector<HTMLDivElement>("[data-value]");
                if (v) v.style.color = "#fff";
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={18} style={{ color: "#fa145a" }} />
              </div>
              <div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    marginBottom: "4px",
                    fontWeight: 500,
                  }}
                >
                  {label}
                </div>
                <div data-value style={{ color: "#fff", fontWeight: 500, fontSize: "17px", transition: "color 0.2s ease" }}>{value}</div>
              </div>
            </a>
          ))}

        </div>

        {/* Right — Form */}
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            padding: "40px",
          }}
        >
          {submitted ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "300px",
                textAlign: "center",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "rgba(92,111,255,0.15)",
                  border: "1px solid rgba(92,111,255,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px",
                }}
              >
                ✓
              </div>
              <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#fff" }}>Message sent!</h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px" }}>
                We&apos;ll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Row 1: Name + Email */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(92,111,255,0.6)";
                    e.target.style.background = "rgba(255,255,255,0.05)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.1)";
                    e.target.style.background = "rgba(255,255,255,0.03)";
                  }}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(92,111,255,0.6)";
                    e.target.style.background = "rgba(255,255,255,0.05)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.1)";
                    e.target.style.background = "rgba(255,255,255,0.03)";
                  }}
                />
              </div>

              {/* Row 2: Phone + Project Type */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(92,111,255,0.6)";
                    e.target.style.background = "rgba(255,255,255,0.05)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.1)";
                    e.target.style.background = "rgba(255,255,255,0.03)";
                  }}
                />
                <select
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    color: form.projectType ? "#fff" : "rgba(255,255,255,0.25)",
                    cursor: "pointer",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(92,111,255,0.6)";
                    e.target.style.background = "rgba(255,255,255,0.05)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.1)";
                    e.target.style.background = "rgba(255,255,255,0.03)";
                  }}
                >
                  <option value="" disabled style={{ background: "#111", color: "#fff" }}>
                    Project type
                  </option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t} style={{ background: "#111", color: "#fff" }}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={handleChange}
                required
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(92,111,255,0.6)";
                  e.target.style.background = "rgba(255,255,255,0.05)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.1)";
                  e.target.style.background = "rgba(255,255,255,0.03)";
                }}
              />

              {/* Submit */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  background: "#fa145a",
                  color: "#fff",
                  fontWeight: 600,
                  padding: "16px",
                  borderRadius: "12px",
                  border: "none",
                  fontSize: "15px",
                  cursor: "pointer",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#d4104c")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#fa145a")}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

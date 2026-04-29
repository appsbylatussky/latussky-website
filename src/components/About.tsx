import { CheckCircle2, Phone } from "lucide-react";

const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "300+", label: "Projects Delivered" },
  { value: "98%", label: "Client Retention" },
  { value: "50+", label: "Industries Served" },
];

const reasons = [
  "Websites delivered in 1–2 weeks",
  "100% mobile & SEO optimized",
  "Ongoing support & maintenance included",
  "Proud Canadian business since 2012",
];

export default function About() {
  return (
    <section id="about" style={{ padding: "128px 24px", background: "#050508" }}>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* LEFT: Text */}
        <div>
          {/* Label */}
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#22d3ee",
              marginBottom: "16px",
            }}
          >
            ABOUT LATUSSKY WEBMEDIA
          </p>

          {/* Headline */}
          <h2
            style={{
              fontSize: "clamp(36px, 4.5vw, 58px)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#ffffff",
            }}
          >
            Canada’s most trusted
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #fa145a, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              web design studio.
            </span>
          </h2>

          {/* Paragraph */}
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "16px",
              lineHeight: 1.8,
              marginTop: "24px",
              maxWidth: "480px",
            }}
          >
            Since 2012, Latussky Webmedia has helped hundreds of Canadian businesses build powerful online presences. From small local businesses to multi-location enterprises — we deliver websites and digital strategies that generate real results. We understand the Canadian market inside and out.
          </p>

          {/* Stats grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "32px",
              marginTop: "48px",
            }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontSize: "42px",
                    fontWeight: 900,
                    lineHeight: 1,
                    background: "linear-gradient(135deg, #fa145a, #22d3ee)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.7)",
                    marginTop: "6px",
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Why choose us card */}
          <div
            className="card"
            style={{
              borderRadius: "20px",
              padding: "32px",
            }}
          >
            <h3
              style={{
                fontSize: "17px",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "24px",
                letterSpacing: "-0.01em",
              }}
            >
              Why choose us?
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {reasons.map((reason) => (
                <div key={reason} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <CheckCircle2 size={18} color="#4ade80" strokeWidth={2} style={{ flexShrink: 0 }} />
                  <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "15px" }}>{reason}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Phone card */}
          <div
            className="card"
            style={{
              borderRadius: "20px",
              padding: "28px 32px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "14px",
                background: "rgba(79,110,247,0.12)",
                border: "1px solid rgba(79,110,247,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Phone size={22} color="#60a5fa" strokeWidth={1.5} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                }}
              >
                (604) 365-2049
              </div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", marginTop: "3px" }}>
                Call for a free consultation
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}

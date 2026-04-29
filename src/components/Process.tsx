"use client";

import { Search, Pen, Code2, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    Icon: Search,
    title: "Discovery",
    desc: "We learn your business, goals, target audience, and competitive landscape to build the right strategy.",
  },
  {
    num: "02",
    Icon: Pen,
    title: "Design",
    desc: "Pixel-perfect, brand-aligned mockups built to look great on every device and engineered to convert.",
  },
  {
    num: "03",
    Icon: Code2,
    title: "Development",
    desc: "Clean, fast, SEO-ready code built on modern frameworks — optimized for speed and search engines.",
  },
  {
    num: "04",
    Icon: Rocket,
    title: "Launch & Grow",
    desc: "We go live, monitor performance, and provide ongoing support to ensure your continued growth online.",
  },
];

export default function Process() {
  return (
    <section style={{ padding: "128px 32px", maxWidth: "1280px", margin: "0 auto" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.2em",
            color: "#fa145a",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: "16px",
          }}
        >
          OUR PROCESS
        </p>
        <h2
          style={{
            fontSize: "clamp(40px, 6vw, 64px)",
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: "-0.03em",
            margin: 0,
          }}
        >
          <span style={{ display: "block", color: "#fff" }}>Simple, proven process.</span>
          <span
            style={{
              display: "block",
              background: "linear-gradient(135deg, #fa145a 0%, #ff3cac 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Remarkable results.
          </span>
        </h2>
      </div>

      {/* Steps */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "24px",
          overflow: "hidden",
        }}
      >
        {steps.map(({ num, Icon, title, desc }, i) => (
          <div
            key={num}
            style={{
              padding: "40px",
              borderRight: i < steps.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
              position: "relative",
              transition: "background 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.02)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.background = "transparent";
            }}
          >
            {/* Background step number */}
            <span
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                fontSize: "72px",
                fontWeight: 900,
                color: "rgba(255,255,255,0.05)",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              {num}
            </span>

            <Icon size={24} style={{ color: "#fa145a", marginBottom: "24px", display: "block" }} />
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "12px",
              }}
            >
              {title}
            </h3>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "14px",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              {desc}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

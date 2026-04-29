"use client";

const testimonials = [
  {
    quote:
      "Absolutely outstanding experience from start to finish. They listened carefully, delivered ahead of schedule, and the final result looked even better than I imagined. Highly recommend.",
    name: "Chandar Thaman",
    initials: "CT",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
  },
  {
    quote:
      "Genuine, professional, and incredibly creative. Every revision was handled patiently and the attention to detail is on another level. Couldn't be happier with the outcome.",
    name: "Amrit",
    initials: "A",
    gradient: "linear-gradient(135deg, #ec4899 0%, #ef4444 100%)",
  },
  {
    quote:
      "Top-notch work. Communication was clear, the timeline was respected, and the design felt modern and polished. Will definitely be working with them again.",
    name: "Sat",
    initials: "S",
    gradient: "linear-gradient(135deg, #22c55e 0%, #14b8a6 100%)",
  },
  {
    quote:
      "I was nervous going in, but they made the whole process effortless. Friendly, fast, and seriously talented. The final product blew my expectations away.",
    name: "Param",
    initials: "P",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
  },
  {
    quote:
      "Five stars all the way. They truly understood what I wanted and brought it to life beautifully. Honest pricing, fast turnaround, and excellent support after launch.",
    name: "Harpreet",
    initials: "H",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #6366f1 100%)",
  },
];

export default function Testimonials() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section style={{ padding: "128px 0", overflow: "hidden" }}>
      {/* Header */}
      <div style={{ maxWidth: "1280px", margin: "0 auto 64px", padding: "0 32px" }}>
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
          Testimonials
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
          <span style={{ display: "block", color: "#fff" }}>Don&apos;t take</span>
          <span
            style={{
              display: "block",
              background: "linear-gradient(135deg, #fa145a 0%, #ff3cac 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            our word for it.
          </span>
        </h2>
      </div>

      {/* Scrolling track */}
      <div
        className="testimonial-marquee"
        style={{
          position: "relative",
          maskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div
          className="testimonial-track"
          style={{
            display: "flex",
            gap: "24px",
            width: "max-content",
            animation: "testimonial-scroll 50s linear infinite",
          }}
        >
          {loop.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes testimonial-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .testimonial-marquee:hover .testimonial-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

function TestimonialCard({
  quote,
  name,
  initials,
  gradient,
}: {
  quote: string;
  name: string;
  initials: string;
  gradient: string;
}) {
  return (
    <div
      style={{
        flex: "0 0 auto",
        width: "380px",
        padding: "32px",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        background: "rgba(255,255,255,0.02)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontSize: "64px",
          fontWeight: 900,
          color: "#fa145a",
          lineHeight: 1,
          marginBottom: "16px",
          fontFamily: "Georgia, serif",
        }}
      >
        &ldquo;
      </div>

      <div style={{ color: "#fbbf24", fontSize: "14px", marginBottom: "16px", letterSpacing: "2px" }}>
        ★★★★★
      </div>

      <p
        style={{
          color: "rgba(255,255,255,0.7)",
          fontSize: "15px",
          lineHeight: 1.7,
          marginBottom: "32px",
          fontStyle: "italic",
          flex: 1,
        }}
      >
        {quote}
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: gradient,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "13px",
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          {initials}
        </div>
        <div style={{ color: "#fff", fontWeight: 600, fontSize: "14px" }}>{name}</div>
      </div>
    </div>
  );
}

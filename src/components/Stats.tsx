"use client";

export default function Stats() {
  const stats = [
    {
      number: "12+",
      label: "Years of Excellence",
      gradient: false,
    },
    {
      number: "300+",
      label: "Projects Delivered",
      gradient: true,
    },
    {
      number: "98%",
      label: "Client Retention Rate",
      gradient: false,
    },
    {
      number: "50+",
      label: "Industries Served",
      gradient: true,
    },
  ];

  return (
    <section
      style={{
        padding: "128px 32px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              padding: "64px 48px",
              borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "clamp(60px, 7vw, 100px)",
                fontWeight: 900,
                lineHeight: 1,
                marginBottom: "16px",
                ...(stat.gradient
                  ? {
                      background: "linear-gradient(135deg, #fa145a 0%, #ff3cac 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }
                  : { color: "#fff" }),
              }}
            >
              {stat.number}
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                fontWeight: 500,
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

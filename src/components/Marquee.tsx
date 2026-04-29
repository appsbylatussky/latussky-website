"use client";

export default function Marquee() {
  const items = [
    { text: "WEB DESIGN", isStar: false },
    { text: "✦", isStar: true },
    { text: "SEO OPTIMIZATION", isStar: false },
    { text: "✦", isStar: true },
    { text: "E-COMMERCE", isStar: false },
    { text: "✦", isStar: true },
    { text: "DIGITAL MARKETING", isStar: false },
    { text: "✦", isStar: true },
    { text: "APP DEVELOPMENT", isStar: false },
    { text: "✦", isStar: true },
    { text: "BRAND IDENTITY", isStar: false },
    { text: "✦", isStar: true },
    { text: "GOOGLE ADS", isStar: false },
    { text: "✦", isStar: true },
    { text: "WEBSITE REDESIGN", isStar: false },
    { text: "✦", isStar: true },
  ];

  const repeated = [...items, ...items, ...items];

  return (
    <div
      style={{
        width: "100%",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "16px 0",
        overflow: "hidden",
      }}
    >
      <div
        className="animate-marquee"
        style={{
          display: "flex",
          flexWrap: "nowrap",
          whiteSpace: "nowrap",
          width: "max-content",
        }}
      >
        {repeated.map((item, i) =>
          item.isStar ? (
            <span
              key={i}
              style={{
                color: "#fa145a",
                fontSize: "14px",
                margin: "0 16px",
                userSelect: "none",
              }}
            >
              {item.text}
            </span>
          ) : (
            <span
              key={i}
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                margin: "0 24px",
                userSelect: "none",
              }}
            >
              {item.text}
            </span>
          )
        )}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

/* ── Unique animated SVG icons ── */

function IconBrowser({ hovered }: { hovered: boolean }) {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      {/* Browser frame */}
      <rect x="4" y="8" width="44" height="36" rx="4" stroke="#fa145a" strokeWidth="1.5" />
      {/* Top bar */}
      <rect x="4" y="8" width="44" height="10" rx="4" fill="#fa145a" fillOpacity="0.12" />
      {/* Traffic lights */}
      <circle cx="12" cy="13" r="2" fill="#fa145a" fillOpacity="0.8" />
      <circle cx="19" cy="13" r="2" fill="#fa145a" fillOpacity="0.4" />
      <circle cx="26" cy="13" r="2" fill="#fa145a" fillOpacity="0.2" />
      {/* URL bar */}
      <rect x="31" y="10" width="14" height="6" rx="3" fill="#fa145a" fillOpacity="0.1" stroke="#fa145a" strokeWidth="0.5" strokeOpacity="0.3" />
      {/* Content lines */}
      <rect x="10" y="24" width="20" height="2.5" rx="1.5" fill="white" fillOpacity="0.25" />
      <rect x="10" y="30" width="32" height="2" rx="1" fill="white" fillOpacity="0.12" />
      <rect x="10" y="35" width="26" height="2" rx="1" fill="white" fillOpacity="0.12" />
      {/* Blinking cursor */}
      <rect
        x="32" y="23" width="2" height="14" rx="1"
        fill="#fa145a"
        className={hovered ? "svc-cursor-blink" : ""}
        opacity={hovered ? 1 : 0}
      />
    </svg>
  );
}

function IconBag({ hovered }: { hovered: boolean }) {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      {/* Bag body */}
      <rect x="10" y="20" width="32" height="24" rx="4" stroke="#fa145a" strokeWidth="1.5" fill="#fa145a" fillOpacity="0.06" />
      {/* Handle */}
      <path d="M18 20 C18 13 34 13 34 20" stroke="#fa145a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Buckle line */}
      <line x1="10" y1="29" x2="42" y2="29" stroke="#fa145a" strokeWidth="1" strokeOpacity="0.4" />
      {/* Pulse ring on hover */}
      {hovered && (
        <circle cx="26" cy="32" r="8" stroke="#fa145a" strokeWidth="1.5" fill="none"
          className="svc-ring-pulse" />
      )}
      {/* Center dot */}
      <circle cx="26" cy="32" r="3" fill="#fa145a" fillOpacity={hovered ? 0.9 : 0.4} style={{ transition: "fill-opacity 0.3s" }} />
    </svg>
  );
}

function IconPhone({ hovered }: { hovered: boolean }) {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" style={{ overflow: "hidden" }}>
      {/* Phone outline */}
      <rect x="15" y="4" width="22" height="44" rx="5" stroke="#fa145a" strokeWidth="1.5" fill="#fa145a" fillOpacity="0.06" />
      {/* Screen area */}
      <rect x="19" y="10" width="14" height="26" rx="2" fill="#fa145a" fillOpacity="0.08" />
      {/* Scrolling lines — clip to screen */}
      <g style={{ clipPath: "inset(10px 19px 16px 19px)" }}>
        <g className={hovered ? "svc-line-scroll" : ""}>
          <rect x="21" y="13" width="10" height="2" rx="1" fill="white" fillOpacity="0.35" />
          <rect x="21" y="17" width="8" height="1.5" rx="1" fill="white" fillOpacity="0.2" />
          <rect x="21" y="21" width="10" height="1.5" rx="1" fill="white" fillOpacity="0.2" />
          <rect x="21" y="25" width="6" height="1.5" rx="1" fill="white" fillOpacity="0.2" />
          <rect x="21" y="29" width="9" height="1.5" rx="1" fill="white" fillOpacity="0.2" />
        </g>
      </g>
      {/* Home button */}
      <circle cx="26" cy="42" r="2.5" stroke="#fa145a" strokeWidth="1" fill="none" strokeOpacity="0.6" />
      {/* Notch */}
      <rect x="22" y="7" width="8" height="2" rx="1" fill="#fa145a" fillOpacity="0.4" />
    </svg>
  );
}

function IconChart({ hovered }: { hovered: boolean }) {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      {/* Axes */}
      <line x1="8" y1="44" x2="46" y2="44" stroke="white" strokeWidth="1" strokeOpacity="0.15" />
      <line x1="8" y1="44" x2="8" y2="10" stroke="white" strokeWidth="1" strokeOpacity="0.15" />
      {/* Bars */}
      <rect x="13" y={hovered ? "28" : "40"} width="6" height={hovered ? "16" : "4"} rx="1.5"
        fill="#fa145a" fillOpacity="0.4"
        style={{ transition: "all 0.3s ease 0s" }} />
      <rect x="23" y={hovered ? "20" : "40"} width="6" height={hovered ? "24" : "4"} rx="1.5"
        fill="#fa145a" fillOpacity="0.6"
        style={{ transition: "all 0.3s ease 0.08s" }} />
      <rect x="33" y={hovered ? "12" : "40"} width="6" height={hovered ? "32" : "4"} rx="1.5"
        fill="#fa145a" fillOpacity="0.9"
        style={{ transition: "all 0.3s ease 0.16s" }} />
      {/* Trend line */}
      <polyline
        points="16,36 26,28 36,18"
        stroke="#fa145a" strokeWidth="1.5" fill="none" strokeLinecap="round"
        strokeDasharray="30"
        strokeDashoffset={hovered ? "0" : "30"}
        style={{ transition: "stroke-dashoffset 0.5s ease" }}
      />
      <circle cx="36" cy="18" r="2.5" fill="#fa145a" opacity={hovered ? 1 : 0} style={{ transition: "opacity 0.3s ease 0.4s" }} />
    </svg>
  );
}

function IconSearch({ hovered }: { hovered: boolean }) {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      {/* Glass circle */}
      <circle cx="22" cy="22" r="13" stroke="#fa145a" strokeWidth="1.5" fill="#fa145a" fillOpacity="0.06" />
      {/* Handle */}
      <line x1="31" y1="31" x2="44" y2="44" stroke="#fa145a" strokeWidth="2" strokeLinecap="round" />
      {/* Rank bars inside glass */}
      <rect x="15" y={hovered ? "24" : "28"} width="4" height={hovered ? "8" : "4"} rx="1"
        fill="#fa145a" fillOpacity="0.5" style={{ transition: "all 0.25s ease 0s" }} />
      <rect x="21" y={hovered ? "20" : "28"} width="4" height={hovered ? "12" : "4"} rx="1"
        fill="#fa145a" fillOpacity="0.7" style={{ transition: "all 0.25s ease 0.08s" }} />
      <rect x="27" y={hovered ? "16" : "28"} width="4" height={hovered ? "16" : "4"} rx="1"
        fill="#fa145a" fillOpacity="0.9" style={{ transition: "all 0.25s ease 0.16s" }} />
      {/* Page 1 label */}
      <text x="22" y="13" textAnchor="middle" fill="#fa145a" fontSize="5" fontWeight="bold"
        opacity={hovered ? 1 : 0} style={{ transition: "opacity 0.3s ease 0.3s" }}>
        #1
      </text>
    </svg>
  );
}

function IconBrand({ hovered }: { hovered: boolean }) {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      {/* Outer hex */}
      <polygon
        points="26,4 44,14 44,38 26,48 8,38 8,14"
        stroke="#fa145a" strokeWidth="1.5" fill="#fa145a" fillOpacity="0.05"
        style={{ transition: "transform 0.5s ease", transformOrigin: "26px 26px", transform: hovered ? "rotate(30deg)" : "rotate(0deg)" }}
      />
      {/* Middle hex */}
      <polygon
        points="26,11 38,18 38,34 26,41 14,34 14,18"
        stroke="#fa145a" strokeWidth="1" strokeOpacity="0.5" fill="none"
        style={{ transition: "transform 0.5s ease 0.05s", transformOrigin: "26px 26px", transform: hovered ? "rotate(-20deg)" : "rotate(0deg)" }}
      />
      {/* Inner hex */}
      <polygon
        points="26,18 33,22 33,30 26,34 19,30 19,22"
        stroke="#fa145a" strokeWidth="1" strokeOpacity="0.8" fill="#fa145a" fillOpacity={hovered ? 0.2 : 0.08}
        style={{ transition: "all 0.4s ease 0.1s", transformOrigin: "26px 26px", transform: hovered ? "rotate(15deg)" : "rotate(0deg)" }}
      />
      {/* Center dot */}
      <circle cx="26" cy="26" r="3" fill="#fa145a" fillOpacity={hovered ? 1 : 0.6} style={{ transition: "fill-opacity 0.3s" }} />
    </svg>
  );
}

const services = [
  { num: "01", Icon: IconBrowser, name: "Website Design", desc: "Custom, mobile-first websites designed to rank on Google and convert visitors into paying customers." },
  { num: "02", Icon: IconBag, name: "E-commerce", desc: "Full-featured online stores built on proven platforms with secure checkout and seamless inventory management." },
  { num: "03", Icon: IconPhone, name: "App Development", desc: "Scalable web and mobile applications tailored to automate your workflow and delight your users." },
  { num: "04", Icon: IconChart, name: "Digital Marketing", desc: "ROI-focused Google Ads, Meta campaigns, and content strategies that drive qualified leads to your business." },
  { num: "05", Icon: IconSearch, name: "SEO", desc: "Local and national SEO strategies that put your business on page one — and keep it there long-term." },
  { num: "06", Icon: IconBrand, name: "Brand Strategy", desc: "Logo, identity, and brand systems that communicate your value and build lasting customer trust." },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "128px 32px", maxWidth: "1280px", margin: "0 auto" }}>
      <div style={{ marginBottom: "64px" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#fa145a", textTransform: "uppercase", fontWeight: 600, marginBottom: "16px" }}>
          OUR SERVICES
        </p>
        <h2 style={{ fontSize: "clamp(40px, 6vw, 64px)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.03em", margin: 0 }}>
          <span style={{ display: "block", color: "#fff" }}>Everything your</span>
          <span style={{ display: "block", background: "linear-gradient(135deg, #fa145a 0%, #ff3cac 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            business needs online.
          </span>
        </h2>
      </div>

      <div style={{
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
      }}>
        {services.map((s, i) => (
          <ServiceCard key={s.num} {...s} borderRight={i % 3 !== 2} borderBottom={i < 3} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ num, Icon, name, desc, borderRight, borderBottom }: {
  num: string;
  Icon: React.ElementType;
  name: string;
  desc: string;
  borderRight: boolean;
  borderBottom: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "40px 36px",
        background: hovered ? "rgba(255,255,255,0.03)" : "transparent",
        borderRight: borderRight ? "1px solid rgba(255,255,255,0.08)" : "none",
        borderBottom: borderBottom ? "1px solid rgba(255,255,255,0.08)" : "none",
        transition: "background 0.35s ease",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div style={{
        position: "absolute", bottom: "-50px", left: "-50px",
        width: "180px", height: "180px", borderRadius: "50%",
        background: "#fa145a", filter: "blur(70px)",
        opacity: hovered ? 0.08 : 0, transition: "opacity 0.5s ease",
        pointerEvents: "none",
      }} />

      {/* Top: icon left, number right */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "28px" }}>
        <Icon hovered={hovered} />
        <span style={{
          fontSize: "80px", fontWeight: 900, lineHeight: 1,
          color: "rgba(255,255,255,0.05)", letterSpacing: "-0.04em", userSelect: "none",
        }}>
          {num}
        </span>
      </div>

      <h3 style={{ fontSize: "19px", fontWeight: 700, color: "#fff", margin: "0 0 12px" }}>
        {name}
      </h3>
      <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px", lineHeight: 1.75, margin: 0 }}>
        {desc}
      </p>

      {/* Bottom reveal */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "2px",
        background: "linear-gradient(90deg, #fa145a, transparent)",
        transform: hovered ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left", transition: "transform 0.4s ease",
      }} />
    </div>
  );
}

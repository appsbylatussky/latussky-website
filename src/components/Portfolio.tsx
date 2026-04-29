"use client";

import { useState, type ReactNode } from "react";

const projects = [
  { name: "Janitor Room", url: "https://janitorroom.com", category: "Cleaning Services" },
  { name: "Vege Garden Pizza", url: "https://vegegardenpizza.com", category: "Restaurant" },
  { name: "UC Immigration", url: "https://ucimmigration.com", category: "Immigration" },
  { name: "DK Floors", url: "https://dkfloors.ca", category: "Flooring" },
  { name: "Altec Window", url: "https://altecwindow.com", category: "Windows & Doors" },
  { name: "Universal Kitchen Cabinets", url: "https://universalkitchencabinets.ca", category: "Cabinets" },
  { name: "Star Doors", url: "https://stardoors.ca", category: "Windows & Doors" },
  { name: "Dhot Law", url: "https://dhotlaw.com", category: "Legal" },
  { name: "Westpac Group", url: "https://westpacgroup.ca", category: "Real Estate" },
  { name: "Enerstar Windows", url: "https://enerstarwindows.com", category: "Windows & Doors" },
  { name: "Shine Kitchen", url: "https://shinekitchen.ca", category: "Kitchen" },
  { name: "Eminence Development", url: "https://eminencedevelopment.ca", category: "Real Estate" },
  { name: "Euroline BC", url: "https://eurolinebc.ca", category: "Windows & Doors" },
  { name: "Round Table Pizza", url: "https://roundtablepizza.ca", category: "Restaurant" },
  { name: "Saba Properties", url: "https://sabaproperties.ca", category: "Real Estate" },
  { name: "AK Kitchen Cabinets", url: "https://akkitchencabinets.com", category: "Cabinets" },
  { name: "Secura Locks", url: "https://securalocks.com", category: "Security" },
  { name: "AA Door", url: "https://aadoor.ca", category: "Windows & Doors" },
  { name: "Canwood Doors", url: "https://canwooddoors.ca", category: "Windows & Doors" },
  { name: "Symbolic Construction", url: "https://symbolicconstruction.com", category: "Construction" },
  { name: "Reliance Kitchen", url: "https://reliancekitchen.com", category: "Kitchen" },
  { name: "Talwandi Homes", url: "https://talwandihomes.com", category: "Real Estate" },
  { name: "Entertainment Magazine", url: "https://entertainmentmagazine.ca", category: "Media" },
  { name: "Drishti Magazine", url: "https://drishtimagazine.com", category: "Media" },
  { name: "DTC Immigration", url: "https://dtcimmigration.com", category: "Immigration" },
  { name: "Supervisa Insurance", url: "https://supervisainsuranceplans.com", category: "Insurance" },
  { name: "Premium Glass", url: "https://premiumglass.ca", category: "Windows & Doors" },
  { name: "Ezz Cutz", url: "https://ezzcutz.com", category: "Barbershop" },
  { name: "AK Immigration", url: "https://akimmigration.ca", category: "Immigration" },
];

const INITIAL_SHOW = 12;

const categoryStyles: Record<string, { tint: string; accent: string }> = {
  "Real Estate":        { tint: "#3b82f6", accent: "#60a5fa" },
  "Transportation":     { tint: "#f59e0b", accent: "#fbbf24" },
  "Insurance":          { tint: "#0ea5e9", accent: "#38bdf8" },
  "Retail":             { tint: "#ec4899", accent: "#f472b6" },
  "Cleaning Services":  { tint: "#14b8a6", accent: "#2dd4bf" },
  "Restaurant":         { tint: "#ef4444", accent: "#f87171" },
  "Immigration":        { tint: "#6366f1", accent: "#818cf8" },
  "Flooring":           { tint: "#a16207", accent: "#ca8a04" },
  "Windows & Doors":    { tint: "#06b6d4", accent: "#22d3ee" },
  "Cabinets":           { tint: "#84cc16", accent: "#a3e635" },
  "Legal":              { tint: "#7c3aed", accent: "#a78bfa" },
  "Security":           { tint: "#dc2626", accent: "#ef4444" },
  "Kitchen":            { tint: "#f97316", accent: "#fb923c" },
  "Construction":       { tint: "#ca8a04", accent: "#eab308" },
  "Design":             { tint: "#d946ef", accent: "#e879f9" },
  "Plumbing":           { tint: "#0284c7", accent: "#0ea5e9" },
  "Media":              { tint: "#8b5cf6", accent: "#a78bfa" },
  "Healthcare":         { tint: "#10b981", accent: "#34d399" },
  "Photography":        { tint: "#64748b", accent: "#94a3b8" },
  "Accounting":         { tint: "#059669", accent: "#10b981" },
  "Barbershop":         { tint: "#9333ea", accent: "#a855f7" },
  "Electrical":         { tint: "#eab308", accent: "#facc15" },
};

const fallback = { tint: "#fa145a", accent: "#ff3cac" };

function getStyle(category: string) {
  return categoryStyles[category] ?? fallback;
}

function CategoryIcon({ category, color }: { category: string; color: string }): ReactNode {
  const props = {
    width: 88,
    height: 88,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (category) {
    case "Real Estate":
      return (<svg {...props}><path d="M3 9.5L12 3l9 6.5"/><path d="M5 9v11h14V9"/><path d="M9 20v-5a3 3 0 0 1 6 0v5"/></svg>);
    case "Restaurant":
      return (<svg {...props}><path d="M7 2v8a2 2 0 0 0 2 2v10"/><path d="M11 2v8a2 2 0 0 1-2 2"/><path d="M15 2c-1.5 0-2.5 2-2.5 5s1 5 2.5 5v10"/></svg>);
    case "Windows & Doors":
      return (<svg {...props}><rect x="5" y="3" width="14" height="18" rx="1"/><path d="M5 12h14"/><path d="M12 3v18"/><circle cx="15" cy="12" r="0.6" fill={color} stroke="none"/></svg>);
    case "Security":
      return (<svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>);
    case "Plumbing":
      return (<svg {...props}><path d="M12 2.5c0 0-5 5.5-5 10a5 5 0 0 0 10 0c0-4.5-5-10-5-10z"/></svg>);
    case "Cabinets":
      return (<svg {...props}><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M4 12h16"/><path d="M11 8v2"/><path d="M11 14v2"/><path d="M13 8v2"/><path d="M13 14v2"/></svg>);
    case "Kitchen":
      return (<svg {...props}><rect x="3" y="4" width="18" height="16" rx="1"/><circle cx="8" cy="9" r="1.5"/><circle cx="14" cy="9" r="1.5"/><path d="M3 14h18"/><path d="M8 17v2"/><path d="M16 17v2"/></svg>);
    case "Immigration":
      return (<svg {...props}><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.8 3 4.2 6.5 4.2 9s-1.4 6-4.2 9"/><path d="M12 3c-2.8 3-4.2 6.5-4.2 9s1.4 6 4.2 9"/></svg>);
    case "Insurance":
      return (<svg {...props}><path d="M3 11a9 9 0 0 1 18 0"/><path d="M3 11h18"/><path d="M12 11v8a2 2 0 0 1-4 0"/></svg>);
    case "Construction":
      return (<svg {...props}><path d="M3 19h18"/><path d="M5 19v-4a7 7 0 0 1 14 0v4"/><path d="M3 19v-2"/><path d="M21 19v-2"/><path d="M10 8V5h4v3"/></svg>);
    case "Legal":
      return (<svg {...props}><path d="M12 3v18"/><path d="M8 21h8"/><path d="M5 7h14"/><path d="M16 4l-8 2"/><path d="M5 7l-2 6a3 3 0 0 0 6 0z"/><path d="M19 7l-2 6a3 3 0 0 0 6 0z"/></svg>);
    case "Media":
      return (<svg {...props}><rect x="3" y="5" width="18" height="14" rx="1"/><path d="M7 9h6"/><path d="M7 13h10"/><path d="M7 17h10"/><rect x="14" y="8" width="4" height="3"/></svg>);
    case "Healthcare":
      return (<svg {...props}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>);
    case "Photography":
      return (<svg {...props}><path d="M3 8h3l2-3h8l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="4"/></svg>);
    case "Accounting":
      return (<svg {...props}><rect x="5" y="3" width="14" height="18" rx="1"/><rect x="8" y="6" width="8" height="3" rx="0.5"/><circle cx="9" cy="13" r="0.6" fill={color} stroke="none"/><circle cx="12" cy="13" r="0.6" fill={color} stroke="none"/><circle cx="15" cy="13" r="0.6" fill={color} stroke="none"/><circle cx="9" cy="16" r="0.6" fill={color} stroke="none"/><circle cx="12" cy="16" r="0.6" fill={color} stroke="none"/><circle cx="15" cy="16" r="0.6" fill={color} stroke="none"/></svg>);
    case "Electrical":
      return (<svg {...props}><path d="M13 2L3 14h7l-1 8 11-13h-7z"/></svg>);
    case "Retail":
      return (<svg {...props}><path d="M5 8h14l-1 12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>);
    case "Barbershop":
      return (<svg {...props}><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.5 7.5L20 19"/><path d="M8.5 16.5L20 5"/><path d="M14 14l3 3"/></svg>);
    case "Design":
      return (<svg {...props}><path d="M12 2a10 10 0 1 0 10 10c0-2-1.5-3-3.5-3H16a2 2 0 0 1 0-4h1.5c2 0 3.5-1 3.5-3 0-1.5-2-3-9-3z"/><circle cx="7.5" cy="11" r="1.2" fill={color} stroke="none"/><circle cx="11" cy="7" r="1.2" fill={color} stroke="none"/><circle cx="16" cy="8" r="1.2" fill={color} stroke="none"/></svg>);
    case "Flooring":
      return (<svg {...props}><rect x="3" y="3" width="8" height="4"/><rect x="13" y="3" width="8" height="4"/><rect x="3" y="9" width="8" height="4"/><rect x="13" y="9" width="8" height="4"/><rect x="3" y="15" width="8" height="4"/><rect x="13" y="15" width="8" height="4"/></svg>);
    case "Transportation":
      return (<svg {...props}><path d="M2 17h2v-6a3 3 0 0 1 3-3h7v9h6"/><path d="M14 11h4l3 3v3h-3"/><circle cx="7.5" cy="17.5" r="2"/><circle cx="17.5" cy="17.5" r="2"/></svg>);
    case "Cleaning Services":
      return (<svg {...props}><path d="M10 2v6"/><path d="M7 8h6l-1 13H8z"/><path d="M13 5h7v3l-3 1"/></svg>);
    default:
      return (<svg {...props}><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>);
  }
}

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_SHOW);

  return (
    <section id="portfolio" style={{ padding: "128px 32px", maxWidth: "1280px", margin: "0 auto" }}>
      <div style={{ marginBottom: "64px" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#fa145a", textTransform: "uppercase", fontWeight: 600, marginBottom: "16px" }}>
          Selected Work
        </p>
        <h2 style={{ fontSize: "clamp(40px, 6vw, 64px)", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.03em", margin: 0 }}>
          <span style={{ display: "block", color: "#fff" }}>Projects we&apos;re</span>
          <span style={{ display: "block", background: "linear-gradient(135deg, #fa145a 0%, #ff3cac 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            proud of.
          </span>
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {visible.map((p) => (
          <ProjectCard key={p.name} {...p} />
        ))}
      </div>

      {!showAll && (
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <button
            onClick={() => setShowAll(true)}
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 500,
              padding: "14px 40px",
              borderRadius: "9999px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#fa145a"; e.currentTarget.style.borderColor = "#fa145a"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
          >
            View All {projects.length} Projects
          </button>
        </div>
      )}
    </section>
  );
}

function ProjectCard({ name, url, category }: { name: string; url: string; category: string }) {
  const [hovered, setHovered] = useState(false);
  const domain = url.replace("https://", "");
  const { tint, accent } = getStyle(category);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        position: "relative",
        borderRadius: "12px",
        overflow: "hidden",
        aspectRatio: "4/3",
        background: `radial-gradient(circle at 30% 20%, ${tint}26 0%, #0a0a0a 60%, #050505 100%)`,
        border: hovered ? `1px solid ${tint}80` : "1px solid rgba(255,255,255,0.07)",
        transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? `0 16px 40px ${tint}40` : "none",
        textDecoration: "none",
      }}
    >
      {/* Watermark icon, centered */}
      <div style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: hovered ? 0.6 : 0.35,
        transform: hovered ? "scale(1.08)" : "scale(1)",
        transition: "opacity 0.3s ease, transform 0.5s ease",
        color: accent,
      }}>
        <CategoryIcon category={category} color={accent} />
      </div>

      {/* Subtle corner accent */}
      <div style={{
        position: "absolute",
        top: "-40%",
        right: "-30%",
        width: "70%",
        height: "70%",
        background: `radial-gradient(circle, ${tint}30 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      {/* Category badge */}
      <div style={{
        position: "absolute", top: "14px", left: "14px",
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(8px)",
        border: `1px solid ${tint}40`,
        color: accent,
        fontSize: "10px",
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        padding: "5px 12px",
        borderRadius: "9999px",
      }}>
        {category}
      </div>

      {/* Hover overlay — Visit Site (uniform dark) */}
      <div style={{
        position: "absolute", inset: 0,
        background: "rgba(8,8,10,0.85)",
        backdropFilter: "blur(2px)",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.3s ease",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <span style={{
          color: "#fff", fontWeight: 700, fontSize: "15px",
          transform: hovered ? "translateY(0)" : "translateY(10px)",
          transition: "transform 0.3s ease",
          display: "flex", alignItems: "center", gap: "8px",
        }}>
          Visit Site
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </span>
      </div>

      {/* Bottom info */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px",
        opacity: hovered ? 0 : 1, transition: "opacity 0.25s ease",
      }}>
        <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "16px", margin: "0 0 3px" }}>{name}</h3>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", margin: 0 }}>{domain}</p>
      </div>
    </a>
  );
}

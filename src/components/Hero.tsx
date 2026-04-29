"use client";

import React from "react";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "96px",
        paddingBottom: "80px",
        paddingLeft: "32px",
        paddingRight: "32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow orbs */}
      <div
        className="animate-glow-pulse"
        style={{
          position: "absolute",
          top: "-160px",
          left: "-160px",
          width: "600px",
          height: "600px",
          background: "#fa145a",
          opacity: 0.2,
          borderRadius: "50%",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />
      <div
        className="animate-glow-pulse"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "400px",
          height: "400px",
          background: "#ff3cac",
          opacity: 0.15,
          borderRadius: "50%",
          filter: "blur(100px)",
          pointerEvents: "none",
          animationDelay: "2s",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "500px",
          height: "500px",
          background: "#00f5d4",
          opacity: 0.1,
          borderRadius: "50%",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", width: "100%", position: "relative", zIndex: 10 }}>
        {/* Top tag line */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
          <div style={{ width: "48px", height: "1px", background: "rgba(255,255,255,0.3)" }} />
          <span
            style={{
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.5)",
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            Web Design & Digital Marketing — Canada
          </span>
        </div>

        {/* Main headline */}
        <div style={{ marginBottom: "40px" }}>
          <h1
            style={{
              fontSize: "clamp(64px, 10vw, 120px)",
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            <span style={{ display: "block", color: "#fff" }}>WE BUILD</span>
            <span
              style={{
                display: "block",
                background: "linear-gradient(135deg, #fa145a 0%, #ff3cac 50%, #00f5d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              WEBSITES
            </span>
            <span style={{ display: "block", color: "rgba(255,255,255,0.18)" }}>THAT CONVERT.</span>
          </h1>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "32px",
          }}
        >
          {/* Description */}
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "18px",
              maxWidth: "360px",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Canada's trusted web design agency. We craft high-performance websites, e-commerce stores, and digital marketing campaigns that grow Canadian businesses — fast.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
            <a
              href="#contact"
              style={{
                background: "#fa145a",
                color: "#fff",
                fontWeight: 600,
                padding: "16px 32px",
                borderRadius: "9999px",
                fontSize: "16px",
                textDecoration: "none",
                transition: "all 0.3s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#d4104c";
                e.currentTarget.style.boxShadow = "0 0 40px rgba(92,111,255,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#fa145a";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Start Your Project
            </a>
            <a
              href="#portfolio"
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "16px",
                textDecoration: "none",
                transition: "color 0.2s",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
            >
              View Our Work ↓
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontSize: "10px",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.55)",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          Scroll
        </span>
        <span
          className="animate-bounce-arrow"
          style={{ color: "rgba(255,255,255,0.55)", fontSize: "16px", display: "block" }}
        >
          ↓
        </span>
      </div>
    </section>
  );
}

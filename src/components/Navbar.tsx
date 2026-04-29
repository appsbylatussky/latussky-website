"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = ["Services", "Portfolio", "About", "Contact"];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: "72px",
          transition: "all 0.4s ease",
          background: scrolled ? "rgba(0,0,0,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          {/* Logo */}
          <a href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <img src="/logo.png" alt="Latussky Webmedia" style={{ height: "36px", width: "auto", objectFit: "contain" }} />
          </a>

          {/* Desktop Nav Links */}
          <div style={{ display: "flex", alignItems: "center", gap: "40px" }} className="hidden-mobile">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  fontWeight: 400,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a
              href="#contact"
              className="hidden-mobile"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff",
                fontSize: "14px",
                padding: "10px 20px",
                borderRadius: "9999px",
                textDecoration: "none",
                fontWeight: 500,
                transition: "all 0.3s ease",
                background: "transparent",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.color = "#000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#fff";
              }}
            >
              Get a Quote
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="show-mobile"
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                padding: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          background: "#000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transform: menuOpen ? "translateY(0)" : "translateY(-20px)",
        }}
      >
        {navLinks.map((link, i) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: "48px",
              fontWeight: 900,
              color: "rgba(255,255,255,0.8)",
              textDecoration: "none",
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
              transition: "color 0.2s",
              animationDelay: `${i * 0.05}s`,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fa145a")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
          >
            {link}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          style={{
            marginTop: "32px",
            background: "#fa145a",
            color: "#fff",
            fontSize: "16px",
            fontWeight: 600,
            padding: "14px 36px",
            borderRadius: "9999px",
            textDecoration: "none",
          }}
        >
          Get a Quote
        </a>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}

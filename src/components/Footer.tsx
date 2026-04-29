"use client";

export default function Footer() {
  const companyLinks = [
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#" },
  ];

  const serviceLinks = [
    { label: "Web Design", href: "#services" },
    { label: "E-commerce", href: "#services" },
    { label: "App Dev", href: "#services" },
    { label: "SEO", href: "#services" },
  ];

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        paddingTop: "80px",
        paddingBottom: "48px",
        paddingLeft: "32px",
        paddingRight: "32px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Top Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "80px",
            flexWrap: "wrap",
            gap: "48px",
          }}
        >
          {/* Left — Logo + info */}
          <div>
            <div style={{ marginBottom: "8px" }}>
              <img src="/logo.png" alt="Latussky Webmedia" style={{ height: "32px", width: "auto", objectFit: "contain" }} />
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "14px",
                marginBottom: "16px",
                maxWidth: "260px",
                lineHeight: 1.6,
              }}
            >
              Building digital success for Canadian businesses since 2012.
            </p>
            <a
              href="tel:6043652049"
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
            >
              (604) 365-2049
            </a>
          </div>

          {/* Right — Link columns */}
          <div style={{ display: "flex", gap: "64px", flexWrap: "wrap" }}>
            {/* Company */}
            <div>
              <p
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  color: "rgba(255,255,255,0.55)",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  marginBottom: "16px",
                }}
              >
                Company
              </p>
              {companyLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "14px",
                    textDecoration: "none",
                    marginBottom: "8px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Services */}
            <div>
              <p
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  color: "rgba(255,255,255,0.55)",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  marginBottom: "16px",
                }}
              >
                Services
              </p>
              {serviceLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "14px",
                    textDecoration: "none",
                    marginBottom: "8px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: "32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", margin: 0 }}>
            &copy; 2024 Latussky Webmedia Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

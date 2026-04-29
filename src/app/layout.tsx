import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Latussky Webmedia | Web Design & Digital Marketing Agency Canada BC",
  description: "Canada BC's #1 web design & digital marketing agency. We build high-converting websites, e-commerce stores & SEO strategies for Canadian businesses since 2012. 300+ projects delivered. Free consultation.",
  keywords: "web design Canada BC, web design Canada, digital marketing Canada, e-commerce development BC, SEO Canada, website design Canada, web agency Canada, small business website design",
  openGraph: {
    title: "Latussky Webmedia | Web Design & Digital Marketing Agency Canada BC",
    description: "Canada BC's #1 web design & digital marketing agency. We build high-converting websites, e-commerce stores & SEO strategies for Canadian businesses since 2012. 300+ projects delivered. Free consultation.",
    url: "https://latussky.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: "#000", color: "#fff", minHeight: "100vh" }}>
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}

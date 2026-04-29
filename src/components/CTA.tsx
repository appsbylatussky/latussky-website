"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Main gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0d0d1a 0%, #1a1040 30%, #0d102a 60%, #0a0a0f 100%)",
        }}
      />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #3452ff, transparent)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Top and bottom decorative lines */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #3452ff, #8b5cf6, transparent)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Icon badge */}
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 mx-auto"
            style={{
              background: "linear-gradient(135deg, rgba(52,82,255,0.2), rgba(139,92,246,0.2))",
              border: "1px solid rgba(52,82,255,0.3)",
            }}
          >
            <Sparkles size={28} style={{ color: "#a5b4fc" }} />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-5 leading-tight tracking-tight">
            Ready to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3452ff, #8b5cf6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Transform
            </span>
            <br />
            Your Online Presence?
          </h2>

          <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Get your free consultation today. Our experts will analyze your current online presence
            and outline a clear strategy to grow your business.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <motion.button
              onClick={() => handleScroll("#contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 px-10 py-4 rounded-full font-bold text-white text-base transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #3452ff, #8b5cf6)",
                boxShadow: "0 8px 40px rgba(52, 82, 255, 0.5)",
              }}
            >
              Get Free Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.a
              href="tel:6043652049"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 border"
              style={{
                background: "rgba(255,255,255,0.05)",
                borderColor: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
              }}
            >
              Call (604) 365-2049
            </motion.a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            {["Free Consultation", "No Commitment Required", "Response Within 24 Hours"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "#3452ff" }}
                  />
                  {item}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

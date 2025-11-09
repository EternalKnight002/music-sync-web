// src/components/CTASection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function CTASection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="download" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-cyan-500/10 dark:from-indigo-500/5 dark:via-purple-500/5 dark:to-cyan-500/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-[3rem] p-12 md:p-16 lg:p-20 shadow-2xl border border-white/10 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6"
              >
                Ready to Sync
                <br />
                Your Audio Experience?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              >
                Download Music Sync now and experience perfectly synchronized audio playback across all your devices
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <a
                  href="https://github.com/EternalKnight002/music-sync/releases/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-indigo-600 font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 min-w-[240px]"
                >
                  Download for Windows
                </a>

                <a
                  href="https://github.com/EternalKnight002/music-sync"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border-2 border-white text-white font-semibold text-lg hover:bg-white/10 hover:scale-105 transition-all duration-300 min-w-[200px]"
                >
                  View Source Code
                </a>
              </motion.div>

              {/* Feature highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-white"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="font-bold text-lg mb-2">Quick Setup</h3>
                  <p className="text-white/80 text-sm">Get started in under 5 minutes with our easy installation guide</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl mb-3">🔒</div>
                  <h3 className="font-bold text-lg mb-2">Open Source</h3>
                  <p className="text-white/80 text-sm">100% open source and free to use with MIT license</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl mb-3">💻</div>
                  <h3 className="font-bold text-lg mb-2">Cross-Platform</h3>
                  <p className="text-white/80 text-sm">Works on Windows, macOS, and Linux with Electron</p>
                </div>
              </motion.div>

              {/* App preview mockup - Wide landscape showing connected devices */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-12 w-full max-w-4xl mx-auto"
              >
                <div className="relative w-full">
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl"></div>
                  <div className="relative bg-slate-900 rounded-2xl p-3 md:p-4 shadow-2xl border-2 border-white/20">
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden">
                      <img
                        src="/screenshots/music-sync-connected.jpg"
                        alt="Music Sync with Multiple Connected Devices"
                        className="w-full h-auto max-h-[350px] object-contain"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
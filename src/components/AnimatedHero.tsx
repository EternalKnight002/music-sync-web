// src/components/AnimatedHero.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const floatingVariants: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1]
    }
  }
};

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 }
};

export default function AnimatedHero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 md:pt-16 md:pb-32">
      {/* Background gradient blob */}
      <div className="hero-blob" aria-hidden="true" />

      <div className="container relative z-10">
        {/* Text content */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-slate-900 dark:text-white mb-6">
              Play Music Together,
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Perfectly Synchronized
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Experience real-time synchronized audio playback across multiple devices with millisecond precision. Perfect for parties, presentations, or distributed listening.
          </motion.p>

          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Link
              href="#download"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              Download for Windows
            </Link>

            <a
              href="https://github.com/EternalKnight002/music-sync"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 font-semibold text-lg bg-white/60 dark:bg-white/5 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              View on GitHub
            </a>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>~50ms Sync</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span>Cross-Platform</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <span>LAN & Internet</span>
            </div>
          </motion.div>
        </div>

        {/* App mockup with floating cards */}
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-8 relative">
            {/* Center mockup - Wide landscape desktop app */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="relative z-10 w-full"
            >
              <div className="relative w-full max-w-5xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-slate-900 rounded-3xl p-3 md:p-4 shadow-2xl border-4 border-slate-800">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden">
                    <img
                      src="/screenshots/music-sync-main.jpg"
                      alt="Music Sync Application Interface"
                      className="w-full h-auto max-h-[400px] object-contain"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating feature cards */}
          <motion.div
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            className="absolute left-0 top-8 md:left-8 lg:left-16 hidden md:block"
            style={{ animationDelay: "0s" }}
          >
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl p-5 shadow-xl border border-white/20 dark:border-slate-700/50 max-w-[220px]">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-lg">
                  🎯
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">Perfect Sync</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-snug">
                    Within 50ms accuracy across all devices.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            className="absolute right-0 top-24 md:right-10 lg:right-20 hidden md:block"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl p-5 shadow-xl border border-white/20 dark:border-slate-700/50 max-w-[220px]">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-lg">
                  🌐
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">Network Ready</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-snug">
                    Works on LAN or over the internet.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            className="absolute left-6 bottom-20 md:left-20 lg:left-32 hidden lg:block"
            style={{ animationDelay: "1.6s" }}
          >
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl p-5 shadow-xl border border-white/20 dark:border-slate-700/50 max-w-[220px]">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white text-lg">
                  🎛️
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">Host Control</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-snug">
                    One device controls playback for all.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            className="absolute right-4 bottom-8 md:right-16 lg:right-40 hidden lg:block"
            style={{ animationDelay: "2.2s" }}
          >
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl p-5 shadow-xl border border-white/20 dark:border-slate-700/50 max-w-[220px]">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white text-lg">
                  ⚡
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">Adaptive Playback</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-snug">
                    Auto-adjusts to maintain sync.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
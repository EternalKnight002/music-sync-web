// src/components/AppFeaturesSection.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const appFeatures = [
  {
    icon: "⏱️",
    title: "NTP-Style Clock Sync",
    description: "Advanced time synchronization algorithm samples server time multiple times, calculates median offset, and maintains accurate clock sync with sub-100ms precision."
  },
  {
    icon: "🎵",
    title: "Adaptive Playback Control",
    description: "Automatically adjusts playback rate (±2%) to correct drift. Monitors position continuously and applies micro-adjustments to maintain perfect synchronization."
  },
  {
    icon: "🔌",
    title: "WebSocket Signaling Server",
    description: "Real-time communication between host and clients via WebSocket. Supports room-based organization, role management, and timestamped command relay."
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function AppFeaturesSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="py-20 md:py-32">
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base font-semibold text-indigo-600 dark:text-indigo-400 mb-4 tracking-wide uppercase"
          >
            CORE TECHNOLOGY
          </motion.p>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6"
          >
            How It Works
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Behind the Scenes
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Advanced algorithms and protocols work together to deliver seamless synchronized playback
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto items-center">
          {/* Left side - Features list */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8"
          >
            {appFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-slate-900 dark:bg-slate-800 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 border border-slate-800 dark:border-slate-700 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-3xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                        {feature.title}
                      </h3>
                      
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right side - Architecture diagram */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Architecture visualization */}
              <div className="relative mx-auto max-w-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-slate-900 rounded-3xl p-8 shadow-2xl border-4 border-slate-800">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 space-y-6">
                    {/* Server */}
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-4 text-center">
                      <div className="text-3xl mb-2">🖥️</div>
                      <p className="text-white font-bold text-sm">Signaling Server</p>
                      <p className="text-white/70 text-xs mt-1">WebSocket • Time Authority</p>
                    </div>

                    {/* Connection lines */}
                    <div className="flex justify-center gap-4">
                      <div className="w-px h-12 bg-gradient-to-b from-purple-500 to-transparent"></div>
                      <div className="w-px h-12 bg-gradient-to-b from-purple-500 to-transparent"></div>
                      <div className="w-px h-12 bg-gradient-to-b from-purple-500 to-transparent"></div>
                    </div>

                    {/* Clients */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-3 text-center">
                        <div className="text-2xl mb-1">🎧</div>
                        <p className="text-white font-semibold text-xs">Host</p>
                        <p className="text-white/70 text-[10px] mt-1">Serves File</p>
                      </div>
                      <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl p-3 text-center">
                        <div className="text-2xl mb-1">🎧</div>
                        <p className="text-white font-semibold text-xs">Client 1</p>
                        <p className="text-white/70 text-[10px] mt-1">Synced</p>
                      </div>
                      <div className="bg-gradient-to-br from-orange-600 to-amber-600 rounded-xl p-3 text-center">
                        <div className="text-2xl mb-1">🎧</div>
                        <p className="text-white font-semibold text-xs">Client 2</p>
                        <p className="text-white/70 text-[10px] mt-1">Synced</p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <p className="text-white/60 text-[10px] uppercase tracking-wider">Sync Accuracy</p>
                        <p className="text-white font-bold text-lg">~50ms</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <p className="text-white/60 text-[10px] uppercase tracking-wider">Max Drift</p>
                        <p className="text-white font-bold text-lg">±2%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
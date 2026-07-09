"use client";

import { motion } from "framer-motion";

/* ═══════════════════════════════════════════════════
   AGENTIC DEVELOPMENT
   Multi-layer neural network with animated data flow
   ═══════════════════════════════════════════════════ */
export const AIDiorama = () => {
  const layers = [
    { nodes: 3, x: 80 },
    { nodes: 5, x: 180 },
    { nodes: 4, x: 280 },
    { nodes: 2, x: 380 },
  ];

  const getNodeY = (totalNodes: number, index: number) => {
    const spacing = 280 / (totalNodes + 1);
    return 60 + spacing * (index + 1);
  };

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#08090a]">
      {/* Brighter ambient glow */}
      <div className="absolute left-1/3 top-1/3 h-64 w-64 rounded-full bg-blue-600/20 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 h-56 w-56 rounded-full bg-violet-500/15 blur-[80px]" />

      <svg viewBox="0 0 460 400" className="relative h-full w-full" fill="none">
        <defs>
          <linearGradient id="ai-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#58a6ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#58a6ff" stopOpacity="1" />
            <stop offset="100%" stopColor="#a371f7" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Base static connection lines (faint) */}
        {layers.slice(0, -1).map((layer, li) => {
          const nextLayer = layers[li + 1];
          return Array.from({ length: layer.nodes }).flatMap((_, ni) =>
            Array.from({ length: nextLayer.nodes }).map((_, nj) => (
              <line
                key={`base-${li}-${ni}-${nj}`}
                x1={layer.x}
                y1={getNodeY(layer.nodes, ni)}
                x2={nextLayer.x}
                y2={getNodeY(nextLayer.nodes, nj)}
                stroke="white"
                strokeOpacity={0.15}
                strokeWidth={1}
              />
            ))
          );
        })}

        {/* Animated glowing connection lines */}
        {layers.slice(0, -1).map((layer, li) => {
          const nextLayer = layers[li + 1];
          return Array.from({ length: layer.nodes }).flatMap((_, ni) =>
            Array.from({ length: nextLayer.nodes }).map((_, nj) => (
              <motion.line
                key={`anim-${li}-${ni}-${nj}`}
                x1={layer.x}
                y1={getNodeY(layer.nodes, ni)}
                x2={nextLayer.x}
                y2={getNodeY(nextLayer.nodes, nj)}
                stroke="url(#ai-grad)"
                strokeOpacity={0.9}
                strokeWidth={2}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                transition={{
                  duration: 2.5,
                  delay: li * 0.5 + ni * 0.15 + nj * 0.1,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                }}
              />
            ))
          );
        })}

        {/* Glowing Nodes */}
        {layers.map((layer, li) =>
          Array.from({ length: layer.nodes }).map((_, ni) => (
            <motion.circle
              key={`node-${li}-${ni}`}
              cx={layer.x}
              cy={getNodeY(layer.nodes, ni)}
              r={6}
              fill="#0d1117"
              stroke="#58a6ff"
              strokeOpacity={0.8}
              strokeWidth={2}
              animate={{ 
                strokeOpacity: [0.4, 1, 0.4],
                fill: ["#0d1117", "#58a6ff33", "#0d1117"],
                r: [6, 7, 6] 
              }}
              transition={{ duration: 2, delay: li * 0.3 + ni * 0.2, repeat: Infinity }}
            />
          ))
        )}

        {/* Layer labels */}
        {["Perceive", "Reason", "Plan", "Act"].map((label, i) => (
          <text
            key={label + i}
            x={layers[i].x}
            y={370}
            textAnchor="middle"
            fill="white"
            fillOpacity={0.5}
            fontSize={12}
            fontFamily="monospace"
            letterSpacing={0.5}
          >
            {label}
          </text>
        ))}
      </svg>
    </div>
  );
};

/* ═══════════════════════════════════════════════════
   WEB ENGINEERING
   Code editor with line numbers + live preview pane
   ═══════════════════════════════════════════════════ */
const codeLines = [
  { indent: 0, tokens: [{ t: "export", c: "#c678dd" }, { t: " ", c: "" }, { t: "default", c: "#c678dd" }, { t: " ", c: "" }, { t: "function", c: "#c678dd" }, { t: " ", c: "" }, { t: "App", c: "#61afef" }, { t: "() {", c: "#abb2bf" }] },
  { indent: 1, tokens: [{ t: "return", c: "#c678dd" }, { t: " (", c: "#abb2bf" }] },
  { indent: 2, tokens: [{ t: "<", c: "#abb2bf" }, { t: "main", c: "#e06c75" }, { t: " ", c: "" }, { t: "className", c: "#d19a66" }, { t: "=", c: "#abb2bf" }, { t: '"app"', c: "#98c379" }, { t: ">", c: "#abb2bf" }] },
  { indent: 3, tokens: [{ t: "<", c: "#abb2bf" }, { t: "Hero", c: "#e5c07b" }, { t: " />", c: "#abb2bf" }] },
  { indent: 3, tokens: [{ t: "<", c: "#abb2bf" }, { t: "Features", c: "#e5c07b" }, { t: " ", c: "" }, { t: "count", c: "#d19a66" }, { t: "={", c: "#abb2bf" }, { t: "3", c: "#d19a66" }, { t: "}", c: "#abb2bf" }, { t: " />", c: "#abb2bf" }] },
  { indent: 2, tokens: [{ t: "</", c: "#abb2bf" }, { t: "main", c: "#e06c75" }, { t: ">", c: "#abb2bf" }] },
  { indent: 1, tokens: [{ t: ");", c: "#abb2bf" }] },
  { indent: 0, tokens: [{ t: "}", c: "#abb2bf" }] },
];

export const WebDevDiorama = () => (
  <div className="flex h-full w-full flex-col overflow-hidden bg-[#0d1117]">
    {/* Editor tab bar */}
    <div className="flex items-center border-b border-white/[0.06] bg-[#161b22]">
      <div className="flex items-center gap-2 border-r border-white/[0.06] bg-[#0d1117] px-4 py-2">
        <div className="h-2 w-2 rounded-full bg-blue-400/60" />
        <span className="font-mono text-[11px] text-white/50">App.tsx</span>
      </div>
      <div className="flex items-center gap-2 px-4 py-2">
        <div className="h-2 w-2 rounded-full bg-green-400/40" />
        <span className="font-mono text-[11px] text-white/25">index.css</span>
      </div>
    </div>

    {/* Editor body */}
    <div className="flex flex-1 overflow-hidden">
      {/* Code with line numbers */}
      <div className="flex-1 p-4">
        {codeLines.map((line, i) => (
          <div key={i} className="flex items-baseline gap-4">
            <span className="w-5 select-none text-right font-mono text-[11px] text-white/15">
              {i + 1}
            </span>
            <span className="font-mono text-[12px] leading-[1.8]" style={{ paddingLeft: `${line.indent * 16}px` }}>
              {line.tokens.map((tok, j) => (
                <span key={j} style={{ color: tok.c || undefined }}>{tok.t}</span>
              ))}
            </span>
          </div>
        ))}
      </div>

      {/* Preview pane */}
      <div className="hidden w-[45%] border-l border-white/[0.06] bg-[#0a0c10] p-4 sm:block">
        <div className="mb-3 flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
          <span className="font-mono text-[10px] text-white/25">localhost:3000</span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="h-8 w-3/4 rounded bg-white/[0.04]" />
          <div className="h-3 w-full rounded bg-white/[0.03]" />
          <div className="h-3 w-2/3 rounded bg-white/[0.03]" />
          <div className="mt-2 flex gap-2">
            <div className="h-14 flex-1 rounded-lg bg-white/[0.03]" />
            <div className="h-14 flex-1 rounded-lg bg-white/[0.03]" />
            <div className="h-14 flex-1 rounded-lg bg-white/[0.03]" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════
   DIGITAL DEFENCE
   Terminal with title bar, colored scan output
   ═══════════════════════════════════════════════════ */
const termLines = [
  { text: "$ sudo nmap -sV --script vuln 10.0.0.1", color: "#c9d1d9" },
  { text: "", color: "" },
  { text: "Starting Nmap 7.94 — https://nmap.org", color: "#8b949e" },
  { text: "Scanning 10.0.0.1 [1000 ports]", color: "#8b949e" },
  { text: "", color: "" },
  { text: "PORT     STATE  SERVICE   VERSION", color: "#58a6ff" },
  { text: "22/tcp   open   ssh       OpenSSH 9.1", color: "#3fb950" },
  { text: "80/tcp   open   http      nginx 1.24.0", color: "#3fb950" },
  { text: "443/tcp  open   https     nginx 1.24.0", color: "#3fb950" },
  { text: "3306/tcp closed mysql", color: "#f85149" },
  { text: "8080/tcp open   http-alt  Node.js Express", color: "#3fb950" },
  { text: "", color: "" },
  { text: "| vuln: CVE-2023-44487 (HTTP/2 Rapid Reset)", color: "#d29922" },
  { text: "|   Risk: HIGH — Update nginx to 1.25.3+", color: "#d29922" },
  { text: "", color: "" },
  { text: "Nmap done: 1 host up, scanned in 12.4s", color: "#8b949e" },
];

export const CyberDiorama = () => (
  <div className="flex h-full w-full flex-col overflow-hidden bg-[#0d1117]">
    {/* Terminal title bar */}
    <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#161b22] px-4 py-2.5">
      <div className="h-2.5 w-2.5 rounded-full bg-[#f85149]/80" />
      <div className="h-2.5 w-2.5 rounded-full bg-[#d29922]/80" />
      <div className="h-2.5 w-2.5 rounded-full bg-[#3fb950]/80" />
      <span className="ml-3 font-mono text-[11px] text-white/30">terminal — zsh</span>
    </div>

    {/* Scanlines background */}
    <div className="relative flex-1 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 2px)",
        }}
      />

      <div className="relative z-10 flex flex-col gap-[3px] p-4 font-mono text-[11px] leading-[1.6] sm:text-xs">
        {termLines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: i * 0.15 }}
            style={{ color: line.color || "transparent" }}
          >
            {line.text || "\u00A0"}
          </motion.p>
        ))}
        <motion.span
          className="inline-block h-3.5 w-[7px] bg-white/70"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════
   OPEN SOURCE / DEVELOPER EXPERIENCE
   GitHub-style contribution + PR activity view
   ═══════════════════════════════════════════════════ */
const prItems = [
  { title: "feat: add streaming support to CLI", status: "merged", label: "enhancement", time: "2h ago" },
  { title: "fix: resolve race condition in worker pool", status: "merged", label: "bug", time: "5h ago" },
  { title: "docs: update README with new API examples", status: "open", label: "documentation", time: "8h ago" },
  { title: "refactor: migrate config parser to TOML", status: "open", label: "enhancement", time: "1d ago" },
  { title: "ci: add automated release workflow", status: "merged", label: "ci/cd", time: "2d ago" },
];

const statusColors: Record<string, { bg: string; text: string; dot: string }> = {
  merged: { bg: "bg-purple-500/10", text: "text-purple-400", dot: "bg-purple-400" },
  open: { bg: "bg-green-500/10", text: "text-green-400", dot: "bg-green-400" },
};

const labelColors: Record<string, string> = {
  enhancement: "border-blue-500/30 text-blue-400/70",
  bug: "border-red-500/30 text-red-400/70",
  documentation: "border-yellow-500/30 text-yellow-400/70",
  "ci/cd": "border-cyan-500/30 text-cyan-400/70",
};

export const OpenSourceDiorama = () => (
  <div className="flex h-full w-full flex-col overflow-hidden bg-[#0d1117]">
    {/* Repo header */}
    <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#161b22] px-4 py-2.5">
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5 text-white/40">
          <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
        </svg>
        <span className="font-mono text-[11px] text-white/50">github-community/devtools</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="font-mono text-[10px] text-white/25">⭐ 342</span>
        <span className="font-mono text-[10px] text-white/25">🍴 89</span>
      </div>
    </div>

    {/* Pull Requests list */}
    <div className="flex-1 overflow-hidden">
      {prItems.map((pr, i) => {
        const s = statusColors[pr.status];
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.12 }}
            className="flex items-center gap-3 border-b border-white/[0.04] px-4 py-3 transition-colors hover:bg-white/[0.02]"
          >
            <div className={`h-2 w-2 shrink-0 rounded-full ${s.dot}`} />
            <div className="flex-1 min-w-0">
              <p className="truncate font-mono text-[11px] text-white/60">{pr.title}</p>
            </div>
            <span className={`shrink-0 rounded-full border px-2 py-0.5 font-mono text-[9px] ${labelColors[pr.label] || "border-white/10 text-white/30"}`}>
              {pr.label}
            </span>
            <span className={`shrink-0 rounded-full px-1.5 py-0.5 font-mono text-[9px] ${s.bg} ${s.text}`}>
              {pr.status}
            </span>
            <span className="shrink-0 font-mono text-[9px] text-white/20">{pr.time}</span>
          </motion.div>
        );
      })}
    </div>

    {/* Footer stats */}
    <div className="flex items-center justify-between border-t border-white/[0.06] bg-[#161b22] px-4 py-2">
      <span className="font-mono text-[10px] text-white/30">5 pull requests</span>
      <div className="flex items-center gap-3">
        <span className="font-mono text-[10px] text-green-400/60">+1,247</span>
        <span className="font-mono text-[10px] text-red-400/60">−389</span>
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════
   CREATIVE STUDIO
   Video editing timeline & camera viewfinder
   ═══════════════════════════════════════════════════ */
export const CreativeStudioDiorama = () => (
  <div className="flex h-full w-full flex-col overflow-hidden bg-[#0a0a0a]">
    {/* Top: Viewfinder / Video Player */}
    <div className="relative flex h-[55%] w-full flex-col bg-black">
      {/* Rule of Thirds Grid */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-20">
        <div className="border-b border-r border-white/50" />
        <div className="border-b border-r border-white/50" />
        <div className="border-b border-white/50" />
        <div className="border-b border-r border-white/50" />
        <div className="border-b border-r border-white/50" />
        <div className="border-b border-white/50" />
        <div className="border-r border-white/50" />
        <div className="border-r border-white/50" />
        <div />
      </div>

      {/* Recording Indicator */}
      <div className="absolute left-4 top-4 flex items-center gap-2">
        <motion.div
          className="h-2.5 w-2.5 rounded-full bg-red-500"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <span className="font-mono text-[10px] font-medium tracking-wider text-red-500">REC</span>
      </div>

      {/* Timecode */}
      <div className="absolute right-4 top-4 font-mono text-[11px] tracking-wider text-white">
        00:01:23:14
      </div>

      {/* Focus Box */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 border border-white/40"
        animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="absolute -left-1 -top-1 h-2 w-2 border-l-2 border-t-2 border-green-500" />
        <div className="absolute -right-1 -top-1 h-2 w-2 border-r-2 border-t-2 border-green-500" />
        <div className="absolute -bottom-1 -left-1 h-2 w-2 border-b-2 border-l-2 border-green-500" />
        <div className="absolute -bottom-1 -right-1 h-2 w-2 border-b-2 border-r-2 border-green-500" />
      </motion.div>

      {/* Camera Settings Footer */}
      <div className="absolute bottom-0 left-0 flex w-full justify-between bg-gradient-to-t from-black/80 to-transparent p-4 font-mono text-[9px] text-white/70">
        <div className="flex gap-4">
          <span>ISO 400</span>
          <span>f/2.8</span>
          <span>1/50s</span>
        </div>
        <div className="flex gap-4 text-white/50">
          <span>4K</span>
          <span>60FPS</span>
          <span>S-LOG3</span>
        </div>
      </div>
    </div>

    {/* Bottom: Editing Timeline */}
    <div className="flex h-[45%] w-full flex-col border-t border-white/10 bg-[#161616]">
      {/* Timeline Header */}
      <div className="flex h-6 items-center border-b border-white/5 px-2 text-[9px] text-white/30">
        <div className="flex-1 overflow-hidden whitespace-nowrap">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="inline-block w-8 border-l border-white/10 pl-1">
              00:0{i}
            </span>
          ))}
        </div>
      </div>

      {/* Tracks Container */}
      <div className="relative flex-1 p-2">
        {/* Playhead */}
        <motion.div
          className="absolute bottom-0 top-0 z-10 w-px bg-red-500"
          initial={{ left: "10%" }}
          animate={{ left: "90%" }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute -left-[3px] top-0 h-1.5 w-1.5 rotate-45 bg-red-500" />
        </motion.div>

        <div className="flex h-full flex-col gap-1.5">
          {/* V2 Track (B-Roll) */}
          <div className="relative flex h-1/3 w-full items-center rounded bg-black/40">
            <div className="absolute left-[15%] w-[25%] h-full rounded-sm bg-blue-500/80 border border-blue-400/50" />
            <div className="absolute left-[45%] w-[15%] h-full rounded-sm bg-blue-500/80 border border-blue-400/50" />
          </div>

          {/* V1 Track (Main Cam) */}
          <div className="relative flex h-1/3 w-full items-center rounded bg-black/40">
            <div className="absolute left-[5%] w-[80%] h-full rounded-sm bg-indigo-500/80 border border-indigo-400/50 flex items-center overflow-hidden">
              {/* Fake film strip texture */}
              <div className="w-full h-px bg-black/20" />
            </div>
          </div>

          {/* A1 Track (Audio) */}
          <div className="relative flex h-1/3 w-full items-center rounded bg-black/40">
            <div className="absolute left-[5%] w-[80%] h-full rounded-sm bg-emerald-500/60 border border-emerald-400/30 flex items-center justify-between px-1">
              {/* Fake waveform */}
              {[20, 45, 80, 60, 30, 90, 100, 75, 40, 25, 50, 85, 70, 35, 20, 60, 95, 80, 55, 30, 100, 90, 65, 40, 20, 75, 85, 50, 30, 20].map((h, i) => (
                <div key={i} className="w-[1px] bg-black/30" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

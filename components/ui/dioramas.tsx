"use client";

import { motion } from "framer-motion";

/* ═══════════════════════════════════════════════════
   AI & MACHINE LEARNING
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
        {["Input Layer", "Hidden Layer 1", "Hidden Layer 2", "Output"].map((label, i) => (
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
   WEB DEVELOPMENT
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
   CYBERSECURITY
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
   DATA SCIENCE
   Dashboard with SVG line chart + metric cards
   ═══════════════════════════════════════════════════ */
const chartPath = "M 20 140 Q 60 120, 100 100 T 180 80 T 260 50 T 340 70 T 420 30";
const metrics = [
  { label: "Accuracy", value: "94.7%", delta: "+2.3%" },
  { label: "F1 Score", value: "0.931", delta: "+0.04" },
  { label: "Samples", value: "12.4K", delta: "" },
];

export const DataScienceDiorama = () => (
  <div className="flex h-full w-full flex-col overflow-hidden bg-[#0d1117]">
    {/* Dashboard header */}
    <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#161b22] px-4 py-2.5">
      <span className="font-mono text-[11px] text-white/40">model_evaluation.ipynb</span>
      <div className="flex items-center gap-1.5">
        <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
        <span className="font-mono text-[10px] text-white/25">Kernel ready</span>
      </div>
    </div>

    <div className="flex flex-1 flex-col gap-4 p-5">
      {/* Metric cards */}
      <div className="flex gap-3">
        {metrics.map((m) => (
          <div key={m.label} className="flex-1 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
            <p className="font-mono text-[10px] text-white/30">{m.label}</p>
            <p className="mt-1 font-mono text-lg font-medium text-white/80">{m.value}</p>
            {m.delta && (
              <p className="mt-0.5 font-mono text-[10px] text-green-400/70">{m.delta}</p>
            )}
          </div>
        ))}
      </div>

      {/* Line chart */}
      <div className="flex-1 rounded-lg border border-white/[0.06] bg-white/[0.015] p-4">
        <p className="mb-3 font-mono text-[10px] text-white/25">Loss over epochs</p>
        <svg viewBox="0 0 440 160" className="h-full w-full" fill="none">
          {/* Grid lines */}
          {[40, 80, 120].map((y) => (
            <line key={y} x1="20" y1={y} x2="420" y2={y} stroke="white" strokeOpacity={0.04} />
          ))}
          {/* Chart line */}
          <motion.path
            d={chartPath}
            stroke="#58a6ff"
            strokeWidth={2}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          />
          {/* Glow */}
          <motion.path
            d={chartPath}
            stroke="#58a6ff"
            strokeWidth={6}
            strokeLinecap="round"
            strokeOpacity={0.15}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          />
        </svg>
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════
   COMPETITIVE PROGRAMMING
   Problem view + code editor with verdict
   ═══════════════════════════════════════════════════ */
export const CPDiorama = () => (
  <div className="flex h-full w-full flex-col overflow-hidden bg-[#0d1117]">
    {/* Top bar */}
    <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#161b22] px-4 py-2.5">
      <div className="flex items-center gap-3">
        <span className="font-mono text-[11px] text-white/40">Problem 1847B</span>
        <span className="rounded bg-yellow-500/15 px-1.5 py-0.5 font-mono text-[9px] text-yellow-400/80">
          Medium
        </span>
      </div>
      <motion.div
        className="rounded bg-green-500/15 px-2 py-0.5 font-mono text-[10px] font-medium text-green-400"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.4 }}
      >
        ✓ Accepted — 46ms
      </motion.div>
    </div>

    {/* Code */}
    <div className="flex-1 p-4 font-mono text-[11px] leading-[1.7] sm:text-xs">
      {[
        { n: 1, code: "#include <bits/stdc++.h>", cls: "text-[#c678dd]" },
        { n: 2, code: "using namespace std;", cls: "text-[#c678dd]" },
        { n: 3, code: "", cls: "" },
        { n: 4, code: "void solve() {", cls: "text-[#abb2bf]" },
        { n: 5, code: "    int n, k;", cls: "text-[#abb2bf]" },
        { n: 6, code: "    cin >> n >> k;", cls: "text-[#abb2bf]" },
        { n: 7, code: "    vector<int> a(n);", cls: "text-[#61afef]" },
        { n: 8, code: "    for (auto& x : a) cin >> x;", cls: "text-[#abb2bf]" },
        { n: 9, code: "    sort(a.begin(), a.end());", cls: "text-[#e5c07b]" },
        { n: 10, code: '    cout << a[n-k] - a[0] << "\\n";', cls: "text-[#98c379]" },
        { n: 11, code: "}", cls: "text-[#abb2bf]" },
      ].map((line) => (
        <div key={line.n} className="flex items-baseline gap-4">
          <span className="w-5 select-none text-right text-white/15">{line.n}</span>
          <span className={line.cls}>{line.code || "\u00A0"}</span>
        </div>
      ))}
    </div>

    {/* Test results footer */}
    <div className="flex items-center gap-4 border-t border-white/[0.06] bg-[#161b22] px-4 py-2">
      <span className="font-mono text-[10px] text-white/30">Tests: 47/47 passed</span>
      <span className="font-mono text-[10px] text-white/20">Memory: 3.8 MB</span>
      <span className="font-mono text-[10px] text-white/20">Time: 46 ms</span>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════
   UI/UX DESIGN
   Design system specimen: type scale, colors, component
   ═══════════════════════════════════════════════════ */
const typeScale = [
  { size: "text-3xl", weight: "font-semibold", label: "Display", sample: "Aa" },
  { size: "text-xl", weight: "font-medium", label: "Heading", sample: "Aa" },
  { size: "text-base", weight: "font-normal", label: "Body", sample: "Aa" },
  { size: "text-xs", weight: "font-normal", label: "Caption", sample: "Aa" },
];

const palette = ["#ffffff", "#a0a0a0", "#58a6ff", "#3fb950", "#f85149"];

export const UIDiorama = () => (
  <div className="flex h-full w-full flex-col overflow-hidden bg-[#0d1117]">
    {/* Figma-style top bar */}
    <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#161b22] px-4 py-2.5">
      <span className="font-mono text-[11px] text-white/40">Design System — v2.4</span>
      <div className="flex gap-1.5">
        <div className="h-4 w-4 rounded bg-white/[0.06]" />
        <div className="h-4 w-4 rounded bg-white/[0.06]" />
      </div>
    </div>

    <div className="flex flex-1 gap-5 p-5">
      {/* Type scale */}
      <div className="flex flex-1 flex-col gap-3">
        <p className="font-mono text-[10px] uppercase tracking-widest text-white/20">Typography</p>
        {typeScale.map((t) => (
          <div key={t.label} className="flex items-baseline gap-3">
            <span className={`${t.size} ${t.weight} text-white/70`}>{t.sample}</span>
            <span className="font-mono text-[9px] text-white/20">{t.label}</span>
          </div>
        ))}

        {/* Color palette */}
        <div className="mt-4">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-white/20">Palette</p>
          <div className="flex gap-2">
            {palette.map((color) => (
              <div key={color} className="flex flex-col items-center gap-1">
                <div
                  className="h-6 w-6 rounded-full border border-white/10"
                  style={{ backgroundColor: color }}
                />
                <span className="font-mono text-[8px] text-white/15">{color.slice(1, 4)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Component preview */}
      <div className="hidden w-[45%] flex-col gap-3 sm:flex">
        <p className="font-mono text-[10px] uppercase tracking-widest text-white/20">Components</p>
        <div className="flex flex-col gap-2.5">
          <div className="h-8 w-full rounded-md bg-white/90 px-3 py-1.5 text-center font-mono text-[11px] font-medium text-black">
            Primary Button
          </div>
          <div className="h-8 w-full rounded-md border border-white/20 px-3 py-1.5 text-center font-mono text-[11px] text-white/60">
            Secondary
          </div>
          <div className="h-8 w-full rounded-md bg-white/[0.06] px-3 py-1.5 text-center font-mono text-[11px] text-white/40">
            Ghost
          </div>
          <div className="mt-2 rounded-md border border-white/[0.06] bg-white/[0.02] p-2.5">
            <div className="mb-1 font-mono text-[9px] text-white/20">Input</div>
            <div className="h-7 rounded border border-white/10 bg-white/[0.03]" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

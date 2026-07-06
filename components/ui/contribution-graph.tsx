"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CommunityEvent, EventType } from "@/lib/data/events";
import { Users, Calendar, ArrowRight } from "lucide-react";

/* ═══════════════════════════════════════════════════
   GitHub's exact contribution color palette
   ═══════════════════════════════════════════════════ */
const LEVEL_COLORS: Record<number, string> = {
  0: "#161b22",
  1: "#0e4429",
  2: "#006d32",
  3: "#26a641",
  4: "#39d353",
};

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

/* ═══════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════ */
interface DayCell {
  date: Date;
  dateStr: string;
  event: CommunityEvent | null;
  isOutside: boolean; // days that fall outside Jan 1 – Dec 31
}

interface MonthLabel {
  name: string;
  colStart: number;
}

/* ═══════════════════════════════════════════════════
   BUILD A FULL-YEAR GRID (Jan 1 → Dec 31, 2025)
   Exactly like GitHub's contribution graph:
   - Columns = weeks (Sun-start)
   - Rows    = days of the week (Sun=0 … Sat=6)
   ═══════════════════════════════════════════════════ */
function buildYearGrid(year: number, events: CommunityEvent[]) {
  // Index events by date string for O(1) lookup
  const eventMap = new Map<string, CommunityEvent>();
  events.forEach((e) => eventMap.set(e.date, e));

  const jan1 = new Date(year, 0, 1);
  const dec31 = new Date(year, 11, 31);

  // GitHub starts the grid on the Sunday of the week containing Jan 1
  const gridStart = new Date(jan1);
  gridStart.setDate(jan1.getDate() - jan1.getDay()); // roll back to Sunday

  // GitHub ends the grid on the Saturday of the week containing Dec 31
  const gridEnd = new Date(dec31);
  gridEnd.setDate(dec31.getDate() + (6 - dec31.getDay())); // roll forward to Saturday

  const weeks: DayCell[][] = [];
  const months: MonthLabel[] = [];
  let trackedMonth = -1;
  const cursor = new Date(gridStart);

  while (cursor <= gridEnd) {
    const week: DayCell[] = [];

    // Check if a new month starts this week (use the first day of this column)
    for (let d = 0; d < 7; d++) {
      const day = new Date(cursor);
      day.setDate(cursor.getDate() + d);
      if (day.getMonth() !== trackedMonth && day.getFullYear() === year) {
        // Only push if we haven't tracked this month yet
        if (day.getMonth() > trackedMonth || (trackedMonth === 11 && day.getMonth() === 0)) {
          months.push({ name: MONTH_NAMES[day.getMonth()], colStart: weeks.length });
          trackedMonth = day.getMonth();
        }
        break;
      }
    }

    for (let d = 0; d < 7; d++) {
      const dayDate = new Date(cursor);
      const dateStr = `${dayDate.getFullYear()}-${String(dayDate.getMonth() + 1).padStart(2, "0")}-${String(dayDate.getDate()).padStart(2, "0")}`;
      const isOutside = dayDate < jan1 || dayDate > dec31;

      week.push({
        date: dayDate,
        dateStr,
        event: isOutside ? null : eventMap.get(dateStr) || null,
        isOutside,
      });

      cursor.setDate(cursor.getDate() + 1);
    }

    weeks.push(week);
  }

  return { weeks, months };
}

/* ═══════════════════════════════════════════════════
   CONTRIBUTION GRAPH COMPONENT
   ═══════════════════════════════════════════════════ */
export function ContributionGraph({ events }: { events: CommunityEvent[] }) {
  const [hovered, setHovered] = useState<{
    event: CommunityEvent;
    x: number;
    y: number;
  } | null>(null);

  const { weeks, months } = useMemo(() => buildYearGrid(2025, events), [events]);

  const totalCols = weeks.length;
  const CELL = 14; // px — cell size
  const GAP = 3; // px — gap between cells
  const STRIDE = CELL + GAP; // 19px per column
  const DAY_LABEL_W = 32; // px reserved for day labels
  const GRID_W = totalCols * STRIDE - GAP; // total grid pixel width

  return (
    <div className="relative w-full" onMouseLeave={() => setHovered(null)}>
      {/* Horizontal scroll wrapper for mobile */}
      <div className="flex w-full overflow-x-auto overflow-y-visible pb-2 scrollbar-hide justify-center">
        <div style={{ width: DAY_LABEL_W + GRID_W, minWidth: DAY_LABEL_W + GRID_W }}>

          {/* ── Month labels ────────────────────────── */}
          <div className="relative h-5 font-mono text-[11px] text-white/40" style={{ marginLeft: DAY_LABEL_W }}>
            {months.map((m, i) => (
              <span
                key={`${m.name}-${i}`}
                className="absolute select-none"
                style={{ left: m.colStart * STRIDE }}
              >
                {m.name}
              </span>
            ))}
          </div>

          {/* ── Grid body (day labels + cells) ─────── */}
          <div className="flex">
            {/* Day labels column */}
            <div
              className="flex flex-col font-mono text-[11px] text-white/40"
              style={{ width: DAY_LABEL_W, gap: GAP }}
            >
              {DAY_LABELS.map((label, i) => (
                <div
                  key={i}
                  className="flex items-center justify-end pr-2"
                  style={{ height: CELL }}
                >
                  {label}
                </div>
              ))}
            </div>

            {/* Week columns */}
            <div className="flex" style={{ gap: GAP }}>
              {weeks.map((week, wIdx) => (
                <motion.div
                  key={wIdx}
                  className="flex flex-col"
                  style={{ gap: GAP }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.3, delay: wIdx * 0.015 }}
                >
                  {week.map((day) => {
                    const hasEvent = !!day.event;
                    const level = hasEvent ? day.event!.level : 0;
                    const bg = day.isOutside
                      ? "transparent"
                      : LEVEL_COLORS[level];

                    return (
                      <motion.div
                        key={day.dateStr}
                        className="rounded-[3px]"
                        style={{
                          width: CELL,
                          height: CELL,
                          backgroundColor: bg,
                          cursor: hasEvent ? "pointer" : "default",
                        }}
                        whileHover={
                          hasEvent
                            ? { scale: 1.4, filter: "brightness(1.4)" }
                            : {}
                        }
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        onMouseEnter={(e) => {
                          if (hasEvent) {
                            setHovered({
                              event: day.event!,
                              x: e.clientX,
                              y: e.clientY,
                            });
                          }
                        }}
                      />
                    );
                  })}
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Legend ───────────────────────────────── */}
          <div
            className="mt-3 flex items-center justify-end gap-1.5 font-mono text-[11px] text-white/40"
            style={{ paddingRight: 4 }}
          >
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((l) => (
              <div
                key={l}
                className="rounded-[3px]"
                style={{
                  width: CELL,
                  height: CELL,
                  backgroundColor: LEVEL_COLORS[l],
                }}
              />
            ))}
            <span>More</span>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          FLOATING HOVER CARD (fixed to viewport)
         ════════════════════════════════════════════ */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key={hovered.event.id}
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96, transition: { duration: 0.12 } }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            className="pointer-events-none fixed z-[100] w-[280px] rounded-xl border border-white/10 bg-[#0d1117]/95 p-4 shadow-2xl shadow-black/60 backdrop-blur-xl"
            style={{
              left:
                typeof window !== "undefined" &&
                hovered.x > window.innerWidth - 310
                  ? hovered.x - 296
                  : hovered.x + 18,
              top:
                typeof window !== "undefined" &&
                hovered.y > window.innerHeight - 280
                  ? hovered.y - 240
                  : hovered.y + 18,
            }}
          >
            {/* Optional image */}
            {hovered.event.image && (
              <div className="mb-3 h-28 w-full overflow-hidden rounded-lg">
                <img
                  src={hovered.event.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            {/* Type badge + date */}
            <div className="mb-2 flex items-center justify-between">
              <span className="rounded-full bg-green-500/10 px-2.5 py-0.5 font-mono text-[9px] font-medium uppercase tracking-wider text-green-400">
                {hovered.event.type.replace("_", " ")}
              </span>
              <span className="flex items-center gap-1 font-mono text-[9px] text-white/40">
                <Calendar className="h-3 w-3" />
                {new Date(hovered.event.date + "T00:00:00").toLocaleDateString(
                  "en-US",
                  { month: "short", day: "numeric", year: "numeric" }
                )}
              </span>
            </div>

            {/* Title */}
            <h4 className="mb-1 text-base font-semibold leading-tight text-white">
              {hovered.event.name}
            </h4>

            {/* Description */}
            <p className="mb-4 text-[12px] leading-relaxed text-white/55">
              {hovered.event.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-white/[0.06] pt-3">
              <span className="flex items-center gap-1.5 font-mono text-[10px] text-white/60">
                <Users className="h-3.5 w-3.5 text-white/35" />
                {hovered.event.participants}+ participants
              </span>
              <span className="flex items-center gap-1 font-mono text-[10px] text-blue-400/80">
                Gallery <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

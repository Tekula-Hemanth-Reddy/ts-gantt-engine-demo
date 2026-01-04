/* ================= TYPES (yours) ================= */
/* ================= UTILITIES ================= */

import type { PType, GanttDurationType, GanttDuration, GanttTask } from "ts-gantt-engine";

const ROOT_PARENT = "#H@M@N^H#";
const REL_TYPES: PType[] = ["FS", "SS", "FF", "SF"];
const COLORS = {
  planned: "#FBEAE9",
  original: "#E9FBE9",
  updated: "#cceaf0ff",
};

const randomId = () =>
  Math.random().toString(16).substring(2, 10) +
  Math.random().toString(16).substring(2, 10);

const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomFrom = <T>(arr: T[]) => arr[randomInt(0, arr.length - 1)];

const addDays = (date: Date, days: number) => {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
};

/* ================= TIMELINES ================= */

function createTimeline(
  type: GanttDurationType,
  baseStart: Date
): GanttDuration {
  const startOffset = randomInt(0, 5);
  const duration = randomInt(5, 40);

  const start = addDays(baseStart, startOffset);
  const end = addDays(start, duration);

  return {
    gId: type,
    gName: type[0].toUpperCase() + type.slice(1),
    gStart: start,
    gEnd: end,
    gPercentage: 0,
    gClass: COLORS[type as keyof typeof COLORS] ?? "#ddd",
  };
}

/* ================= MAIN GENERATOR ================= */

/**
 * @param count Total number of tasks
 * @param maxRelations Max relations per task
 */
export function generateRandomGanttData(
  count = 50,
  maxRelations = 3
): GanttTask[] {
  const tasks: GanttTask[] = [];
  const baseDate = new Date("2025-10-01T00:00:00.000Z");

  for (let i = 0; i < count; i++) {
    const pId = randomId();

    // ✅ SAFE parent selection
    let pParent = ROOT_PARENT;

    if (tasks.length > 0 && Math.random() > 0.35) {
      const parent = randomFrom(tasks);
      if (parent) {
        pParent = parent.pId;
      }
    }

    const planned = createTimeline("planned", baseDate);

    const timelines: GanttDuration[] = [];
    if (Math.random() > 0.4)
      timelines.push(createTimeline("original", planned.gStart!));
    if (Math.random() > 0.6)
      timelines.push(createTimeline("updated", planned.gStart!));

    tasks.push({
      pId,
      pName: `Activity ${i + 1}`,
      pMainTimeline: planned,
      pTimelines: timelines,
      pParent,
      pRelation: [],
      pData: {
        activityName: `Activity ${i + 1}`,
        startDate: formatDateDDMMYYYY(planned.gStart),
        endDate: formatDateDDMMYYYY(planned.gEnd)
      },
    });
  }

  // ----- SAFE relation generation -----
  for (const task of tasks) {
    const relationCount = randomInt(0, maxRelations);

    const candidates = tasks.filter(t => t.pId !== task.pId);
    if (candidates.length === 0) continue;

    for (let i = 0; i < relationCount; i++) {
      const target = randomFrom(candidates);
      if (!target) continue;

      task.pRelation.push({
        pTarget: target.pId,
        pType: randomFrom(REL_TYPES),
      });
    }
  }

  return tasks;
}

export function formatDateDDMMYYYY(date?: Date): string {
  if (!date || isNaN(date.getTime())) return "";

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}


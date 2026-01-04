import type {
  GanttHeader,
  GanttOptions,
  GanttTask,
  RelationColors,
} from "ts-gantt-engine";

export const sampleHeaders: GanttHeader[] = [
  {
    hId: "activityName",
    hName: "Activity Name",
  },
  {
    hId: "startDate",
    hName: "Start Date",
  },
  {
    hId: "endDate",
    hName: "End Date",
  },
];
export const sampleGanttOptions: GanttOptions = {
  columnWidth: 100,
  headerHeight: 60,
  headerBg: "#F4F5F8",
  canvasBg: "#fff",
  fontColor: "#1F2329",
  lineColor: "#D2D8E3",
  font: "14px Arial",
};
export const sampleRelationColors: RelationColors = {
  FS: "#3D62FF",
  SF: "#FF3D3D",
  SS: "#23A118",
  FF: "#FF8B3D",
};
export const lsampleData: GanttTask[] = [
  {
    pId: "69205616bc17468ed98e9385",
    pName: "activity 1 activity 1 activity 1 activity 1 activity 1",
    pMainTimeline: {
      gId: "planned",
      gName: "Planned",
      gStart: new Date("2025-11-10T18:30:00.000Z"),
      gEnd: new Date("2025-11-25T18:29:59.999Z"),
      gPercentage: 0,
      gClass: "#FBEAE9",
    },
    pTimelines: [
      {
        gId: "original",
        gName: "Original",
        gStart: new Date("2025-11-10T18:30:00.000Z"),
        gEnd: new Date("2025-11-25T18:29:59.999Z"),
        gPercentage: 0,
        gClass: "#E9FBE9",
      },
      // {
      //   gId: "updated",
      //   gName: "Updated",
      //   gStart: new Date("2025-11-10T18:30:00.000Z"),
      //   gEnd: new Date("2025-11-25T18:29:59.999Z"),
      //   gPercentage: 0,
      //   gClass: "#f44336",
      // },
    ],
    pParent: "#H@M@N^H#",
    pRelation: [
      {
        pTarget: "693285b8d839d230daac1349",
        pType: "FS",
      },
      {
        pTarget: "693285b8d839d230daac1349",
        pType: "SF",
      },
      {
        pTarget: "693285d6d839d230daac1384",
        pType: "SS",
      },
      {
        pTarget: "693285d6d839d230daac1385",
        pType: "SS",
      },
      {
        pTarget: "693285d6d839d230daac1386",
        pType: "SS",
      },
    ],
    pData: {
      activityName: "activity 1 activity 1 activity 1 activity 1 activity 1",
    },
  },
  {
    pId: "693285b8d839d230daac1349",
    pName: "activity 2",
    pMainTimeline: {
      gId: "planned",
      gName: "Planned",
      gStart: new Date("2025-11-18T18:30:00.000Z"),
      gEnd: new Date("2025-12-29T18:29:59.999Z"),
      gPercentage: 0,
      gClass: "#FBEAE9",
    },
    pTimelines: [
      // {
      //   gId: "original",
      //   gName: "Original",
      //   gStart: new Date("2025-11-18T18:30:00.000Z"),
      //   gEnd: new Date("2025-12-29T18:29:59.999Z"),
      //   gPercentage: 0,
      //   gClass: "#E9FBE9",
      // },
      {
        gId: "updated",
        gName: "Updated",
        gStart: new Date("2025-11-18T18:30:00.000Z"),
        gEnd: new Date("2025-12-29T18:29:59.999Z"),
        gPercentage: 0,
        gClass: "#f44336",
      },
    ],
    pParent: "69205616bc17468ed98e9385",
    pRelation: [
      {
        pTarget: "693285d6d839d230daac1384",
        pType: "FF",
      },
      {
        pTarget: "693285d6d839d230daac1384",
        pType: "SS",
      },
    ],
    pData: {
      activityName: "activity 2",
    },
  },
  {
    pId: "693285d6d839d230daac1384",
    pName: "activity 3",
    pMainTimeline: {
      gId: "planned",
      gName: "Planned",
      gStart: new Date("2025-11-02T18:30:00.000Z"),
      gEnd: new Date("2025-12-22T18:29:59.999Z"),
      gPercentage: 0,
      gClass: "#FBEAE9",
    },
    pTimelines: [
      {
        gId: "original",
        gName: "Original",
        gStart: new Date("2025-11-02T18:30:00.000Z"),
        gEnd: new Date("2025-12-22T18:29:59.999Z"),
        gPercentage: 0,
        gClass: "#E9FBE9",
      },
      // {
      //   gId: "updated",
      //   gName: "Updated",
      //   gStart: new Date("2025-11-02T18:30:00.000Z"),
      //   gEnd: new Date("2025-12-22T18:29:59.999Z"),
      //   gPercentage: 0,
      //   gClass: "#f44336",
      // },
    ],
    pParent: "69205616bc17468ed98e9385",
    pRelation: [
      {
        pTarget: "693285b8d839d230daac1349",
        pType: "SF",
      },
    ],
    pData: {
      activityName: "activity 3",
    },
  },
  {
    pId: "693285d6d839d230daac1385",
    pName: "activity 4",
    pMainTimeline: {
      gId: "planned",
      gName: "Planned",
      gStart: new Date("2025-11-02T18:30:00.000Z"),
      gEnd: new Date("2025-12-22T18:29:59.999Z"),
      gPercentage: 0,
      gClass: "#FBEAE9",
    },
    pTimelines: [
      // {
      //   gId: "original",
      //   gName: "Original",
      //   gStart: new Date("2025-11-02T18:30:00.000Z"),
      //   gEnd: new Date("2025-12-22T18:29:59.999Z"),
      //   gPercentage: 0,
      //   gClass: "#E9FBE9",
      // },
      // {
      //   gId: "updated",
      //   gName: "Updated",
      //   gStart: new Date("2025-11-02T18:30:00.000Z"),
      //   gEnd: new Date("2025-12-22T18:29:59.999Z"),
      //   gPercentage: 0,
      //   gClass: "#f44336",
      // },
    ],
    pParent: "693285d6d839d230daac1384",
    pRelation: [
      {
        pTarget: "693285d6d839d230daac1384",
        pType: "SS",
      },
      {
        pTarget: "693285b8d839d230daac1349",
        pType: "FS",
      },
      {
        pTarget: "693285d6d839d230daac1384",
        pType: "FF",
      },
      {
        pTarget: "693285b8d839d230daac1349",
        pType: "SF",
      },
    ],
    pData: {
      activityName: "activity 4",
    },
  },
  {
    pId: "693285d6d839d230daac1386",
    pName: "activity 5",
    pMainTimeline: {
      gId: "planned",
      gName: "Planned",
      gStart: new Date("2025-11-02T18:30:00.000Z"),
      gEnd: new Date("2025-12-22T18:29:59.999Z"),
      gPercentage: 0,
      gClass: "#FBEAE9",
    },
    pTimelines: [
      // {
      //   gId: "original",
      //   gName: "Original",
      //   gStart: new Date("2025-11-02T18:30:00.000Z"),
      //   gEnd: new Date("2025-12-22T18:29:59.999Z"),
      //   gPercentage: 0,
      //   gClass: "#E9FBE9",
      // },
      // {
      //   gId: "updated",
      //   gName: "Updated",
      //   gStart: new Date("2025-11-02T18:30:00.000Z"),
      //   gEnd: new Date("2025-12-22T18:29:59.999Z"),
      //   gPercentage: 0,
      //   gClass: "#f44336",
      // },
    ],
    pParent: "693285d6d839d230daac1384",
    pRelation: [
      {
        pTarget: "693285d6d839d230daac1384",
        pType: "SS",
      },
      {
        pTarget: "693285b8d839d230daac1349",
        pType: "FS",
      },
      {
        pTarget: "693285d6d839d230daac1384",
        pType: "FF",
      },
    ],
    pData: {
      activityName: "activity 5",
    },
  },
];

export const sampleData: GanttTask[] = [
  // ================= ROOT LEVEL =================
  {
    pId: "700000000000000000000001",
    pName: "Project Initiation",
    pMainTimeline: {
      gId: "planned",
      gName: "Planned",
      gStart: new Date("2025-10-01T00:00:00.000Z"),
      gEnd: new Date("2025-10-10T23:59:59.999Z"),
      gPercentage: 0,
      gClass: "#FBEAE9",
    },
    pTimelines: [
      {
        gId: "original",
        gName: "Original",
        gStart: new Date("2025-10-01T00:00:00.000Z"),
        gEnd: new Date("2025-10-08T23:59:59.999Z"),
        gPercentage: 0,
        gClass: "#E9FBE9",
      },
    ],
    pParent: "#H@M@N^H#",
    pRelation: [],
    pData: {
      activityName: "Project Initiation",
    },
  },

  {
    pId: "700000000000000000000002",
    pName: "Design Phase",
    pMainTimeline: {
      gId: "planned",
      gName: "Planned",
      gStart: new Date("2025-10-05T00:00:00.000Z"),
      gEnd: new Date("2025-11-05T23:59:59.999Z"),
      gPercentage: 0,
      gClass: "#FBEAE9",
    },
    pTimelines: [
      {
        gId: "updated",
        gName: "Updated",
        gStart: new Date("2025-10-07T00:00:00.000Z"),
        gEnd: new Date("2025-11-10T23:59:59.999Z"),
        gPercentage: 0,
        gClass: "#f44336",
      },
    ],
    pParent: "#H@M@N^H#",
    pRelation: [
      { pTarget: "700000000000000000000001", pType: "FS" },
    ],
    pData: {
      activityName: "Design Phase",
    },
  },

  // ================= DESIGN CHILDREN =================
  {
    pId: "700000000000000000000003",
    pName: "Architectural Design",
    pMainTimeline: {
      gId: "planned",
      gName: "Planned",
      gStart: new Date("2025-10-05T00:00:00.000Z"),
      gEnd: new Date("2025-10-25T23:59:59.999Z"),
      gPercentage: 0,
      gClass: "#FBEAE9",
    },
    pTimelines: [
      {
        gId: "original",
        gName: "Original",
        gStart: new Date("2025-10-05T00:00:00.000Z"),
        gEnd: new Date("2025-10-20T23:59:59.999Z"),
        gPercentage: 0,
        gClass: "#E9FBE9",
      },
    ],
    pParent: "700000000000000000000002",
    pRelation: [
      { pTarget: "700000000000000000000001", pType: "FS" },
    ],
    pData: {
      activityName: "Architectural Design",
    },
  },

  {
    pId: "700000000000000000000004",
    pName: "Structural Design",
    pMainTimeline: {
      gId: "planned",
      gName: "Planned",
      gStart: new Date("2025-10-10T00:00:00.000Z"),
      gEnd: new Date("2025-10-30T23:59:59.999Z"),
      gPercentage: 0,
      gClass: "#FBEAE9",
    },
    pTimelines: [],
    pParent: "700000000000000000000002",
    pRelation: [
      { pTarget: "700000000000000000000003", pType: "SS" },
    ],
    pData: {
      activityName: "Structural Design",
    },
  },

  {
    pId: "700000000000000000000005",
    pName: "MEP Design",
    pMainTimeline: {
      gId: "planned",
      gName: "Planned",
      gStart: new Date("2025-10-15T00:00:00.000Z"),
      gEnd: new Date("2025-11-05T23:59:59.999Z"),
      gPercentage: 0,
      gClass: "#FBEAE9",
    },
    pTimelines: [
      {
        gId: "updated",
        gName: "Updated",
        gStart: new Date("2025-10-18T00:00:00.000Z"),
        gEnd: new Date("2025-11-08T23:59:59.999Z"),
        gPercentage: 0,
        gClass: "#f44336",
      },
    ],
    pParent: "700000000000000000000002",
    pRelation: [
      { pTarget: "700000000000000000000004", pType: "SS" },
      { pTarget: "700000000000000000000003", pType: "FF" },
    ],
    pData: {
      activityName: "MEP Design",
    },
  },

  // ================= CONSTRUCTION =================
  {
    pId: "700000000000000000000006",
    pName: "Construction Phase",
    pMainTimeline: {
      gId: "planned",
      gName: "Planned",
      gStart: new Date("2025-11-10T00:00:00.000Z"),
      gEnd: new Date("2026-03-30T23:59:59.999Z"),
      gPercentage: 0,
      gClass: "#FBEAE9",
    },
    pTimelines: [],
    pParent: "#H@M@N^H#",
    pRelation: [
      { pTarget: "700000000000000000000002", pType: "FS" },
    ],
    pData: {
      activityName: "Construction Phase",
    },
  },

  {
    pId: "700000000000000000000007",
    pName: "Foundation Work",
    pMainTimeline: {
      gId: "planned",
      gName: "Planned",
      gStart: new Date("2025-11-10T00:00:00.000Z"),
      gEnd: new Date("2025-12-10T23:59:59.999Z"),
      gPercentage: 0,
      gClass: "#FBEAE9",
    },
    pTimelines: [
      {
        gId: "original",
        gName: "Original",
        gStart: new Date("2025-11-08T00:00:00.000Z"),
        gEnd: new Date("2025-12-05T23:59:59.999Z"),
        gPercentage: 0,
        gClass: "#E9FBE9",
      },
    ],
    pParent: "700000000000000000000006",
    pRelation: [
      { pTarget: "700000000000000000000002", pType: "FS" },
    ],
    pData: {
      activityName: "Foundation Work",
    },
  },

  {
    pId: "700000000000000000000008",
    pName: "Superstructure",
    pMainTimeline: {
      gId: "planned",
      gName: "Planned",
      gStart: new Date("2025-12-01T00:00:00.000Z"),
      gEnd: new Date("2026-02-15T23:59:59.999Z"),
      gPercentage: 0,
      gClass: "#FBEAE9",
    },
    pTimelines: [],
    pParent: "700000000000000000000006",
    pRelation: [
      { pTarget: "700000000000000000000007", pType: "FS" },
      { pTarget: "700000000000000000000005", pType: "FF" },
    ],
    pData: {
      activityName: "Superstructure",
    },
  },

  {
    pId: "700000000000000000000009",
    pName: "Finishing Works",
    pMainTimeline: {
      gId: "planned",
      gName: "Planned",
      gStart: new Date("2026-02-01T00:00:00.000Z"),
      gEnd: new Date("2026-03-30T23:59:59.999Z"),
      gPercentage: 0,
      gClass: "#FBEAE9",
    },
    pTimelines: [
      {
        gId: "updated",
        gName: "Updated",
        gStart: new Date("2026-02-10T00:00:00.000Z"),
        gEnd: new Date("2026-04-05T23:59:59.999Z"),
        gPercentage: 0,
        gClass: "#f44336",
      },
    ],
    pParent: "700000000000000000000006",
    pRelation: [
      { pTarget: "700000000000000000000008", pType: "SS" },
    ],
    pData: {
      activityName: "Finishing Works",
    },
  },
];


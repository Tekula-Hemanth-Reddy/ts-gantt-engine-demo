import{R as s,j as e}from"./index-lDtj0f9Z.js";const a=s.memo(()=>e.jsx("div",{className:"readme-container",children:e.jsxs("div",{className:"readme-wrapper",children:[e.jsxs("header",{className:"readme-header",children:[e.jsxs("p",{className:"readme-subtitle",children:["A highly customizable, lightweight Gantt chart engine written entirely in ",e.jsx("strong",{children:"TypeScript"})," and rendered using"," ",e.jsx("strong",{children:"HTML Canvas"}),"."]}),e.jsx("p",{className:"readme-description",children:"Built for developers who need powerful Gantt chart functionality without the bloat. Features a task grid, interactive timeline, relation lines, multiple timeline comparisons, and extensive customization options—all in a lightweight package with minimal dependencies."})]}),e.jsx("hr",{className:"readme-divider"}),e.jsxs("section",{className:"readme-section",children:[e.jsx("h2",{className:"section-heading",children:"✨ Features"}),e.jsxs("div",{className:"features-container",children:[e.jsxs("div",{className:"feature-block",children:[e.jsx("h3",{className:"feature-title",children:"🎨 Fully Customizable"}),e.jsxs("ul",{className:"feature-list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"TypeScript-first design"})," for type safety and better developer experience"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Canvas-powered rendering"})," for maximum performance and flexibility"]}),e.jsx("li",{children:"Extensive styling options: colors, fonts, dimensions, and more"})]})]}),e.jsxs("div",{className:"feature-block",children:[e.jsx("h3",{className:"feature-title",children:"📊 Dual-Component Architecture"}),e.jsxs("ul",{className:"feature-list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Task Grid"})," — Vertical scrolling with hierarchical task display"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Gantt Timeline"})," — Bi-directional scrolling (horizontal & vertical) with date-based visualization"]})]})]}),e.jsxs("div",{className:"feature-block",children:[e.jsx("h3",{className:"feature-title",children:"🌲 Tree Structure Support"}),e.jsxs("ul",{className:"feature-list",children:[e.jsx("li",{children:"Parent-child task hierarchy"}),e.jsx("li",{children:"Smooth expand/collapse animations"}),e.jsx("li",{children:"Visual indicators for nested relationships"})]})]}),e.jsxs("div",{className:"feature-block",children:[e.jsx("h3",{className:"feature-title",children:"📈 Multiple Timeline Support"}),e.jsxs("ul",{className:"feature-list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Main timeline"})," for primary task duration"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Comparison timelines"})," for planned vs actual, baseline, forecast, etc."]}),e.jsx("li",{children:"Support for multiple duration types: original, planned, updated, actual, critical, baseline, forecast, or custom types"})]})]}),e.jsxs("div",{className:"feature-block",children:[e.jsx("h3",{className:"feature-title",children:"🔗 Task Relations"}),e.jsx("p",{className:"feature-description",children:"Draw and visualize four types of task dependencies with customizable colors:"}),e.jsxs("ul",{className:"feature-list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"FS"})," (Finish-to-Start)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"SF"})," (Start-to-Finish)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"SS"})," (Start-to-Start)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"FF"})," (Finish-to-Finish)"]})]})]}),e.jsxs("div",{className:"feature-block",children:[e.jsx("h3",{className:"feature-title",children:"🎯 Rich Interactions"}),e.jsxs("ul",{className:"feature-list",children:[e.jsx("li",{children:"Tooltip support for detailed task information"}),e.jsx("li",{children:"Click event emitters for taskbar interactions"}),e.jsx("li",{children:"Responsive mouse tracking and selection"})]})]}),e.jsxs("div",{className:"feature-block",children:[e.jsx("h3",{className:"feature-title",children:"⚡ Lightweight & Fast"}),e.jsxs("ul",{className:"feature-list",children:[e.jsxs("li",{children:["Only ",e.jsx("strong",{children:"one dependency"}),":"," ",e.jsx("code",{className:"inline-code",children:"moment-timezone"})]}),e.jsx("li",{children:"Minimal bundle size"}),e.jsx("li",{children:"Optimized canvas rendering"})]})]})]})]}),e.jsx("hr",{className:"readme-divider"}),e.jsxs("section",{className:"readme-section",children:[e.jsx("h2",{className:"section-heading",children:"📦 Installation"}),e.jsxs("div",{className:"installation-container",children:[e.jsxs("div",{className:"install-block",children:[e.jsx("h3",{className:"install-method",children:"npm"}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:"npm install ts-gantt-engine"})})]}),e.jsxs("div",{className:"install-block",children:[e.jsx("h3",{className:"install-method",children:"pnpm"}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:"pnpm add ts-gantt-engine"})})]}),e.jsxs("div",{className:"install-block",children:[e.jsx("h3",{className:"install-method",children:"yarn"}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:"yarn add ts-gantt-engine"})})]})]})]}),e.jsx("hr",{className:"readme-divider"}),e.jsxs("section",{className:"readme-section",children:[e.jsx("h2",{className:"section-heading",children:"🚀 Quick Start"}),e.jsxs("div",{className:"code-examples",children:[e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:`/* This will set canvas to take full width and height*/
canvas {
  display: block;
  width: 100%;
  height: 100%;
}`})}),e.jsx("pre",{className:"code-block code-block-large",children:e.jsx("code",{children:`import { GanttEngine } from "ts-gantt-engine";

// Get your canvas element
const canvas = document.getElementById("gantt") as HTMLCanvasElement;

// Initialize the engine
const engine = new GanttEngine(
  canvas,
  "day", // time format: "day" | "week" | "month" | "quarter" | "year"
  (data) => {
    console.log("Task clicked:", data);
  }
);

// Define your headers
const headers = [
  { hId: "1", hName: "Task Name" },
  { hId: "2", hName: "Status" },
];

// Define your tasks
const tasks = [
  {
    pId: "1",
    pName: "Project Planning",
    pMainTimeline: {
      gId: "main",
      gName: "Main Timeline",
      gClass: "#9B59B6",
      gStart: new Date("2024-01-01"),
      gEnd: new Date("2024-01-04"),
      gPercentage: 75,
    },
    pTimelines: [
      {
        gId: "planned",
        gName: "Planned",
        gClass: "#E8DAEF",
        gStart: new Date("2024-01-01"),
        gEnd: new Date("2024-01-05"),
        gPercentage: 0,
      },
    ],
    pRelation: [],
    pData: { "1": "Project Planning", "2": "In Progress" },
  },
  {
    pId: "2",
    pName: "Design Phase",
    pMainTimeline: {
      gId: "main",
      gName: "Main Timeline",
      gClass: "#3498DB",
      gStart: new Date("2024-01-03"),
      gEnd: new Date("2024-01-06"),
      gPercentage: 50,
    },
    pTimelines: [],
    pParent: "1", // Child of task 1
    pRelation: [{ pTarget: "1", pType: "FS" }],
    pData: { "1": "Design Phase", "2": "Not Started" },
  },
];

// Render with custom options
engine.render(headers, tasks, {
  columnWidth: 100,
  headerHeight: 50,
  headerBg: '#F4F5F8',
  canvasBg: '#fff',
  fontColor: '#1F2329',
  lineColor: '#D2D8E3',
  font: '14px Arial',
  boxHeight: 50,
  barHeight: 20,
  barHorizontalResidue: 5,
  barVerticalResidue: 5,
  curveRadius: 3,
});

// Optional: Customize relation colors
const relationColors = {
  FS: "#2ECC71",
  SF: "#E74C3C",
  SS: "#3498DB",
  FF: "#F39C12",
};
engine.render(headers, tasks, options, relationColors);

// Destroy the canvas while destroying component or screen to avoid memory leaks
engine.destroy();`})})]})]}),e.jsx("hr",{className:"readme-divider"}),e.jsxs("section",{className:"readme-section",children:[e.jsx("h2",{className:"section-heading",children:"📖 API Reference"}),e.jsx("h3",{className:"subsection-heading",children:"GanttEngine"}),e.jsxs("div",{className:"api-container",children:[e.jsxs("div",{className:"api-block",children:[e.jsx("h4",{className:"api-title",children:"Constructor"}),e.jsx("pre",{className:"code-block code-block-small",children:e.jsx("code",{children:`new GanttEngine(
  canvas: HTMLCanvasElement,
  format: "day" | "week" | "month" | "quarter" | "year",
  onTaskClick?: (data: GanttTask) => void
)`})})]}),e.jsxs("div",{className:"api-block",children:[e.jsx("h4",{className:"api-title",children:"Methods"}),e.jsxs("div",{className:"methods-container",children:[e.jsxs("div",{className:"method-block",children:[e.jsx("h5",{className:"method-name",children:"render(headers, tasks, options, relationColors?)"}),e.jsx("p",{className:"method-description",children:"Renders the Gantt chart with the provided data."}),e.jsx("pre",{className:"code-block code-block-small",children:e.jsx("code",{children:`engine.render(
  headers: GanttHeader[],
  tasks: GanttTask[],
  options: GanttOptions,
  relationColors?: RelationColors
): void`})})]}),e.jsxs("div",{className:"method-block",children:[e.jsx("h5",{className:"method-name",children:"setFormat(format)"}),e.jsx("p",{className:"method-description",children:"Changes the time scale format."}),e.jsx("pre",{className:"code-block code-block-small",children:e.jsx("code",{children:'engine.setFormat(format: "day" | "week" | "month" | "quarter" | "year"): void'})})]}),e.jsxs("div",{className:"method-block",children:[e.jsx("h5",{className:"method-name",children:"clearScreen()"}),e.jsx("p",{className:"method-description",children:"Clears the canvas."}),e.jsx("pre",{className:"code-block code-block-small",children:e.jsx("code",{children:"engine.clearScreen(): void"})})]}),e.jsxs("div",{className:"method-block",children:[e.jsx("h5",{className:"method-name",children:"destroy()"}),e.jsx("p",{className:"method-description",children:"Stops drawing chart and destroy the canvas."}),e.jsx("pre",{className:"code-block code-block-small",children:e.jsx("code",{children:"engine.destroy(): void"})})]}),e.jsxs("div",{className:"method-block",children:[e.jsx("h5",{className:"method-name",children:"getCanvas()"}),e.jsx("p",{className:"method-description",children:"Returns the canvas element."}),e.jsx("pre",{className:"code-block code-block-small",children:e.jsx("code",{children:"engine.getCanvas(): HTMLCanvasElement"})})]}),e.jsxs("div",{className:"method-block",children:[e.jsx("h5",{className:"method-name",children:"getBounds()"}),e.jsx("p",{className:"method-description",children:"Returns the canvas dimensions."}),e.jsx("pre",{className:"code-block code-block-small",children:e.jsx("code",{children:"engine.getBounds(): number[]"})})]})]})]})]})]}),e.jsx("hr",{className:"readme-divider"}),e.jsxs("section",{className:"readme-section",children:[e.jsx("h2",{className:"section-heading",children:"📝 Type Definitions"}),e.jsxs("div",{className:"types-container",children:[e.jsxs("div",{className:"type-block",children:[e.jsx("h3",{className:"type-name",children:"GanttTask"}),e.jsx("pre",{className:"code-block code-block-small",children:e.jsx("code",{children:`interface GanttTask {
  pId: string;                    // Unique task ID
  pName: string;                  // Task name
  pMainTimeline: GanttDuration;   // Primary timeline (required)
  pTimelines: GanttDuration[];    // Additional comparison timelines (optional)
  pParent?: string;               // Parent task ID (for hierarchy)
  pRelation: {
    pTarget: string;              // Target task ID
    pType: "FF" | "SF" | "FS" | "SS";  // Relation type
  }[];
  pData: { [key: string]: string };    // Custom data (keyed by header ID)
}`})})]}),e.jsxs("div",{className:"type-block",children:[e.jsx("h3",{className:"type-name",children:"GanttDuration"}),e.jsx("pre",{className:"code-block code-block-small",children:e.jsx("code",{children:`interface GanttDuration {
  gId: GanttDurationType;         // e.g., "main", "planned", "actual", etc.
  gName: string;                  // Label for the timeline
  gClass: string;                 // Color (hex or CSS color)
  gStart?: Date;                  // Start date (required for main)
  gEnd?: Date;                    // End date (required for main)
  gPercentage: number;            // Completion percentage (0-100)
}

type GanttDurationType = 
  | "main" 
  | "original" 
  | "planned" 
  | "updated" 
  | "actual" 
  | "critical" 
  | "baseline" 
  | "forecast" 
  | string;  // Custom types allowed`})})]}),e.jsxs("div",{className:"type-block",children:[e.jsx("h3",{className:"type-name",children:"GanttHeader"}),e.jsx("pre",{className:"code-block code-block-small",children:e.jsx("code",{children:`interface GanttHeader {
  hId: string;      // Unique header ID
  hName: string;    // Header display name
}`})})]}),e.jsxs("div",{className:"type-block",children:[e.jsx("h3",{className:"type-name",children:"GanttOptions"}),e.jsx("pre",{className:"code-block code-block-small",children:e.jsx("code",{children:`interface GanttOptions {
  columnWidth?: number;           // Width of grid columns (default: 100)
  headerHeight?: number;          // Height of header row (default: 50)
  headerBg?: string;              // Header background color
  canvasBg?: string;              // Canvas background color
  fontColor?: string;             // Text color
  lineColor?: string;             // Grid line color
  font?: string;                  // Font style (e.g., "14px Arial")
  boxHeight?: number;             // Height of task rows
  barHeight?: number;             // Height of taskbars
  barHorizontalResidue?: number;  // Horizontal padding for bars
  barVerticalResidue?: number;    // Vertical padding for bars
  curveRadius?: number;           // Border radius for taskbars
}`})})]}),e.jsxs("div",{className:"type-block",children:[e.jsx("h3",{className:"type-name",children:"RelationColors"}),e.jsx("pre",{className:"code-block code-block-small",children:e.jsx("code",{children:`interface RelationColors {
  FS: string;  // Finish to Start color
  SF: string;  // Start to Finish color
  SS: string;  // Start to Start color
  FF: string;  // Finish to Finish color
}`})})]})]})]}),e.jsx("hr",{className:"readme-divider"}),e.jsxs("section",{className:"readme-section",children:[e.jsx("h2",{className:"section-heading",children:"🎨 Customization Examples"}),e.jsxs("div",{className:"examples-container",children:[e.jsxs("div",{className:"example-block",children:[e.jsx("h3",{className:"example-title",children:"Dark Theme"}),e.jsx("pre",{className:"code-block code-block-small",children:e.jsx("code",{children:`engine.render(headers, tasks, {
  headerBg: "#1e1e1e",
  canvasBg: "#2d2d2d",
  fontColor: "#ffffff",
  lineColor: "#404040",
  font: "14px 'Segoe UI'",
});`})})]}),e.jsxs("div",{className:"example-block",children:[e.jsx("h3",{className:"example-title",children:"Compact View"}),e.jsx("pre",{className:"code-block code-block-small",children:e.jsx("code",{children:`engine.render(headers, tasks, {
  columnWidth: 80,
  headerHeight: 35,
  boxHeight: 35,
  barHeight: 15,
  font: "12px Arial",
});`})})]}),e.jsxs("div",{className:"example-block",children:[e.jsx("h3",{className:"example-title",children:"Custom Relation Colors"}),e.jsx("pre",{className:"code-block code-block-small",children:e.jsx("code",{children:`const relationColors = {
  FS: "#27AE60",  // Green for Finish-to-Start
  SF: "#E67E22",  // Orange for Start-to-Finish
  SS: "#2980B9",  // Blue for Start-to-Start
  FF: "#8E44AD",  // Purple for Finish-to-Finish
};

engine.render(headers, tasks, options, relationColors);`})})]}),e.jsxs("div",{className:"example-block",children:[e.jsx("h3",{className:"example-title",children:"Planned vs Actual Comparison"}),e.jsx("pre",{className:"code-block code-block-small",children:e.jsx("code",{children:`const tasks = [
  {
    pId: "1",
    pName: "Development",
    pMainTimeline: {
      gId: "actual",
      gName: "Actual Progress",
      gClass: "#2ECC71",
      gStart: new Date("2024-01-01"),
      gEnd: new Date("2024-01-10"),
      gPercentage: 60,
    },
    pTimelines: [
      {
        gId: "planned",
        gName: "Planned Schedule",
        gClass: "#BDC3C7",
        gStart: new Date("2024-01-01"),
        gEnd: new Date("2024-01-08"),
        gPercentage: 0,
      },
    ],
    pRelation: [],
    pData: { "1": "Development", "2": "In Progress" },
  },
];`})})]})]})]}),e.jsx("hr",{className:"readme-divider"}),e.jsxs("section",{className:"readme-section",children:[e.jsx("h2",{className:"section-heading",children:"🗺️ Roadmap"}),e.jsx("h3",{className:"subsection-title",children:"🔜 Coming Soon"}),e.jsxs("ul",{className:"roadmap-list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Bi-directional scrolling for Task Grid"})," — Horizontal scrolling support"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Drag to resize tasks"})," — Interactive taskbar duration adjustment"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Hover highlighting"})," — Highlight tasks and relations on mouse hover"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Zoom controls"})," — Dynamic time scale adjustment"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Export functionality"})," — Save charts as images or PDF"]})]})]}),e.jsx("hr",{className:"readme-divider"}),e.jsxs("section",{className:"readme-section",children:[e.jsx("h2",{className:"section-heading",children:"💡 Use Cases"}),e.jsxs("ul",{className:"use-cases-list",children:[e.jsx("li",{children:"Project management dashboards"}),e.jsx("li",{children:"Resource planning tools"}),e.jsx("li",{children:"Production scheduling systems"}),e.jsx("li",{children:"Event timeline visualization"}),e.jsx("li",{children:"Workflow management applications"}),e.jsx("li",{children:"Planned vs Actual tracking"}),e.jsx("li",{children:"Baseline comparison and variance analysis"})]})]}),e.jsx("hr",{className:"readme-divider"}),e.jsxs("section",{className:"readme-section",children:[e.jsx("h2",{className:"section-heading",children:"🤝 Contributing"}),e.jsx("p",{className:"section-text",children:"Contributions are welcome! Please feel free to submit issues or pull requests."})]}),e.jsx("hr",{className:"readme-divider"}),e.jsxs("section",{className:"readme-section",children:[e.jsx("h2",{className:"section-heading",children:"📄 License"}),e.jsx("p",{className:"section-text",children:"[MIT]"})]}),e.jsx("hr",{className:"readme-divider"}),e.jsxs("section",{className:"readme-section",children:[e.jsx("h2",{className:"section-heading",children:"🔗 Links"}),e.jsxs("ul",{className:"links-list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"NPM Package"}),":"," ",e.jsx("a",{href:"https://www.npmjs.com/package/ts-gantt-engine",className:"link",target:"_blank",rel:"noopener noreferrer",children:"ts-gantt-engine"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"CDN"}),":"," ",e.jsx("a",{href:"https://tekula-hemanth-reddy.github.io/ts-gantt-engine/dist/index.js",className:"link",target:"_blank",rel:"noopener noreferrer",children:"https://tekula-hemanth-reddy.github.io/ts-gantt-engine/dist/index.js"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"GitHub"}),":"," ",e.jsx("a",{href:"https://github.com/Tekula-Hemanth-Reddy/ts-gantt-engine/",className:"link",target:"_blank",rel:"noopener noreferrer",children:"ts-gantt-engine"})]})]})]}),e.jsx("hr",{className:"readme-divider"}),e.jsxs("section",{className:"readme-section",children:[e.jsx("h2",{className:"section-heading",children:"📧 Support"}),e.jsx("p",{className:"section-text",children:"For questions, issues, or feature requests, please open an issue on GitHub or reach out directly:"}),e.jsxs("ul",{className:"support-list",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Email"}),":"," ",e.jsx("a",{href:"mailto:tekulahemanth@gmail.com",className:"link",children:"tekulahemanth@gmail.com"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"LinkedIn"}),":"," ",e.jsx("a",{href:"https://www.linkedin.com/in/hemanth-reddy-tekula/",className:"link",target:"_blank",rel:"noopener noreferrer",children:"Hemanth Reddy Tekula"})]})]})]}),e.jsx("hr",{className:"readme-divider"}),e.jsx("footer",{className:"readme-footer",children:e.jsx("p",{className:"footer-quote",children:'"Learn to fly, go up high, till you reach the sky."'})})]})}));a.displayName="ReadmeDisplay";export{a as default};

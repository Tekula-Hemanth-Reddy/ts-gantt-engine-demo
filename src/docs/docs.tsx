import React from "react";
import "./docs.css";

const ReadmeDisplay = React.memo(() => {
  return (
    <div className="readme-container">
      <div className="readme-wrapper">
        {/* Header */}
        <header className="readme-header">
          <p className="readme-subtitle">
            A highly customizable, lightweight Gantt chart engine written
            entirely in <strong>TypeScript</strong> and rendered using{" "}
            <strong>HTML Canvas</strong>.
          </p>
          <p className="readme-description">
            Built for developers who need powerful Gantt chart functionality
            without the bloat. Features a task grid, interactive timeline,
            relation lines, multiple timeline comparisons, and extensive
            customization options—all in a lightweight package with minimal
            dependencies.
          </p>
        </header>

        <hr className="readme-divider" />

        {/* Features */}
        <section className="readme-section">
          <h2 className="section-heading">✨ Features</h2>

          <div className="features-container">
            <div className="feature-block">
              <h3 className="feature-title">🎨 Fully Customizable</h3>
              <ul className="feature-list">
                <li>
                  <strong>TypeScript-first design</strong> for type safety and
                  better developer experience
                </li>
                <li>
                  <strong>Canvas-powered rendering</strong> for maximum
                  performance and flexibility
                </li>
                <li>
                  Extensive styling options: colors, fonts, dimensions, and more
                </li>
              </ul>
            </div>

            <div className="feature-block">
              <h3 className="feature-title">📊 Dual-Component Architecture</h3>
              <ul className="feature-list">
                <li>
                  <strong>Task Grid</strong> — Vertical scrolling with
                  hierarchical task display
                </li>
                <li>
                  <strong>Gantt Timeline</strong> — Bi-directional scrolling
                  (horizontal & vertical) with date-based visualization
                </li>
              </ul>
            </div>

            <div className="feature-block">
              <h3 className="feature-title">🌲 Tree Structure Support</h3>
              <ul className="feature-list">
                <li>Parent-child task hierarchy</li>
                <li>Smooth expand/collapse animations</li>
                <li>Visual indicators for nested relationships</li>
              </ul>
            </div>

            <div className="feature-block">
              <h3 className="feature-title">📈 Multiple Timeline Support</h3>
              <ul className="feature-list">
                <li>
                  <strong>Main timeline</strong> for primary task duration
                </li>
                <li>
                  <strong>Comparison timelines</strong> for planned vs actual,
                  baseline, forecast, etc.
                </li>
                <li>
                  Support for multiple duration types: original, planned,
                  updated, actual, critical, baseline, forecast, or custom types
                </li>
              </ul>
            </div>

            <div className="feature-block">
              <h3 className="feature-title">🔗 Task Relations</h3>
              <p className="feature-description">
                Draw and visualize four types of task dependencies with
                customizable colors:
              </p>
              <ul className="feature-list">
                <li>
                  <strong>FS</strong> (Finish-to-Start)
                </li>
                <li>
                  <strong>SF</strong> (Start-to-Finish)
                </li>
                <li>
                  <strong>SS</strong> (Start-to-Start)
                </li>
                <li>
                  <strong>FF</strong> (Finish-to-Finish)
                </li>
              </ul>
            </div>

            <div className="feature-block">
              <h3 className="feature-title">🎯 Rich Interactions</h3>
              <ul className="feature-list">
                <li>Tooltip support for detailed task information</li>
                <li>Click event emitters for taskbar interactions</li>
                <li>Responsive mouse tracking and selection</li>
              </ul>
            </div>

            <div className="feature-block">
              <h3 className="feature-title">⚡ Lightweight & Fast</h3>
              <ul className="feature-list">
                <li>
                  Only <strong>one dependency</strong>:{" "}
                  <code className="inline-code">moment-timezone</code>
                </li>
                <li>Minimal bundle size</li>
                <li>Optimized canvas rendering</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="readme-divider" />

        {/* Installation */}
        <section className="readme-section">
          <h2 className="section-heading">📦 Installation</h2>

          <div className="installation-container">
            <div className="install-block">
              <h3 className="install-method">npm</h3>
              <pre className="code-block">
                <code>npm install ts-gantt-engine</code>
              </pre>
            </div>

            <div className="install-block">
              <h3 className="install-method">pnpm</h3>
              <pre className="code-block">
                <code>pnpm add ts-gantt-engine</code>
              </pre>
            </div>

            <div className="install-block">
              <h3 className="install-method">yarn</h3>
              <pre className="code-block">
                <code>yarn add ts-gantt-engine</code>
              </pre>
            </div>

          </div>
        </section>

        <hr className="readme-divider" />

        {/* Quick Start */}
        <section className="readme-section">
          <h2 className="section-heading">🚀 Quick Start</h2>

          <div className="code-examples">
            <pre className="code-block">
              <code>{`/* This will set canvas to take full width and height*/
canvas {
  display: block;
  width: 100%;
  height: 100%;
}`}</code>
            </pre>

            <pre className="code-block code-block-large">
              <code>{`import { GanttEngine } from "ts-gantt-engine";

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
engine.destroy();`}</code>
            </pre>
          </div>
        </section>

        <hr className="readme-divider" />

        {/* API Reference */}
        <section className="readme-section">
          <h2 className="section-heading">📖 API Reference</h2>

          <h3 className="subsection-heading">GanttEngine</h3>

          <div className="api-container">
            <div className="api-block">
              <h4 className="api-title">Constructor</h4>
              <pre className="code-block code-block-small">
                <code>{`new GanttEngine(
  canvas: HTMLCanvasElement,
  format: "day" | "week" | "month" | "quarter" | "year",
  onTaskClick?: (data: GanttTask) => void
)`}</code>
              </pre>
            </div>

            <div className="api-block">
              <h4 className="api-title">Methods</h4>

              <div className="methods-container">
                <div className="method-block">
                  <h5 className="method-name">
                    render(headers, tasks, options, relationColors?)
                  </h5>
                  <p className="method-description">
                    Renders the Gantt chart with the provided data.
                  </p>
                  <pre className="code-block code-block-small">
                    <code>{`engine.render(
  headers: GanttHeader[],
  tasks: GanttTask[],
  options: GanttOptions,
  relationColors?: RelationColors
): void`}</code>
                  </pre>
                </div>

                <div className="method-block">
                  <h5 className="method-name">setFormat(format)</h5>
                  <p className="method-description">
                    Changes the time scale format.
                  </p>
                  <pre className="code-block code-block-small">
                    <code>{`engine.setFormat(format: "day" | "week" | "month" | "quarter" | "year"): void`}</code>
                  </pre>
                </div>

                <div className="method-block">
                  <h5 className="method-name">clearScreen()</h5>
                  <p className="method-description">Clears the canvas.</p>
                  <pre className="code-block code-block-small">
                    <code>{`engine.clearScreen(): void`}</code>
                  </pre>
                </div>

                <div className="method-block">
                  <h5 className="method-name">destroy()</h5>
                  <p className="method-description">
                    Stops drawing chart and destroy the canvas.
                  </p>
                  <pre className="code-block code-block-small">
                    <code>{`engine.destroy(): void`}</code>
                  </pre>
                </div>

                <div className="method-block">
                  <h5 className="method-name">getCanvas()</h5>
                  <p className="method-description">
                    Returns the canvas element.
                  </p>
                  <pre className="code-block code-block-small">
                    <code>{`engine.getCanvas(): HTMLCanvasElement`}</code>
                  </pre>
                </div>

                <div className="method-block">
                  <h5 className="method-name">getBounds()</h5>
                  <p className="method-description">
                    Returns the canvas dimensions.
                  </p>
                  <pre className="code-block code-block-small">
                    <code>{`engine.getBounds(): number[]`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="readme-divider" />

        {/* Type Definitions */}
        <section className="readme-section">
          <h2 className="section-heading">📝 Type Definitions</h2>

          <div className="types-container">
            <div className="type-block">
              <h3 className="type-name">GanttTask</h3>
              <pre className="code-block code-block-small">
                <code>{`interface GanttTask {
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
}`}</code>
              </pre>
            </div>

            <div className="type-block">
              <h3 className="type-name">GanttDuration</h3>
              <pre className="code-block code-block-small">
                <code>{`interface GanttDuration {
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
  | string;  // Custom types allowed`}</code>
              </pre>
            </div>

            <div className="type-block">
              <h3 className="type-name">GanttHeader</h3>
              <pre className="code-block code-block-small">
                <code>{`interface GanttHeader {
  hId: string;      // Unique header ID
  hName: string;    // Header display name
}`}</code>
              </pre>
            </div>

            <div className="type-block">
              <h3 className="type-name">GanttOptions</h3>
              <pre className="code-block code-block-small">
                <code>{`interface GanttOptions {
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
}`}</code>
              </pre>
            </div>

            <div className="type-block">
              <h3 className="type-name">RelationColors</h3>
              <pre className="code-block code-block-small">
                <code>{`interface RelationColors {
  FS: string;  // Finish to Start color
  SF: string;  // Start to Finish color
  SS: string;  // Start to Start color
  FF: string;  // Finish to Finish color
}`}</code>
              </pre>
            </div>
          </div>
        </section>

        <hr className="readme-divider" />

        {/* Customization Examples */}
        <section className="readme-section">
          <h2 className="section-heading">🎨 Customization Examples</h2>

          <div className="examples-container">
            <div className="example-block">
              <h3 className="example-title">Dark Theme</h3>
              <pre className="code-block code-block-small">
                <code>{`engine.render(headers, tasks, {
  headerBg: "#1e1e1e",
  canvasBg: "#2d2d2d",
  fontColor: "#ffffff",
  lineColor: "#404040",
  font: "14px 'Segoe UI'",
});`}</code>
              </pre>
            </div>

            <div className="example-block">
              <h3 className="example-title">Compact View</h3>
              <pre className="code-block code-block-small">
                <code>{`engine.render(headers, tasks, {
  columnWidth: 80,
  headerHeight: 35,
  boxHeight: 35,
  barHeight: 15,
  font: "12px Arial",
});`}</code>
              </pre>
            </div>

            <div className="example-block">
              <h3 className="example-title">Custom Relation Colors</h3>
              <pre className="code-block code-block-small">
                <code>{`const relationColors = {
  FS: "#27AE60",  // Green for Finish-to-Start
  SF: "#E67E22",  // Orange for Start-to-Finish
  SS: "#2980B9",  // Blue for Start-to-Start
  FF: "#8E44AD",  // Purple for Finish-to-Finish
};

engine.render(headers, tasks, options, relationColors);`}</code>
              </pre>
            </div>

            <div className="example-block">
              <h3 className="example-title">Planned vs Actual Comparison</h3>
              <pre className="code-block code-block-small">
                <code>{`const tasks = [
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
];`}</code>
              </pre>
            </div>
          </div>
        </section>

        <hr className="readme-divider" />

        {/* Roadmap */}
        <section className="readme-section">
          <h2 className="section-heading">🗺️ Roadmap</h2>

          <h3 className="subsection-title">🔜 Coming Soon</h3>
          <ul className="roadmap-list">
            <li>
              <strong>Bi-directional scrolling for Task Grid</strong> —
              Horizontal scrolling support
            </li>
            <li>
              <strong>Drag to resize tasks</strong> — Interactive taskbar
              duration adjustment
            </li>
            <li>
              <strong>Hover highlighting</strong> — Highlight tasks and
              relations on mouse hover
            </li>
            <li>
              <strong>Zoom controls</strong> — Dynamic time scale adjustment
            </li>
            <li>
              <strong>Export functionality</strong> — Save charts as images or
              PDF
            </li>
          </ul>
        </section>

        <hr className="readme-divider" />

        {/* Use Cases */}
        <section className="readme-section">
          <h2 className="section-heading">💡 Use Cases</h2>
          <ul className="use-cases-list">
            <li>Project management dashboards</li>
            <li>Resource planning tools</li>
            <li>Production scheduling systems</li>
            <li>Event timeline visualization</li>
            <li>Workflow management applications</li>
            <li>Planned vs Actual tracking</li>
            <li>Baseline comparison and variance analysis</li>
          </ul>
        </section>

        <hr className="readme-divider" />

        {/* Contributing */}
        <section className="readme-section">
          <h2 className="section-heading">🤝 Contributing</h2>
          <p className="section-text">
            Contributions are welcome! Please feel free to submit issues or pull
            requests.
          </p>
        </section>

        <hr className="readme-divider" />

        {/* License */}
        <section className="readme-section">
          <h2 className="section-heading">📄 License</h2>
          <p className="section-text">[MIT]</p>
        </section>

        <hr className="readme-divider" />

        {/* Links */}
        <section className="readme-section">
          <h2 className="section-heading">🔗 Links</h2>
          <ul className="links-list">
            <li>
              <strong>NPM Package</strong>:{" "}
              <a
                href="https://www.npmjs.com/package/ts-gantt-engine"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                ts-gantt-engine
              </a>
            </li>
            {/* <li>
              <strong>CDN</strong>:{" "}
              <a
                href="https://tekula-hemanth-reddy.github.io/ts-gantt-engine/dist/index.js"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://tekula-hemanth-reddy.github.io/ts-gantt-engine/dist/index.js
              </a>
            </li> */}
            <li>
              <strong>GitHub</strong>:{" "}
              <a
                href="https://github.com/Tekula-Hemanth-Reddy/ts-gantt-engine/"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                ts-gantt-engine
              </a>
            </li>
          </ul>
        </section>

        <hr className="readme-divider" />

        {/* Support */}
        <section className="readme-section">
          <h2 className="section-heading">📧 Support</h2>
          <p className="section-text">
            For questions, issues, or feature requests, please open an issue on
            GitHub or reach out directly:
          </p>
          <ul className="support-list">
            <li>
              <strong>Email</strong>:{" "}
              <a href="mailto:tekulahemanth@gmail.com" className="link">
                tekulahemanth@gmail.com
              </a>
            </li>
            <li>
              <strong>LinkedIn</strong>:{" "}
              <a
                href="https://www.linkedin.com/in/hemanth-reddy-tekula/"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hemanth Reddy Tekula
              </a>
            </li>
          </ul>
        </section>

        <hr className="readme-divider" />

        {/* Footer Quote */}
        <footer className="readme-footer">
          <p className="footer-quote">
            "Learn to fly, go up high, till you reach the sky."
          </p>
        </footer>
      </div>
    </div>
  );
});

ReadmeDisplay.displayName = "ReadmeDisplay";
export default ReadmeDisplay;

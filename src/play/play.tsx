import React, { useEffect, useRef, useState } from "react";
import "./play.css";
import {
  GanttEngine,
  type GanttHeader,
  type GanttOptions,
  type GanttTask,
  type PFormat,
  type RelationColors,
} from "ts-gantt-engine";
import {
  sampleGanttOptions,
  sampleHeaders,
  sampleRelationColors,
} from "./constants";
import { generateRandomGanttData } from "./randomizer";
const Play = React.memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<GanttEngine | null>(null);
  const initialized = useRef(false);

  const headers: GanttHeader[] = sampleHeaders;
  const ganttOptions: GanttOptions = sampleGanttOptions;
  const relationColors: RelationColors = sampleRelationColors;
  const ganttData: GanttTask[] = generateRandomGanttData(40);
  const [currentFormat, setCurrentFormat] = useState<PFormat>("day");

  const onClickEvent = (data: { pId: string; gId: string }) => {
    alert(`gId: ${data.gId} \npId: ${data.pId}`);
  };

  const resetData = () => {
    const ts = generateRandomGanttData(100);
    const engine = engineRef.current;
    if (!engine) return;
    engine.clearScreen();
    engine.render(headers, ts, ganttOptions, relationColors);
  };

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;

    // Initialize the gantt chart engine
    const engine = new GanttEngine(canvas, currentFormat, onClickEvent);
    engineRef.current = engine;
    // Set the data and date range
    engine.render(headers, ganttData, ganttOptions, relationColors);

    // Cleanup
    return () => {
      engine.clearScreen();
    };
  }, []);

  return (
    <div className="gantt-container">
      <div className="toolbar">
        <div className="toolbar-left">
          <button className="btn-primary" onClick={resetData}>Randomize Data</button>
        </div>

        <div className="toolbar-right">
          {["day", "week", "month", "quarter", "year"].map((format) => (
            <button key={format} className={currentFormat == format ? "btn-primary" : "btn-segment"}
            onClick={() => {
                setCurrentFormat(format as PFormat);
                engineRef.current?.setFormat(format as PFormat);
              }}>
              {format}
            </button>
          ))}
        </div>
      </div>
      <div className="canvas-container">
        <canvas
          ref={canvasRef}
          style={{
            border: "1px solid #ccc",
            display: "block",
            cursor: "default",
          }}
        />
      </div>
    </div>
  );
});

Play.displayName = "Play";
export default Play;

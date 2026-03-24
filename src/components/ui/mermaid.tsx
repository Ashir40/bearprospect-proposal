"use client";

import { useEffect, useRef, useState } from "react";

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export function MermaidDiagram({ chart, className }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");

  useEffect(() => {
    const renderChart = async () => {
      const mermaid = (await import("mermaid")).default;
      mermaid.initialize({
        startOnLoad: false,
        theme: "dark",
        themeVariables: {
          darkMode: true,
          background: "#0a0f1e",
          primaryColor: "#134e4a",
          primaryTextColor: "#e2e8f0",
          primaryBorderColor: "#2dd4bf",
          lineColor: "#2dd4bf",
          secondaryColor: "#1e293b",
          tertiaryColor: "#0f172a",
          fontFamily: "Inter, sans-serif",
          fontSize: "14px",
          nodeBorder: "#2dd4bf",
          mainBkg: "#0f1d2e",
          nodeTextColor: "#e2e8f0",
          clusterBkg: "#0f172a",
          clusterBorder: "#1e3a4a",
          titleColor: "#2dd4bf",
          edgeLabelBackground: "#0a0f1e",
          actorBkg: "#134e4a",
          actorBorder: "#2dd4bf",
          actorTextColor: "#e2e8f0",
          signalColor: "#2dd4bf",
          sectionBkgColor: "#0f172a",
          altSectionBkgColor: "#111c2e",
          gridColor: "#1e293b",
          taskBkgColor: "#134e4a",
          taskBorderColor: "#2dd4bf",
          taskTextColor: "#e2e8f0",
          doneTaskBkgColor: "#065f46",
          activeTaskBkgColor: "#0d9488",
          todayLineColor: "#f59e0b",
        },
      });

      try {
        const id = `mermaid-${Math.random().toString(36).slice(2, 9)}`;
        const { svg: renderedSvg } = await mermaid.render(id, chart);
        setSvg(renderedSvg);
      } catch (err) {
        console.error("Mermaid render error:", err);
      }
    };

    renderChart();
  }, [chart]);

  return (
    <div
      ref={containerRef}
      className={className}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

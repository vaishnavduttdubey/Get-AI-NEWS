import React, { useEffect } from "react";
import sdk from "@stackblitz/sdk";

interface stackblitzProps {
  width: string;
  height: string;
}

const StackBlitzEditor: React.FC<stackblitzProps> = ({
  width,
  height,
}: stackblitzProps) => {
  useEffect(() => {
    // Embed the StackBlitz project
    sdk.embedProjectId("editor", "demo-react-application-3mzwucpv", {
      forceEmbedLayout: true,
      openFile: "src/App.js",
    });
  }, []);

  return (
    <section className={`${width} ${height}`}>
      <div id="editor" className="w-full h-full"></div>
    </section>
  );
};

export default StackBlitzEditor;

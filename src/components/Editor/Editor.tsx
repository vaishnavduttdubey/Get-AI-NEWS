import { Editor } from "@monaco-editor/react";

interface EditorCompProps {
  /** Programming language like "javascript", "typescript", "html", etc. */
  language?: string;
  /** The current code shown in the editor */
  value?: string;
  /** Called when user edits code */
  onChange: (code: string) => void;
  /** Editor height, default is 85% of viewport height */
  height?: string | number;
  /** Monaco theme: "vs-dark", "light", or "vs" */
  theme?: "vs-dark" | "light" | "vs";
  /** Is the editor in read-only mode? */
  readOnly?: boolean;
}

const EditorComp: React.FC<EditorCompProps> = ({
  language = "javascript",
  value = "",
  onChange,
  height = "85vh",
  theme = "vs-dark",
  readOnly = false,
}) => {
  return (
    <div className="rounded-md border border-slate-700 overflow-hidden shadow-md">
      <Editor
        language={language}
        value={value}
        onChange={(val) => {
          if (val !== undefined) onChange(val);
        }}
        height={height}
        theme={theme}
        options={{
          fontSize: 14,
          fontFamily: "Fira Code, monospace",
          minimap: { enabled: false },
          wordWrap: "on",
          scrollBeyondLastLine: false,
          automaticLayout: true,
          readOnly,
          lineNumbersMinChars: 3,
          tabSize: 2,
          formatOnType: true,
          formatOnPaste: true,
          padding: { top: 10 },
        }}
      />
    </div>
  );
};

export default EditorComp;

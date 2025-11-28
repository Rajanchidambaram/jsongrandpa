"use client";
import dynamic from "next/dynamic";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export default function JsonEditor({ value, setValue, height = "60vh", readOnly = false }) {
  return (
    <div style={{ height }}>
      <MonacoEditor
        height="100%"
        defaultLanguage="json"
        value={value}
        onChange={(v) => setValue && setValue(v)}
        options={{
          minimap: { enabled: false },
          formatOnPaste: true,
          formatOnType: true,
          readOnly: readOnly,
          scrollBeyondLastLine: false,
          fontSize: 14,
          wordWrap: "on",
        }}
      />
    </div>
  );
}

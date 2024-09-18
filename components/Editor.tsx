"use client";

import { MDXEditor, MDXEditorMethods, headingsPlugin } from "@mdxeditor/editor";
import { FC } from "react";

import '@mdxeditor/editor/style.css'

interface EditorProps {
  markdown: string;
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>;
  readOnly: boolean;
}

/**
 * Extend this Component further with the necessary plugins or props you need.
 * proxying the ref is necessary. Next.js dynamically imported components don't support refs.
 */
const Editor: FC<EditorProps> = ({ markdown, editorRef, readOnly = false }) => {
  return (
    <MDXEditor
      onChange={(e) => console.log(e)}
      ref={editorRef}
      markdown={markdown}
      readOnly={readOnly}
      className="p-medium-16 lg:p-regular-18"
      plugins={[headingsPlugin()]}
    />
  );
};

export default Editor;
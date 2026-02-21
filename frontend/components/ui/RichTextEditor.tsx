'use client';

import { useEffect, useRef } from 'react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
  };

  return (
    <div className="border rounded-lg bg-white">
      {/* Toolbar */}
      <div className="flex gap-2 p-2 border-b bg-gray-50 rounded-t-lg flex-wrap">
        <button
          onClick={() => execCommand('bold')}
          className="px-2 py-1 rounded hover:bg-gray-200"
          title="Bold"
        >
          <b>B</b>
        </button>

        <button
          onClick={() => execCommand('italic')}
          className="px-2 py-1 rounded hover:bg-gray-200"
          title="Italic"
        >
          <i>I</i>
        </button>

        <button
          onClick={() => execCommand('underline')}
          className="px-2 py-1 rounded hover:bg-gray-200"
          title="Underline"
        >
          <u>U</u>
        </button>

        <button
          onClick={() => execCommand('insertUnorderedList')}
          className="px-2 py-1 rounded hover:bg-gray-200"
          title="Bullet List"
        >
          • List
        </button>

        <button
          onClick={() => execCommand('insertOrderedList')}
          className="px-2 py-1 rounded hover:bg-gray-200"
          title="Numbered List"
        >
          1. List
        </button>

        <button
          onClick={() => {
            const url = prompt('Enter link URL');
            if (url) execCommand('createLink', url);
          }}
          className="px-2 py-1 rounded hover:bg-gray-200"
          title="Link"
        >
          Link
        </button>

        <button
          onClick={() => {
            const url = prompt('Enter image URL');
            if (url) execCommand('insertImage', url);
          }}
          className="px-2 py-1 rounded hover:bg-gray-200"
          title="Image"
        >
          Img
        </button>
      </div>

      {/* Editable Area */}
      <div
        ref={editorRef}
        contentEditable
        className="p-4 min-h-[200px] outline-none"
        onInput={(e) => onChange((e.target as HTMLDivElement).innerHTML)}
      ></div>
    </div>
  );
}

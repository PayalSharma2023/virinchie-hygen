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
    <div className="border border-gray-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800">

      {/* Toolbar */}
      <div className="flex gap-2 p-2 border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-700 rounded-t-lg flex-wrap">

        <button
          onClick={() => execCommand('bold')}
          className="px-2 py-1 rounded text-gray-700 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
          title="Bold"
        >
          <b>B</b>
        </button>

        <button
          onClick={() => execCommand('italic')}
          className="px-2 py-1 rounded text-gray-700 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
          title="Italic"
        >
          <i>I</i>
        </button>

        <button
          onClick={() => execCommand('underline')}
          className="px-2 py-1 rounded text-gray-700 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
          title="Underline"
        >
          <u>U</u>
        </button>

        <button
          onClick={() => execCommand('insertUnorderedList')}
          className="px-2 py-1 rounded text-gray-700 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
          title="Bullet List"
        >
          • List
        </button>

        <button
          onClick={() => execCommand('insertOrderedList')}
          className="px-2 py-1 rounded text-gray-700 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
          title="Numbered List"
        >
          1. List
        </button>

        <button
          onClick={() => {
            const url = prompt('Enter link URL');
            if (url) execCommand('createLink', url);
          }}
          className="px-2 py-1 rounded text-gray-700 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
          title="Link"
        >
          Link
        </button>

        <button
          onClick={() => {
            const url = prompt('Enter image URL');
            if (url) execCommand('insertImage', url);
          }}
          className="px-2 py-1 rounded text-gray-700 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
          title="Image"
        >
          Img
        </button>

      </div>

      {/* Editable Area */}
      <div
        ref={editorRef}
        contentEditable
        className="p-4 min-h-[200px] outline-none text-gray-900 dark:text-slate-100"
        onInput={(e) => onChange((e.target as HTMLDivElement).innerHTML)}
      />
    </div>
  );
}
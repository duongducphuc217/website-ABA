"use client";
import React, { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";

export default function RichTextEditor({ value, onChange, placeholder }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "editor-link",
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: "editor-image",
        },
      }),
      Placeholder.configure({
        placeholder: placeholder || "Viết nội dung bài viết trực quan ở đây...",
      }),
    ],
    content: value || "",
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  // Đồng bộ hóa dữ liệu từ ngoài vào editor (phục vụ sửa bài viết)
  useEffect(() => {
    if (editor && value !== undefined && editor.getHTML() !== value) {
      editor.commands.setContent(value || "");
    }
  }, [value, editor]);

  if (!mounted || !editor) {
    return (
      <div style={styles.loadingContainer}>
        <div className="spinner-border spinner-border-sm text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <span style={{ marginLeft: "10px", fontSize: "14px", color: "#64748b", fontWeight: "500" }}>
          Đang khởi tạo trình soạn thảo TipTap...
        </span>
      </div>
    );
  }

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("Nhập địa chỉ liên kết (URL):", previousUrl || "https://");

    if (url === null) {
      return;
    }

    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  const addImage = () => {
    const url = window.prompt("Nhập đường dẫn hình ảnh (URL):");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <div style={styles.container}>
      <style dangerouslySetInnerHTML={{
        __html: `
          /* TipTap Editor Container focus */
          .tiptap-editor-focused {
            border-color: #4f46e5 !important;
            box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15) !important;
          }
          
          /* TipTap Base Content Styling */
          .ProseMirror {
            outline: none;
            min-height: 380px;
            max-height: 650px;
            padding: 24px;
            overflow-y: auto;
            font-size: 15px;
            line-height: 1.6;
            color: #334155;
            background-color: #ffffff;
            transition: all 0.2s ease;
          }
          
          /* Placeholder */
          .ProseMirror p.is-editor-empty:first-child::before {
            content: attr(data-placeholder);
            float: left;
            color: #94a3b8;
            pointer-events: none;
            height: 0;
            font-style: italic;
          }

          /* Headings & Text Elements */
          .ProseMirror h4 {
            font-size: 20px;
            font-weight: 700;
            margin-top: 20px;
            margin-bottom: 12px;
            color: #1e293b;
          }
          .ProseMirror h5 {
            font-size: 17px;
            font-weight: 700;
            margin-top: 18px;
            margin-bottom: 10px;
            color: #1e293b;
          }
          .ProseMirror p {
            margin-bottom: 14px;
            line-height: 1.65;
            color: #334155;
          }
          .ProseMirror ul, .ProseMirror ol {
            padding-left: 24px;
            margin-bottom: 16px;
          }
          .ProseMirror ul {
            list-style-type: disc;
          }
          .ProseMirror ol {
            list-style-type: decimal;
          }
          .ProseMirror li {
            margin-bottom: 6px;
          }
          
          /* Embeds */
          .ProseMirror img {
            max-width: 100%;
            height: auto;
            border-radius: 12px;
            margin: 20px 0;
            display: block;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
          }
          .ProseMirror a {
            color: #4f46e5;
            text-decoration: underline;
            font-weight: 600;
          }
          
          /* Blockquote */
          .ProseMirror blockquote {
            border-left: 4px solid #4f46e5;
            padding-left: 20px;
            color: #475569;
            font-style: italic;
            margin: 20px 0;
            background-color: #f8fafc;
            padding-top: 10px;
            padding-bottom: 10px;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
          }

          /* Micro-animations and active classes */
          .tiptap-btn-active {
            background-color: #4f46e5 !important;
            color: #ffffff !important;
            border-color: #4f46e5 !important;
          }
          .tiptap-btn-active svg {
            stroke: #ffffff !important;
          }
          .tiptap-toolbar-btn {
            background-color: #ffffff;
            border: 1px solid #e2e8f0;
            cursor: pointer;
            transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
            color: #475569;
          }
          .tiptap-toolbar-btn:hover:not(:disabled) {
            background-color: #f1f5f9;
            border-color: #cbd5e1;
            color: #1e293b;
            transform: translateY(-1px);
          }
          .tiptap-toolbar-btn:active:not(:disabled) {
            transform: translateY(0px);
          }
        `
      }} />

      {/* Toolbar Area */}
      <div style={styles.toolbar}>
        
        {/* Nhóm 1: Undo/Redo */}
        <div style={styles.btnGroup}>
          <button
            type="button"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            className="tiptap-toolbar-btn"
            style={{ ...styles.btn, opacity: editor.can().undo() ? 1 : 0.4 }}
            title="Hoàn tác (Undo)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/></svg>
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            className="tiptap-toolbar-btn"
            style={{ ...styles.btn, opacity: editor.can().redo() ? 1 : 0.4 }}
            title="Làm lại (Redo)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"/></svg>
          </button>
        </div>

        {/* Nhóm 2: Định dạng chữ */}
        <div style={styles.btnGroup}>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`tiptap-toolbar-btn ${editor.isActive("bold") ? "tiptap-btn-active" : ""}`}
            style={styles.btn}
            title="In đậm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/></svg>
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`tiptap-toolbar-btn ${editor.isActive("italic") ? "tiptap-btn-active" : ""}`}
            style={styles.btn}
            title="In nghiêng"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/></svg>
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={`tiptap-toolbar-btn ${editor.isActive("strike") ? "tiptap-btn-active" : ""}`}
            style={styles.btn}
            title="Gạch ngang"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4H9a3 3 0 0 0-2.83 4H17a4 4 0 0 1-3.13 7H6"/><line x1="3" y1="12" x2="21" y2="12"/></svg>
          </button>
        </div>

        {/* Nhóm 3: Tiêu đề & Cấu trúc block */}
        <div style={styles.btnGroup}>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
            className={`tiptap-toolbar-btn ${editor.isActive("heading", { level: 4 }) ? "tiptap-btn-active" : ""}`}
            style={{ ...styles.btn, width: "36px" }}
            title="Tiêu đề H4"
          >
            <span style={{ fontSize: "12px", fontWeight: "800", fontFamily: "sans-serif" }}>H4</span>
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
            className={`tiptap-toolbar-btn ${editor.isActive("heading", { level: 5 }) ? "tiptap-btn-active" : ""}`}
            style={{ ...styles.btn, width: "36px" }}
            title="Tiêu đề H5"
          >
            <span style={{ fontSize: "12px", fontWeight: "800", fontFamily: "sans-serif" }}>H5</span>
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={`tiptap-toolbar-btn ${editor.isActive("paragraph") ? "tiptap-btn-active" : ""}`}
            style={{ ...styles.btn, width: "32px" }}
            title="Đoạn văn"
          >
            <span style={{ fontSize: "13px", fontWeight: "700", fontFamily: "sans-serif" }}>P</span>
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={`tiptap-toolbar-btn ${editor.isActive("blockquote") ? "tiptap-btn-active" : ""}`}
            style={styles.btn}
            title="Trích dẫn (Quote)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-9 7-14a5 5 0 0 0-5-5 5 5 0 0 0-5 5c0 5 3 14 3 14zm11 0c3 0 7-9 7-14a5 5 0 0 0-5-5 5 5 0 0 0-5 5c0 5 3 14 3 14z"/></svg>
          </button>
        </div>

        {/* Nhóm 4: Danh sách */}
        <div style={styles.btnGroup}>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`tiptap-toolbar-btn ${editor.isActive("bulletList") ? "tiptap-btn-active" : ""}`}
            style={styles.btn}
            title="Danh sách chấm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`tiptap-toolbar-btn ${editor.isActive("orderedList") ? "tiptap-btn-active" : ""}`}
            style={styles.btn}
            title="Danh sách số"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="10" y1="6" x2="21" y2="6"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="18" x2="21" y2="18"/><path d="M4 6H3a1 1 0 0 0 0 2h1"/><path d="M4 10H3a1 1 0 0 0 0 2h1"/><path d="M4 14H3a1 1 0 0 0 0 2h1"/></svg>
          </button>
        </div>

        {/* Nhóm 5: Đính kèm Link/Ảnh */}
        <div style={styles.btnGroup}>
          <button
            type="button"
            onClick={setLink}
            className={`tiptap-toolbar-btn ${editor.isActive("link") ? "tiptap-btn-active" : ""}`}
            style={styles.btn}
            title="Chèn liên kết"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          </button>
          <button
            type="button"
            onClick={addImage}
            className="tiptap-toolbar-btn"
            style={styles.btn}
            title="Chèn ảnh từ URL"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          </button>
        </div>

        {/* Nhóm 6: Xóa định dạng */}
        <div style={styles.btnGroup}>
          <button
            type="button"
            onClick={() => editor.chain().focus().removeFormat().run()}
            className="tiptap-toolbar-btn"
            style={styles.btn}
            title="Xóa toàn bộ định dạng"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
          </button>
        </div>

      </div>

      {/* Editor Canvas Container */}
      <div className={`tiptap-editor-canvas-wrapper ${editor.isFocused ? "tiptap-editor-focused" : ""}`} style={styles.canvasWrapper}>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    border: "1px solid #cbd5e1",
    borderRadius: "10px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.02)",
    transition: "all 0.2s ease",
  },
  toolbar: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    padding: "10px 14px",
    backgroundColor: "#f8fafc",
    borderBottom: "1px solid #e2e8f0",
    alignItems: "center",
  },
  btnGroup: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    padding: "2px",
    backgroundColor: "#f1f5f9",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
  },
  btn: {
    padding: "0",
    border: "1px solid transparent",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.15s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "32px",
    height: "32px",
    backgroundColor: "transparent",
  },
  canvasWrapper: {
    border: "none",
    transition: "all 0.2s ease",
  },
  divider: {
    width: "1px",
    height: "20px",
    backgroundColor: "#cbd5e1",
    margin: "0 2px",
  },
  loadingContainer: {
    padding: "24px",
    border: "1px solid #cbd5e1",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8fafc",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  },
};

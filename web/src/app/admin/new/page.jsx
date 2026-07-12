"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";

const RichTextEditor = dynamic(() => import("@/components/RichTextEditor"), {
  ssr: false,
  loading: () => (
    <div style={{
      padding: "24px",
      border: "1px dashed #cbd5e1",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f8fafc"
    }}>
      <span style={{ fontSize: "14px", color: "#64748b", fontWeight: "500" }}>
        Đang tải trình soạn thảo văn bản...
      </span>
    </div>
  ),
});

export default function NewBlogPost() {
  const router = useRouter();

  // Form states
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("Trải nghiệm");
  const [author, setAuthor] = useState("Admin");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  
  // Interaction states
  const [isSlugManual, setIsSlugManual] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("admin_token");
      if (token !== "admin_token_website_aba") {
        router.push("/admin/login");
      } else {
        const storedUser = localStorage.getItem("admin_user");
        if (storedUser) {
          try {
            const user = JSON.parse(storedUser);
            if (user.name) {
              setAuthor(user.name);
            }
          } catch (e) {}
        }
      }
    }
  }, [router]);

  // Auto-generate slug from title
  const generateSlug = (val) => {
    return val
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "d")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  const handleTitleChange = (e) => {
    const val = e.target.value;
    setTitle(val);
    if (!isSlugManual) {
      setSlug(generateSlug(val));
    }
  };

  const handleSlugChange = (e) => {
    setIsSlugManual(true);
    setSlug(e.target.value);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    setError("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setImage(data.url);
      } else {
        setError(data.error || "Tải ảnh lên thất bại!");
      }
    } catch (err) {
      setError("Đã xảy ra lỗi khi tải ảnh lên!");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !category || !content) {
      setError("Vui lòng điền đầy đủ tiêu đề, danh mục và nội dung!");
      return;
    }

    setSubmitting(true);
    setError("");

    const token = localStorage.getItem("admin_token");
    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          slug,
          category,
          author,
          image,
          description,
          content,
        }),
      });
      const data = await response.json();

      if (data.success) {
        router.push("/admin");
      } else {
        setError(data.error || "Không thể lưu bài viết!");
      }
    } catch (err) {
      setError("Đã xảy ra lỗi kết nối API!");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={styles.wrapper}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div style={styles.sidebarBrand}>
          <span style={{ fontSize: "24px" }}>🎒</span>
          <span style={styles.brandText}>ABA Academy</span>
        </div>
        <nav style={styles.nav}>
          <Link href="/admin" style={styles.navLink}>
            📊 Tổng quan Dashboard
          </Link>
          <Link href="/admin/new" style={{ ...styles.navLink, ...styles.navLinkActive }}>
            ✍️ Viết bài mới
          </Link>
          <a href="/" target="_blank" style={styles.navLink}>
            🌐 Xem Website
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={styles.main}>
        <header style={styles.header}>
          <div>
            <h1 style={styles.pageTitle}>Viết bài viết mới</h1>
            <p style={{ color: "#64748b", margin: "4px 0 0 0" }}>Tạo một bài viết mới và xuất bản lên Website ABA</p>
          </div>
          <Link href="/admin" style={styles.backBtn}>
            ← Quay lại Dashboard
          </Link>
        </header>

        {error && <div style={styles.errorAlert}>{error}</div>}

        <form onSubmit={handleSubmit} style={styles.formCard}>
          <div style={styles.formGrid}>
            {/* Left Column (Main details) */}
            <div style={styles.leftColumn}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Tiêu đề bài viết <span style={{ color: "#ef4444" }}>*</span></label>
                <input
                  type="text"
                  placeholder="Nhập tiêu đề hấp dẫn..."
                  value={title}
                  onChange={handleTitleChange}
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Đường dẫn thân thiện (Slug)</label>
                <input
                  type="text"
                  placeholder="tieu-de-bai-viet-slug"
                  value={slug}
                  onChange={handleSlugChange}
                  style={styles.input}
                />
                <span style={styles.helperText}>Để trống để tự động tạo từ tiêu đề</span>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Mô tả ngắn (Description)</label>
                <textarea
                  placeholder="Tóm tắt ngắn nội dung bài viết hiển thị ở danh sách (1-2 câu)..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  style={{ ...styles.input, height: "80px", resize: "none" }}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={{ ...styles.label, marginBottom: "8px" }}>
                  Nội dung bài viết <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <RichTextEditor
                  value={content}
                  onChange={setContent}
                  placeholder="Viết nội dung bài viết trực quan ở đây..."
                />
              </div>
            </div>

            {/* Right Column (Side details) */}
            <div style={styles.rightColumn}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Danh mục <span style={{ color: "#ef4444" }}>*</span></label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={styles.select}
                >
                  <option value="Trải nghiệm">⛺ Trải nghiệm & Dã ngoại</option>
                  <option value="Sự kiện">📅 Sự kiện học tập</option>
                  <option value="Kỹ năng sống">🧩 Kỹ năng sống</option>
                  <option value="Định hướng">🎯 Định hướng nghề nghiệp</option>
                  <option value="Học tập">📖 Góc học tập</option>
                  <option value="Thông báo">📢 Thông báo</option>
                </select>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Tác giả</label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Tên người đăng..."
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Ảnh đại diện bài viết</label>
                <div style={styles.uploadBox}>
                  {image ? (
                    <div style={styles.previewContainer}>
                      <img src={image} alt="Preview Banner" style={styles.previewImage} />
                      <button type="button" onClick={() => setImage("")} style={styles.removeImageBtn}>
                        ❌ Thay đổi ảnh
                      </button>
                    </div>
                  ) : (
                    <label style={styles.uploadLabel}>
                      <div style={styles.uploadIcon}>📸</div>
                      <span style={{ fontSize: "14px", fontWeight: "600", color: "#0c65c4" }}>
                        {uploading ? "Đang tải lên..." : "Tải ảnh lên từ thiết bị"}
                      </span>
                      <span style={{ fontSize: "12px", color: "#64748b", marginTop: "4px" }}>
                        PNG, JPG, WEBP lên đến 5MB
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        disabled={uploading}
                        style={{ display: "none" }}
                      />
                    </label>
                  )}
                </div>
                <div style={{ marginTop: "12px" }}>
                  <label style={styles.label}>Hoặc nhập URL ảnh trực tiếp</label>
                  <input
                    type="text"
                    placeholder="https://example.com/image.jpg"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    style={styles.input}
                  />
                </div>
              </div>

              <button type="submit" disabled={submitting} style={styles.publishBtn}>
                {submitting ? "Đang xuất bản..." : "🚀 Xuất bản Bài viết"}
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    backgroundColor: "#f8fafc",
    fontFamily: "'Inter', sans-serif",
  },
  sidebar: {
    width: "260px",
    backgroundColor: "#091e36",
    color: "#ffffff",
    padding: "32px 24px",
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    borderRight: "1px solid rgba(255, 255, 255, 0.05)",
  },
  sidebarBrand: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  brandText: {
    fontSize: "20px",
    fontWeight: "700",
    letterSpacing: "-0.5px",
    color: "#f8fafc",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    flexGrow: 1,
  },
  navLink: {
    display: "block",
    padding: "12px 16px",
    borderRadius: "10px",
    color: "#94a3b8",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "500",
    transition: "all 0.2s ease",
  },
  navLinkActive: {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    color: "#f26e3a",
    fontWeight: "600",
    borderLeft: "3px solid #f26e3a",
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
  },
  main: {
    flexGrow: 1,
    padding: "40px",
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "32px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "16px",
  },
  pageTitle: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#0f172a",
    margin: 0,
    letterSpacing: "-0.5px",
  },
  backBtn: {
    padding: "10px 18px",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    border: "1px solid #cbd5e1",
    color: "#475569",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "13px",
    transition: "all 0.2s ease",
  },
  errorAlert: {
    backgroundColor: "#fef2f2",
    border: "1px solid #fca5a5",
    color: "#b91c1c",
    padding: "16px 20px",
    borderRadius: "12px",
    fontSize: "14px",
    fontWeight: "500",
  },
  formCard: {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    border: "1px solid #e2e8f0",
    padding: "32px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "32px",
  },
  leftColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  rightColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    borderLeft: "1px solid #e2e8f0",
    paddingLeft: "32px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#334155",
  },
  input: {
    padding: "12px 16px",
    borderRadius: "10px",
    border: "1px solid #cbd5e1",
    fontSize: "15px",
    outline: "none",
    color: "#1e293b",
    transition: "all 0.2s ease",
    width: "100%",
  },
  select: {
    padding: "12px 16px",
    borderRadius: "10px",
    border: "1px solid #cbd5e1",
    fontSize: "15px",
    outline: "none",
    color: "#1e293b",
    width: "100%",
    backgroundColor: "#ffffff",
  },
  helperText: {
    fontSize: "12px",
    color: "#64748b",
  },
  toolbar: {
    display: "flex",
    gap: "6px",
    flexWrap: "wrap",
  },
  toolBtn: {
    padding: "4px 8px",
    borderRadius: "6px",
    backgroundColor: "#f1f5f9",
    border: "1px solid #e2e8f0",
    fontSize: "11px",
    fontWeight: "600",
    color: "#475569",
    cursor: "pointer",
    transition: "all 0.15s ease",
  },
  uploadBox: {
    border: "2px dashed #cbd5e1",
    borderRadius: "12px",
    padding: "24px",
    textAlign: "center",
    backgroundColor: "#f8fafc",
    cursor: "pointer",
  },
  uploadLabel: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
  },
  uploadIcon: {
    fontSize: "32px",
    marginBottom: "12px",
  },
  previewContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
  },
  previewImage: {
    width: "100%",
    maxHeight: "150px",
    objectFit: "cover",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
  },
  removeImageBtn: {
    padding: "6px 12px",
    borderRadius: "6px",
    backgroundColor: "#fff1f2",
    border: "1px solid #fecdd3",
    color: "#e11d48",
    fontSize: "12px",
    fontWeight: "500",
    cursor: "pointer",
  },
  publishBtn: {
    padding: "14px 20px",
    borderRadius: "12px",
    backgroundColor: "#f26e3a",
    color: "#ffffff",
    border: "none",
    fontWeight: "600",
    fontSize: "15px",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(242, 110, 58, 0.25)",
    transition: "all 0.2s ease",
    marginTop: "16px",
  },
};
// Add CSS keyframes for spin inside global layout or index

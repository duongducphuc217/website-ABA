"use client";

import React from "react";
import Link from "next/link";
import useAdminState from "./hooks/useAdminState";
import { styles } from "./adminStyles";

// Import modular tab components
import BlogsTab from "./components/BlogsTab";
import UsersTab from "./components/UsersTab";
import QrcodesTab from "./components/QrcodesTab";
import LinksTab from "./components/LinksTab";
import MenuTab from "./components/MenuTab";
import PagesTab from "./components/PagesTab";
import MediaTab from "./components/MediaTab";

export default function AdminDashboard() {
  const state = useAdminState();

  if (state.loading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.spinner}></div>
        <p style={{ color: "#94a3b8", marginTop: "16px" }}>Đang tải dữ liệu...</p>
      </div>
    );
  }

  return (
    <div style={styles.wrapper} className="admin-dashboard-wrapper">
      <style>{`
        @media (max-width: 991px) {
          .admin-dashboard-wrapper {
            flex-direction: column !important;
          }
          .admin-sidebar {
            width: 100% !important;
            padding: 24px 20px !important;
            flex-direction: column !important;
            gap: 16px !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
          }
          .admin-sidebar-nav {
            flex-direction: row !important;
            flex-wrap: wrap !important;
            width: 100% !important;
            gap: 8px !important;
          }
          .admin-sidebar-nav button, .admin-sidebar-nav a {
            flex-grow: 1 !important;
            text-align: center !important;
            padding: 10px !important;
            font-size: 13px !important;
          }
          .admin-main {
            padding: 20px !important;
            gap: 24px !important;
          }
          .admin-stats-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .admin-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 16px !important;
          }
          .admin-header a {
            width: 100% !important;
            text-align: center !important;
          }
          .admin-users-layout {
            flex-direction: column !important;
            gap: 24px !important;
          }
          .admin-user-list-card, .admin-user-form-card {
            width: 100% !important;
          }
          .admin-user-list-card {
            order: 2 !important;
          }
          .admin-user-form-card {
            order: 1 !important;
          }
          .admin-blog-table-container {
            overflow-x: auto !important;
            width: 100% !important;
          }
          .admin-blog-table {
            min-width: 700px !important;
          }
        }
        
        /* Focus state for inputs and textareas */
        .admin-form-input {
          transition: all 0.2s ease-in-out !important;
        }
        .admin-form-input:focus {
          border-color: #f26e3a !important;
          box-shadow: 0 0 0 3px rgba(242, 110, 58, 0.15) !important;
          background-color: #ffffff !important;
        }
        /* Hover effect for buttons */
        .admin-btn-hover {
          transition: all 0.2s ease-in-out !important;
        }
        .admin-btn-hover:hover {
          background-color: #e25c28 !important;
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(242, 110, 58, 0.35) !important;
        }
        .admin-btn-hover:active {
          transform: translateY(0);
        }
        /* Custom styling for the table columns */
        .qr-table th {
          white-space: nowrap !important;
        }
        .qr-table td {
          vertical-align: middle !important;
        }
        .qr-action-btn {
          white-space: nowrap !important;
          transition: all 0.2s ease !important;
        }
        .qr-action-btn:hover {
          background-color: #cbd5e1 !important;
          transform: scale(1.02);
        }
        .qr-delete-btn {
          white-space: nowrap !important;
          transition: all 0.2s ease !important;
        }
        .qr-delete-btn:hover {
          background-color: #ffe4e6 !important;
          transform: scale(1.02);
        }
      `}</style>
      {/* Sidebar */}
      <aside style={styles.sidebar} className="admin-sidebar">
        <div style={styles.sidebarBrand}>
          <span style={{ fontSize: "24px" }}>🎒</span>
          <span style={styles.brandText}>ABA Academy</span>
        </div>
        <nav style={styles.nav} className="admin-sidebar-nav">
          <button
            onClick={() => state.setActiveTab("blogs")}
            style={{
              ...styles.navLinkButton,
              ...(state.activeTab === "blogs" ? styles.navLinkActive : styles.navLinkInactive),
            }}
          >
            📊 Quản lý Bài viết
          </button>
          <button
            onClick={() => state.setActiveTab("users")}
            style={{
              ...styles.navLinkButton,
              ...(state.activeTab === "users" ? styles.navLinkActive : styles.navLinkInactive),
            }}
          >
            👥 Quản lý Tài khoản
          </button>
          <button
            onClick={() => state.setActiveTab("qrcodes")}
            style={{
              ...styles.navLinkButton,
              ...(state.activeTab === "qrcodes" ? styles.navLinkActive : styles.navLinkInactive),
            }}
          >
            📱 Quản lý QR Code
          </button>
          <button
            onClick={() => state.setActiveTab("links")}
            style={{
              ...styles.navLinkButton,
              ...(state.activeTab === "links" ? styles.navLinkActive : styles.navLinkInactive),
            }}
          >
            🔗 Rút gọn Link
          </button>
          <button
            onClick={() => state.setActiveTab("menu")}
            style={{
              ...styles.navLinkButton,
              ...(state.activeTab === "menu" ? styles.navLinkActive : styles.navLinkInactive),
            }}
          >
            🗺️ Cấu hình Menu
          </button>
          <button
            onClick={() => state.setActiveTab("pages")}
            style={{
              ...styles.navLinkButton,
              ...(state.activeTab === "pages" ? styles.navLinkActive : styles.navLinkInactive),
            }}
          >
            📄 Nội dung Trang
          </button>
          <button
            onClick={() => state.setActiveTab("media")}
            style={{
              ...styles.navLinkButton,
              ...(state.activeTab === "media" ? styles.navLinkActive : styles.navLinkInactive),
            }}
          >
            🖼️ Thư viện Media
          </button>
          <Link href="/admin/new" style={styles.navLink}>
            ✍️ Viết bài mới
          </Link>
          <a href="/" target="_blank" style={styles.navLink}>
            🌐 Xem Website
          </a>
        </nav>
        <button onClick={state.handleLogout} style={styles.logoutBtn}>
          🚪 Đăng xuất
        </button>
      </aside>

      {/* Main Content */}
      <main style={styles.main} className="admin-main">
        <header style={styles.header} className="admin-header">
          <div>
            <h1 style={styles.pageTitle}>
              {state.activeTab === "blogs"
                ? "Dashboard Quản trị Blog"
                : state.activeTab === "users"
                ? "Quản lý tài khoản Admin/Editor"
                : state.activeTab === "qrcodes"
                ? "Tạo & Quản lý mã QR Code"
                : state.activeTab === "links"
                ? "Quản lý Link Rút gọn"
                : state.activeTab === "menu"
                ? "Quản lý Cấu trúc Menu"
                : state.activeTab === "pages"
                ? "Quản lý Nội dung Trang"
                : "Thư viện Hình ảnh & Media"}
            </h1>
            <p style={{ color: "#64748b", margin: "4px 0 0 0" }}>
              {state.activeTab === "blogs"
                ? "Quản lý các bài viết trên hệ thống Website ABA"
                : state.activeTab === "users"
                ? "Tạo và phân quyền các tài khoản cộng tác viên đăng bài"
                : state.activeTab === "qrcodes"
                ? "Tạo, sửa đổi và tải xuống mã QR phục vụ truyền thông, thanh toán"
                : state.activeTab === "links"
                ? "Tạo link ngắn chuyển hướng và theo dõi số lượt click"
                : state.activeTab === "menu"
                ? "Sắp xếp, thêm bớt và đổi tên các liên kết trên thanh điều hướng chính"
                : state.activeTab === "pages"
                ? "Thay đổi câu chữ, timeline và hình ảnh của các trang dã ngoại trải nghiệm"
                : "Tải lên hình ảnh lên Cloudflare R2 để lấy link nhúng vào bài viết/trang"}
            </p>
          </div>
          {state.activeTab === "blogs" && (
            <Link href="/admin/new" style={styles.createBtn}>
              ➕ Thêm bài viết mới
            </Link>
          )}
          {state.activeTab === "qrcodes" && (
            <button
              onClick={() => {
                state.setEditingQrId(null);
                state.setQrName("");
                state.setQrValue("");
                state.setQrDescription("");
                state.setQrError("");
                state.setQrSuccess("");
              }}
              style={styles.createBtn}
            >
              ➕ Tạo QR Code mới
            </button>
          )}
          {state.activeTab === "links" && (
            <button
              onClick={() => {
                state.setEditingLinkId(null);
                state.setLinkSlug("");
                state.setLinkOriginalUrl("");
                state.setLinkDescription("");
                state.setLinkError("");
                state.setLinkSuccess("");
              }}
              style={styles.createBtn}
            >
              ➕ Tạo Link rút gọn mới
            </button>
          )}
        </header>

        {(() => {
          switch (state.activeTab) {
            case "blogs":
              return <BlogsTab {...state} styles={styles} />;
            case "users":
              return <UsersTab {...state} styles={styles} />;
            case "qrcodes":
              return <QrcodesTab {...state} styles={styles} />;
            case "links":
              return <LinksTab {...state} styles={styles} />;
            case "menu":
              return <MenuTab {...state} styles={styles} />;
            case "pages":
              return <PagesTab {...state} styles={styles} />;
            default: // media
              return <MediaTab {...state} styles={styles} />;
          }
        })()}
      </main>

      {/* Confirmation Modal (Blogs) */}
      {state.deletingId && (
        <div style={styles.modalBackdrop}>
          <div style={styles.modalCard}>
            <h3 style={{ margin: "0 0 12px 0", color: "#0f172a" }}>Xác nhận xóa bài viết</h3>
            <p style={{ color: "#64748b", fontSize: "15px", lineHeight: "1.5" }}>
              Bạn có chắc chắn muốn xóa bài viết này không? Hành động này không thể hoàn tác và bài viết sẽ bị gỡ bỏ khỏi website.
            </p>
            <div style={styles.modalActions}>
              <button onClick={() => state.setDeletingId(null)} style={styles.cancelBtn}>
                Hủy bỏ
              </button>
              <button onClick={() => state.handleDelete(state.deletingId)} style={styles.confirmDeleteBtn}>
                Xác nhận Xóa
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal (Users) */}
      {state.deletingUsername && (
        <div style={styles.modalBackdrop}>
          <div style={styles.modalCard}>
            <h3 style={{ margin: "0 0 12px 0", color: "#0f172a" }}>Xác nhận xóa tài khoản</h3>
            <p style={{ color: "#64748b", fontSize: "15px", lineHeight: "1.5" }}>
              Bạn có chắc chắn muốn xóa tài khoản <b>@{state.deletingUsername}</b> không? Người này sẽ không còn quyền truy cập vào trang quản trị.
            </p>
            <div style={styles.modalActions}>
              <button onClick={() => state.setDeletingUsername(null)} style={styles.cancelBtn}>
                Hủy bỏ
              </button>
              <button onClick={() => state.handleDeleteUser(state.deletingUsername)} style={styles.confirmDeleteBtn}>
                Xác nhận Xóa
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal (QR Codes) */}
      {state.deletingQrId && (
        <div style={styles.modalBackdrop}>
          <div style={styles.modalCard}>
            <h3 style={{ margin: "0 0 12px 0", color: "#0f172a" }}>Xác nhận xóa mã QR</h3>
            <p style={{ color: "#64748b", fontSize: "15px", lineHeight: "1.5" }}>
              Bạn có chắc chắn muốn xóa mã QR này không? Hành động này sẽ loại bỏ hoàn toàn mã khỏi danh sách quản lý.
            </p>
            <div style={styles.modalActions}>
              <button onClick={() => state.setDeletingQrId(null)} style={styles.cancelBtn}>
                Hủy bỏ
              </button>
              <button onClick={() => state.handleDeleteQr(state.deletingQrId)} style={styles.confirmDeleteBtn}>
                Xác nhận Xóa
              </button>
            </div>
          </div>
        </div>
      )}

      {/* QR Code Preview Modal */}
      {state.previewQr && (
        <div style={styles.modalBackdrop}>
          <div style={{ ...styles.modalCard, maxWidth: "480px", alignItems: "center", textAlign: "center" }}>
            <h3 style={{ margin: "0 0 4px 0", color: "#0f172a", width: "100%" }}>{state.previewQr.name}</h3>
            <p style={{ color: "#64748b", fontSize: "13px", margin: "0 0 16px 0", wordBreak: "break-all", width: "100%" }}>
              Giá trị: <span style={{ color: "#0284c7", fontWeight: "500" }}>{state.previewQr.value}</span>
            </p>
            
            {state.previewQrDataUrl && (
              <div style={{
                padding: "16px",
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                display: "inline-block",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                marginBottom: "8px"
              }}>
                <img
                  src={state.previewQrDataUrl}
                  alt={state.previewQr.name}
                  style={{ width: "240px", height: "240px", display: "block" }}
                />
              </div>
            )}
            
            {state.previewQr.description && (
              <p style={{ color: "#64748b", fontSize: "14px", fontStyle: "italic", margin: "8px 0 16px 0" }}>
                "{state.previewQr.description}"
              </p>
            )}

            <div style={{ ...styles.modalActions, width: "100%", justifyContent: "center", gap: "16px" }}>
              <button onClick={() => state.setPreviewQr(null)} style={styles.cancelBtn}>
                Đóng
              </button>
              <button onClick={state.handleDownloadQr} style={{ ...styles.confirmDeleteBtn, backgroundColor: "#f26e3a", boxShadow: "0 4px 10px rgba(242, 110, 58, 0.25)" }}>
                💾 Tải xuống PNG
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal (Links) */}
      {state.deletingLinkId && (
        <div style={styles.modalBackdrop}>
          <div style={styles.modalCard}>
            <h3 style={{ margin: "0 0 12px 0", color: "#0f172a" }}>Xác nhận xóa Link rút gọn</h3>
            <p style={{ color: "#64748b", fontSize: "15px", lineHeight: "1.5" }}>
              Bạn có chắc chắn muốn xóa link rút gọn này không? Hành động này sẽ loại bỏ hoàn toàn link rút gọn khỏi hệ thống và không thể khôi phục.
            </p>
            <div style={styles.modalActions}>
              <button onClick={() => state.setDeletingLinkId(null)} style={styles.cancelBtn}>
                Hủy bỏ
              </button>
              <button onClick={() => state.handleDeleteLink(state.deletingLinkId)} style={styles.confirmDeleteBtn}>
                Xác nhận Xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

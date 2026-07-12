"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  
  // Tab states
  const [activeTab, setActiveTab] = useState("blogs"); // "blogs" or "users"
  
  // User states
  const [users, setUsers] = useState([]);
  const [userLoading, setUserLoading] = useState(false);
  const [newUserUsername, setNewUserUsername] = useState("");
  const [newUserPasscode, setNewUserPasscode] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [newUserRole, setNewUserRole] = useState("editor");
  const [userError, setUserError] = useState("");
  const [userSuccess, setUserSuccess] = useState("");
  const [deletingUsername, setDeletingUsername] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("admin_token");
      if (token !== "admin_token_website_aba") {
        router.push("/admin/login");
      } else {
        fetchBlogs();
      }
    }
  }, [router]);

  useEffect(() => {
    if (activeTab === "users") {
      fetchUsers();
    }
  }, [activeTab]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("/api/blogs");
      const data = await response.json();
      if (data.success) {
        setBlogs(data.blogs);
      }
    } catch (error) {
      console.error("Lỗi lấy danh sách blog:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    setUserLoading(true);
    setUserError("");
    setUserSuccess("");
    const token = localStorage.getItem("admin_token");
    try {
      const response = await fetch("/api/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.success) {
        setUsers(data.users);
      }
    } catch (error) {
      console.error("Lỗi lấy danh sách user:", error);
    } finally {
      setUserLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_user");
    router.push("/admin/login");
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("admin_token");
    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.success) {
        setBlogs(blogs.filter((blog) => blog.id !== id));
        setDeletingId(null);
      } else {
        alert(data.error || "Không thể xóa bài viết!");
      }
    } catch (error) {
      alert("Đã xảy ra lỗi khi kết nối API!");
    }
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setUserError("");
    setUserSuccess("");
    const token = localStorage.getItem("admin_token");

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          username: newUserUsername,
          passcode: newUserPasscode,
          name: newUserName,
          role: newUserRole,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setUserSuccess("Tạo tài khoản mới thành công!");
        setNewUserUsername("");
        setNewUserPasscode("");
        setNewUserName("");
        setNewUserRole("editor");
        fetchUsers();
      } else {
        setUserError(data.error || "Không thể tạo tài khoản!");
      }
    } catch (error) {
      setUserError("Đã xảy ra lỗi kết nối API!");
    }
  };

  const handleDeleteUser = async (username) => {
    const token = localStorage.getItem("admin_token");
    try {
      const response = await fetch(`/api/users?username=${username}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.success) {
        setUsers(users.filter((u) => u.username !== username));
        setDeletingUsername(null);
      } else {
        alert(data.error || "Không thể xóa tài khoản!");
      }
    } catch (error) {
      alert("Đã xảy ra lỗi khi kết nối API!");
    }
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalViews = blogs.reduce((sum, blog) => {
    const viewsStr = String(blog.views || "0").replace("k", "");
    const viewsNum = parseFloat(viewsStr) * (String(blog.views).includes("k") ? 1000 : 1);
    return sum + (isNaN(viewsNum) ? 0 : viewsNum);
  }, 0);

  const totalComments = blogs.reduce((sum, blog) => sum + (parseInt(blog.commentsCount) || 0), 0);

  if (loading) {
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
      `}</style>
      {/* Sidebar */}
      <aside style={styles.sidebar} className="admin-sidebar">
        <div style={styles.sidebarBrand}>
          <span style={{ fontSize: "24px" }}>🎒</span>
          <span style={styles.brandText}>ABA Academy</span>
        </div>
        <nav style={styles.nav} className="admin-sidebar-nav">
          <button
            onClick={() => setActiveTab("blogs")}
            style={{
              ...styles.navLinkButton,
              ...(activeTab === "blogs" ? styles.navLinkActive : {}),
            }}
          >
            📊 Quản lý Bài viết
          </button>
          <button
            onClick={() => setActiveTab("users")}
            style={{
              ...styles.navLinkButton,
              ...(activeTab === "users" ? styles.navLinkActive : {}),
            }}
          >
            👥 Quản lý Tài khoản
          </button>
          <Link href="/admin/new" style={styles.navLink}>
            ✍️ Viết bài mới
          </Link>
          <a href="/" target="_blank" style={styles.navLink}>
            🌐 Xem Website
          </a>
        </nav>
        <button onClick={handleLogout} style={styles.logoutBtn}>
          🚪 Đăng xuất
        </button>
      </aside>

      {/* Main Content */}
      <main style={styles.main} className="admin-main">
        <header style={styles.header} className="admin-header">
          <div>
            <h1 style={styles.pageTitle}>
              {activeTab === "blogs" ? "Dashboard Quản trị Blog" : "Quản lý tài khoản Admin/Editor"}
            </h1>
            <p style={{ color: "#64748b", margin: "4px 0 0 0" }}>
              {activeTab === "blogs"
                ? "Quản lý các bài viết trên hệ thống Website ABA"
                : "Tạo và phân quyền các tài khoản cộng tác viên đăng bài"}
            </p>
          </div>
          <Link href="/admin/new" style={styles.createBtn}>
            ➕ Thêm bài viết mới
          </Link>
        </header>

        {activeTab === "blogs" ? (
          <>
            {/* Stats Grid */}
            <section style={styles.statsGrid} className="admin-stats-grid">
              <div style={styles.statCard}>
                <div style={{ ...styles.statIconBox, backgroundColor: "rgba(99, 102, 241, 0.1)", color: "#6366f1" }}>📝</div>
                <div>
                  <span style={styles.statLabel}>Tổng số bài viết</span>
                  <h3 style={styles.statValue}>{blogs.length}</h3>
                </div>
              </div>
              <div style={styles.statCard}>
                <div style={{ ...styles.statIconBox, backgroundColor: "rgba(16, 185, 129, 0.1)", color: "#10b981" }}>👁️</div>
                <div>
                  <span style={styles.statLabel}>Ước tính lượt xem</span>
                  <h3 style={styles.statValue}>{totalViews >= 1000 ? `${(totalViews / 1000).toFixed(1)}k` : totalViews}</h3>
                </div>
              </div>
              <div style={styles.statCard}>
                <div style={{ ...styles.statIconBox, backgroundColor: "rgba(245, 158, 11, 0.1)", color: "#f59e0b" }}>💬</div>
                <div>
                  <span style={styles.statLabel}>Tổng số bình luận</span>
                  <h3 style={styles.statValue}>{totalComments}</h3>
                </div>
              </div>
            </section>

            {/* Manage Section */}
            <section style={styles.tableCard} className="admin-table-card">
              <div style={styles.tableHeader}>
                <h4 style={{ margin: 0, fontWeight: "600", color: "#1e293b" }}>Danh sách bài viết</h4>
                <div style={styles.searchBox}>
                  <span style={{ marginRight: "8px" }}>🔍</span>
                  <input
                    type="text"
                    placeholder="Tìm kiếm tiêu đề hoặc danh mục..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={styles.searchInput}
                  />
                </div>
              </div>

              <div style={{ overflowX: "auto" }} className="admin-blog-table-container">
                <table style={styles.table} className="admin-blog-table">
                  <thead>
                    <tr style={styles.tableHeaderRow}>
                      <th style={styles.th}>Ảnh</th>
                      <th style={styles.th}>Tiêu đề</th>
                      <th style={styles.th}>Danh mục</th>
                      <th style={styles.th}>Ngày đăng</th>
                      <th style={styles.th}>Lượt xem</th>
                      <th style={styles.th}>Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBlogs.length === 0 ? (
                      <tr>
                        <td colSpan="6" style={styles.noDataCell}>
                          Không tìm thấy bài viết nào phù hợp.
                        </td>
                      </tr>
                    ) : (
                      filteredBlogs.map((blog) => (
                        <tr key={blog.id} style={styles.tableRow}>
                          <td style={styles.td}>
                            <img
                              src={blog.image.startsWith("http") || blog.image.startsWith("/") ? blog.image : `/${blog.image}`}
                              alt={blog.title}
                              style={styles.thumbnail}
                              onError={(e) => {
                                e.target.src = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070";
                              }}
                            />
                          </td>
                          <td style={{ ...styles.td, fontWeight: "600", color: "#334155", maxWidth: "300px" }}>
                            <div style={styles.titleText}>{blog.title}</div>
                            <div style={styles.authorBadge}>Tác giả: {blog.author}</div>
                          </td>
                          <td style={styles.td}>
                            <span style={styles.categoryBadge}>{blog.category}</span>
                          </td>
                          <td style={{ ...styles.td, color: "#64748b" }}>{blog.date}</td>
                          <td style={{ ...styles.td, color: "#64748b" }}>{blog.views}</td>
                          <td style={styles.td}>
                            <div style={styles.actionsBox}>
                              <Link href={`/admin/edit/${blog.id}`} style={styles.editBtn}>
                                ✏️ Sửa
                              </Link>
                              <button onClick={() => setDeletingId(blog.id)} style={styles.deleteBtn}>
                                🗑️ Xóa
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        ) : (
          <div style={styles.usersLayout} className="admin-users-layout">
            {/* Left box: users list */}
            <section style={{ ...styles.tableCard, flex: 2, paddingBottom: 0 }} className="admin-user-list-card">
              <div style={styles.tableHeader}>
                <h4 style={{ margin: 0, fontWeight: "600", color: "#1e293b" }}>Danh sách tài khoản hệ thống</h4>
              </div>
              <div style={{ overflowX: "auto" }} className="admin-blog-table-container">
                <table style={styles.table} className="admin-blog-table">
                  <thead>
                    <tr style={styles.tableHeaderRow}>
                      <th style={styles.th}>Tên hiển thị</th>
                      <th style={styles.th}>Tên đăng nhập</th>
                      <th style={styles.th}>Quyền hạn</th>
                      <th style={styles.th}>Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userLoading ? (
                      <tr>
                        <td colSpan="4" style={styles.noDataCell}>
                          Đang tải danh sách tài khoản...
                        </td>
                      </tr>
                    ) : users.length === 0 ? (
                      <tr>
                        <td colSpan="4" style={styles.noDataCell}>
                          Không tìm thấy tài khoản người dùng nào.
                        </td>
                      </tr>
                    ) : (
                      users.map((u) => (
                        <tr key={u.username} style={styles.tableRow}>
                          <td style={{ ...styles.td, fontWeight: "600", color: "#334155" }}>{u.name}</td>
                          <td style={{ ...styles.td, color: "#64748b" }}>@{u.username}</td>
                          <td style={styles.td}>
                            <span
                              style={{
                                ...styles.categoryBadge,
                                backgroundColor: u.role === "admin" ? "#e0e7ff" : "#f1f5f9",
                                color: u.role === "admin" ? "#4f46e5" : "#475569",
                              }}
                            >
                              {u.role === "admin" ? "🔑 Admin" : "✍️ Editor"}
                            </span>
                          </td>
                          <td style={styles.td}>
                            {u.username !== "admin" ? (
                              <button onClick={() => setDeletingUsername(u.username)} style={styles.deleteBtn}>
                                🗑️ Xóa
                              </button>
                            ) : (
                              <span style={{ color: "#94a3b8", fontSize: "13px" }}>Mặc định (Khóa)</span>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Right box: create user form */}
            <section style={{ ...styles.tableCard, flex: 1, height: "fit-content", paddingBottom: "24px" }} className="admin-user-form-card">
              <div style={styles.tableHeader}>
                <h4 style={{ margin: 0, fontWeight: "600", color: "#1e293b" }}>Tạo tài khoản mới</h4>
              </div>
              <form onSubmit={handleCreateUser} style={styles.userForm}>
                {userError && <div style={styles.errorAlert}>{userError}</div>}
                {userSuccess && <div style={styles.successAlert}>{userSuccess}</div>}

                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Họ và tên</label>
                  <input
                    type="text"
                    required
                    placeholder="Nhập họ tên (ví dụ: Đức Nam)..."
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                    style={styles.formInput}
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Tên đăng nhập</label>
                  <input
                    type="text"
                    required
                    placeholder="viet_anh_123..."
                    value={newUserUsername}
                    onChange={(e) => setNewUserUsername(e.target.value)}
                    style={styles.formInput}
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Mật khẩu</label>
                  <input
                    type="password"
                    required
                    placeholder="Nhập mật khẩu..."
                    value={newUserPasscode}
                    onChange={(e) => setNewUserPasscode(e.target.value)}
                    style={styles.formInput}
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Vai trò (Quyền)</label>
                  <select
                    value={newUserRole}
                    onChange={(e) => setNewUserRole(e.target.value)}
                    style={styles.formSelect}
                  >
                    <option value="editor">Editor (Biên tập viên viết bài)</option>
                    <option value="admin">Admin (Quản trị viên toàn hệ thống)</option>
                  </select>
                </div>

                <button type="submit" style={styles.userSubmitBtn}>
                  ➕ Tạo tài khoản
                </button>
              </form>
            </section>
          </div>
        )}
      </main>

      {/* Confirmation Modal (Blogs) */}
      {deletingId && (
        <div style={styles.modalBackdrop}>
          <div style={styles.modalCard}>
            <h3 style={{ margin: "0 0 12px 0", color: "#0f172a" }}>Xác nhận xóa bài viết</h3>
            <p style={{ color: "#64748b", fontSize: "15px", lineHeight: "1.5" }}>
              Bạn có chắc chắn muốn xóa bài viết này không? Hành động này không thể hoàn tác và bài viết sẽ bị gỡ bỏ khỏi website.
            </p>
            <div style={styles.modalActions}>
              <button onClick={() => setDeletingId(null)} style={styles.cancelBtn}>
                Hủy bỏ
              </button>
              <button onClick={() => handleDelete(deletingId)} style={styles.confirmDeleteBtn}>
                Xác nhận Xóa
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal (Users) */}
      {deletingUsername && (
        <div style={styles.modalBackdrop}>
          <div style={styles.modalCard}>
            <h3 style={{ margin: "0 0 12px 0", color: "#0f172a" }}>Xác nhận xóa tài khoản</h3>
            <p style={{ color: "#64748b", fontSize: "15px", lineHeight: "1.5" }}>
              Bạn có chắc chắn muốn xóa tài khoản <b>@{deletingUsername}</b> không? Người này sẽ không còn quyền truy cập vào trang quản trị.
            </p>
            <div style={styles.modalActions}>
              <button onClick={() => setDeletingUsername(null)} style={styles.cancelBtn}>
                Hủy bỏ
              </button>
              <button onClick={() => handleDeleteUser(deletingUsername)} style={styles.confirmDeleteBtn}>
                Xác nhận Xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  loadingContainer: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#091e36",
    fontFamily: "'Inter', sans-serif",
  },
  spinner: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    border: "4px solid rgba(242, 110, 58, 0.1)",
    borderTopColor: "#f26e3a",
    animation: "spin 1s linear infinite",
  },
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    backgroundColor: "#f8fafc",
    fontFamily: "'Inter', system-ui, sans-serif",
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
  logoutBtn: {
    padding: "12px 16px",
    borderRadius: "10px",
    backgroundColor: "transparent",
    border: "1px solid rgba(239, 68, 68, 0.2)",
    color: "#f87171",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    textAlign: "left",
    transition: "all 0.2s ease",
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
  createBtn: {
    padding: "12px 24px",
    borderRadius: "12px",
    backgroundColor: "#f26e3a",
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "14px",
    boxShadow: "0 4px 12px rgba(242, 110, 58, 0.25)",
    transition: "all 0.2s ease",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px",
  },
  statCard: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
    border: "1px solid #e2e8f0",
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  statIconBox: {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
  },
  statLabel: {
    fontSize: "13px",
    fontWeight: "500",
    color: "#64748b",
  },
  statValue: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#0f172a",
    margin: "4px 0 0 0",
  },
  tableCard: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
    border: "1px solid #e2e8f0",
    padding: "24px 0",
  },
  tableHeader: {
    padding: "0 24px 20px 24px",
    borderBottom: "1px solid #e2e8f0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "16px",
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f1f5f9",
    border: "1px solid #cbd5e1",
    borderRadius: "10px",
    padding: "8px 14px",
    width: "100%",
    maxWidth: "320px",
  },
  searchInput: {
    border: "none",
    background: "transparent",
    outline: "none",
    fontSize: "14px",
    color: "#334155",
    width: "100%",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "left",
  },
  tableHeaderRow: {
    backgroundColor: "#f8fafc",
  },
  th: {
    padding: "16px 24px",
    fontSize: "13px",
    fontWeight: "600",
    color: "#475569",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    borderBottom: "1px solid #e2e8f0",
  },
  tableRow: {
    borderBottom: "1px solid #f1f5f9",
    transition: "background-color 0.2s ease",
  },
  td: {
    padding: "16px 24px",
    fontSize: "14px",
  },
  thumbnail: {
    width: "60px",
    height: "45px",
    objectFit: "cover",
    borderRadius: "6px",
    border: "1px solid #e2e8f0",
  },
  titleText: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    maxWidth: "280px",
    fontSize: "15px",
  },
  authorBadge: {
    fontSize: "11px",
    color: "#64748b",
    marginTop: "4px",
  },
  categoryBadge: {
    fontSize: "12px",
    fontWeight: "500",
    color: "#4f46e5",
    backgroundColor: "#eeebff",
    padding: "4px 10px",
    borderRadius: "20px",
  },
  actionsBox: {
    display: "flex",
    gap: "12px",
  },
  editBtn: {
    padding: "6px 12px",
    borderRadius: "6px",
    backgroundColor: "#f1f5f9",
    border: "1px solid #cbd5e1",
    color: "#334155",
    fontSize: "13px",
    fontWeight: "500",
    textDecoration: "none",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  deleteBtn: {
    padding: "6px 12px",
    borderRadius: "6px",
    backgroundColor: "#fff1f2",
    border: "1px solid #fecdd3",
    color: "#e11d48",
    fontSize: "13px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  noDataCell: {
    padding: "40px",
    textAlign: "center",
    color: "#64748b",
  },
  modalBackdrop: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(15, 23, 42, 0.6)",
    backdropFilter: "blur(4px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
  },
  modalCard: {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    padding: "32px",
    width: "100%",
    maxWidth: "440px",
    boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  modalActions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "12px",
    marginTop: "8px",
  },
  cancelBtn: {
    padding: "10px 18px",
    borderRadius: "8px",
    backgroundColor: "#f1f5f9",
    border: "1px solid #cbd5e1",
    color: "#334155",
    fontWeight: "500",
    cursor: "pointer",
  },
  confirmDeleteBtn: {
    padding: "10px 18px",
    borderRadius: "8px",
    backgroundColor: "#e11d48",
    border: "none",
    color: "#ffffff",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(225, 29, 72, 0.25)",
  },
  navLinkButton: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "12px 16px",
    borderRadius: "10px",
    color: "#94a3b8",
    fontSize: "14px",
    fontWeight: "500",
    textDecoration: "none",
    transition: "all 0.2s ease",
    border: "none",
    background: "none",
    textAlign: "left",
    cursor: "pointer",
  },
  usersLayout: {
    display: "flex",
    gap: "24px",
    flexWrap: "wrap",
    width: "100%",
  },
  userForm: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    padding: "0 24px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  formLabel: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#475569",
  },
  formInput: {
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    fontSize: "14px",
    outline: "none",
    color: "#334155",
    transition: "all 0.2s ease",
  },
  formSelect: {
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    fontSize: "14px",
    outline: "none",
    color: "#334155",
    backgroundColor: "#ffffff",
  },
  userSubmitBtn: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#6366f1",
    color: "#ffffff",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s ease",
    marginTop: "12px",
    boxShadow: "0 4px 10px rgba(99, 102, 241, 0.25)",
  },
  successAlert: {
    padding: "12px",
    borderRadius: "8px",
    backgroundColor: "#ecfdf5",
    border: "1px solid #a7f3d0",
    color: "#065f46",
    fontSize: "14px",
    fontWeight: "500",
  },
  errorAlert: {
    padding: "12px",
    borderRadius: "8px",
    backgroundColor: "#fef2f2",
    border: "1px solid #fca5a5",
    color: "#991b1b",
    fontSize: "14px",
    fontWeight: "500",
  },
};

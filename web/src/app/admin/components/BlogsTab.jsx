import Link from "next/link";

export default function BlogsTab({
  blogs,
  totalViews,
  totalComments,
  searchQuery,
  setSearchQuery,
  filteredBlogs,
  setDeletingId,
  styles
}) {
  return (
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
  );
}

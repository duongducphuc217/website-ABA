export default function LinksTab({
  linkSearchQuery,
  setLinkSearchQuery,
  linkLoading,
  filteredLinks,
  getShortUrl,
  setEditingLinkId,
  setLinkSlug,
  setLinkOriginalUrl,
  setLinkDescription,
  setLinkError,
  setLinkSuccess,
  setDeletingLinkId,
  editingLinkId,
  handleCreateOrUpdateLink,
  linkError,
  linkSuccess,
  linkSlug,
  linkOriginalUrl,
  linkDescription,
  styles
}) {
  return (
    <div style={styles.usersLayout} className="admin-users-layout">
      {/* Left box: Link list */}
      <section style={{ ...styles.tableCard, flex: 2, paddingBottom: 0 }} className="admin-user-list-card">
        <div style={styles.tableHeader}>
          <h4 style={{ margin: 0, fontWeight: "600", color: "#1e293b" }}>Danh sách Link rút gọn</h4>
          <div style={styles.searchBox}>
            <span style={{ marginRight: "8px" }}>🔍</span>
            <input
              type="text"
              placeholder="Tìm kiếm link..."
              value={linkSearchQuery}
              onChange={(e) => setLinkSearchQuery(e.target.value)}
              style={styles.searchInput}
            />
          </div>
        </div>
        <div style={{ overflowX: "auto" }} className="admin-blog-table-container">
          <table style={styles.table} className="admin-blog-table qr-table">
            <thead>
              <tr style={styles.tableHeaderRow}>
                <th style={styles.th}>Mã (Slug)</th>
                <th style={styles.th}>Link rút gọn</th>
                <th style={styles.th}>Đường dẫn gốc</th>
                <th style={styles.th}>Lượt click</th>
                <th style={styles.th}>Ghi chú</th>
                <th style={styles.th}>Ngày tạo</th>
                <th style={styles.th}>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {linkLoading ? (
                <tr>
                  <td colSpan="7" style={styles.noDataCell}>
                    Đang tải danh sách link...
                  </td>
                </tr>
              ) : filteredLinks.length === 0 ? (
                <tr>
                  <td colSpan="7" style={styles.noDataCell}>
                    Không tìm thấy link rút gọn nào phù hợp.
                  </td>
                </tr>
              ) : (
                filteredLinks.map((item) => {
                  const shortUrl = getShortUrl(item.slug);
                  return (
                    <tr key={item.id} style={styles.tableRow}>
                      <td style={{ ...styles.td, fontWeight: "600", color: "#334155" }}>
                        <span style={{ color: "#f26e3a" }}>/{item.slug}</span>
                      </td>
                      <td style={{ ...styles.td, whiteSpace: "nowrap" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <a
                            href={`/s/${item.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              color: "#0284c7",
                              fontWeight: "500",
                              textDecoration: "none",
                            }}
                          >
                            {shortUrl}
                          </a>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(shortUrl);
                              alert("Đã sao chép link rút gọn vào clipboard!");
                            }}
                            style={{
                              backgroundColor: "transparent",
                              border: "none",
                              cursor: "pointer",
                              fontSize: "14px",
                            }}
                            title="Sao chép"
                          >
                            📋
                          </button>
                        </div>
                      </td>
                      <td style={{ ...styles.td }}>
                        <a
                          href={item.originalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-block",
                            maxWidth: "200px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            color: "#64748b",
                            textDecoration: "none",
                          }}
                          title={item.originalUrl}
                        >
                          {item.originalUrl}
                        </a>
                      </td>
                      <td style={styles.td}>
                        <span
                          style={{
                            ...styles.categoryBadge,
                            backgroundColor: "rgba(242, 110, 58, 0.1)",
                            color: "#f26e3a",
                            fontWeight: "600",
                          }}
                        >
                          📊 {item.clicks || 0}
                        </span>
                      </td>
                      <td style={{ ...styles.td, color: "#64748b", fontSize: "13px" }}>
                        <div style={{
                          maxWidth: "120px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap"
                        }} title={item.description}>
                          {item.description || "—"}
                        </div>
                      </td>
                      <td style={{ ...styles.td, color: "#64748b", fontSize: "13px", whiteSpace: "nowrap" }}>
                        {item.createdAt || item.updatedAt || "—"}
                      </td>
                      <td style={{ ...styles.td, whiteSpace: "nowrap" }}>
                        <div style={styles.actionsBox}>
                          <button
                            onClick={() => {
                              setEditingLinkId(item.id);
                              setLinkSlug(item.slug);
                              setLinkOriginalUrl(item.originalUrl);
                              setLinkDescription(item.description || "");
                              setLinkError("");
                              setLinkSuccess("");
                            }}
                            style={styles.editBtn}
                            className="qr-action-btn"
                          >
                            ✏️ Sửa
                          </button>
                          <button onClick={() => setDeletingLinkId(item.id)} style={styles.deleteBtn} className="qr-delete-btn">
                            🗑️ Xóa
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Right box: Create/Edit form */}
      <section style={{ ...styles.tableCard, flex: 1, height: "fit-content", paddingBottom: "24px" }} className="admin-user-form-card">
        <div style={styles.tableHeader}>
          <h4 style={{ margin: 0, fontWeight: "600", color: "#1e293b" }}>
            {editingLinkId ? "Cập nhật Link rút gọn" : "Tạo Link rút gọn"}
          </h4>
        </div>
        <form onSubmit={handleCreateOrUpdateLink} style={styles.userForm}>
          {linkError && <div style={styles.errorAlert}>{linkError}</div>}
          {linkSuccess && <div style={styles.successAlert}>{linkSuccess}</div>}

          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Mã rút gọn (Slug)</label>
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <span style={{ color: "#94a3b8", fontSize: "14px", fontWeight: "500" }}>/s/</span>
              <input
                type="text"
                required
                placeholder="dangky, he2026..."
                value={linkSlug}
                onChange={(e) => setLinkSlug(e.target.value)}
                style={{ ...styles.formInput, flex: 1 }}
                className="admin-form-input"
              />
            </div>
            <span style={{ fontSize: "11px", color: "#64748b", marginTop: "2px" }}>
              Chỉ dùng chữ không dấu, số, dấu gạch ngang (-) và gạch dưới (_).
            </span>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Đường dẫn gốc (Original URL)</label>
            <input
              type="text"
              required
              placeholder="https://docs.google.com/forms/..."
              value={linkOriginalUrl}
              onChange={(e) => setLinkOriginalUrl(e.target.value)}
              style={styles.formInput}
              className="admin-form-input"
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Ghi chú / Mô tả</label>
            <textarea
              placeholder="Ví dụ: Link form đăng ký khoá học hè..."
              value={linkDescription}
              onChange={(e) => setLinkDescription(e.target.value)}
              style={{
                ...styles.formInput,
                minHeight: "80px",
                resize: "vertical",
                fontFamily: "inherit"
              }}
              className="admin-form-input"
            />
          </div>

          <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
            <button
              type="submit"
              style={{
                ...styles.userSubmitBtn,
                backgroundColor: "#f26e3a",
                boxShadow: "0 4px 10px rgba(242, 110, 58, 0.25)"
              }}
              className="admin-btn-hover"
            >
              {editingLinkId ? "💾 Cập nhật Link" : "➕ Tạo Link"}
            </button>
            {editingLinkId && (
              <button
                type="button"
                onClick={() => {
                  setEditingLinkId(null);
                  setLinkSlug("");
                  setLinkOriginalUrl("");
                  setLinkDescription("");
                  setLinkError("");
                  setLinkSuccess("");
                }}
                style={{
                  ...styles.userSubmitBtn,
                  backgroundColor: "#e2e8f0",
                  color: "#334155",
                  boxShadow: "none"
                }}
              >
                Hủy sửa
              </button>
            )}
          </div>
        </form>
      </section>
    </div>
  );
}

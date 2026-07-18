export default function UsersTab({
  userLoading,
  users,
  setDeletingUsername,
  handleCreateUser,
  userError,
  userSuccess,
  newUserName,
  setNewUserName,
  newUserUsername,
  setNewUserUsername,
  newUserPasscode,
  setNewUserPasscode,
  newUserRole,
  setNewUserRole,
  styles
}) {
  return (
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
  );
}

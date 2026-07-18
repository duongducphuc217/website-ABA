export default function QrcodesTab({
  qrSearchQuery,
  setQrSearchQuery,
  qrLoading,
  filteredQRCodes,
  handleOpenPreview,
  setEditingQrId,
  setQrName,
  setQrValue,
  setQrDescription,
  setQrError,
  setQrSuccess,
  setDeletingQrId,
  editingQrId,
  handleCreateOrUpdateQr,
  qrError,
  qrSuccess,
  qrName,
  qrValue,
  qrDescription,
  styles
}) {
  return (
    <div style={styles.usersLayout} className="admin-users-layout">
      {/* Left box: QR Code list */}
      <section style={{ ...styles.tableCard, flex: 2, paddingBottom: 0 }} className="admin-user-list-card">
        <div style={styles.tableHeader}>
          <h4 style={{ margin: 0, fontWeight: "600", color: "#1e293b" }}>Danh sách QR Code</h4>
          <div style={styles.searchBox}>
            <span style={{ marginRight: "8px" }}>🔍</span>
            <input
              type="text"
              placeholder="Tìm kiếm mã QR..."
              value={qrSearchQuery}
              onChange={(e) => setQrSearchQuery(e.target.value)}
              style={styles.searchInput}
            />
          </div>
        </div>
        <div style={{ overflowX: "auto" }} className="admin-blog-table-container">
          <table style={styles.table} className="admin-blog-table qr-table">
            <thead>
              <tr style={styles.tableHeaderRow}>
                <th style={styles.th}>Tên QR Code</th>
                <th style={styles.th}>Nội dung / URL</th>
                <th style={styles.th}>Ghi chú</th>
                <th style={styles.th}>Ngày tạo</th>
                <th style={styles.th}>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {qrLoading ? (
                <tr>
                  <td colSpan="5" style={styles.noDataCell}>
                    Đang tải danh sách QR Code...
                  </td>
                </tr>
              ) : filteredQRCodes.length === 0 ? (
                <tr>
                  <td colSpan="5" style={styles.noDataCell}>
                    Không tìm thấy QR Code nào phù hợp.
                  </td>
                </tr>
              ) : (
                filteredQRCodes.map((qr) => (
                  <tr key={qr.id} style={styles.tableRow}>
                    <td style={{ ...styles.td, fontWeight: "600", color: "#334155" }}>
                      <div style={{
                        maxWidth: "180px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      }} title={qr.name}>
                        {qr.name}
                      </div>
                    </td>
                    <td style={{ ...styles.td, whiteSpace: "nowrap" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span
                          style={{
                            display: "inline-block",
                            maxWidth: "200px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            color: "#0284c7",
                            fontWeight: "500",
                          }}
                        >
                          {qr.value}
                        </span>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(qr.value);
                            alert("Đã sao chép nội dung QR Code vào clipboard!");
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
                    <td style={{ ...styles.td, color: "#64748b", fontSize: "13px" }}>
                      <div style={{
                        maxWidth: "160px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      }} title={qr.description}>
                        {qr.description || "—"}
                      </div>
                    </td>
                    <td style={{ ...styles.td, color: "#64748b", fontSize: "13px", whiteSpace: "nowrap" }}>
                      {qr.createdAt || qr.updatedAt || "—"}
                    </td>
                    <td style={{ ...styles.td, whiteSpace: "nowrap" }}>
                      <div style={styles.actionsBox}>
                        <button onClick={() => handleOpenPreview(qr)} style={styles.editBtn} className="qr-action-btn">
                          👁️ Xem & Tải
                        </button>
                        <button
                          onClick={() => {
                            setEditingQrId(qr.id);
                            setQrName(qr.name);
                            setQrValue(qr.value);
                            setQrDescription(qr.description || "");
                            setQrError("");
                            setQrSuccess("");
                          }}
                          style={styles.editBtn}
                          className="qr-action-btn"
                        >
                          ✏️ Sửa
                        </button>
                        <button onClick={() => setDeletingQrId(qr.id)} style={styles.deleteBtn} className="qr-delete-btn">
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

      {/* Right box: Create/Edit QR form */}
      <section style={{ ...styles.tableCard, flex: 1, height: "fit-content", paddingBottom: "24px" }} className="admin-user-form-card">
        <div style={styles.tableHeader}>
          <h4 style={{ margin: 0, fontWeight: "600", color: "#1e293b" }}>
            {editingQrId ? "Cập nhật QR Code" : "Tạo QR Code mới"}
          </h4>
        </div>
        <form onSubmit={handleCreateOrUpdateQr} style={styles.userForm}>
          {qrError && <div style={styles.errorAlert}>{qrError}</div>}
          {qrSuccess && <div style={styles.successAlert}>{qrSuccess}</div>}

          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Tên gợi nhớ</label>
            <input
              type="text"
              required
              placeholder="Ví dụ: QR đóng học phí lớp hè, QR Fanpage..."
              value={qrName}
              onChange={(e) => setQrName(e.target.value)}
              style={styles.formInput}
              className="admin-form-input"
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Nội dung / URL</label>
            <input
              type="text"
              required
              placeholder="Nhập đường link website hoặc nội dung text..."
              value={qrValue}
              onChange={(e) => setQrValue(e.target.value)}
              style={styles.formInput}
              className="admin-form-input"
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Mô tả / Ghi chú</label>
            <textarea
              placeholder="Mục đích sử dụng, vị trí dán..."
              value={qrDescription}
              onChange={(e) => setQrDescription(e.target.value)}
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
              {editingQrId ? "💾 Cập nhật QR" : "➕ Tạo mã QR"}
            </button>
            {editingQrId && (
              <button
                type="button"
                onClick={() => {
                  setEditingQrId(null);
                  setQrName("");
                  setQrValue("");
                  setQrDescription("");
                  setQrError("");
                  setQrSuccess("");
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

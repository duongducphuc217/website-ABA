export default function MediaTab({
  mediaList,
  handleMediaUpload,
  uploadingMedia,
  uploadError,
  styles
}) {
  return (
    <div style={styles.usersLayout} className="admin-users-layout">
      <section style={{ ...styles.tableCard, flex: 2, padding: "24px", minHeight: "450px" }} className="admin-user-list-card">
        <h4 style={{ margin: "0 0 16px 0", fontWeight: "600", color: "#1e293b" }}>Hình ảnh đã tải lên gần đây</h4>
        
        {mediaList.length === 0 ? (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "300px", color: "#94a3b8", flexDirection: "column" }}>
            <span style={{ fontSize: "40px" }}>📷</span>
            <p style={{ marginTop: "12px", fontSize: "14px" }}>Chưa tải lên hình ảnh nào trong phiên làm việc này.</p>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "16px" }}>
            {mediaList.map((item, idx) => (
              <div key={idx} style={{ border: "1px solid #e2e8f0", borderRadius: "10px", overflow: "hidden", backgroundColor: "#ffffff", boxShadow: "0 1px 3px rgba(0,0,0,0.02)", display: "flex", flexDirection: "column" }}>
                <div style={{ aspectRatio: "4/3", overflow: "hidden", backgroundColor: "#f1f5f9" }}>
                  <img src={item.url} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "10px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: "#475569", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} title={item.name}>
                    {item.name}
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(item.url);
                      alert("Đã sao chép liên kết hình ảnh!");
                    }}
                    style={{
                      padding: "6px",
                      backgroundColor: "#f1f5f9",
                      border: "1px solid #cbd5e1",
                      borderRadius: "6px",
                      fontSize: "11px",
                      fontWeight: "600",
                      color: "#334155",
                      cursor: "pointer",
                      width: "100%",
                      transition: "all 0.2s ease"
                    }}
                  >
                    📋 Sao chép URL
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section style={{ ...styles.tableCard, flex: 1, padding: "24px", height: "fit-content" }} className="admin-user-form-card">
        <h4 style={{ margin: "0 0 16px 0", fontWeight: "600", color: "#1e293b" }}>Tải ảnh lên hệ thống</h4>
        
        <div style={{ border: "2px dashed #cbd5e1", borderRadius: "12px", padding: "30px 20px", textAlign: "center", backgroundColor: "#f8fafc", cursor: "pointer", transition: "all 0.2s ease" }}>
          {uploadingMedia ? (
            <div>
              <div style={{ ...styles.spinner, margin: "0 auto 16px auto" }}></div>
              <p style={{ color: "#64748b", margin: 0, fontSize: "14px" }}>Đang truyền tải tệp tin...</p>
            </div>
          ) : (
            <label style={{ cursor: "pointer", display: "block" }}>
              <span style={{ fontSize: "36px", display: "block", marginBottom: "12px" }}>☁️</span>
              <span style={{ display: "block", fontSize: "14px", fontWeight: "600", color: "#f26e3a", marginBottom: "4px" }}>Nhấp để chọn hình ảnh</span>
              <span style={{ display: "block", fontSize: "11px", color: "#94a3b8" }}>Chấp nhận PNG, JPG, JPEG, WEBP</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleMediaUpload}
                style={{ display: "none" }}
              />
            </label>
          )}
        </div>
        {uploadError && <div style={{ ...styles.errorAlert, marginTop: "16px" }}>{uploadError}</div>}
        
        <div style={{ marginTop: "24px", padding: "16px", backgroundColor: "#eff6ff", borderRadius: "10px", border: "1px solid #bfdbfe" }}>
          <p style={{ fontSize: "12px", color: "#1e3a8a", margin: 0, lineHeight: "1.5" }}>
            💡 <b>Hướng dẫn:</b> Sau khi tải ảnh lên, sao chép URL ảnh và dán vào các ô nhập URL ở tab <b>Nội dung Trang</b> hoặc <b>Viết bài mới</b> để cập nhật ảnh trên trang tương ứng.
          </p>
        </div>
      </section>
    </div>
  );
}

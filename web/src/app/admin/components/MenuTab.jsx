import React, { useState } from "react";

export default function MenuTab({
  menuEditorMode,
  setMenuEditorMode,
  menuError,
  menuSuccess,
  menuLoading,
  handleSaveMenu,
  addMenuNode,
  updateMenuNode,
  deleteMenuNode,
  moveMenuNode,
  menuData,
  menuJsonText,
  setMenuJsonText,
  styles
}) {
  const [collapsedNodes, setCollapsedNodes] = useState({});

  // Global Collapse All
  const handleCollapseAll = () => {
    const newCollapsed = {};
    const traverse = (items, path = []) => {
      items.forEach((item, idx) => {
        const currentPath = [...path, idx];
        const depth = path.length;
        if (depth < 2 && item.links && item.links.length > 0) {
          newCollapsed[currentPath.join("-")] = true;
          traverse(item.links, currentPath);
        }
      });
    };
    traverse(menuData);
    setCollapsedNodes(newCollapsed);
  };

  // Global Expand All
  const handleExpandAll = () => {
    setCollapsedNodes({});
  };

  const renderVisualMenuTree = (items, path = []) => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
        {items.map((item, idx) => {
          const currentPath = [...path, idx];
          const depth = path.length;
          const nodeKey = currentPath.join("-");
          const isCollapsed = collapsedNodes[nodeKey] || false;
          const hasChildren = item.links && item.links.length > 0;

          return (
            <div
              key={idx}
              style={{
                padding: "14px 18px",
                backgroundColor: depth === 0 ? "#ffffff" : depth === 1 ? "#f8fafc" : "#f1f5f9",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
                marginLeft: `${depth * 24}px`,
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.02)",
                transition: "all 0.2s ease"
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", justifyContent: "space-between" }}>
                
                {/* Title and Inputs */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: 1, minWidth: "280px" }}>
                  
                  {/* Expand/Collapse Caret */}
                  {depth < 2 && (
                    <button
                      type="button"
                      onClick={() => {
                        setCollapsedNodes({
                          ...collapsedNodes,
                          [nodeKey]: !isCollapsed
                        });
                      }}
                      style={{
                        border: "1px solid #e2e8f0",
                        background: hasChildren ? "#ffffff" : "#f8fafc",
                        fontSize: "11px",
                        cursor: hasChildren ? "pointer" : "not-allowed",
                        padding: "4px 8px",
                        borderRadius: "6px",
                        color: hasChildren ? "#f26e3a" : "#cbd5e1",
                        fontWeight: "750",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: "26px",
                        opacity: hasChildren ? 1 : 0.4
                      }}
                      title={hasChildren ? (isCollapsed ? "Mở rộng menu con" : "Thu gọn menu con") : "Không có menu con"}
                    >
                      {hasChildren ? (isCollapsed ? "▶" : "▼") : "•"}
                    </button>
                  )}

                  <span style={{ fontSize: "12px", fontWeight: "700", color: "#64748b", minWidth: "48px" }}>
                    Cấp {depth + 1}:
                  </span>
                  
                  <input
                    type="text"
                    placeholder="Tên hiển thị..."
                    value={item.label}
                    onChange={(e) => updateMenuNode(menuData, currentPath, "label", e.target.value)}
                    style={{
                      padding: "8px 12px",
                      borderRadius: "8px",
                      border: "1px solid #cbd5e1",
                      fontSize: "13px",
                      outline: "none",
                      color: "#334155",
                      flex: 1.2
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Đường dẫn (URL)..."
                    value={item.href || ""}
                    onChange={(e) => updateMenuNode(menuData, currentPath, "href", e.target.value)}
                    style={{
                      padding: "8px 12px",
                      borderRadius: "8px",
                      border: "1px solid #cbd5e1",
                      fontSize: "13px",
                      outline: "none",
                      color: "#334155",
                      flex: 1.8
                    }}
                  />
                </div>
                
                {/* Actions Bar */}
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  
                  {/* Hide/Show Toggle Option */}
                  <button
                    type="button"
                    onClick={() => updateMenuNode(menuData, currentPath, "hidden", !item.hidden)}
                    style={{
                      padding: "7px 12px",
                      backgroundColor: item.hidden ? "#fff1f2" : "#f0fdf4",
                      border: item.hidden ? "1px solid #fecdd3" : "1px solid #bbf7d0",
                      color: item.hidden ? "#be123c" : "#166534",
                      borderRadius: "8px",
                      fontSize: "12px",
                      fontWeight: "600",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px"
                    }}
                    title={item.hidden ? "Hiện menu này ngoài trang chủ" : "Ẩn menu này ngoài trang chủ"}
                  >
                    {item.hidden ? "👁️‍🗨️ Đang Ẩn" : "👁️ Hiển Thị"}
                  </button>

                  {depth < 2 && (
                    <button
                      type="button"
                      onClick={() => {
                        addMenuNode(menuData, currentPath);
                        // Auto-expand when adding a new child
                        if (isCollapsed) {
                          setCollapsedNodes({
                            ...collapsedNodes,
                            [nodeKey]: false
                          });
                        }
                      }}
                      style={{
                        padding: "7px 12px",
                        backgroundColor: "#eff6ff",
                        border: "1px solid #bfdbfe",
                        color: "#2563eb",
                        borderRadius: "8px",
                        fontSize: "12px",
                        fontWeight: "600",
                        cursor: "pointer"
                      }}
                      title="Thêm danh mục con"
                    >
                      ➕ Con
                    </button>
                  )}
                  
                  <button
                    type="button"
                    disabled={idx === 0}
                    onClick={() => moveMenuNode(menuData, currentPath, -1)}
                    style={{
                      padding: "7px 10px",
                      backgroundColor: "#ffffff",
                      border: "1px solid #cbd5e1",
                      color: idx === 0 ? "#cbd5e1" : "#475569",
                      borderRadius: "8px",
                      fontSize: "12px",
                      cursor: idx === 0 ? "not-allowed" : "pointer"
                    }}
                    title="Di chuyển lên"
                  >
                    🔼
                  </button>
                  <button
                    type="button"
                    disabled={idx === items.length - 1}
                    onClick={() => moveMenuNode(menuData, currentPath, 1)}
                    style={{
                      padding: "7px 10px",
                      backgroundColor: "#ffffff",
                      border: "1px solid #cbd5e1",
                      color: idx === items.length - 1 ? "#cbd5e1" : "#475569",
                      borderRadius: "8px",
                      fontSize: "12px",
                      cursor: idx === items.length - 1 ? "not-allowed" : "pointer"
                    }}
                    title="Di chuyển xuống"
                  >
                    🔽
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm(`Bạn có chắc chắn muốn xóa "${item.label || 'menu này'}" cùng toàn bộ menu con bên trong?`)) {
                        deleteMenuNode(menuData, currentPath);
                      }
                    }}
                    style={{
                      padding: "7px 12px",
                      backgroundColor: "#fef2f2",
                      border: "1px solid #fee2e2",
                      color: "#991b1b",
                      borderRadius: "8px",
                      fontSize: "12px",
                      fontWeight: "600",
                      cursor: "pointer"
                    }}
                    title="Xóa mục menu"
                  >
                    🗑️ Xóa
                  </button>
                </div>
              </div>
              
              {/* Recursive child links (collapsible) */}
              {hasChildren && !isCollapsed && (
                <div style={{ marginTop: "12px", borderLeft: "2px dashed #cbd5e1", paddingLeft: "6px" }}>
                  {renderVisualMenuTree(item.links, currentPath)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
      <section style={{ ...styles.tableCard, padding: "24px", border: "1px solid #e2e8f0" }}>
        
        {/* Title & Mode Toggles */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", flexWrap: "wrap", gap: "12px" }}>
          <div>
            <h4 style={{ margin: 0, fontWeight: "750", color: "#0f172a", fontSize: "16px" }}>Cấu hình Menu Điều Hướng</h4>
            <p style={{ fontSize: "12px", color: "#64748b", margin: "2px 0 0 0" }}>
              Thiết lập liên kết, hiển thị và phân cấp danh mục menu chính hiển thị trên website.
            </p>
          </div>
          
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              type="button"
              onClick={() => setMenuEditorMode("visual")}
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                border: "1px solid #cbd5e1",
                backgroundColor: menuEditorMode === "visual" ? "#f26e3a" : "#ffffff",
                color: menuEditorMode === "visual" ? "#ffffff" : "#475569",
                fontWeight: "600",
                cursor: "pointer",
                fontSize: "13px"
              }}
            >
              🛠️ Trực Quan
            </button>
            <button
              type="button"
              onClick={() => setMenuEditorMode("json")}
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                border: "1px solid #cbd5e1",
                backgroundColor: menuEditorMode === "json" ? "#f26e3a" : "#ffffff",
                color: menuEditorMode === "json" ? "#ffffff" : "#475569",
                fontWeight: "600",
                cursor: "pointer",
                fontSize: "13px"
              }}
            >
              📝 Code JSON
            </button>
          </div>
        </div>

        {menuError && <div style={{ ...styles.errorAlert, marginBottom: "16px" }}>{menuError}</div>}
        {menuSuccess && <div style={{ ...styles.successAlert, marginBottom: "16px" }}>{menuSuccess}</div>}

        {menuLoading ? (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 0" }}>
            <div style={styles.spinner}></div>
            <p style={{ color: "#64748b", marginTop: "12px" }}>Đang tải cấu trúc menu...</p>
          </div>
        ) : (
          <form onSubmit={handleSaveMenu} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {menuEditorMode === "visual" ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                
                {/* Global Collapsible Toolbar & Add First Menu Button */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <button
                      type="button"
                      onClick={handleCollapseAll}
                      style={{
                        padding: "6px 12px",
                        backgroundColor: "#ffffff",
                        border: "1px solid #cbd5e1",
                        color: "#475569",
                        borderRadius: "8px",
                        fontSize: "12px",
                        fontWeight: "600",
                        cursor: "pointer"
                      }}
                    >
                      📁 Thu gọn tất cả
                    </button>
                    <button
                      type="button"
                      onClick={handleExpandAll}
                      style={{
                        padding: "6px 12px",
                        backgroundColor: "#ffffff",
                        border: "1px solid #cbd5e1",
                        color: "#475569",
                        borderRadius: "8px",
                        fontSize: "12px",
                        fontWeight: "600",
                        cursor: "pointer"
                      }}
                    >
                      📂 Mở rộng tất cả
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => addMenuNode(menuData, [])}
                    style={{
                      padding: "8px 16px",
                      backgroundColor: "#f0fdf4",
                      border: "1px solid #bbf7d0",
                      color: "#15803d",
                      borderRadius: "8px",
                      fontSize: "13px",
                      fontWeight: "600",
                      cursor: "pointer"
                    }}
                  >
                    ➕ Thêm Menu Cấp 1
                  </button>
                </div>
                
                {menuData.length === 0 ? (
                  <div style={{ padding: "40px", textAlign: "center", border: "1px dashed #cbd5e1", borderRadius: "12px", color: "#94a3b8" }}>
                    Chưa có mục menu nào. Nhấp nút phía trên để thêm mới.
                  </div>
                ) : (
                  renderVisualMenuTree(menuData)
                )}
              </div>
            ) : (
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Biên tập JSON trực tiếp</label>
                <textarea
                  value={menuJsonText}
                  onChange={(e) => setMenuJsonText(e.target.value)}
                  style={{ minHeight: "380px", fontFamily: "monospace", fontSize: "13px", padding: "12px", border: "1px solid #cbd5e1", borderRadius: "8px", resize: "vertical" }}
                />
              </div>
            )}

            {/* Sticky Save Bar */}
            <div style={{ display: "flex", justifyContent: "flex-end", borderTop: "1px solid #e2e8f0", paddingTop: "20px", marginTop: "12px" }}>
              <button
                type="submit"
                style={{
                  ...styles.userSubmitBtn,
                  backgroundColor: "#f26e3a",
                  boxShadow: "0 4px 12px rgba(242, 110, 58, 0.3)",
                  margin: 0,
                  padding: "12px 28px"
                }}
                className="admin-btn-hover"
              >
                💾 Lưu Cấu Trúc Menu
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
}

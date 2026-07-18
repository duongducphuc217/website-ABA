import React, { useState } from "react";

export default function PagesTab({
  selectedPage,
  setSelectedPage,
  pageLoading,
  pageSections,
  setPageSections,
  handleSavePageContent,
  pageError,
  pageSuccess,
  pageTitle,
  setPageTitle,
  pageMetaTitle,
  setPageMetaTitle,
  pageMetaDescription,
  setPageMetaDescription,
  pageMetaKeywords,
  setPageMetaKeywords,
  uploadImageFile,
  styles
}) {
  const [editorTab, setEditorTab] = useState("seo");

  // Reordering helper for challenges
  const moveChallenge = (index, direction) => {
    const items = [...(pageSections.challenges?.items || [])];
    const targetIndex = index + direction;
    if (targetIndex >= 0 && targetIndex < items.length) {
      const temp = items[index];
      items[index] = items[targetIndex];
      items[targetIndex] = temp;
      setPageSections({
        ...pageSections,
        challenges: { ...pageSections.challenges, items }
      });
    }
  };

  // Predefined badge colors for easy selection
  const badgePresets = [
    { label: "Xanh Dương", value: "bg-blue-50 text-abaBlue border-blue-200" },
    { label: "Cam Ấm", value: "bg-orange-50 text-orange-600 border-orange-200" },
    { label: "Lục Bảo", value: "bg-emerald-50 text-emerald-600 border-emerald-200" },
    { label: "Tím Sen", value: "bg-purple-50 text-purple-600 border-purple-200" },
    { label: "Đỏ Hồng", value: "bg-rose-50 text-rose-600 border-rose-200" }
  ];

  // Premium inline styles
  const subNavbarStyle = {
    display: "flex",
    gap: "8px",
    borderBottom: "2px solid #f1f5f9",
    paddingBottom: "12px",
    marginBottom: "24px",
    flexWrap: "wrap"
  };

  const activeSubTabStyle = {
    padding: "10px 18px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#f26e3a",
    color: "#ffffff",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "13px",
    transition: "all 0.2s ease",
    boxShadow: "0 4px 12px rgba(242, 110, 58, 0.2)"
  };

  const inactiveSubTabStyle = {
    padding: "10px 18px",
    borderRadius: "8px",
    border: "1px solid transparent",
    backgroundColor: "transparent",
    color: "#64748b",
    fontWeight: "500",
    cursor: "pointer",
    fontSize: "13px",
    transition: "all 0.2s ease"
  };

  const sectionCardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.01)"
  };

  const sectionHeaderStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    margin: "0 0 20px 0",
    color: "#0f172a",
    fontSize: "16px",
    fontWeight: "750",
    borderBottom: "1px solid #f1f5f9",
    paddingBottom: "12px"
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}>
      {/* Page Selector Card */}
      <section style={{ ...styles.tableCard, padding: "20px 24px", border: "1px solid #e2e8f0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <h4 style={{ margin: 0, fontWeight: "700", color: "#0f172a", fontSize: "16px" }}>Nội dung trang cần sửa</h4>
            <p style={{ fontSize: "12px", color: "#64748b", margin: "2px 0 0 0" }}>
              Lựa chọn trang bên phải để cập nhật tiêu đề, ảnh nền banner và chi tiết các chặng trải nghiệm.
            </p>
          </div>
          <select
            value={selectedPage}
            onChange={(e) => {
              setSelectedPage(e.target.value);
              setEditorTab("seo");
            }}
            style={{ 
              ...styles.formSelect, 
              width: "360px",
              fontWeight: "600",
              color: "#334155",
              border: "1px solid #cbd5e1"
            }}
          >
            <optgroup label="Cấp Mầm Non">
              <option value="le-hoi-banh-chung-mam-non">Mầm non: Lễ hội Bánh chưng</option>
              <option value="le-hoi-trung-thu-mam-non">Mầm non: Lễ hội Trung thu</option>
              <option value="le-hoi-xuan-mam-non">Mầm non: Lễ hội Xuân</option>
              <option value="ngay-hoi-nuoc-vui-nhon-mam-non">Mầm non: Ngày hội nước vui nhộn</option>
              <option value="trai-nghiem-ky-thu-mam-non">Mầm non: Trải nghiệm Kỳ thú</option>
              <option value="vu-khuc-giang-sinh-mam-non">Mầm non: Vũ khúc Giáng sinh</option>
            </optgroup>
            <optgroup label="Cấp Tiểu Học">
              <option value="em-la-chien-si-bo-doi-cu-ho-tieu-hoc">Tiểu học: Em là chiến sĩ bộ đội Cụ Hồ</option>
              <option value="le-hoi-banh-chung-tieu-hoc">Tiểu học: Lễ hội Bánh chưng</option>
              <option value="le-hoi-halloween-tieu-hoc">Tiểu học: Lễ hội Halloween</option>
              <option value="le-hoi-trung-thu-tieu-hoc">Tiểu học: Lễ hội Trung thu</option>
              <option value="le-hoi-xuan-tieu-hoc">Tiểu học: Lễ hội Xuân</option>
              <option value="merry-christmas-tieu-hoc">Tiểu học: Merry Christmas</option>
              <option value="ngay-hoi-em-yeu-sach-tieu-hoc">Tiểu học: Ngày hội em yêu sách</option>
              <option value="trai-nghiem-sang-tao-tieu-hoc">Tiểu học: Trải nghiệm sáng tạo</option>
              <option value="viet-tiep-cau-chuyen-hoa-binh-tieu-hoc">Tiểu học: Viết tiếp câu chuyện hòa bình</option>
              <option value="water-safe-and-fun-tieu-hoc">Tiểu học: Water Safe and Fun</option>
            </optgroup>
            <optgroup label="Cấp THCS">
              <option value="le-hoi-banh-chung-thcs">THCS: Lễ hội Bánh chưng</option>
              <option value="le-hoi-trung-thu-thcs">THCS: Lễ hội Trung thu</option>
              <option value="team-work-day-thcs">THCS: Team Work Day</option>
              <option value="thoat-hiem-khoi-dam-chay-thcs">THCS: Thoát hiểm khỏi đám cháy</option>
              <option value="thu-thach-sinh-ton-thcs">THCS: Thử thách sinh tồn</option>
              <option value="viet-len-muc-tieu-thcs">THCS: Viết lên mục tiêu</option>
              <option value="viet-tiep-cau-chuyen-hoa-binh-thcs">THCS: Viết tiếp câu chuyện hòa bình</option>
              <option value="water-safe-and-fun-thcs">THCS: Water Safe and Fun</option>
            </optgroup>
            <optgroup label="Cấp THPT">
              <option value="viet-len-muc-tieu-thpt">THPT: Viết lên mục tiêu</option>
            </optgroup>
          </select>
        </div>
      </section>

      {/* Editor Body */}
      <section style={{ ...styles.tableCard, padding: "28px", border: "1px solid #e2e8f0" }}>
        {pageLoading || !pageSections ? (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 0" }}>
            <div style={styles.spinner}></div>
            <p style={{ color: "#64748b", marginTop: "16px", fontWeight: "600" }}>Đang truyền tải nội dung trang...</p>
          </div>
        ) : (
          <form onSubmit={handleSavePageContent} style={{ display: "flex", flexDirection: "column" }}>
            {pageError && <div style={{ ...styles.errorAlert, marginBottom: "20px" }}>{pageError}</div>}
            {pageSuccess && <div style={{ ...styles.successAlert, marginBottom: "20px" }}>{pageSuccess}</div>}

            {/* Premium Sub-tabs Bar */}
            <div style={subNavbarStyle} className="admin-sub-navbar">
              <button
                type="button"
                onClick={() => setEditorTab("seo")}
                style={editorTab === "seo" ? activeSubTabStyle : inactiveSubTabStyle}
              >
                🌐 SEO & Meta
              </button>
              <button
                type="button"
                onClick={() => setEditorTab("hero")}
                style={editorTab === "hero" ? activeSubTabStyle : inactiveSubTabStyle}
              >
                🖼️ Banner (Hero)
              </button>
              <button
                type="button"
                onClick={() => setEditorTab("objectives")}
                style={editorTab === "objectives" ? activeSubTabStyle : inactiveSubTabStyle}
              >
                🎯 Mục tiêu & Ý nghĩa
              </button>
              <button
                type="button"
                onClick={() => setEditorTab("challenges")}
                style={editorTab === "challenges" ? activeSubTabStyle : inactiveSubTabStyle}
              >
                🗺️ Chặng Trải Nghiệm
              </button>
            </div>

            {/* Tab Panels */}
            <div style={{ minHeight: "350px", marginBottom: "20px" }}>
              
              {/* Tab 1: SEO */}
              {editorTab === "seo" && (
                <div style={sectionCardStyle}>
                  <h5 style={sectionHeaderStyle}>🌐 Cấu hình SEO & Tiêu đề trang</h5>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>Tiêu đề trang (Page Title)</label>
                      <input 
                        type="text" 
                        value={pageTitle} 
                        onChange={(e) => setPageTitle(e.target.value)} 
                        style={styles.formInput} 
                        className="admin-form-input" 
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>Tiêu đề SEO (Meta Title)</label>
                      <input 
                        type="text" 
                        value={pageMetaTitle} 
                        onChange={(e) => setPageMetaTitle(e.target.value)} 
                        style={styles.formInput} 
                        className="admin-form-input" 
                      />
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "16px" }}>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>Từ khóa SEO (Keywords, cách nhau bởi dấu phẩy)</label>
                      <input 
                        type="text" 
                        value={pageMetaKeywords} 
                        onChange={(e) => setPageMetaKeywords(e.target.value)} 
                        style={styles.formInput} 
                        className="admin-form-input" 
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>Mô tả SEO (Meta Description)</label>
                      <textarea 
                        value={pageMetaDescription} 
                        onChange={(e) => setPageMetaDescription(e.target.value)} 
                        style={{ ...styles.formInput, minHeight: "80px", fontFamily: "inherit" }} 
                        className="admin-form-input" 
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Banner (Hero) */}
              {editorTab === "hero" && (
                <div style={sectionCardStyle}>
                  <h5 style={sectionHeaderStyle}>🖼️ Phần Banner Đầu Trang (Hero Banner)</h5>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>Nhãn nhỏ trên cùng (Kicker)</label>
                      <input 
                        type="text" 
                        value={pageSections.hero.kicker} 
                        onChange={(e) => setPageSections({ ...pageSections, hero: { ...pageSections.hero, kicker: e.target.value } })} 
                        style={styles.formInput} 
                        className="admin-form-input" 
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>Tiêu đề chính (Dùng \n để xuống dòng)</label>
                      <textarea 
                        value={pageSections.hero.heading} 
                        onChange={(e) => setPageSections({ ...pageSections, hero: { ...pageSections.hero, heading: e.target.value } })} 
                        style={{ ...styles.formInput, minHeight: "45px", fontFamily: "inherit" }} 
                        className="admin-form-input" 
                      />
                    </div>
                  </div>
                  
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px", marginTop: "16px" }}>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>⏱️ Thời lượng dã ngoại</label>
                      <input 
                        type="text" 
                        value={pageSections.hero.duration} 
                        onChange={(e) => setPageSections({ ...pageSections, hero: { ...pageSections.hero, duration: e.target.value } })} 
                        style={styles.formInput} 
                        className="admin-form-input" 
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>👥 Đối tượng tham gia</label>
                      <input 
                        type="text" 
                        value={pageSections.hero.target} 
                        onChange={(e) => setPageSections({ ...pageSections, hero: { ...pageSections.hero, target: e.target.value } })} 
                        style={styles.formInput} 
                        className="admin-form-input" 
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>📍 Địa điểm tổ chức</label>
                      <input 
                        type="text" 
                        value={pageSections.hero.location} 
                        onChange={(e) => setPageSections({ ...pageSections, hero: { ...pageSections.hero, location: e.target.value } })} 
                        style={styles.formInput} 
                        className="admin-form-input" 
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "20px", marginTop: "16px" }}>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>Mô tả tóm tắt chương trình</label>
                      <textarea 
                        value={pageSections.hero.subtitle} 
                        onChange={(e) => setPageSections({ ...pageSections, hero: { ...pageSections.hero, subtitle: e.target.value } })} 
                        style={{ ...styles.formInput, minHeight: "110px", fontFamily: "inherit" }} 
                        className="admin-form-input" 
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>Hình nền Banner (URL)</label>
                      <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "8px" }}>
                        <input 
                          type="text" 
                          value={pageSections.hero.bgImage} 
                          onChange={(e) => setPageSections({ ...pageSections, hero: { ...pageSections.hero, bgImage: e.target.value } })} 
                          style={{ ...styles.formInput, flex: 1 }} 
                          className="admin-form-input" 
                        />
                        <label
                          style={{
                            padding: "10px 14px",
                            backgroundColor: "#eff6ff",
                            border: "1px solid #bfdbfe",
                            borderRadius: "10px",
                            color: "#2563eb",
                            fontSize: "13px",
                            fontWeight: "600",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                            whiteSpace: "nowrap",
                            margin: 0
                          }}
                        >
                          📤 Tải ảnh
                          <input
                            type="file"
                            accept="image/*"
                            onChange={async (e) => {
                              const file = e.target.files[0];
                              if (!file) return;
                              try {
                                e.target.disabled = true;
                                const url = await uploadImageFile(file);
                                setPageSections({
                                  ...pageSections,
                                  hero: { ...pageSections.hero, bgImage: url }
                                });
                                alert("Tải lên ảnh thành công!");
                              } catch (err) {
                                alert(err.message);
                              } finally {
                                e.target.disabled = false;
                              }
                            }}
                            style={{ display: "none" }}
                          />
                        </label>
                      </div>
                      
                      {pageSections.hero.bgImage && (
                        <div style={{
                          border: "1px solid #e2e8f0",
                          borderRadius: "10px",
                          overflow: "hidden",
                          height: "90px",
                          backgroundColor: "#f8fafc",
                          boxShadow: "0 1px 3px rgba(0,0,0,0.02)"
                        }}>
                          <img 
                            src={pageSections.hero.bgImage} 
                            alt="Preview" 
                            style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                            onError={(e) => { e.target.style.display = "none"; }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Objectives */}
              {editorTab === "objectives" && (
                <div style={sectionCardStyle}>
                  <h5 style={sectionHeaderStyle}>🎯 Khung Mục tiêu & Ý nghĩa Giáo dục</h5>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>Nhãn phụ (Kicker)</label>
                      <input 
                        type="text" 
                        value={pageSections.objectives?.kicker || ""} 
                        onChange={(e) => setPageSections({ ...pageSections, objectives: { ...pageSections.objectives, kicker: e.target.value } })} 
                        style={styles.formInput} 
                        className="admin-form-input" 
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>Tiêu đề chính</label>
                      <input 
                        type="text" 
                        value={pageSections.objectives?.heading || ""} 
                        onChange={(e) => setPageSections({ ...pageSections, objectives: { ...pageSections.objectives, heading: e.target.value } })} 
                        style={styles.formInput} 
                        className="admin-form-input" 
                      />
                    </div>
                  </div>
                  <div style={{ ...styles.formGroup, marginTop: "16px" }}>
                    <label style={styles.formLabel}>Mô tả chi tiết</label>
                    <textarea 
                      value={pageSections.objectives?.subtitle || ""} 
                      onChange={(e) => setPageSections({ ...pageSections, objectives: { ...pageSections.objectives, subtitle: e.target.value } })} 
                      style={{ ...styles.formInput, minHeight: "60px", fontFamily: "inherit" }} 
                      className="admin-form-input" 
                    />
                  </div>

                  {/* Three cards grid */}
                  <div style={{ marginTop: "24px" }}>
                    <h6 style={{ fontSize: "13px", fontWeight: "700", color: "#475569", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                      Nội dung chi tiết 3 cột năng lực & phẩm chất
                    </h6>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                      {(pageSections.objectives?.items || []).map((item, idx) => (
                        <div 
                          key={idx} 
                          style={{ 
                            padding: "20px", 
                            backgroundColor: "#f8fafc", 
                            borderRadius: "14px", 
                            border: "1px solid #e2e8f0",
                            boxShadow: "0 1px 2px rgba(0,0,0,0.01)"
                          }}
                        >
                          <div style={{ ...styles.formGroup, marginBottom: "12px" }}>
                            <label style={{ ...styles.formLabel, fontSize: "11px" }}>Tiêu đề nhóm {idx + 1}</label>
                            <input
                              type="text"
                              value={item.title || ""}
                              onChange={(e) => {
                                const items = [...(pageSections.objectives?.items || [])];
                                items[idx] = { ...item, title: e.target.value };
                                setPageSections({ ...pageSections, objectives: { ...pageSections.objectives, items } });
                              }}
                              style={{ ...styles.formInput, padding: "8px 12px", fontWeight: "700" }}
                              className="admin-form-input"
                            />
                          </div>
                          
                          <div style={{ ...styles.formGroup, marginBottom: "12px" }}>
                            <label style={{ ...styles.formLabel, fontSize: "11px" }}>Mô tả tổng quát</label>
                            <input
                              type="text"
                              value={item.description || ""}
                              onChange={(e) => {
                                const items = [...(pageSections.objectives?.items || [])];
                                items[idx] = { ...item, description: e.target.value };
                                setPageSections({ ...pageSections, objectives: { ...pageSections.objectives, items } });
                              }}
                              style={{ ...styles.formInput, padding: "8px 12px", fontSize: "13px" }}
                              className="admin-form-input"
                            />
                          </div>

                          <div style={styles.formGroup}>
                            <label style={{ ...styles.formLabel, fontSize: "11px" }}>Các ý chính đạt được (mỗi dòng một gạch đầu dòng)</label>
                            <textarea
                              value={Array.isArray(item.points) ? item.points.join("\n") : ""}
                              onChange={(e) => {
                                const items = [...(pageSections.objectives?.items || [])];
                                items[idx] = { ...item, points: e.target.value.split("\n") };
                                setPageSections({ ...pageSections, objectives: { ...pageSections.objectives, items } });
                              }}
                              style={{ ...styles.formInput, padding: "8px 12px", minHeight: "120px", fontSize: "13px", fontFamily: "inherit", lineHeight: "1.5" }}
                              className="admin-form-input"
                              placeholder="Học sinh tự tin hơn...&#10;Học sinh biết chia sẻ..."
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 4: Challenges (Redesigned beautifully) */}
              {editorTab === "challenges" && (
                <div style={sectionCardStyle}>
                  {/* Tab Title Area with Add Button */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
                    <div>
                      <h5 style={{ ...sectionHeaderStyle, margin: 0, borderBottom: "none", paddingBottom: 0 }}>
                        🗺️ Các Chặng Trải Nghiệm & Thử Thách
                      </h5>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const items = [...(pageSections.challenges?.items || [])];
                        items.push({
                          title: "Tên chặng mới",
                          subtitle: "Địa điểm / Vị trí",
                          image: "",
                          badgeColor: "bg-blue-50 text-abaBlue border-blue-200",
                          description: "Chi tiết nội dung thử thách..."
                        });
                        setPageSections({
                          ...pageSections,
                          challenges: { ...pageSections.challenges, items }
                        });
                      }}
                      style={{
                        padding: "10px 18px",
                        backgroundColor: "#f0fdf4",
                        border: "1px solid #bbf7d0",
                        borderRadius: "10px",
                        color: "#15803d",
                        fontSize: "13px",
                        fontWeight: "600",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        boxShadow: "0 2px 6px rgba(22, 163, 74, 0.05)"
                      }}
                    >
                      ➕ Thêm Chặng Thử Thách
                    </button>
                  </div>

                  {/* Kicker & Heading Grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "16px" }}>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>Kicker (Nhãn nhỏ trên cùng)</label>
                      <input
                        type="text"
                        value={pageSections.challenges?.kicker || ""}
                        onChange={(e) => {
                          const newChallenges = { ...pageSections.challenges, kicker: e.target.value };
                          setPageSections({ ...pageSections, challenges: newChallenges });
                        }}
                        style={styles.formInput}
                        className="admin-form-input"
                      />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.formLabel}>Tiêu đề chính</label>
                      <input
                        type="text"
                        value={pageSections.challenges?.heading || ""}
                        onChange={(e) => {
                          const newChallenges = { ...pageSections.challenges, heading: e.target.value };
                          setPageSections({ ...pageSections, challenges: newChallenges });
                        }}
                        style={styles.formInput}
                        className="admin-form-input"
                      />
                    </div>
                  </div>
                  
                  <div style={{ ...styles.formGroup, marginBottom: "28px" }}>
                    <label style={styles.formLabel}>Mô tả phụ cho danh sách các chặng</label>
                    <textarea
                      value={pageSections.challenges?.subtitle || ""}
                      onChange={(e) => {
                        const newChallenges = { ...pageSections.challenges, subtitle: e.target.value };
                        setPageSections({ ...pageSections, challenges: newChallenges });
                      }}
                      style={{ ...styles.formInput, minHeight: "55px", fontFamily: "inherit" }}
                      className="admin-form-input"
                    />
                  </div>

                  {/* Beautiful Grid of Challenge Cards */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    {((pageSections.challenges?.items || [])).map((item, idx) => (
                      <div 
                        key={idx} 
                        style={{ 
                          border: "1px solid #e2e8f0", 
                          borderRadius: "16px", 
                          backgroundColor: "#ffffff",
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.02)",
                          overflow: "hidden",
                          transition: "all 0.3s ease"
                        }}
                      >
                        {/* Header bar */}
                        <div style={{ 
                          backgroundColor: "#f8fafc", 
                          padding: "14px 24px", 
                          borderBottom: "1px solid #e2e8f0",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center"
                        }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <span style={{ 
                              display: "inline-flex", 
                              alignItems: "center", 
                              justifyContent: "center", 
                              width: "28px", 
                              height: "28px", 
                              backgroundColor: "#f26e3a", 
                              color: "#ffffff",
                              borderRadius: "8px",
                              fontSize: "13px",
                              fontWeight: "700"
                            }}>{idx + 1}</span>
                            <span style={{ fontWeight: "700", color: "#0f172a", fontSize: "15px" }}>
                              {item.title || `Chặng thứ ${idx + 1}`}
                            </span>
                          </div>
                          
                          {/* Card Reordering & Deletion Actions */}
                          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <button
                              type="button"
                              disabled={idx === 0}
                              onClick={() => moveChallenge(idx, -1)}
                              style={{
                                padding: "6px 10px",
                                backgroundColor: idx === 0 ? "#f1f5f9" : "#ffffff",
                                border: "1px solid #e2e8f0",
                                borderRadius: "8px",
                                cursor: idx === 0 ? "not-allowed" : "pointer",
                                fontSize: "12px",
                                color: idx === 0 ? "#cbd5e1" : "#475569"
                              }}
                              title="Di chuyển lên"
                            >
                              ▲
                            </button>
                            <button
                              type="button"
                              disabled={idx === (pageSections.challenges?.items || []).length - 1}
                              onClick={() => moveChallenge(idx, 1)}
                              style={{
                                padding: "6px 10px",
                                backgroundColor: idx === (pageSections.challenges?.items || []).length - 1 ? "#f1f5f9" : "#ffffff",
                                border: "1px solid #e2e8f0",
                                borderRadius: "8px",
                                cursor: idx === (pageSections.challenges?.items || []).length - 1 ? "not-allowed" : "pointer",
                                fontSize: "12px",
                                color: idx === (pageSections.challenges?.items || []).length - 1 ? "#cbd5e1" : "#475569"
                              }}
                              title="Di chuyển xuống"
                            >
                              ▼
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                if (confirm(`Bạn chắc chắn muốn xóa chặng "${item.title || idx + 1}"?`)) {
                                  const items = (pageSections.challenges?.items || []).filter((_, i) => i !== idx);
                                  setPageSections({
                                    ...pageSections,
                                    challenges: { ...pageSections.challenges, items }
                                  });
                                }
                              }}
                              style={{
                                padding: "6px 14px",
                                backgroundColor: "#fef2f2",
                                border: "1px solid #fee2e2",
                                borderRadius: "8px",
                                color: "#991b1b",
                                fontSize: "12px",
                                fontWeight: "600",
                                cursor: "pointer",
                                marginLeft: "8px"
                              }}
                            >
                              🗑️ Xóa Chặng
                            </button>
                          </div>
                        </div>

                        {/* Two-Column Card Body */}
                        <div style={{ padding: "24px", display: "grid", gridTemplateColumns: "1.2fr 2fr", gap: "24px" }} className="admin-users-layout">
                          
                          {/* Column 1: Visual Image Upload & Dropzone Area */}
                          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <label style={{ ...styles.formLabel, fontSize: "12px", color: "#64748b" }}>Hình ảnh chặng</label>
                            
                            <div 
                              style={{
                                border: "2px dashed #cbd5e1",
                                borderRadius: "12px",
                                overflow: "hidden",
                                aspectRatio: "4/3",
                                position: "relative",
                                backgroundColor: "#f8fafc",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                transition: "all 0.2s ease"
                              }}
                              onClick={() => document.getElementById(`challenge-file-input-${idx}`).click()}
                            >
                              {item.image ? (
                                <>
                                  <img 
                                    src={item.image} 
                                    alt="Challenge Preview" 
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                                  />
                                  <div style={{
                                    position: "absolute",
                                    inset: 0,
                                    backgroundColor: "rgba(15, 23, 42, 0.4)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#ffffff",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    opacity: 0,
                                    transition: "opacity 0.2s ease",
                                    pointerEvents: "none"
                                  }}
                                  className="image-overlay"
                                  >
                                    📷 Thay đổi hình ảnh
                                  </div>
                                  <style>{`
                                    div:hover > .image-overlay {
                                      opacity: 1 !important;
                                    }
                                  `}</style>
                                </>
                              ) : (
                                <div style={{ textAlign: "center", padding: "20px" }}>
                                  <span style={{ fontSize: "28px" }}>📷</span>
                                  <span style={{ display: "block", fontSize: "12px", color: "#f26e3a", fontWeight: "600", marginTop: "8px" }}>Tải ảnh lên chặng</span>
                                  <span style={{ display: "block", fontSize: "10px", color: "#94a3b8", marginTop: "2px" }}>Nhấp hoặc kéo thả tệp tin</span>
                                </div>
                              )}
                            </div>

                            <input
                              id={`challenge-file-input-${idx}`}
                              type="file"
                              accept="image/*"
                              onChange={async (e) => {
                                const file = e.target.files[0];
                                if (!file) return;
                                try {
                                  const url = await uploadImageFile(file);
                                  const items = [...(pageSections.challenges?.items || [])];
                                  items[idx] = { ...item, image: url };
                                  setPageSections({ ...pageSections, challenges: { ...pageSections.challenges, items } });
                                  alert("Tải lên ảnh chặng thành công!");
                                } catch (err) {
                                  alert(err.message);
                                }
                              }}
                              style={{ display: "none" }}
                            />
                            
                            <input
                              type="text"
                              value={item.image || ""}
                              placeholder="Hoặc dán link hình ảnh trực tiếp vào đây..."
                              onChange={(e) => {
                                const items = [...(pageSections.challenges?.items || [])];
                                items[idx] = { ...item, image: e.target.value };
                                setPageSections({ ...pageSections, challenges: { ...pageSections.challenges, items } });
                              }}
                              style={{ ...styles.formInput, padding: "8px 12px", fontSize: "12px" }}
                              className="admin-form-input"
                            />
                          </div>

                          {/* Column 2: Challenge Field Inputs */}
                          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                              <div style={styles.formGroup}>
                                <label style={{ ...styles.formLabel, fontSize: "12px" }}>Tên chặng thử thách</label>
                                <input
                                  type="text"
                                  value={item.title || ""}
                                  onChange={(e) => {
                                    const items = [...(pageSections.challenges?.items || [])];
                                    items[idx] = { ...item, title: e.target.value };
                                    setPageSections({ ...pageSections, challenges: { ...pageSections.challenges, items } });
                                  }}
                                  style={{ ...styles.formInput, padding: "8px 12px" }}
                                  className="admin-form-input"
                                />
                              </div>
                              <div style={styles.formGroup}>
                                <label style={{ ...styles.formLabel, fontSize: "12px" }}>Vị trí / Nhãn phụ</label>
                                <input
                                  type="text"
                                  value={item.subtitle || ""}
                                  onChange={(e) => {
                                    const items = [...(pageSections.challenges?.items || [])];
                                    items[idx] = { ...item, subtitle: e.target.value };
                                    setPageSections({ ...pageSections, challenges: { ...pageSections.challenges, items } });
                                  }}
                                  style={{ ...styles.formInput, padding: "8px 12px" }}
                                  className="admin-form-input"
                                />
                              </div>
                            </div>

                            {/* Badge Presets Color Selector */}
                            <div style={styles.formGroup}>
                              <label style={{ ...styles.formLabel, fontSize: "12px" }}>Màu sắc huy hiệu (Badge Style)</label>
                              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", margin: "4px 0" }}>
                                {badgePresets.map((preset, pIdx) => {
                                  const isSelected = item.badgeColor === preset.value;
                                  return (
                                    <button
                                      key={pIdx}
                                      type="button"
                                      onClick={() => {
                                        const items = [...(pageSections.challenges?.items || [])];
                                        items[idx] = { ...item, badgeColor: preset.value };
                                        setPageSections({ ...pageSections, challenges: { ...pageSections.challenges, items } });
                                      }}
                                      style={{
                                        padding: "6px 12px",
                                        borderRadius: "20px",
                                        fontSize: "12px",
                                        fontWeight: "600",
                                        cursor: "pointer",
                                        border: isSelected ? "2px solid #f26e3a" : "1px solid #e2e8f0",
                                        backgroundColor: isSelected ? "#fff3ed" : "#ffffff",
                                        color: isSelected ? "#f26e3a" : "#64748b",
                                        transition: "all 0.2s ease"
                                      }}
                                    >
                                      {preset.label}
                                    </button>
                                  );
                                })}
                              </div>
                              <input
                                type="text"
                                value={item.badgeColor || ""}
                                placeholder="Hoặc tự gõ mã màu Tailwind..."
                                onChange={(e) => {
                                  const items = [...(pageSections.challenges?.items || [])];
                                  items[idx] = { ...item, badgeColor: e.target.value };
                                  setPageSections({ ...pageSections, challenges: { ...pageSections.challenges, items } });
                                }}
                                style={{ ...styles.formInput, padding: "8px 12px", fontSize: "12px" }}
                                className="admin-form-input"
                              />
                            </div>

                            <div style={styles.formGroup}>
                              <label style={{ ...styles.formLabel, fontSize: "12px" }}>Nội dung chi tiết hoạt động chặng</label>
                              <textarea
                                value={item.description || ""}
                                onChange={(e) => {
                                  const items = [...(pageSections.challenges?.items || [])];
                                  items[idx] = { ...item, description: e.target.value };
                                  setPageSections({ ...pageSections, challenges: { ...pageSections.challenges, items } });
                                }}
                                style={{ ...styles.formInput, minHeight: "85px", padding: "8px 12px", fontFamily: "inherit", lineHeight: "1.5" }}
                                className="admin-form-input"
                                placeholder="Học sinh tập hợp tại điểm chặng, nhận mật thư và thực hiện các câu đố..."
                              />
                            </div>
                          </div>

                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Gorgeous Dotted Add Card at bottom */}
                  <button
                    type="button"
                    onClick={() => {
                      const items = [...(pageSections.challenges?.items || [])];
                      items.push({
                        title: "Tên chặng mới",
                        subtitle: "Địa điểm / Vị trí",
                        image: "",
                        badgeColor: "bg-blue-50 text-abaBlue border-blue-200",
                        description: "Chi tiết nội dung thử thách..."
                      });
                      setPageSections({
                        ...pageSections,
                        challenges: { ...pageSections.challenges, items }
                      });
                    }}
                    style={{
                      width: "100%",
                      padding: "24px",
                      border: "2px dashed #cbd5e1",
                      borderRadius: "16px",
                      backgroundColor: "#f8fafc",
                      color: "#64748b",
                      fontSize: "14px",
                      fontWeight: "600",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      marginTop: "24px",
                      transition: "all 0.2s ease"
                    }}
                    className="admin-btn-hover-dashed"
                  >
                    <span style={{ fontSize: "24px" }}>➕</span>
                    Thêm Chặng Trải Nghiệm Mới
                  </button>
                  <style>{`
                    .admin-btn-hover-dashed:hover {
                      border-color: #f26e3a !important;
                      color: #f26e3a !important;
                      background-color: #fffaf8 !important;
                    }
                  `}</style>
                </div>
              )}
            </div>

            {/* Sticky Save Bar */}
            <div style={{ 
              display: "flex", 
              justifyContent: "flex-end", 
              borderTop: "1px solid #e2e8f0", 
              paddingTop: "20px",
              marginTop: "12px"
            }}>
              <button 
                type="submit" 
                style={{ 
                  ...styles.userSubmitBtn, 
                  minWidth: "200px", 
                  margin: 0,
                  padding: "12px 24px",
                  backgroundColor: "#f26e3a", 
                  boxShadow: "0 4px 12px rgba(242, 110, 58, 0.3)" 
                }} 
                className="admin-btn-hover"
              >
                💾 Lưu Nội Dung Trang
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
}

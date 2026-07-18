import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import QRCode from "qrcode";

export default function useAdminState() {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  
  // Tab states
  const [activeTab, setActiveTab] = useState("blogs");
  
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

  // QR Code states
  const [qrcodes, setQrcodes] = useState([]);
  const [qrLoading, setQrLoading] = useState(false);
  const [qrSearchQuery, setQrSearchQuery] = useState("");
  const [qrName, setQrName] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [qrDescription, setQrDescription] = useState("");
  const [qrError, setQrError] = useState("");
  const [qrSuccess, setQrSuccess] = useState("");
  const [deletingQrId, setDeletingQrId] = useState(null);
  const [editingQrId, setEditingQrId] = useState(null);
  const [previewQr, setPreviewQr] = useState(null);
  const [previewQrDataUrl, setPreviewQrDataUrl] = useState("");

  // Link Shortener states
  const [links, setLinks] = useState([]);
  const [linkLoading, setLinkLoading] = useState(false);
  const [linkSearchQuery, setLinkSearchQuery] = useState("");
  const [linkSlug, setLinkSlug] = useState("");
  const [linkOriginalUrl, setLinkOriginalUrl] = useState("");
  const [linkDescription, setLinkDescription] = useState("");
  const [linkError, setLinkError] = useState("");
  const [linkSuccess, setLinkSuccess] = useState("");
  const [deletingLinkId, setDeletingLinkId] = useState(null);
  const [editingLinkId, setEditingLinkId] = useState(null);

  // Menu Builder states
  const [menuData, setMenuData] = useState([]);
  const [menuJsonText, setMenuJsonText] = useState("");
  const [menuError, setMenuError] = useState("");
  const [menuSuccess, setMenuSuccess] = useState("");
  const [menuLoading, setMenuLoading] = useState(false);
  const [menuEditorMode, setMenuEditorMode] = useState("visual");

  // Page Content CMS states
  const [selectedPage, setSelectedPage] = useState("viet-len-muc-tieu-thpt");
  const [pageLoading, setPageLoading] = useState(false);
  const [pageTitle, setPageTitle] = useState("");
  const [pageMetaTitle, setPageMetaTitle] = useState("");
  const [pageMetaDescription, setPageMetaDescription] = useState("");
  const [pageMetaKeywords, setPageMetaKeywords] = useState("");
  const [pageSections, setPageSections] = useState(null);
  const [pageSuccess, setPageSuccess] = useState("");
  const [pageError, setPageError] = useState("");

  // Media Library states
  const [mediaList, setMediaList] = useState([]);
  const [uploadingMedia, setUploadingMedia] = useState(false);
  const [uploadError, setUploadError] = useState("");

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
    } else if (activeTab === "qrcodes") {
      fetchQRCodes();
    } else if (activeTab === "links") {
      fetchLinks();
    } else if (activeTab === "menu") {
      fetchMenu();
    } else if (activeTab === "pages") {
      fetchPageContent(selectedPage);
    } else if (activeTab === "media") {
      loadMediaHistory();
    }
  }, [activeTab, selectedPage]);

  const fetchMenu = async () => {
    setMenuLoading(true);
    setMenuError("");
    setMenuSuccess("");
    try {
      const res = await fetch("/api/menu");
      const data = await res.json();
      if (data.success && data.menu) {
        setMenuData(data.menu);
        setMenuJsonText(JSON.stringify(data.menu, null, 2));
      }
    } catch (err) {
      setMenuError("Lỗi lấy cấu trúc menu từ máy chủ!");
    } finally {
      setMenuLoading(false);
    }
  };

  const handleSaveMenu = async (e) => {
    e.preventDefault();
    setMenuError("");
    setMenuSuccess("");
    
    try {
      const parsed = JSON.parse(menuJsonText);
      if (!Array.isArray(parsed)) {
        throw new Error("Cấu trúc menu gốc phải là một mảng JSON!");
      }
      
      const token = localStorage.getItem("admin_token");
      const res = await fetch("/api/menu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ menu: parsed }),
      });
      const data = await res.json();
      if (data.success) {
        setMenuSuccess(data.warning || "Đã lưu cấu trúc menu thành công!");
        setMenuData(parsed);
      } else {
        setMenuError(data.error || "Lưu menu thất bại!");
      }
    } catch (err) {
      setMenuError(`Định dạng JSON không hợp lệ: ${err.message}`);
    }
  };

  const fetchPageContent = async (slug) => {
    setPageLoading(true);
    setPageError("");
    setPageSuccess("");
    try {
      const res = await fetch(`/api/pages/${slug}`);
      const data = await res.json();
      if (data.success && data.page) {
        setPageTitle(data.page.title);
        setPageMetaTitle(data.page.meta_title || "");
        setPageMetaDescription(data.page.meta_description || "");
        setPageMetaKeywords(Array.isArray(data.page.meta_keywords) ? data.page.meta_keywords.join(", ") : "");
        const sections = data.page.sections || {};
        if (!sections.challenges) {
          sections.challenges = { kicker: "TRẠM TRẢI NGHIỆM", heading: "Các Chặng Trải Nghiệm", subtitle: "", items: [] };
        }
        if (!sections.objectives) {
          sections.objectives = {
            kicker: "MỤC TIÊU & Ý NGHĨA",
            heading: "Kết Quả Đạt Được Của Học Sinh",
            subtitle: "Thực hiện các mục tiêu giáo dục năng lực và phẩm chất cho học sinh theo khung chương trình giáo dục trải nghiệm năm 2018.",
            items: []
          };
        }
        if (!sections.objectives.items || sections.objectives.items.length === 0) {
          sections.objectives.items = [
            {
              title: "Phẩm Chất",
              description: "Nuôi dưỡng suy nghĩ tích cực, lòng tự tin và củng cố các giá trị tình cảm gia đình vững chắc cho học sinh.",
              points: [
                "Học sinh luôn suy nghĩ tích cực, có niềm tin vào bản thân, gia đình và cuộc sống.",
                "Học sinh yêu quý và biết cách trân trọng bản thân mình hơn."
              ]
            },
            {
              title: "Năng Lực Chung",
              description: "Thúc đẩy phát triển khả năng thấu hiểu bản thân, rèn luyện kỹ năng truyền đạt giao tiếp và làm việc nhóm hiệu quả.",
              points: [
                "Học sinh nhận diện, phát huy được các điểm mạnh cá nhân.",
                "Nhận biết hạn chế điểm yếu để chủ động cải thiện.",
                "Rèn luyện kỹ năng giao tiếp tự tin và khả năng hợp tác trong các nhiệm vụ tập thể."
              ]
            },
            {
              title: "Năng Lực Đặc Thù",
              description: "Bồi dưỡng phương pháp thiết lập mục tiêu khoa học, rèn luyện sức bền thể chất thông qua các hoạt động dã ngoại.",
              points: [
                "Học sinh định hướng sống có mục tiêu, ước mơ rõ ràng.",
                "Bắt đầu hình thành thói quen ghi ra những điều mình muốn đạt được.",
                "Thực hành nhuần nhuyễn kỹ năng phối hợp làm việc nhóm dã ngoại.",
                "Rèn luyện thể lực bền bỉ và kỹ năng vận động linh hoạt."
              ]
            }
          ];
        }
        setPageSections(sections);
      }
    } catch (err) {
      setPageError("Lỗi kết nối máy chủ lấy nội dung trang!");
    } finally {
      setPageLoading(false);
    }
  };

  const handleSavePageContent = async (e) => {
    e.preventDefault();
    setPageError("");
    setPageSuccess("");
    const token = localStorage.getItem("admin_token");

    try {
      const res = await fetch(`/api/pages/${selectedPage}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: pageTitle,
          meta_title: pageMetaTitle,
          meta_description: pageMetaDescription,
          meta_keywords: pageMetaKeywords.split(",").map((k) => k.trim()).filter(Boolean),
          sections: pageSections
        }),
      });
      const data = await res.json();
      if (data.success) {
        setPageSuccess(data.warning || "Đã lưu nội dung trang thành công!");
      } else {
        setPageError(data.error || "Lưu nội dung trang thất bại!");
      }
    } catch (err) {
      setPageError("Lỗi kết nối máy chủ!");
    }
  };

  const loadMediaHistory = () => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("aba_uploaded_media");
      if (saved) {
        setMediaList(JSON.parse(saved));
      }
    }
  };

  const handleMediaUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadingMedia(true);
    setUploadError("");
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success && data.url) {
        const item = { name: file.name, url: data.url, uploadedAt: new Date().toLocaleString() };
        const updated = [item, ...mediaList];
        setMediaList(updated);
        localStorage.setItem("aba_uploaded_media", JSON.stringify(updated));
        alert("Đã tải lên tệp ảnh thành công!");
      } else {
        setUploadError(data.error || "Tải lên tệp ảnh thất bại!");
      }
    } catch (err) {
      setUploadError("Lỗi kết nối server tải tệp!");
    } finally {
      setUploadingMedia(false);
    }
  };

  const uploadImageFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success && data.url) {
        const item = { name: file.name, url: data.url, uploadedAt: new Date().toLocaleString() };
        const updated = [item, ...mediaList];
        setMediaList(updated);
        localStorage.setItem("aba_uploaded_media", JSON.stringify(updated));
        return data.url;
      } else {
        throw new Error(data.error || "Tải lên tệp ảnh thất bại!");
      }
    } catch (err) {
      throw new Error(err.message || "Lỗi kết nối server tải tệp!");
    }
  };

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

  const fetchQRCodes = async () => {
    setQrLoading(true);
    setQrError("");
    setQrSuccess("");
    const token = localStorage.getItem("admin_token");
    try {
      const response = await fetch("/api/qrcodes", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.success) {
        setQrcodes(data.qrcodes);
      }
    } catch (error) {
      console.error("Lỗi lấy danh sách QR Code:", error);
    } finally {
      setQrLoading(false);
    }
  };

  const handleCreateOrUpdateQr = async (e) => {
    e.preventDefault();
    setQrError("");
    setQrSuccess("");
    const token = localStorage.getItem("admin_token");

    try {
      const response = await fetch("/api/qrcodes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: editingQrId,
          name: qrName,
          value: qrValue,
          description: qrDescription,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setQrSuccess(editingQrId ? "Cập nhật mã QR thành công!" : "Tạo mã QR mới thành công!");
        setQrName("");
        setQrValue("");
        setQrDescription("");
        setEditingQrId(null);
        fetchQRCodes();
      } else {
        setQrError(data.error || "Không thể lưu mã QR!");
      }
    } catch (error) {
      setQrError("Đã xảy ra lỗi kết nối API!");
    }
  };

  const handleDeleteQr = async (id) => {
    const token = localStorage.getItem("admin_token");
    try {
      const response = await fetch(`/api/qrcodes?id=${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.success) {
        setQrcodes(qrcodes.filter((item) => item.id !== id));
        setDeletingQrId(null);
      } else {
        alert(data.error || "Không thể xóa mã QR!");
      }
    } catch (error) {
      alert("Đã xảy ra lỗi khi kết nối API!");
    }
  };

  const handleOpenPreview = async (qrcode) => {
    try {
      const url = await QRCode.toDataURL(qrcode.value, {
        width: 600,
        margin: 2,
        color: {
          dark: "#000000",
          light: "#ffffff"
        }
      });
      setPreviewQr(qrcode);
      setPreviewQrDataUrl(url);
    } catch (err) {
      console.error("Lỗi tạo ảnh QR Code:", err);
      alert("Lỗi khi tạo hình ảnh QR Code!");
    }
  };

  const handleDownloadQr = () => {
    if (!previewQrDataUrl || !previewQr) return;
    const link = document.createElement("a");
    link.href = previewQrDataUrl;
    const filename = `${previewQr.name.toLowerCase().replace(/[^a-z0-9]/g, "_")}_qr.png`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredQRCodes = qrcodes.filter((qr) =>
    qr.name.toLowerCase().includes(qrSearchQuery.toLowerCase()) ||
    qr.value.toLowerCase().includes(qrSearchQuery.toLowerCase()) ||
    (qr.description && qr.description.toLowerCase().includes(qrSearchQuery.toLowerCase()))
  );

  const fetchLinks = async () => {
    setLinkLoading(true);
    setLinkError("");
    setLinkSuccess("");
    const token = localStorage.getItem("admin_token");
    try {
      const response = await fetch("/api/links", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.success) {
        setLinks(data.links);
      }
    } catch (error) {
      console.error("Lỗi lấy danh sách link rút gọn:", error);
    } finally {
      setLinkLoading(false);
    }
  };

  const handleCreateOrUpdateLink = async (e) => {
    e.preventDefault();
    setLinkError("");
    setLinkSuccess("");
    const token = localStorage.getItem("admin_token");

    try {
      const response = await fetch("/api/links", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: editingLinkId,
          slug: linkSlug,
          originalUrl: linkOriginalUrl,
          description: linkDescription,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setLinkSuccess(editingLinkId ? "Cập nhật link rút gọn thành công!" : "Tạo link rút gọn mới thành công!");
        setLinkSlug("");
        setLinkOriginalUrl("");
        setLinkDescription("");
        setEditingLinkId(null);
        fetchLinks();
      } else {
        setLinkError(data.error || "Không thể lưu link rút gọn!");
      }
    } catch (error) {
      setLinkError("Đã xảy ra lỗi kết nối API!");
    }
  };

  const handleDeleteLink = async (id) => {
    const token = localStorage.getItem("admin_token");
    try {
      const response = await fetch(`/api/links?id=${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.success) {
        setLinks(links.filter((item) => item.id !== id));
        setDeletingLinkId(null);
      } else {
        alert(data.error || "Không thể xóa link rút gọn!");
      }
    } catch (error) {
      alert("Đã xảy ra lỗi khi kết nối API!");
    }
  };

  const getShortUrl = (slug) => {
    if (typeof window !== "undefined") {
      return `${window.location.protocol}//${window.location.host}/s/${slug}`;
    }
    return `/s/${slug}`;
  };

  const filteredLinks = links.filter((item) =>
    item.slug.toLowerCase().includes(linkSearchQuery.toLowerCase()) ||
    item.originalUrl.toLowerCase().includes(linkSearchQuery.toLowerCase()) ||
    (item.description && item.description.toLowerCase().includes(linkSearchQuery.toLowerCase()))
  );

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

  // Visual Menu Tree mutation helpers
  const updateMenuNode = (items, path, field, value) => {
    const newItems = JSON.parse(JSON.stringify(items));
    let current = newItems;
    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]].links;
    }
    const targetIdx = path[path.length - 1];
    current[targetIdx][field] = value;
    setMenuData(newItems);
    setMenuJsonText(JSON.stringify(newItems, null, 2));
  };

  const addMenuNode = (items, path) => {
    const newItems = JSON.parse(JSON.stringify(items));
    if (path.length === 0) {
      newItems.push({ label: "Menu Mới", href: "" });
    } else {
      let current = newItems;
      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]].links;
      }
      const targetIdx = path[path.length - 1];
      if (!current[targetIdx].links) {
        current[targetIdx].links = [];
      }
      current[targetIdx].links.push({ label: "Menu Con Mới", href: "" });
    }
    setMenuData(newItems);
    setMenuJsonText(JSON.stringify(newItems, null, 2));
  };

  const deleteMenuNode = (items, path) => {
    const newItems = JSON.parse(JSON.stringify(items));
    let current = newItems;
    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]].links;
    }
    const targetIdx = path[path.length - 1];
    current.splice(targetIdx, 1);
    setMenuData(newItems);
    setMenuJsonText(JSON.stringify(newItems, null, 2));
  };

  const moveMenuNode = (items, path, direction) => {
    const newItems = JSON.parse(JSON.stringify(items));
    let current = newItems;
    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]].links;
    }
    const index = path[path.length - 1];
    const targetIndex = index + direction;
    if (targetIndex >= 0 && targetIndex < current.length) {
      const temp = current[index];
      current[index] = current[targetIndex];
      current[targetIndex] = temp;
      setMenuData(newItems);
      setMenuJsonText(JSON.stringify(newItems, null, 2));
    }
  };

  return {
    blogs, setBlogs,
    searchQuery, setSearchQuery,
    loading, setLoading,
    deletingId, setDeletingId,
    activeTab, setActiveTab,
    users, setUsers,
    userLoading, setUserLoading,
    newUserUsername, setNewUserUsername,
    newUserPasscode, setNewUserPasscode,
    newUserName, setNewUserName,
    newUserRole, setNewUserRole,
    userError, setUserError,
    userSuccess, setUserSuccess,
    deletingUsername, setDeletingUsername,
    qrcodes, setQrcodes,
    qrLoading, setQrLoading,
    qrSearchQuery, setQrSearchQuery,
    qrName, setQrName,
    qrValue, setQrValue,
    qrDescription, setQrDescription,
    qrError, setQrError,
    qrSuccess, setQrSuccess,
    deletingQrId, setDeletingQrId,
    editingQrId, setEditingQrId,
    previewQr, setPreviewQr,
    previewQrDataUrl, setPreviewQrDataUrl,
    links, setLinks,
    linkLoading, setLinkLoading,
    linkSearchQuery, setLinkSearchQuery,
    linkSlug, setLinkSlug,
    linkOriginalUrl, setLinkOriginalUrl,
    linkDescription, setLinkDescription,
    linkError, setLinkError,
    linkSuccess, setLinkSuccess,
    deletingLinkId, setDeletingLinkId,
    editingLinkId, setEditingLinkId,
    menuData, setMenuData,
    menuJsonText, setMenuJsonText,
    menuError, setMenuError,
    menuSuccess, setMenuSuccess,
    menuLoading, setMenuLoading,
    menuEditorMode, setMenuEditorMode,
    selectedPage, setSelectedPage,
    pageLoading, setPageLoading,
    pageTitle, setPageTitle,
    pageMetaTitle, setPageMetaTitle,
    pageMetaDescription, setPageMetaDescription,
    pageMetaKeywords, setPageMetaKeywords,
    pageSections, setPageSections,
    pageSuccess, setPageSuccess,
    pageError, setPageError,
    mediaList, setMediaList,
    uploadingMedia, setUploadingMedia,
    uploadError, setUploadError,
    fetchMenu,
    handleSaveMenu,
    fetchPageContent,
    handleSavePageContent,
    loadMediaHistory,
    handleMediaUpload,
    uploadImageFile,
    fetchBlogs,
    fetchUsers,
    handleLogout,
    handleDelete,
    handleCreateUser,
    handleDeleteUser,
    fetchQRCodes,
    handleCreateOrUpdateQr,
    handleDeleteQr,
    handleOpenPreview,
    handleDownloadQr,
    filteredQRCodes,
    fetchLinks,
    handleCreateOrUpdateLink,
    handleDeleteLink,
    getShortUrl,
    filteredLinks,
    filteredBlogs,
    totalViews,
    totalComments,
    updateMenuNode,
    addMenuNode,
    deleteMenuNode,
    moveMenuNode
  };
}

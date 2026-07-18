"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import $ from "jquery";

const HeaderThree = () => {
  let pathname = usePathname();
  const [scroll, setScroll] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("select2").then(() => {
        const selectElement = $(".js-example-basic-single");
        if (selectElement.length > 0) {
          selectElement.select2(); // Initialize Select2
        }
      });
    }

    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
    if (!isMenuActive) {
      document.body.classList.add("scroll-hide-sm");
    } else {
      document.body.classList.remove("scroll-hide-sm");
    }
  };

  const closeMenu = () => {
    setIsMenuActive(false);
    document.body.classList.remove("scroll-hide-sm");
  };

  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeSubsubmenu, setActiveSubsubmenu] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmenuClick = (index) => {
    if (windowWidth < 992) {
      setActiveSubmenu((prevIndex) => (prevIndex === index ? null : index));
    }
  };

  const handleSubsubmenuClick = (index) => {
    if (windowWidth < 992) {
      setActiveSubsubmenu((prevIndex) => (prevIndex === index ? null : index));
    }
  };

  const defaultMenuItems = [
    { href: "/", label: "Trang Chủ" },
    { href: "/gioi-thieu", label: "Về ABA" },

    {
      href: "/trai-nghiem", label: "Trải Nghiệm",
      links: [
        {
          label: "Cấp Mầm Non",
          links: [
            { href: "/trai-nghiem/cap-mam-non/le-hoi-banh-chung", label: "Lễ Hội Bánh Chưng" },
            { href: "/trai-nghiem/cap-mam-non/le-hoi-trung-thu", label: "Lễ Hội Trung Thu" },
            { href: "/trai-nghiem/cap-mam-non/trai-nghiem-ky-thu", label: "Ngày Hội Trải Nghiệm Kỳ Thú" },
            { href: "/trai-nghiem/cap-mam-non/le-hoi-xuan", label: "Lễ Hội Xuân" },
            { href: "/trai-nghiem/cap-mam-non/vu-khuc-giang-sinh", label: "Vũ Khúc Giáng Sinh" },
            { href: "/trai-nghiem/cap-mam-non/ngay-hoi-nuoc-vui-nhon", label: "Ngày Hội Nước Vui Nhộn" },
          ]
        },
        {
          label: "Cấp Tiểu học",
          links: [
            { href: "/trai-nghiem/cap-tieu-hoc/ngay-hoi-em-yeu-sach", label: "Ngày Hội Em Yêu Sách" },
            { href: "/trai-nghiem/cap-tieu-hoc/viet-tiep-cau-chuyen-hoa-binh", label: "Viết Tiếp Câu Chuyện Hòa Bình" },
            { href: "/trai-nghiem/cap-tieu-hoc/water-safe-and-fun", label: "Water Safe And Fun" },
            { href: "/trai-nghiem/cap-tieu-hoc/le-hoi-halloween", label: "Lễ Hội Halloween" },
            { href: "/trai-nghiem/cap-tieu-hoc/merry-christmas", label: "Merry Christmas" },
            { href: "/trai-nghiem/cap-tieu-hoc/le-hoi-banh-chung", label: "Lễ Hội Bánh Chưng" },
            { href: "/trai-nghiem/cap-tieu-hoc/le-hoi-trung-thu", label: "Lễ Hội Trung Thu" },
            { href: "/trai-nghiem/cap-tieu-hoc/trai-nghiem-sang-tao", label: "Trải Nghiệm Sáng Tạo" },
            { href: "/trai-nghiem/cap-tieu-hoc/le-hoi-xuan", label: "Lễ Hội Xuân" },
            { href: "/trai-nghiem/cap-tieu-hoc/em-la-chien-si-bo-doi-cu-ho", label: "Em Là Chiến Sĩ Bộ Đội Cụ Hồ" },
          ]
        },
        {
          label: "Cấp THCS",
          links: [
            { href: "/trai-nghiem/cap-thcs/viet-len-muc-tieu", label: "Viết Lên Mục Tiêu" },
            { href: "/trai-nghiem/cap-thcs/team-work-day", label: "Ngày Hội Team Work Day" },
            { href: "/trai-nghiem/cap-thcs/thu-thach-sinh-ton", label: "Thử Thách Sinh Tồn" },
            { href: "/trai-nghiem/cap-thcs/viet-tiep-cau-chuyen-hoa-binh", label: "Viết Tiếp Câu Chuyện Hòa Bình" },
            { href: "/trai-nghiem/cap-thcs/water-safe-and-fun", label: "Water Safe And Fun" },
            { href: "/trai-nghiem/cap-thcs/thoat-hiem-khoi-dam-chay", label: "Thoát Hiểm Khỏi Đám Cháy" },
            { href: "/trai-nghiem/cap-thcs/le-hoi-trung-thu", label: "Lễ Hội Trung Thu" },
            { href: "/trai-nghiem/cap-thcs/le-hoi-banh-chung", label: "Lễ Hội Bánh Chưng" },
          ]
        },
        {
          label: "Cấp THPT",
          links: [
            { href: "/trai-nghiem/cap-thpt/viet-len-muc-tieu", label: "Viết Lên Mục Tiêu" }
          ]
        }
      ],
    },

    { href: "/da-ngoai", label: "Dã Ngoại" },
    { href: "/su-kien", label: "Sự Kiện" },

    { href: "/chuyen-de", label: "Chuyên Đề KNS" },

    { href: "/trai-he", label: "Trại Hè" },

    { href: "/blog", label: "Blog" },

    { href: "/contact", label: "Liên Hệ" },
  ];

  const [menuItems, setMenuItems] = useState(defaultMenuItems);

  // Filter hidden menus recursively
  const filterHiddenItems = (items) => {
    if (!items) return [];
    return items
      .filter((item) => !item.hidden)
      .map((item) => {
        if (item.links) {
          return {
            ...item,
            links: filterHiddenItems(item.links),
          };
        }
        return item;
      });
  };

  const visibleMenuItems = filterHiddenItems(menuItems);

  useEffect(() => {
    fetch("/api/menu")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.menu && data.menu.length > 0) {
          setMenuItems(data.menu);
        }
      })
      .catch((err) => console.error("Lỗi lấy menu động:", err));
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        /* Hide CSS absolute pseudo-element arrows */
        .header-menu .has-submenu::before,
        .header-menu .has-submenu > span::before,
        .header-menu .has-submenu > a::before,
        .mobile-menu .has-submenu::before,
        .mobile-menu .has-submenu > span::before,
        .mobile-menu .has-submenu > a::before {
          display: none !important;
          content: none !important;
        }

        /* Hover transition for the inline caret arrow */
        .nav-menu__item .ph-caret-down {
          display: inline-block;
          transition: transform 0.2s ease;
        }
        .nav-menu__item:hover .ph-caret-down {
          transform: rotate(180deg);
        }

        /* Hover bridge to bridge the 16px gap between menu item and submenu */
        @media (min-width: 992px) {
          .header-menu .has-submenu {
            position: relative;
          }
          .header-menu .has-submenu::after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 100%;
            height: 20px;
            background: transparent;
            z-index: 10;
          }

          /* Nested sub-submenu flyout styles */
          .nav-submenu__item.has-subsubmenu {
            position: relative;
          }
          .nav-submenu__item.has-subsubmenu:hover .nav-subsubmenu {
            visibility: visible;
            opacity: 1;
            transform: translateX(0);
          }
          .nav-subsubmenu {
            position: absolute;
            left: 100%;
            top: 0;
            background-color: hsl(var(--white));
            border-radius: 6px;
            min-width: max-content;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            visibility: hidden;
            opacity: 0;
            transform: translateX(10px);
            transition: all 0.2s ease;
            padding: 8px;
            list-style: none;
            z-index: 100;
          }
          .nav-submenu__item.has-subsubmenu .nav-submenu__link {
            white-space: nowrap;
          }
          /* Hover bridge for subsubmenu flyout offset */
          .nav-submenu__item.has-subsubmenu::after {
            content: "";
            position: absolute;
            left: 100%;
            top: 0;
            width: 10px;
            height: 100%;
            background: transparent;
          }

          /* Prevent clipping of the nested flyout menu */
          .header-menu .has-submenu:hover .nav-submenu {
            overflow: visible !important;
            max-height: none !important;
          }
        }

        /* Make the header logo larger by 50% */
        .logo img {
          height: 60px !important;
          width: auto !important;
        }

        /* Make mobile menu logo larger by 50% */
        .mobile-menu__logo img {
          height: 90px !important;
          width: auto !important;
        }

        /* Mobile accordion styles for nested subsubmenu */
        @media (max-width: 991px) {
          .nav-menu--mobile .nav-submenu {
            margin-inline-start: 0 !important;
          }
          .nav-menu--mobile .nav-submenu__link {
            padding-left: 28px !important;
            padding-right: 16px !important;
          }
          .nav-subsubmenu {
            display: none;
            padding-left: 16px;
            list-style: none;
            background-color: rgba(255, 255, 255, 0.05);
            border-radius: 4px;
            margin-top: 4px;
            min-width: unset;
          }
          .nav-subsubmenu .nav-submenu__link {
            white-space: normal;
          }
          .nav-submenu__item.has-subsubmenu.activeSub .nav-subsubmenu {
            display: block;
          }
          .nav-submenu__item.has-subsubmenu .ph-caret-down {
            transition: transform 0.2s ease;
          }
          .nav-submenu__item.has-subsubmenu.activeSub .ph-caret-down {
            transform: rotate(180deg);
          }
          .nav-menu__item.has-submenu .ph-caret-down {
            transition: transform 0.2s ease;
          }
          .nav-menu__item.has-submenu.activePage .ph-caret-down {
            transform: rotate(180deg);
          }
        }
      `}} />
      <div className={`side-overlay ${isMenuActive ? "show" : ""}`}></div>
      <header
        className={`header position-absolute z-2 w-100 top-0 ${scroll ? "fixed-header" : ""
          }`}
      >
        <div className='container container--xl'>
          <nav className='header-inner flex-between gap-8'>
            {/* Logo Start */}
            <div className='logo flex-shrink-0'>
              <Link href='/' className='link'>
                <img src='/assets/images/logo/logo.png' alt='Logo' />
              </Link>
            </div>
            {/* Logo End  */}

            {/* Menu Start  */}
            <div className='header-menu d-lg-block d-none mx-auto'>
              <ul className='nav-menu flex-align'>
                {visibleMenuItems.map((item, index) =>
                  item.links ? (
                    <li
                      key={`menu-item-${index}`}
                      className='nav-menu__item has-submenu'
                    >
                      <Link href={item.href} className='nav-menu__link flex-align gap-4'>
                        {item.label} <i className='ph-bold ph-caret-down text-xs' style={{ fontSize: '10px' }} />
                      </Link>
                      <ul className={`nav-submenu scroll-sm`}>
                        {item.links.map((link, linkIndex) =>
                          link.links ? (
                            <li
                              key={`submenu-item-${linkIndex}`}
                              className='nav-submenu__item has-subsubmenu'
                            >
                              <div className='nav-submenu__link hover-bg-neutral-30 d-flex justify-content-between align-items-center gap-4 w-100' style={{ cursor: 'pointer' }}>
                                <span>{link.label}</span>
                                <i className='ph-bold ph-caret-right text-xs d-none d-lg-inline-block' style={{ fontSize: '10px' }} />
                                <i className='ph-bold ph-caret-down text-xs d-inline-block d-lg-none' style={{ fontSize: '10px' }} />
                              </div>
                              <ul className='nav-subsubmenu'>
                                {link.links.map((subLink, subLinkIndex) => (
                                  <li
                                    key={`subsubmenu-item-${subLinkIndex}`}
                                    className={`nav-submenu__item ${pathname === subLink.href && "activePage"}`}
                                  >
                                    <Link
                                      href={subLink.href}
                                      className='nav-submenu__link hover-bg-neutral-30'
                                    >
                                      {subLink.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ) : (
                            <li
                              key={`submenu-item-${linkIndex}`}
                              className={`nav-submenu__item ${pathname === link.href && "activePage"}`}
                            >
                              <Link
                                href={link.href}
                                className='nav-submenu__link hover-bg-neutral-30'
                              >
                                {link.label}
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    </li>
                  ) : (
                    <li
                      key={`menu-contact-${index}`}
                      className={`nav-menu__item ${pathname === item.href && "activePage"
                        }`}
                    >
                      <Link href={item.href} className='nav-menu__link'>
                        {item.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            {/* Menu End  */}
            {/* Header Right start */}
            <div className='header-right flex-align'>
              <form
                action='#'
                className='search-form position-relative d-xl-block d-none'
              >
                <input
                  type='text'
                  className='common-input rounded-pill bg-white pe-48 border-neutral-30'
                  placeholder='Search...'
                />
                <button
                  type='submit'
                  className='w-36 h-36 bg-main-600 hover-bg-main-700 rounded-circle flex-center text-md text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8'
                >
                  <i className='ph-bold ph-magnifying-glass' />
                </button>
              </form>

              <button
                type='button'
                className='toggle-mobileMenu d-lg-none text-neutral-200 flex-center'
                onClick={toggleMenu}
              >
                <i className='ph ph-list' />
              </button>
            </div>

            {/* Header Right End  */}
          </nav>
        </div>
      </header>

      <div
        className={`mobile-menu scroll-sm d-lg-none d-block ${isMenuActive ? "active" : ""
          }`}
      >
        <button type='button' className='close-button' onClick={closeMenu}>
          <i className='ph ph-x' />{" "}
        </button>
        <div className='mobile-menu__inner'>
          <Link href='/' className='mobile-menu__logo'>
            <img src='/assets/images/logo/logo.png' alt='Logo' />
          </Link>
          <div className='mobile-menu__menu'>
            <ul className='nav-menu flex-align nav-menu--mobile'>
              {visibleMenuItems.map((item, index) =>
                item.links ? (
                  <li
                    key={`menu-item-${index}`}
                    className={`nav-menu__item has-submenu ${activeSubmenu === index ? "activePage" : ""
                      }`}
                  >
                    <div className='nav-menu__link flex-between gap-4 w-100' style={{ cursor: 'pointer' }}>
                      <Link 
                        href={item.href} 
                        className='text-dark flex-grow-1'
                        onClick={(e) => {
                          e.stopPropagation();
                          closeMenu();
                        }}
                      >
                        {item.label}
                      </Link>
                      <span 
                        className='d-flex align-items-center justify-content-center'
                        style={{ padding: '8px 16px', margin: '-8px -16px' }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSubmenuClick(index);
                        }}
                      >
                        <i className='ph-bold ph-caret-down text-xs' style={{ fontSize: '10px' }} />
                      </span>
                    </div>
                    <ul className={`nav-submenu scroll-sm`}>
                      {item.links.map((link, linkIndex) =>
                        link.links ? (
                          <li 
                            key={linkIndex} 
                            className={`nav-submenu__item has-subsubmenu ${activeSubsubmenu === linkIndex ? "activeSub" : ""}`}
                          >
                            <div 
                              className='nav-submenu__link hover-bg-neutral-30 d-flex justify-content-between align-items-center gap-4 w-100' 
                              style={{ cursor: 'pointer' }}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSubsubmenuClick(linkIndex);
                              }}
                            >
                              <span>{link.label}</span>
                              <i className='ph-bold ph-caret-down text-xs' style={{ fontSize: '10px' }} />
                            </div>
                            <ul className='nav-subsubmenu'>
                              {link.links.map((subLink, subLinkIndex) => (
                                <li key={subLinkIndex} className='nav-submenu__item'>
                                  <Link
                                    href={subLink.href}
                                    className='nav-submenu__link hover-bg-neutral-30'
                                    onClick={closeMenu}
                                  >
                                    {subLink.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ) : (
                          <li key={linkIndex} className='nav-submenu__item'>
                            <Link
                              href={link.href}
                              className='nav-submenu__link hover-bg-neutral-30'
                              onClick={closeMenu}
                            >
                              {link.label}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  </li>
                ) : (
                  <li
                    className={`nav-menu__item ${pathname === item.href && "activePage"
                      }`}
                    key={index}
                  >
                    <Link href={item.href} className='nav-menu__link'>
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderThree;

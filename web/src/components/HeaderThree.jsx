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

  const menuItems = [
    { href: "/", label: "Trang Chủ" },
    { href: "/gioi-thieu", label: "Về ABA" },

    { href: "/trai-nghiem", label: "Trải Nghiệm" },

    { href: "/da-ngoai", label: "Dã Ngoại" },
    { href: "/su-kien", label: "Sự Kiện" },

    { href: "/chuyen-de", label: "Chuyên Đề KNS" },

    { href: "/trai-he", label: "Trại Hè" },

    { href: "/blog", label: "Blog" },

    { href: "/contact", label: "Liên Hệ" },
  ];

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
                {menuItems.map((item, index) =>
                  item.links ? (
                    <li
                      key={`menu-item-${index}`}
                      className='nav-menu__item has-submenu'
                    >
                      <span href='#' className='nav-menu__link flex-align gap-4'>
                        {item.label} <i className='ph-bold ph-caret-down text-xs' style={{ fontSize: '10px' }} />
                      </span>
                      <ul className={`nav-submenu scroll-sm`}>
                        {item.links.map((link, linkIndex) => (
                          <li
                            key={`submenu-item-${linkIndex}`}
                            className={`nav-submenu__item ${pathname === link.href && "activePage"
                              }`}
                          >
                            <Link
                              href={link.href}
                              className='nav-submenu__link hover-bg-neutral-30'
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
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
              {menuItems.map((item, index) =>
                item.links ? (
                  <li
                    key={`menu-item-${index}`}
                    className={`nav-menu__item has-submenu ${activeSubmenu === index ? "activePage" : ""
                      }`}
                    onClick={() => handleSubmenuClick(index)}
                  >
                    <span className='nav-menu__link flex-align gap-4'>
                      {item.label} <i className='ph-bold ph-caret-down text-xs' style={{ fontSize: '10px' }} />
                    </span>
                    <ul className={`nav-submenu scroll-sm`}>
                      {item.links.map((link, linkIndex) => (
                        <li key={linkIndex} className='nav-submenu__item'>
                          <Link
                            href={link.href}
                            className='nav-submenu__link hover-bg-neutral-30'
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
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

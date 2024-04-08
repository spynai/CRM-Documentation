import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Drawer } from "antd"
import Logo from "../../images/MainLogo.webp"
import MenuIconImg from "../../images/MenuIcon.webp"
import {
  HeaderContainer,
  LogoContainer,
  NavBarContainer,
  NavLinkContainer,
  NavLink,
  MenuIcon,
  ResNavMenu,
} from "./styles"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  //drawer
  const [visible, setVisible] = useState(false)
  const [navbarRating, setNavbarRating] = useState(false)
  const [showBg, setShowBg] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground)
    return () => {
      window.removeEventListener("scroll", changeBackground)
    }
  }, [])

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarRating(true)
      setShowBg(true)
    } else {
      setNavbarRating(false)
      setShowBg(false)
    }
  }

  const pathname = typeof window !== "undefined" && window.location.pathname

  const hashLink = typeof window !== "undefined" && window.location.hash

  useEffect(() => {
    if (visible) {
      document.documentElement.style.overflow = "hidden"
    } else {
      document.documentElement.style.overflow = "unset"
    }
  }, [visible])

  return (
    <HeaderContainer id="header">
      <LogoContainer>
        <h1>
          <Link to="/">
            <StaticImage
              src="../../images/MainLogo.webp"
              alt="logo"
              placeholder="none"
            />
            {/* <img src={Logo} alt="logo" /> */}
          </Link>
        </h1>
      </LogoContainer>
      <div className="navMenu">
        <NavBarContainer>
          <NavLinkContainer id="navLinks">
            <NavLink key="home">
              <Link
                to="/"
                activeClassName={
                  pathname === "/" && !hashLink ? "activeLink" : ""
                }
              >
                Overview
              </Link>
            </NavLink>
            {/* <NavLink key="what_is_fithub">
              <Link
                to="/#what_is_fithub"
                className={
                  hashLink && hashLink.includes("what_is_fithub")
                    ? "activeLink"
                    : ""
                }
              >
                What is Fit Hub?
              </Link>
            </NavLink> */}
            <NavLink key="documentation">
              <Link
                to="/documentation"
                activeClassName={
                  pathname === "/documentation" ? "activeLink" : ""
                }
                onClick={onClose}
              >
                Documentation
              </Link>
            </NavLink>
            <NavLink key="crm-documentation">
              <Link
                to="/crm-documentation"
                activeClassName={
                  pathname === "/crm-documentation" ? "activeLink" : ""
                }
                onClick={onClose}
              >
              CRM Documentation
              </Link>
            </NavLink>
            {/* <NavLink key="contact">
              <Link
                to="/#contactContainer"
                className={
                  hashLink && hashLink.includes("contactContainer")
                    ? "activeLink"
                    : ""
                }
                partiallyActive={true}
              >
                Contact Us
              </Link>
            </NavLink> */}
          </NavLinkContainer>
        </NavBarContainer>
      </div>
      <ResNavMenu>
        <MenuIcon>
          <span role="presentation" onClick={showDrawer}>
            <StaticImage
              src="../../images/MenuIcon.webp"
              alt="menu"
              placeholder="none"
            />
            {/* <img src={MenuIconImg} alt="menu" /> */}
          </span>
        </MenuIcon>
        <Drawer
          placement="right"
          onClose={onClose}
          visible={visible}
          className="drawerNavMenu"
          title={
            <Link to="/" className="menuLogo">
              <StaticImage
                src="../../images/MainLogo.webp"
                alt="logo"
                placeholder="none"
              />
              {/* <img src={Logo} alt="logo" /> */}
            </Link>
          }
        >
          <NavBarContainer>
            <NavLinkContainer>
              <NavLink key="overview">
                <Link
                  to="/"
                  activeClassName={
                    pathname === "/" && !hashLink ? "activeLink" : ""
                  }
                  onClick={onClose}
                >
                  overview
                </Link>
              </NavLink>
              <NavLink key="documentation">
                <Link
                  to="/documentation"
                  activeClassName={
                    pathname === "/documentation" ? "activeLink" : ""
                  }
                  onClick={onClose}
                >
                  Documentation
                </Link>
              </NavLink>
              <NavLink key="crm-documentation">
                <Link
                  to="/crm-documentation"
                  activeClassName={
                    pathname === "/crm-documentation" ? "activeLink" : ""
                  }
                  onClick={onClose}
                >
                CRM Documentation
                </Link>
              </NavLink>
            </NavLinkContainer>
          </NavBarContainer>
        </Drawer>
      </ResNavMenu>
    </HeaderContainer>
  )
}

export default Header

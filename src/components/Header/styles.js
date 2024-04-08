import styled from "styled-components"
import * as palette from "../../styles/variables"

export const HeaderContainer = styled.header`
  z-index: 20;
  background: linear-gradient(
    rgb(0, 0, 0) 0%,
    rgb(0, 0, 0) 45.83%,
    transparent 100%
  );
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px 48px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 105px;
  transition: background 0.5s;
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding: 24px 30px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    padding: 24px 48px;
  }
  @media (max-width: 768px) {
    padding: 24px 0px;
    flex-direction: column;
    justify-content: center;
    height: 92px;
  }
  .navMenu {
    margin-left: auto;
    @media (max-width: 768px) {
      display: none;
    }
  }
`

export const LogoContainer = styled.div`
  a {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: ${palette.WHITE_COLOR};
    display: flex;
    align-items: center;
    img {
      width: 265px;
      height: 64px;
      object-fit: contain !important;
    }
  }
  @media (max-width: 768px) {
    padding: 0px 0px 0px 30px;
    width: 100%;
    a {
      display: inline-flex;
      img {
        width: 120px;
        height: 40px;
      }
    }
  }
`

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    .ant-btn {
      margin: 5px 0px 20px;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

export const NavLinkContainer = styled.ul`
  display: flex;
  flex-direction: row;
  margin-right: 25px;
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    margin-right: 10px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    margin-right: 0px;
  }
`

export const NavLink = styled.li`
  margin: 0px 25px;
  @media (max-width: 992px) {
    margin: 0px 8px;
  }
  a,
  .contactLink {
    display: inline-block;
    padding: 6px 0px;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: ${palette.WHITE_COLOR};
    position: relative;
    text-transform: capitalize;
    cursor: pointer;
    transition: 250ms;
    font-family: ${palette.CONTENT_FONT_FAMILY};
    &:hover {
      color: ${palette.WHITE_COLOR} !important;
    }
  }
  .activeLink {
    font-weight: 700;
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    display: flex;
    padding: 9px 0px;
    a,
    .contactLink {
      display: inline-block;
      padding: 5px 0px;
      text-align: center;
      font-size: 36px;
      line-height: 47px;
      text-transform: capitalize;
      &:hover {
        color: ${palette.WHITE_COLOR};
      }
    }
  }
`

export const ResNavMenu = styled.div``

export const MenuIcon = styled.div`
  display: none;
  position: absolute;
  right: 30px;
  top: 30px;
  right: 30px;
  font-size: 20px;
  @media (max-width: 768px) {
    display: block;
    top: 20px;
    span {
      cursor: pointer;
      width: 24px;
      height: 24px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }
`

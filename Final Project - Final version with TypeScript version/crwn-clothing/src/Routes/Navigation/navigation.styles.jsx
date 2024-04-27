import { Link } from "react-router-dom"
import styled from "styled-components"

export const NavigationStyled = styled.div`
  position: fixed;
  // background-image: url("https://wallpapercave.com/wp/wp2872423.jpg");
  background-color:#1d2951;
  background-size: cover;
  color:white;
  background-position: center;
  top: 0;
  left: 0;
  padding: 10px 40px;
  z-index: 99;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add box shadow */
`

export const LogoContainerStyled = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: start;

  height: 100%;
  width: 12rem;
  padding: 25px;
`

export const NavLinksContainerStyled = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavLinkStyled = styled(Link)`
  padding: 10px 15px;
  color:white;

  cursor: pointer;
`

import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import MenuRoundedIcon from "@mui/icons-material/MenuRounded"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import LogoMenu from "../../images/logo-menu.png"
import Logo from "../../images/logo.png"
import "./navbar.scss"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu((prev) => !prev)
  }

  if (showMenu) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "visible"
  }

  return (
    <div className="navbar">
      <div
        className="popout"
        style={{ transform: `translateY(-${showMenu ? "0" : "100vh"})` }}
      >
        <div className="close">
          <CloseRoundedIcon className="x" onClick={toggleMenu} />
        </div>
        <div className="popout-links">
          <Link className="menu-home" to="/" onClick={toggleMenu}>
            <h2>Home</h2>
          </Link>
          <Link className="popout-link" to="/diary" onClick={toggleMenu}>
            <h2>DIARY</h2>
          </Link>
          <Link className="popout-link" to="/new" onClick={toggleMenu}>
            <h2>NEW ENTRY</h2>
          </Link>
        </div>
        <div className="popout-logo">
          <Link to="/">
            <img src={LogoMenu} alt="" onClick={toggleMenu} />
          </Link>
        </div>
      </div>

      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>

      <div className="links">
        <Link className="link" to="/diary">
          <h2>DIARY</h2>
        </Link>
        <Link className="link" to="/new">
          <h2>NEW ENTRY</h2>
        </Link>
      </div>

      <div className="menu">
        <MenuRoundedIcon className="hamburger" onClick={toggleMenu} />
      </div>
    </div>
  )
}

export default Navbar

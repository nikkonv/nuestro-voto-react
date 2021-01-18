import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";

import icon from "#assets/nuestro-voto-icon.png";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";

//TODO: change up-down icon
//TODO: change mobile icon menu

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const onMouseEnter = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(true);
  //   }
  // };
  // const onMouseLeave = () => setDropdown(false);

  return (
    <>
      <NavbarStyled>
        <Link to="/">
          <div className="logo">
            <img src={icon} alt="nuestro-voto-icono" />
            <span>NuestroVoto</span>
          </div>
        </Link>
        <label htmlFor="btn" className="icon">
          <FaBars />
        </label>
        <input type="checkbox" id="btn" />
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <label htmlFor="btn-1" className="show">
              <span>Nosotros</span>
              <FaChevronDown />
            </label>
            <a href="/" onClick={(e) => e.preventDefault()}>
              Nosotros
            </a>
            <input type="checkbox" id="btn-1" />
            <ul>
              <li>
                <Link className="dropdown-item" to="/historia">
                  Historia
                </Link>
              </li>
              <li>
                <Link to="/equipo" className="dropdown-item">
                  Nuestro equipo
                </Link>
              </li>
            </ul>
          </li>
          {/* <li>
            <label htmlFor="btn-2" className="show">
              Services +
            </label>
            <a href="#">Services</a>
            <input type="checkbox" id="btn-2" />
            <ul>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">App Design</a>
              </li>
              <li>
                <label htmlFor="btn-3" className="show">
                  More +
                </label>
                <a href="#">
                  More <span className="fa fa-plus"></span>
                </a>
                <input type="checkbox" id="btn-3" />
                <ul>
                  <li>
                    <a href="#">Submenu-1</a>
                  </li>
                  <li>
                    <a href="#">Submenu-2</a>
                  </li>
                  <li>
                    <a href="#">Submenu-3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li> */}
          {/* <li>
            <a href="#">Portfolio</a>
          </li> */}
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </NavbarStyled>
    </>
  );
}

export default Navbar;

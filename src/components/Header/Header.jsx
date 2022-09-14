import "./headerStyle.css";
import { BsFillPersonFill, BsFillCartFill, BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="topRow">
          <div className="headerMenySearch">
            <div className="menu">
              <a href="#">
                <GiHamburgerMenu />
              </a>
            </div>

            <div className="search">
              <input type="text" id="search" />
              <a href="#">
                <BsSearch className="searchIcon" />
              </a>
            </div>
          </div>

          <div className="headerLogo">
            <Link to="/" target="_parent">
              <h1>COOL FASHION</h1>
            </Link>
          </div>

          <div className="headerIcons">
            <a href="#">
              <BsFillPersonFill />
            </a>
            <a href="#">
              <BsFillCartFill />
            </a>
          </div>
        </div>
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* <Link to="/productPage" target="_parent"> */}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {" "}
                  <li className="nav-item">
                  <Link to="/productPage" target="_parent">
                    <a className="nav-link active" aria-current="page">
                      Summer 22
                    </a>
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                  <Link to="/productPage" target="_parent">
                    <a
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Women
                    </a>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                      <Link to="/productPage" target="_parent"><a className="dropdown-item">News</a></Link>
                      </li>
                      <li>
                      <Link to="/productPage" target="_parent"><a className="dropdown-item">Dresses</a></Link>
                      </li>
                      <li>
                      <Link to="/productPage" target="_parent"><a className="dropdown-item">Shirts / Tops</a></Link>
                      </li>
                      <li>
                      <Link to="/productPage" target="_parent"><a className="dropdown-item">Pants / Shorts</a></Link>
                      </li>
                      <li>
                      <Link to="/productPage" target="_parent"><a className="dropdown-item">Sweaters</a></Link>
                      </li>
                      <li>
                      <Link to="/productPage" target="_parent"><a className="dropdown-item">Shoes</a></Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                  <Link to="/productPage" target="_parent">
                    <a
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Men
                    </a>
                    </Link>
                    <ul className="dropdown-menu">
                    <li>
                      <Link to="/productPage" target="_parent"><a className="dropdown-item">News</a></Link>
                      </li>
                      <li>
                      <Link to="/productPage" target="_parent"><a className="dropdown-item">Dresses</a></Link>
                      </li>
                      <li>
                      <Link to="/productPage" target="_parent"><a className="dropdown-item">Shirts / Tops</a></Link>
                      </li>
                      <li>
                      <Link to="/productPage" target="_parent"><a className="dropdown-item">Pants / Shorts</a></Link>
                      </li>
                      <li>
                      <Link to="/productPage" target="_parent"><a className="dropdown-item">Sweaters</a></Link>
                      </li>
                      <li>
                      <Link to="/productPage" target="_parent"><a className="dropdown-item">Shoes</a></Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                  <Link to="/productPage" target="_parent">
                    <a
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Unisex
                    </a>
                    </Link> 
                    <ul className="dropdown-menu">
                    <li>
                      <Link to="/productPage" target="_parent"><a className="dropdown-item">News</a></Link>
                      </li>
                      <li>
                      <Link to="/productPage" target="_parent"><a className="dropdown-item">Dresses</a></Link>
                      </li>
                      <li>
                      <Link to="/productPage" target="_parent"><a className="dropdown-item">Shirts / Tops</a></Link>
                      </li>
                      <li>
                      <Link to="/productPage" target="_parent"><a className="dropdown-item">Pants / Shorts</a></Link>
                      </li>
                      <li>
                      <Link to="/productPage" target="_parent"><a className="dropdown-item">Sweaters</a></Link>
                      </li>
                      <li>
                      <Link to="/productPage" target="_parent"><a className="dropdown-item">Shoes</a></Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                  <Link to="/productPage" target="_parent">
                     <a
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Sale
                    </a>
                    </Link>
                    <ul className="dropdown-menu">
                    <li>
                      <Link to="/productPage" target="_parent"><a className="dropdown-item">News</a></Link>
                      </li>
                      <li>
                      <Link to="/productPage" target="_parent"><a className="dropdown-item">Dresses</a></Link>
                      </li>
                      <li>
                      <Link to="/productPage" target="_parent"><a className="dropdown-item">Shirts / Tops</a></Link>
                      </li>
                      <li>
                      <Link to="/productPage" target="_parent"><a className="dropdown-item">Pants / Shorts</a></Link>
                      </li>
                      <li>
                      <Link to="/productPage" target="_parent"><a className="dropdown-item">Sweaters</a></Link>
                      </li>
                      <li>
                      <Link to="/productPage" target="_parent"><a className="dropdown-item">Shoes</a></Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              {/* </Link> */}
            </div>

            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/contact" target="_parent">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/contact"
                    >
                      Contact
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    HBTQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

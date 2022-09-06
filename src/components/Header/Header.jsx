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
              <h1>Cool Fashion</h1>
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
        {/*<div className="menuList">
          <div className="menuList1">
            <ul className="categories">
              <li>
                <a href="#"> Home </a>
              </li>
              <li>
                <a href="#"> Women </a>
              </li>
              <li>
                <a href="#"> Unisex </a>
              </li>
            </ul>
          </div>

          <div className="menuList2">
            <ul className="company">
              <li>
                <a href="#"> Contact </a>
              </li>
              <li>
                <a href="#"> HBTQ </a>
              </li>
            </ul>
          </div>
        </div>
        */}

        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <Link to="/productPage" target="_parent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {" "}
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page">
                      Summer 22
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Women
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item">News</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Dresses</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Shirts / Tops</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Pants / Shorts</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Sweaters</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Shoes</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Men
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item">News</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Dresses</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Shirts / Tops</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Pants / Shorts</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Sweaters</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Shoes</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Unisex
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item">News</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Dresses</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Shirts / Tops</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Pants / Shorts</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Sweaters</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Shoes</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Sale
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item">Dresses</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Shirts / Tops</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Pants / Shorts</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Sweaters</a>
                      </li>
                      <li>
                        <a className="dropdown-item">Shoes</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </Link>
            </div>

            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Contact
                  </a>
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

import "./headerStyle.css";
import { BsFillPersonFill, BsFillCartFill, BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

//npm install react-icons

const Header = () => {
    // const [showMenu, setShowMenu] = useState(false);

    //   function showbtn() {
    //     if (show) {
    //       setShow(false);
    //     } else {
    //       setShow(true);
    //     }
    //   }

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
            <h1>Cool Fashion</h1>
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
        
        <div className="menuList">
            <div className="menuList1">
                <ul className="categories">
                    <li><a href="#"> Home </a></li>
                    <li><a href="#"> Women </a></li>
                    <li><a href="#"> Unisex </a></li>
                </ul>
            </div>

            <div className="menuList2">
                <ul className="company">
                    <li><a href="#"> Contact </a></li>
                    <li><a href="#"> HBTQ </a></li>
                </ul>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Header;

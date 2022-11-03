import React, { useState } from "react";
import healthAppLogo from "./images/healthapp.png";

const Header = ({ toggle }) => {
  const [searchBar, setSearchBar] = useState(false);
  const showSearchable = () => {
    setSearchBar((prevValue) => {
      return !prevValue;
    });
    console.log(searchBar);
  };
  return (
    <header>
      <div className="header">
        <div className="expander" onClick={toggle}>
          <i class="ri-menu-line ri-2x "></i>
        </div>
        <div className="header-divs">
          <div className="search-bar">
            <div
              className={searchBar ? "select open" : "select"}
              onClick={showSearchable}
            >
              <p>Search</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Angle_down_font_awesome.svg/512px-Angle_down_font_awesome.svg.png"
                alt="v"
              ></img>
            </div>
            <input type={"text"} placeholder="Last Name  /  First name"></input>
          </div>
          <button>
            <i class="ri-search-line ri-2x"></i>
            <p>Advance Search</p>
          </button>
          <button>
            <i class="ri-add-line ri-2x"></i> <p>Patient</p>
          </button>
        </div>
        <div className="header-end-sec">
          <img src={healthAppLogo} alt="Logo"></img>
          <button>
            <i class="ri-notification-2-line ri-1x"></i>
          </button>
          <button>
            <i class="ri-settings-5-fill ri-1x"></i>
          </button>
          <button>
            <i class="ri-sticky-note-line ri-1x"></i>
          </button>
          <button>
            <i class="ri-volume-up-line ri-1x"></i>
          </button>
          <button className="user-button">
            <i class="ri-arrow-down-line"></i>
            <i class="ri-user-3-line ri-1x"> </i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

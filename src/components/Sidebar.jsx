import React from "react";
import sideBarItemsIcons from "../sideBarItemsIcons";

const Sidebar = ({ sideBar, toggle }) => {
  return (
    <div
      className={sideBar ? "sidebar sidebar-open" : "sidebar"}
      onClick={toggle}
    >
      {sideBarItemsIcons.map((val, i) => {
        return (
          <li>
            <i className={val.head}></i> {val.value}
          </li>
        );
      })}
    </div>
  );
};

export default Sidebar;

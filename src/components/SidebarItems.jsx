import React from "react";
import sideBarItemsIcons from "../sideBarItemsIcons";

const SidebarItems = ({ sideBar, toggle }) => {
  return (
    <div
      className={sideBar ? "sidebar-items sidebar-open" : "sidebar-items"}
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

export default SidebarItems;

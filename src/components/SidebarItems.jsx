import React from "react";

const SidebarItems = ({ sideBar, toggle }) => {
  return (
    <div
      className={sideBar ? "sidebar-items sidebar-open" : "sidebar-items"}
      onClick={toggle}
    >
      <li>
        <i className="ri-speed-fill"></i>Speed
      </li>
      <li>
        <i className="ri-user-3-fill"></i>User
      </li>
      <li>
        <i className="ri-team-fill"></i>Team
      </li>
      <li>
        <i className="ri-file-shield-fill"></i>Shield
      </li>
      <li>
        <i className="ri-file-shield-fill"></i>Ambulance
      </li>
      <li>
        <i className="ri-dossier-line"></i>FirstAid
      </li>
      <li>
        <i className="ri-booklet-line"></i>Note
      </li>
      <li>
        <i className="ri-book-open-fill"></i>Booklet
      </li>
      <li>
        <i className="ri-book-open-fill"></i>Item
      </li>
      <li>
        <i className="ri-book-open-fill"></i>Item6
      </li>
      <li>
        <i className="ri-book-open-fill"></i>Item6
      </li>
      <li>
        <i className="ri-book-open-fill"></i>Item6
      </li>
      <li>
        <i className="ri-book-open-fill"></i>Item6
      </li>
      <li>
        <i className="ri-book-open-fill"></i>Item6
      </li>
      <li>
        <i className="ri-book-open-fill"></i>Item6
      </li>
      <li>
        <i className="ri-book-open-fill"></i>Item6
      </li>
    </div>
  );
};

export default SidebarItems;

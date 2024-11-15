import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div>
      <ul id="nav">
        <li className="nav-link">
          <Link href={"/"}>
            <h1 data-name="home">Home</h1>
          </Link>
        </li>
        <li className="nav-link">
          <Link href={"/dashboard"}>
            <h1 data-name="dashboard">Dashboard</h1>
          </Link>
        </li>
        <li className="nav-link">
          <Link href={"/blog"}>
            <h1 data-name="blog">Blog</h1>
          </Link>
        </li>
        <li className="nav-link">
          <Link href={"/dashboard/settings"}>
            <h1 data-name="settings">Settings</h1>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;

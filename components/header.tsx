"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Header() {
  const pathname = usePathname();
  return (
    <div>
      <ul id="nav">
        <li className="nav-link">
          <Link href={"/"}>
            <h1 data-name="home" className={pathname === "/" ? "active" : ""}>Home</h1>
          </Link>
        </li>
        <li className="nav-link">
          <Link href={"/dashboard"}>
            <h1 data-name="dashboard" className={pathname === "/dashboard" ? "active" : ""}>Dashboard</h1>
          </Link>
        </li>
        <li className="nav-link">
          <Link href={"/blog"}>
            <h1 data-name="blog" className={pathname === "/blog" ? "active" : ""}>Blog</h1>
          </Link>
        </li>
        <li className="nav-link">
          <Link href={"/dashboard/settings"}>
            <h1 data-name="settings" className={pathname === "/dashboard/settings" ? "active" : ""}>Settings</h1>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;

"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

function Header() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div>
      <ul id="nav">
        <li className="nav-link">
          <span onClick={() => router.push("/")}>
            <h1 data-name="home" className={pathname === "/" ? "active" : ""}>
              Home
            </h1>
          </span>
        </li>
        <li className="nav-link">
          <span onClick={() => router.push("/dashboard")}>
            <h1
              data-name="dashboard"
              className={pathname === "/dashboard" ? "active" : ""}
            >
              Dashboard
            </h1>
          </span>
        </li>
        <li className="nav-link">
          <span onClick={() => router.push("/blog")}>
            <h1
              data-name="blog"
              className={pathname === "/blog" ? "active" : ""}
            >
              Blog
            </h1>
          </span>
        </li>
        <li className="nav-link">
          <span onClick={() => router.push("/dashboard/settings")}>
            <h1
              data-name="settings"
              className={pathname === "/dashboard/settings" ? "active" : ""}
            >
              Settings
            </h1>
          </span>
        </li>
      </ul>
      <div style={{marginTop:"50px",display:"flex",columnGap:"20px"}}> 

      <button onClick={() => router.back()}>Back</button>
      <button onClick={() => router.forward()}>Forward</button>
      </div>
    </div>
  );
}

export default Header;

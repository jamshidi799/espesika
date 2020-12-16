import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <Link href="/">
        <a className="navbar-brand">اسپه سیکا</a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/ghooghaz">
              <a className="nav-link">غاز ‌اوکراینی</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/boghy">
              <a className="nav-link">بوقلمون برنز</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/ghazmahali">
              <a className="nav-link">غاز محلی</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/ordak">
              <a className="nav-link">اردک محلی</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <a className="navbar-brand" href="/">
        اسپه سیکا
      </a>
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
            <a className="nav-link" href="/ghooghaz.html">
              غاز ‌اوکراینی
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/boghy.html">
              بوقلمون برنز
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/ghazmahli.html">
              غاز محلی
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/ordak.html">
              اردک محلی
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

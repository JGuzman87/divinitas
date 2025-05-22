"use client"

import React from 'react';
import Link from 'next/link';

const Nav = () => {

    const linkArr = ['about', 'our work', 'resources', 'services'];

  return (
    <div className="flex flex-row md:flex-row justify-evenly navbar bg-base-100 shadow-sm p-3">
      <Link href={"/"}>
        <h1 className="hover:text-orange-300 justify-self-center">Divinitas</h1>
      </Link>
      <div className="drawer z-[9999]">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex justify-end">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="btn btn-circle swap swap-rotate md:hidden"
          >
            <input type="checkbox" />

            {/* hamburger icon */}
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* close icon */}
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 capitalize">
            {/* Sidebar content here */}
            {linkArr.map((link) => (
              <li key={link}>
                <Link
                  href={"/" + link.replace(/\s+/g, "")}
                  onClick={() => {
                    document.getElementById("my-drawer").checked = false;
                  }}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="navbar-end hidden md:flex">
        <ul className="gap-3.5 flex justify-end tabs-border" robe="tablist">
          {linkArr.map((link) => (
            <li key={link}>
              <Link
                role="tab"
                className="tab tab-active hover:text-orange-400 font-extrabold text-nowrap capitalize"
                href={"/" + link.replace(/\s+/g, "")}
              >
                {link}{" "}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>

    /* <div className="navbar bg-base-300 flex justify-between">

        <ul className="gap-3.5 flex justify-end">
          {linkArr.map((arr) => (
            <li key={arr}>
              <Link href={"/" + arr}>{arr.toUpperCase()}</Link>
            </li>
          ))}
        </ul>
      </div> */
  );
}

export default Nav;
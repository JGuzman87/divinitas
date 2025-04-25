"use client"

import React from 'react';
import Link from 'next/link';

const Nav = () => {

    const linkArr = ['about', 'ourWork', 'resources', 'services'];

  return (
    <div className="navbar bg-base-100 shadow-sm p-3">
      <Link href={"/"}>
        <h1 className='hover:text-orange-400'>Divinitas</h1>
      </Link>
      <div className="navbar-end">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            {linkArr.map((arr) => (
              <li key={arr}>
                <Link href={"/" + arr}>{arr.toUpperCase()}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-end hidden md:flex">
        <ul className="gap-3.5 flex justify-end">
          {linkArr.map((arr) => (
            <li key={arr}>
              <Link className=" hover:text-orange-400 font-extrabold" href={"/" + arr}>
                {arr.toUpperCase()}{" "}
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
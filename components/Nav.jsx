"use client"

import React from 'react';
import Link from 'next/link';

const Nav = () => {

    const linkArr = ['about', 'ourWork', 'resources', 'services'];

  return (
    <>
      <div className="navbar bg-base-300 flex justify-between">
        <Link href={"/"}>
          <h1>Divinitas</h1>
        </Link>
        <ul className="w-md flex justify-center gap-5">
          {linkArr.map((arr) => (
            <li key={arr}>
              <Link href={"/" + arr}>{arr.toUpperCase()}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  
  );
}

export default Nav;
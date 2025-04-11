"use client"

import React from 'react';
import Link from 'next/link';

const Nav = () => {

    const linkArr = ['about', 'ourWork', 'resources', 'services'];

  return (
    <nav className="flex justify-between p-8 ">
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
    </nav>
  );
}

export default Nav
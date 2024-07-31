import React from 'react'
import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="hdr min-w-min me-40 ms-40 mx-5 flex justify-between mt-9 items-center gap-5">
      <div className='flex items-center'>
        <Link href="/" >
          <img className="cursor-pointer" src="/logo.svg" alt="logo" />
        </Link>
      </div>
      <div className="flex items-center gap-7 nav">
        <ul className="flex items-center gap-12 font-bold">
          <Link className='text-gray-500  hover:text-black' href="/">
            <li>Home</li>
          </Link>
          <Link className='text-gray-500  hover:text-black' href="/about">
            <li>About</li>
          </Link>
          <Link className='text-gray-500  hover:text-black' href="/services">
            <li>Services</li>
          </Link>
          <Link className='text-gray-500  hover:text-black' href="/system">
            <li>Systems</li>
          </Link>
        </ul>
        <button className="btn border-violet-600 active:border-violet-400 font-bold border-2 px-8 py-4 rounded-full border-spacing-9 bg-inherit hover:bg-violet-600 active:bg-violet-400  text-violet-600 hover:text-white duration-300 active">
          Contact us
        </button>
      </div>
    </header>
  );
}

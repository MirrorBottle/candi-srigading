import React from 'react'
import Image from 'next/image'
import { TfiClose, TfiMenu } from "react-icons/tfi";

export default function Header() {
  return (
    <header id="site-header" className="text-white absolute inset-x-0 z-20">
      <div className="container">
        <nav className="flex min-h-[64px] items-center justify-between py-1 lg:min-h-[90px] lg:py-4">
          {/* LOGO */}
          <div>
            <a href="/">
              <Image
                src="/logo.png"
                alt="Picture of the author"
                width={220}
                height={220}
              />
            </a>
          </div>
          <ul className="hidden gap-x-7 xl:gap-x-10 text-lg font-bold lg:flex">
            <li className="">
              <a className="relative inline-flex items-center gap-x-2 leading-10 after:absolute after:bottom-[7px] after:left-0 after:h-[2px] after:bg-white after:transition-transform after:w-full after:origin-left after:scale-x-100" href="_yt1-index.html">
                Beranda
              </a>
            </li>
            <li className=""><a className="relative inline-flex items-center gap-x-2 leading-10 after:absolute after:bottom-[7px] after:left-0 after:h-[2px] after:bg-white after:transition-transform after:w-full after:origin-right hover:after:origin-left after:scale-x-0 hover:after:scale-x-100" href="_yt1-contact.html">Tentang</a></li>
            <li className=""><a className="relative inline-flex items-center gap-x-2 leading-10 after:absolute after:bottom-[7px] after:left-0 after:h-[2px] after:bg-white after:transition-transform after:w-full after:origin-right hover:after:origin-left after:scale-x-0 hover:after:scale-x-100" href="_yt1-contact.html">Artikel</a></li>
          </ul>
          <div className="flex">
            <button className="js-menu-toggle inline-flex py-4 px-2 sm:px-3 lg:hidden xl:px-4">
              <svg role="img" className="js-menu-toggle-icon-open h-6 w-6 fill-white">
                <TfiMenu size={24} />
              </svg>
              <svg role="img" className="js-menu-toggle-icon-close hidden h-6 w-6 fill-white">
                <TfiClose size={24} />

              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

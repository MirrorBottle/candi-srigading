import React from 'react'
import Link from 'next/link'
export default function HeaderMobile() {
  return (
    <div className="js-mobile-menu p-t-[64px] fixed left-0 top-[64px] z-50 block h-[calc(100dvh-64px)] w-full translate-x-full overflow-auto bg-white dark:bg-gray-800 py-5 text-primary dark:text-white transition-transform duration-300 lg:hidden">
      <div className="container">
        <ul className="text-md flex flex-col font-bold">
          <li className="flex flex-wrap items-center gap-x-4 border-b border-b-gray-200 dark:border-b-gray-200/10">
            <Link className="flex-grow gap-x-1 py-4 leading-normal transition-colors hover:text-accent" href="/">
              Beranda
            </Link>
          </li>
          <li className="flex flex-wrap items-center gap-x-4 border-b border-b-gray-200 dark:border-b-gray-200/10">
            <Link className="flex-grow gap-x-1 py-4 leading-normal transition-colors hover:text-accent" href="/tentang">
              Tentang
            </Link>
          </li>
          <li className="flex flex-wrap items-center gap-x-4 border-b border-b-gray-200 dark:border-b-gray-200/10">
            <Link className="flex-grow gap-x-1 py-4 leading-normal transition-colors hover:text-accent" href="/artikel">
              Artikel
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

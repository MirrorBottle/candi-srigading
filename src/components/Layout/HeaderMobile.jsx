import React from 'react'

export default function HeaderMobile() {
  return (
    <div className="js-mobile-menu p-t-[64px] fixed left-0 top-[64px] z-50 block h-[calc(100dvh-64px)] w-full translate-x-full overflow-auto bg-white dark:bg-gray-800 py-5 text-primary dark:text-white transition-transform duration-300 lg:hidden">
      <div className="container">
        <ul className="text-md flex flex-col font-bold">
          <li className="flex flex-wrap items-center gap-x-4 border-b border-b-gray-200 dark:border-b-gray-200/10">
            <a className="flex-grow gap-x-1 py-4 leading-normal transition-colors hover:text-accent" href="_yt1-index.html">
              Home
            </a>
          </li>
          <li className="flex flex-wrap items-center gap-x-4 border-b border-b-gray-200 dark:border-b-gray-200/10">
            <a className="flex-grow gap-x-1 py-4 leading-normal transition-colors hover:text-accent" href="_yt1-videos-grid-4.html">
              Videos
            </a>

            <button className="js-mobile-submenu-toggle ml-auto inline-flex h-7 w-7 items-center justify-center transition-transform">
              <svg role="img" className="sub-menu-toggle h-2 w-2 rotate-90 fill-primary dark:fill-white">
                {/* <use xlink:href="assets/img/yt1/sprite.svg#arrow-right"></use> */}
              </svg>
            </button>

            <ul className="flex max-h-0 w-full flex-col overflow-hidden pl-4 text-sm transition-all duration-300 [&>li:last-child]:pb-4">
              <li className="flex flex-wrap items-center gap-x-4">
                <a className="flex-grow gap-x-1 py-2 transition-colors hover:text-accent" href="_yt1-videos-grid-3.html">
                  Videos - 3 Cols
                </a>

              </li>
              <li className="flex flex-wrap items-center gap-x-4">
                <a className="flex-grow gap-x-1 py-2 transition-colors hover:text-accent" href="_yt1-videos-grid-4.html">
                  Videos - 4 Cols
                </a>

              </li>
            </ul>

          </li>
          <li className="flex flex-wrap items-center gap-x-4 border-b border-b-gray-200 dark:border-b-gray-200/10">
            <a className="flex-grow gap-x-1 py-4 leading-normal transition-colors hover:text-accent" href="_yt1-blog-grid.html">
              News
            </a>

            <button className="js-mobile-submenu-toggle ml-auto inline-flex h-7 w-7 items-center justify-center transition-transform">
              <svg role="img" className="sub-menu-toggle h-2 w-2 rotate-90 fill-primary dark:fill-white">
                {/* <use xlink:href="assets/img/yt1/sprite.svg#arrow-right"></use> */}
              </svg>
            </button>

            <ul className="flex max-h-0 w-full flex-col overflow-hidden pl-4 text-sm transition-all duration-300 [&>li:last-child]:pb-4">
              <li className="flex flex-wrap items-center gap-x-4">
                <a className="flex-grow gap-x-1 py-2 transition-colors hover:text-accent" href="_yt1-blog-grid.html">
                  Blog Grid
                </a>

              </li>
              <li className="flex flex-wrap items-center gap-x-4">
                <a className="flex-grow gap-x-1 py-2 transition-colors hover:text-accent" href="_yt1-blog-list.html">
                  Blog List
                </a>

              </li>
              <li className="flex flex-wrap items-center gap-x-4">
                <a className="flex-grow gap-x-1 py-2 transition-colors hover:text-accent" href="_yt1-single.html">
                  Blog Post V1
                </a>

              </li>
              <li className="flex flex-wrap items-center gap-x-4">
                <a className="flex-grow gap-x-1 py-2 transition-colors hover:text-accent" href="_yt1-single-2.html">
                  Blog Post V2
                </a>

                <button className="js-mobile-submenu-toggle ml-auto inline-flex h-7 w-7 items-center justify-center transition-transform">
                  <svg role="img" className="sub-menu-toggle h-2 w-2 rotate-90 fill-primary dark:fill-white">
                    {/* <use xlink:href="assets/img/yt1/sprite.svg#arrow-right"></use> */}
                  </svg>
                </button>

                <ul className="flex max-h-0 w-full flex-col overflow-hidden pl-4 transition-all duration-300">
                  <li className="flex flex-wrap items-center gap-x-4">
                    <a className="flex-grow gap-x-1 py-2 transition-colors hover:text-accent" href="_yt1-single.html">
                      Another Item
                    </a>
                  </li>
                  <li className="flex flex-wrap items-center gap-x-4">
                    <a className="flex-grow gap-x-1 py-2 transition-colors hover:text-accent" href="_yt1-single-2.html">
                      Other Level Item
                    </a>
                  </li>
                </ul>

              </li>
            </ul>

          </li>
          <li className="flex flex-wrap items-center gap-x-4 border-b border-b-gray-200 dark:border-b-gray-200/10">
            <a className="flex-grow gap-x-1 py-4 leading-normal transition-colors hover:text-accent" href="_yt1-about.html">
              About
            </a>


          </li>
          <li className="flex flex-wrap items-center gap-x-4 border-b border-b-gray-200 dark:border-b-gray-200/10">
            <a className="flex-grow gap-x-1 py-4 leading-normal transition-colors hover:text-accent" href="_yt1-events.html">
              Events
            </a>

            <button className="js-mobile-submenu-toggle ml-auto inline-flex h-7 w-7 items-center justify-center transition-transform">
              <svg role="img" className="sub-menu-toggle h-2 w-2 rotate-90 fill-primary dark:fill-white">
                {/* <use xlink:href="assets/img/yt1/sprite.svg#arrow-right"></use> */}
              </svg>
            </button>

            <ul className="flex max-h-0 w-full flex-col overflow-hidden pl-4 text-sm transition-all duration-300 [&>li:last-child]:pb-4">
              <li className="flex flex-wrap items-center gap-x-4">
                <a className="flex-grow gap-x-1 py-2 transition-colors hover:text-accent" href="_yt1-single-event.html">
                  Single Event
                </a>

              </li>
            </ul>

          </li>
          <li className="flex flex-wrap items-center gap-x-4 border-b border-b-gray-200 dark:border-b-gray-200/10">
            <a className="flex-grow gap-x-1 py-4 leading-normal transition-colors hover:text-accent" href="_yt1-partners.html">
              Partners
            </a>


          </li>
          <li className="flex flex-wrap items-center gap-x-4 border-b border-b-gray-200 dark:border-b-gray-200/10">
            <a className="flex-grow gap-x-1 py-4 leading-normal transition-colors hover:text-accent" href="_yt1-contact.html">
              Contact
            </a>


          </li>
          <li className="flex flex-wrap items-center gap-x-4 border-b border-b-gray-200 dark:border-b-gray-200/10">
            <a className="flex-grow gap-x-1 py-4 leading-normal transition-colors hover:text-accent" href="_yt1-shop-grid-3.html">
              Shop
            </a>

            <button className="js-mobile-submenu-toggle ml-auto inline-flex h-7 w-7 items-center justify-center transition-transform">
              <svg role="img" className="sub-menu-toggle h-2 w-2 rotate-90 fill-primary dark:fill-white">
                {/* <use xlink:href="assets/img/yt1/sprite.svg#arrow-right"></use> */}
              </svg>
            </button>

            <ul className="flex max-h-0 w-full flex-col overflow-hidden pl-4 text-sm transition-all duration-300 [&>li:last-child]:pb-4">
              <li className="flex flex-wrap items-center gap-x-4">
                <a className="flex-grow gap-x-1 py-2 transition-colors hover:text-accent" href="_yt1-shop-grid-3.html">
                  Shop V1
                </a>

              </li>
              <li className="flex flex-wrap items-center gap-x-4">
                <a className="flex-grow gap-x-1 py-2 transition-colors hover:text-accent" href="_yt1-shop-grid-4.html">
                  Shop V2
                </a>

              </li>
              <li className="flex flex-wrap items-center gap-x-4">
                <a className="flex-grow gap-x-1 py-2 transition-colors hover:text-accent" href="_yt1-single-product.html">
                  Single Product
                </a>

              </li>
              <li className="flex flex-wrap items-center gap-x-4">
                <a className="flex-grow gap-x-1 py-2 transition-colors hover:text-accent" href="_yt1-cart.html">
                  Cart
                </a>

              </li>
              <li className="flex flex-wrap items-center gap-x-4">
                <a className="flex-grow gap-x-1 py-2 transition-colors hover:text-accent" href="_yt1-checkout.html">
                  Checkout
                </a>

              </li>
              <li className="flex flex-wrap items-center gap-x-4">
                <a className="flex-grow gap-x-1 py-2 transition-colors hover:text-accent" href="_yt1-login.html">
                  Login
                </a>

              </li>
              <li className="flex flex-wrap items-center gap-x-4">
                <a className="flex-grow gap-x-1 py-2 transition-colors hover:text-accent" href="_yt1-register.html">
                  Register
                </a>

              </li>
              <li className="flex flex-wrap items-center gap-x-4">
                <a className="flex-grow gap-x-1 py-2 transition-colors hover:text-accent" href="_yt1-account.html">
                  Account
                </a>

              </li>
            </ul>

          </li>
        </ul>
      </div>
    </div>
  )
}

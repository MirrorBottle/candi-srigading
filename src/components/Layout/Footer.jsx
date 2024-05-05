import React from 'react'

export default function Footer() {
  return (
    <>
      <div class="relative isolate -mb-20">
        <div class="container">
          <div class="relative grid grid-cols-12 gap-x-7 bg-accent text-white">
            <div class="col-span-full flex flex-col justify-center gap-y-4 py-8 px-5 md:col-span-5 md:gap-y-6 md:py-10 md:px-0 lg:col-span-5 lg:py-0 xl:col-span-3">
              <div class="uppercase tracking-tighter pt-5">Bisa Cek Melalui Google Maps</div>
              <div class="text-4xl font-bold tracking-tight md:mb-5 md:text-5xl md:leading-[0.9em] pb-5">
                Lokasi Candi Srigading</div>
            </div>
            <div class="col-span-full md:col-start-8 md:mr-[-1px] lg:col-start-8 xl:col-start-8">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.1859860989953!2d112.71815921137649!3d-7.875599078286264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd62d86b3813359%3A0x7f9918c09128ff89!2sCandi%20Srigading%20-%20Situs%20Gumuk!5e0!3m2!1sid!2sid!4v1714897637401!5m2!1sid!2sid" width="600" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        <div class="absolute right-1/2 bottom-0 -z-10 h-full w-1/2 bg-accent"></div>
      </div>
      <footer id="site-footer" class="dark">
        <div class="bg-gray-100 dark:bg-gray-900 py-24 pt-44 leading-8">
          <div class="container">
            <div class="grid grid-cols-12 gap-y-12 gap-x-7">
              <div class="col-span-full md:col-span-4 lg:col-span-3">
                <div>
                  <h5 class="mb-5 mt-[4px] font-bold leading-none">
                    <img class="mb-[0.875rem]" src="assets/img/yt1/youtube-logo.png" alt="YouTube Logo" />
                    <span class="block text-1.5xl leading-[0.8em] tracking-tighter text-primary dark:text-white">Jack Parker’s</span>
                    <span class="block text-[34px] tracking-[-0.07em] text-accent">UNBX VLOGS</span>
                  </h5>
                  <p class="mb-11 text-sm leading-6 tracking-tightest">Bringing you the best
                    unboxing videos of the latest technology, games and toys!
                  </p>
                  <ul class="flex flex-wrap gap-8">
                    <li>
                      <a class="text-primary transition-colors hover:text-accent dark:text-white dark:hover:text-accent" href="#" title="Facebook">
                        <svg class="h-4 w-4" fill="currentColor">
                          {/* <use xlink:href="assets/img/social-icons.svg#facebook"></use> */}
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a class="text-primary transition-colors hover:text-accent dark:text-white dark:hover:text-accent" href="#" title="Twitter">
                        <svg class="h-4 w-4" fill="currentColor">
                          {/* <use xlink:href="assets/img/social-icons.svg#twitter"></use> */}
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a class="text-primary transition-colors hover:text-accent dark:text-white dark:hover:text-accent" href="#" title="Instagram">
                        <svg class="h-4 w-4" fill="currentColor">
                          {/* <use xlink:href="assets/img/social-icons.svg#instagram"></use> */}
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a class="text-primary transition-colors hover:text-accent dark:text-white dark:hover:text-accent" href="#" title="Youtube">
                        <svg class="h-4 w-4" fill="currentColor">
                          {/* <use xlink:href="assets/img/social-icons.svg#youtube"></use> */}
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-span-full md:col-span-4 md:col-start-5">
                <div>
                  <h4 class="mb-6 pt-[2px] font-heading text-lg font-bold leading-none text-primary dark:text-white md:mb-16">Unbox Links</h4>
                  <ul class="grid grid-cols-2 gap-x-7 gap-y-3 font-base text-sm font-bold leading-normal">
                    <li>
                      <a class="transition-colors text-accent dark:text-accent" href="_yt1-index.html">
                        Home
                      </a>
                    </li>
                    <li>
                      <a class="transition-colors text-primary hover:text-accent dark:text-white dark:hover:text-accent" href="_yt1-events.html">
                        Events
                      </a>
                    </li>
                    <li>
                      <a class="transition-colors text-primary hover:text-accent dark:text-white dark:hover:text-accent" href="_yt1-videos-grid-4.html">
                        Videos
                      </a>
                    </li>
                    <li>
                      <a class="transition-colors text-primary hover:text-accent dark:text-white dark:hover:text-accent" href="_yt1-partners.html">
                        Partners
                      </a>
                    </li>
                    <li>
                      <a class="transition-colors text-primary hover:text-accent dark:text-white dark:hover:text-accent" href="_yt1-blog-grid.html">
                        News
                      </a>
                    </li>
                    <li>
                      <a class="transition-colors text-primary hover:text-accent dark:text-white dark:hover:text-accent" href="_yt1-contact.html">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a class="transition-colors text-primary hover:text-accent dark:text-white dark:hover:text-accent" href="_yt1-about.html">
                        About
                      </a>
                    </li>
                    <li>
                      <a class="transition-colors text-primary hover:text-accent dark:text-white dark:hover:text-accent" href="_yt1-shop-grid-3.html">
                        Shop
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

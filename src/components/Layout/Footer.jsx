import React from 'react'
import { ImInstagram } from "react-icons/im";

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
              <iframe class="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.1859860989953!2d112.71815921137649!3d-7.875599078286264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd62d86b3813359%3A0x7f9918c09128ff89!2sCandi%20Srigading%20-%20Situs%20Gumuk!5e0!3m2!1sid!2sid!4v1714897637401!5m2!1sid!2sid" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        <div class="absolute right-1/2 bottom-0 -z-10 h-full w-1/2 bg-accent"></div>
      </div>
      <footer id="site-footer" class="dark">
        <div class="bg-gray-100 dark:bg-gray-900 py-10 pt-44 leading-8">
          <div class="container text-center">
            <div class="grid grid-cols-12 gap-y-12 gap-x-7">
              <div class="col-span-full md:col-span-12 lg:col-span-12">
                <div>
                  <h5 class="mb-5 mt-[4px] font-bold leading-none">
                    <span class="block text-5xl leading-[0.8em] tracking-tighter text-primary dark:text-white">Candi</span>
                    <span class="block text-[60px] tracking-[-0.07em] text-accent">Srigading</span>
                  </h5>
                  <p class="mb-11 text-sm leading-6 tracking-tightest">Menyingkap Jejak Hindu di Malang. @ 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

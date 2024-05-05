import React from 'react'
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

export default function HomepageInscription() {
  return (
    <section class="py-14 pb-7 md:py-32 md:pb-16 lg:py-44 lg:pb-20 xl:py-48 xl:pb-24">
      <div class="container">
        <div class="mb-12 flex flex-col flex-wrap gap-y-6 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 xl:gap-y-12 justify-center items-center">
          <div class="flex flex-col-reverse gap-y-2 sm:gap-y-3 md:gap-y-4 lg:gap-y-5 xl:gap-y-6 items-center">
            <h2 class="leadin-none text-3xl font-bold tracking-tight text-primary dark:text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-6.5xl xl:leading-none">Daftar Prasasti</h2>
            <div class="text-sm uppercase leading-tighter md:text-base">Beberapa Diduga Kuat Memiliki Kaitan</div>
          </div>

        </div>
      </div>
      <div class="container pb-6">
        <div class="flex flex-wrap items-center justify-between">
          <div class="inline-flex items-center gap-x-3 text-lg font-bold uppercase text-primary">
            <span class="relative inline-flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 border-primary dark:border-white">
              <IoChevronForwardOutline size={20} />
            </span>
            <a class="text-primary hover:text-accent dark:text-white dark:hover:text-accent" href="#">Lihat Semua Prasasti</a>
          </div>
          <div class="flex">
            <div class="vv-playlist-swiper-btn-prev flex h-[60px] w-[50px] items-center justify-center bg-white text-primary hover:cursor-pointer hover:text-accent dark:bg-gray-900 dark:text-white dark:hover:text-accent">
              <IoChevronBackOutline size={25} />
            </div>
            <div class="vv-playlist-swiper-btn-next flex h-[60px] w-[50px] items-center justify-center bg-white text-primary hover:cursor-pointer hover:text-accent dark:bg-gray-900 dark:text-white dark:hover:text-accent">
              <IoChevronForwardOutline size={25} />
            </div>
          </div>
        </div>
      </div>
      <div class="swiper js-vv-playlist-swiper aspect-square sm:aspect-[5/3] md:aspect-[5/3] lg:aspect-[2/1] xl:aspect-[5/2] mb-6 md:mb-10 lg:mb-16 xl:mb-24">
        <div class="swiper-wrapper">
          <div class="swiper-slide group">
            <a class="flex h-full" href="#">
              <img class="w-full h-full object-cover" src="/img/inscriptions/1.png" alt="Guests Unboxings" />

              <div class="absolute left-7 bottom-6 pr-4 z-10 text-white">
                <h3 class="text-1.5xl font-bold leading-tighter mb-2">Arca Agastya</h3>
                <div class="text-sm leading-tight">Patung Dewa yakni Arca Agastya digambarkan berdiri
                  dilengkapi dengan stela (sandaran arca) dan hiasan prabha di
                  belakang kepala. Posisi berdirinya adalah samabangha (lurus
                  kedua kaki), namun tubuhnya mulai pinggang agak bergeser ke
                  kanan menggambarkan posisi yang sangat santai. </div>
              </div>

              <div class="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-gray-900/90 to-transparent transition-all opacity-100 group-hover:opacity-0"></div>
              <div class="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-accent/90 to-transparent transition-all opacity-0 group-hover:opacity-100 scale-y-0 group-hover:scale-y-100 origin-bottom duration-200"></div>
            </a>
          </div>
          <div class="swiper-slide group">
            <a class="flex h-full" href="#">
              <img class="w-full h-full object-cover" src="/img/inscriptions/2.png" alt="Outdoor Gadgets Unboxing" />

              <div class="absolute left-7 bottom-6 pr-4 z-10 text-white">
                <h3 class="text-1.5xl font-bold leading-tighter mb-2"> Arca Mahakala</h3>
                <div class="text-sm leading-tight">Arca Mahakala ini berasal dari candi yang berada di Desa
                  Srigading Kecamatan Lawang Kabupaten Malang Provinsi Jawa
                  Timur. Ditemukan dalam keadaan rusak di bagian kepala hingga
                  batas pangkal leher dan tangan kanan patah hingga bahu. </div>
              </div>

              <div class="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-gray-900/90 to-transparent transition-all opacity-100 group-hover:opacity-0"></div>
              <div class="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-accent/90 to-transparent transition-all opacity-0 group-hover:opacity-100 scale-y-0 group-hover:scale-y-100 origin-bottom duration-200"></div>
            </a>
          </div>
          <div class="swiper-slide group">
            <a class="flex h-full" href="#">
              <img class="w-full h-full object-cover" src="/img/inscriptions/3.png" alt="TechCon 2022 Unboxings" />

              <div class="absolute left-7 bottom-6 pr-4 z-10 text-white">
                <h3 class="text-1.5xl font-bold leading-tighter mb-2">Arca Nandiswara</h3>
                <div class="text-sm leading-tight">Nandiswara atau sering disebut Nadiskesvara yang
                  diwujudkan sebagai duplikat dan dipercayai merupakan
                  pengiring dari Dewa Siwa yang memiliki gelar Andhikaranandin
                  ditemukan arca nya pada proses ekskavasi Candi Srigading.</div>
              </div>

              <div class="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-gray-900/90 to-transparent transition-all opacity-100 group-hover:opacity-0"></div>
              <div class="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-accent/90 to-transparent transition-all opacity-0 group-hover:opacity-100 scale-y-0 group-hover:scale-y-100 origin-bottom duration-200"></div>
            </a>
          </div>
          <div class="swiper-slide group">
            <a class="flex h-full" href="#">
              <img class="w-full h-full object-cover" src="/img/inscriptions/4.png" alt="Toys Unboxings" />

              <div class="absolute left-7 bottom-6 pr-4 z-10 text-white">
                <h3 class="text-1.5xl font-bold leading-tighter mb-2">Lingga Yoni </h3>
                <div class="text-sm leading-tight">Lingga dan Yoni yang merupakan sebuah perwujudan
                  terciptanya sebuah kehidupan memiliki makna yang sangat sakral, Lingga sebagai simbol dari Dewa Siwa dan Yoni
                  merupakan perwujudan dari Dewi Parwati menggambarkan
                  hubungan dua jenis manusia yaitu pria dan wanita. </div>
              </div>

              <div class="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-gray-900/90 to-transparent transition-all opacity-100 group-hover:opacity-0"></div>
              <div class="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-accent/90 to-transparent transition-all opacity-0 group-hover:opacity-100 scale-y-0 group-hover:scale-y-100 origin-bottom duration-200"></div>
            </a>
          </div>
          <div class="swiper-slide group">
            <a class="flex h-full" href="#">
              <img class="w-full h-full object-cover" src="/img/inscriptions/5.png" alt="Gaming Unboxings" />

              <div class="absolute left-7 bottom-6 pr-4 z-10 text-white">
                <h3 class="text-1.5xl font-bold leading-tighter mb-2">Lingga Semu</h3>
                <div class="text-sm leading-tight">Candi yang menjadi replika Gunung Mahameru maupun
                  replika kosmos harus dibangun dalam lingkungan yang suci.
                  Sehingga tempat yang akan digunakan untuk mendirikan candi
                  harus disucikan dahulu.</div>
              </div>

              <div class="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-gray-900/90 to-transparent transition-all opacity-100 group-hover:opacity-0"></div>
              <div class="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-accent/90 to-transparent transition-all opacity-0 group-hover:opacity-100 scale-y-0 group-hover:scale-y-100 origin-bottom duration-200"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

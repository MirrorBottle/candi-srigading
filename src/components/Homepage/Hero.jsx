import React from 'react'

export default function HomepageHero() {
  return (
    <div className="h-[500px] md:h-[600px] lg:h-[680px] bg-accent lg:bg-gradient-radial-hero relative z-10 sm:pb-10" style={{
      backgroundImage: "url(/img/hero.png)",
      backgroundSize: "cover"
    }}>
      <div className="swiper js-vv-hero-swiper h-full w-full">
        <div className="swiper-wrapper vv-hero-swiper-wrapper">
          <div className="swiper-slide group">
            <div className="h-full w-full">
              <div className="container h-full">
                <div className="grid h-full grid-cols-12 gap-y-10 md:gap-x-6 lg:gap-x-[30px]">
                  <div className="col-span-full lg:col-span-12">
                    <div className="pt-32 md:pt-36 lg:px-0 lg:pt-44 lg:text-left">
                      <h2 className="mb-5 flex flex-col items-left font-bold leading-none lg:items-start">
                        <span className="relative pb-1 overflow-hidden after:absolute after:inset-y-0 after:left-0 after:block after:w-[300%] after:-translate-x-full after:bg-white after:transition-transform after:duration-[1500ms] after:ease-linear group-[.swiper-slide-active:not(.vv-slide-played)]:after:translate-x-full group-[.vv-slide-played]:after:opacity-0">
                          <span className="text-2xl leading-none tracking-tighter opacity-0 transition-opacity delay-[400ms] duration-500 group-[.vv-slide-played]:opacity-100 group-[.swiper-slide-active:not(.vv-slide-played)]:opacity-100 lg:text-5xl xl:text-6.5xl text-[#B3D1CA]">Sejarah yang Terpendam di</span>
                        </span>
                        <span className="relative pb-3 overflow-hidden after:absolute after:inset-y-0 after:left-0 after:block after:w-[300%] after:-translate-x-full after:bg-white after:transition-transform after:delay-[300ms] after:duration-[1500ms] after:ease-linear group-[.swiper-slide-active:not(.vv-slide-played)]:after:translate-x-full group-[.vv-slide-played]:after:opacity-0">
                          <span className="mt-1 text-4xl leading-none tracking-tightest text-[#ffffff] opacity-0 transition-opacity delay-[600ms] duration-500 group-[.vv-slide-played]:opacity-100 group-[.swiper-slide-active:not(.vv-slide-played)]:opacity-100 lg:-mt-2 lg:text-6.5xl xl:text-8xl">Tanah Srigading</span>
                        </span>
                      </h2>
                      <div className="mb-8 pr-4 text-sm tracking-tighter text-white lg:mb-12 lg:text-lg lg:leading-8 xl:pr-20">
                        Di Desa Srigading menyimpan situs purbakala yang terpendam. Situs
                        ini dinamakan Candi Srigading. Candi ini telah ditemukan sejak tahun 2011 dan
                        mulai dilaporkan oleh komunitas agar dapat ditindaklanjuti.
                      </div>
                      <a href="#" className="relative isolate inline-flex overflow-hidden border-2 bg-accent text-center text-xs font-bold leading-none transition-colors before:absolute before:inset-y-0 before:left-0 before:-z-10 before:block before:w-full before:origin-right before:scale-x-0 before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 lg:text-sm py-3 px-4 lg:py-[14px] lg:px-12 bg-accent border-2 border-white before:bg-white text-white lg:text-white hover:text-primary">
                        Baca Lebih Lanjut!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

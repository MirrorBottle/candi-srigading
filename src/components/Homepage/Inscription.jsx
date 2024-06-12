import React from 'react'
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function HomepageInscription({ homepage, inscriptions = [] }) {
  return (
    <section className="py-14 pb-10 md:pb-24 md:py-32 lg:pb-28 lg:py-44 xl:py-48 xl:pb-36">
      <div className="container">

        <div className="swiper js-vv-channel-info-swiper w-full">

          <div className="swiper-wrapper">
            {inscriptions.map(function (d, i) {
              return (
                <div className="swiper-slide">
                  <div className="grid grid-cols-12 gap-x-5 md:gap-x-6 lg:gap-x-7.5">
                    <div className="col-span-full md:col-start-3 md:col-span-8">
                      <div className="flex flex-col-reverse items-center gap-y-1 lg:gap-y-2 xl:gap-y-3 mb-6 sm:mb-7 md:mb-8 lg:mb-10 xl:mb-12 text-center">
                        <h3 className="leadin-none text-2xl font-bold tracking-tight text-primary dark:text-white sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl xl:leading-none" data-swiper-parallax-opacity="0" data-swiper-parallax-scale="0.8">{ d.fields.name }</h3>
                        <div className="leading-tighter text-primary dark:text-white lg:text-2xl">Daftar Penemuan</div>
                      </div>
                    </div>

                    <div className="col-span-full sm:col-start-3 sm:col-span-8 xl:col-start-4 xl:col-span-6 text-center">
                      <div className="pt-1 lg:text-lg lg:leading-8">
                        <div className="mb-6 md:mb-8 lg:mb-10 xl:mb-12">
                          {documentToReactComponents(d.fields.desc)}
                        </div>
                      </div>
                    </div>
                    <div className="col-span-full">
                      <div className="relative isolate flex justify-center aspect-[1170/470] w-full overflow-hidden" style={{ height: '450px' }}>
                        <img className="object-cover z-20" src={`https:${d.fields.image.fields.file.url}`} alt="" data-swiper-parallax="-250" style={{ height: '450px' }} />
                        {/* <div className="absolute -left-[0.15em] -bottom-[0.15em] font-bold uppercase tracking-tighter text-white text-3xl leading-[0.82em] sm:text-5xl sm:leading-[0.82em] md:text-6xl md:leading-[0.82em] lg:text-8xl lg:leading-[0.82em] z-10 xl:text-9xl xl:leading-[0.82em]" data-swiper-parallax-opacity="0" data-swiper-parallax-scale="0.8">{ d.name }</div>
                        <div className="absolute left-0 right-0 bottom-0 -z-10 aspect-[1170/320] bg-accent"></div> */}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="js-vv-channel-info-swiper-btn-prev absolute top-1/4 left-6 z-10 hidden aspect-square w-8 items-center justify-center rounded-xl bg-white text-primary shadow-[0_10px_40px_0_rgba(0,0,0,0.2)] transition-colors hover:cursor-pointer hover:bg-accent hover:text-white dark:bg-gray-800 dark:text-white dark:hover:bg-accent dark:hover:text-white md:flex lg:left-8 xl:left-[70px]">
            <IoChevronBackOutline />
          </div>
          <div className="js-vv-channel-info-swiper-btn-next absolute top-1/4 right-6 z-10 hidden aspect-square w-8 items-center justify-center rounded-xl bg-white text-primary shadow-[0_10px_40px_0_rgba(0,0,0,0.2)] transition-colors hover:cursor-pointer hover:bg-accent hover:text-white dark:bg-gray-800 dark:text-white dark:hover:bg-accent dark:hover:text-white md:flex lg:right-8 xl:right-[70px]">
            <IoChevronForwardOutline />
          </div>

        </div>

      </div>
    </section>
  )
}

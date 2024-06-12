import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function HomepageAbout({ homepage }) {
  const {
    aboutTitle,
    aboutSubtitle,
    pendahuluanDesc,
    aboutImage
  } = homepage.fields
  return (
    <section className="bg-[#F4F5FE] pt-10">
      <div className="container pt-10 pb-10">
        <section className="grid grid-cols-12 gap-x-5 gap-y-10 md:gap-x-6 lg:gap-x-[30px] mb-20 md:mb-30 lg:mb-40 xl:mb-50">
          <div className="col-span-full md:col-end-7 lg:col-end-7 xl:pt-14">
            <hgroup className="flex flex-col-reverse gap-y-2 md:gap-y-3 mb-6 md:mb-12">
              <h2 className="text-2xl font-bold leading-none text-primary dark:text-white md:text-3xl lg:text-4xl lg:tracking-tighter xl:text-5xl">{ aboutTitle }</h2>
              <p className="leading-tight tracking-tighter text-primary dark:text-white xl:text-2xl">{ aboutSubtitle }</p>
            </hgroup>
            <div className="tracking-tighter md:text-md md:leading-8">
              <p>{documentToReactComponents(pendahuluanDesc)}</p>
            </div>
            <img src="/img/sponsor.png" alt="Sponsor" width="400" className='mt-3' />
          </div>
          <div className="col-span-full md:col-start-7 md:col-end-13 md:pl-7 lg:col-start-7 lg:col-end-12 lg:pl-[70px]">
            <figure className="relative isolate mx-auto w-fit after:absolute after:left-0 after:top-0 after:-z-10 after:ml-[20px] after:mt-[20px] after:h-full after:w-full after:bg-accent after:lg:ml-[30px] after:lg:mt-[30px]">
              <img src={`https:${aboutImage.fields.file.url}`} alt="Salah Satu Prasasti Candi Srigading" />
            </figure>
          </div>
        </section>
      </div>
    </section>
  )
}

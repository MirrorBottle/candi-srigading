import React from 'react'
import { getHomepage } from "@/utils/contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default async function AboutPage() {
  const homepage = await getHomepage();
  const {
    aboutPageBanner,
    aboutPageDesc
  } = homepage.fields
  return (
    <>
      <div className="col-span-full lg:col-span-12 bg-accent">
        <div className="pt-20 lg:px-0 lg:text-left">
          <div class="page-heading pt-8 pb-12 text-center md:pt-16 md:pb-28">
            <div class="container">
              <h1 class="relative mb-3 text-3xl font-bold leading-tight tracking-tight md:text-5xl text-white">Tentang</h1>
            </div>
          </div>
        </div>
      </div>
      <main id="main-content" class="grow lg:pt-0">
        <div class="pt-14 pb-24 lg:pb-52 lg:pt-40">
          <div class="container">
            <figure class="relative -mt-20 mb-14 bg-white shadow-3xl lg:-mt-[200px] lg:mb-40">
              <a href="#">
                <img class="h-auto w-full" src={`https:${aboutPageBanner.fields.file.url}`} alt="YouTube Channel" />
              </a>
            </figure>

            <section class="grid grid-cols-12 gap-x-5 gap-y-10 md:gap-x-6 lg:gap-x-[30px] mb-20 md:mb-40 lg:mb-52 xl:mb-60">
              <div class="col-span-full">
                <div class="tracking-tighter md:text-lg md:leading-8">
                  <p>{documentToReactComponents(aboutPageDesc)}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}

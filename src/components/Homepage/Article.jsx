import React from 'react'
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import moment from 'moment'
import 'moment/locale/id'
import Link from "next/link";

export default function HomepageArticle({ homepage, articles }) {
  return (
    <section className="py-14">
      <div className="container">

        <div className="mb-12 flex flex-col flex-wrap gap-y-6 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 xl:gap-y-12 items-baseline justify-between sm:flex-row">
          <div className="flex flex-col-reverse gap-y-2 sm:gap-y-3 md:gap-y-4 lg:gap-y-5 xl:gap-y-6">
            <h2 className="leadin-none text-3xl font-bold tracking-tight text-primary dark:text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-6.5xl xl:leading-none">Daftar Artikel</h2>
            <div className="text-sm uppercase leading-tighter md:text-base">Terbaru Tentang Candi Srigading</div>
          </div>

          <div className="inline-flex items-center gap-x-3 text-xs font-bold uppercase text-primary md:text-sm">
            <span className="relative inline-flex h-[20px] w-[20px] items-center justify-center rounded-full border-2 border-primary dark:border-white">
              <IoChevronForwardOutline />
            </span>
            <Link className="text-primary hover:text-accent dark:text-white dark:hover:text-accent" href="/artikel">Lihat Semua Artikel</Link>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-y-7 sm:gap-[30px]">
          {articles.map(article => (
            <div className="col-span-full sm:col-span-6 lg:col-span-4">
              <figure className="group overflow-hidden bg-gray-900">
                <a href="/">
                  <img className="aspect-[37/24] h-full w-full max-w-full object-cover duration-300 group-hover:scale-110 group-hover:opacity-75" src={`https:${article.fields.banner.fields.file.url}`} />
                </a>
              </figure>
              <div className="relative -mt-20 mr-8 lg:mr-10">
                <div className="inline-flex bg-accent px-2 py-[6px] text-xs font-bold uppercase leading-none text-white">
                  { article.fields.tag }
                </div>
                <div className="bg-white dark:bg-gray-800 p-6">
                  <h2 className="mb-4 text-xl font-bold leading-6 lg:tracking-tighter">
                    <Link href={`/artikel/${article.sys.id}`} className="text-primary transition-colors hover:text-accent dark:text-white dark:hover:text-accent">
                      { article.fields.title }
                    </Link>
                  </h2>
                  <div className="text-sm">{ moment(article.fields.date).locale('id').format("DD MMMM YYYY") }</div>
                </div>
              </div>
            </div>
          ))}
          
        </div>

      </div>
    </section>
  )
}

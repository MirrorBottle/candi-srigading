import React from 'react'
import { getArticles } from "@/utils/contentful";
import moment from 'moment'
import Link from "next/link";
import 'moment/locale/id'

export default async function ArticlePage() {
  const articles = await getArticles()
  console.log(articles[0])
  return (
    <>
      <div className="col-span-full lg:col-span-12 bg-accent">
        <div className="pt-20 lg:px-0 lg:text-left">
          <div className="page-heading pt-8 pb-12 text-center md:pt-16 md:pb-28">
            <div className="container">
              <h1 className="relative mb-3 text-3xl font-bold leading-tight tracking-tight md:text-5xl text-white">Artikel</h1>
            </div>
          </div>
        </div>
      </div>
      <main id="main-content" className="grow lg:pt-0">
        <div className="pt-14 pb-24 lg:pb-52 lg:pt-40">
          <div className="container">
            {articles.map(article => (
              <div className="flex flex-col gap-y-12 lg:gap-y-14">
                <div className="grid grid-cols-12 gap-y-6 sm:grid-rows-1">
                  <figure className="group col-span-full overflow-hidden bg-gray-900 sm:col-start-1 sm:col-end-8 sm:row-start-1 sm:row-end-2">
                    <Link href={`/artikel/${article.sys.id}`}>
                      <img className="aspect-14/9 h-full w-full object-cover duration-300 group-hover:scale-110 group-hover:opacity-75" src={`https:${article.fields.banner.fields.file.url}`} alt="Next month I’ll be unboxing the exclusive “Last of Them II” deluxe version" />
                    </Link>
                  </figure>
                  <div className="relative col-span-full bg-white dark:bg-gray-800 sm:col-start-6 sm:col-end-13 sm:row-start-1 sm:row-end-2 sm:mt-12 lg:mt-[70px] sm:p-6 sm:pr-0 md:px-7 lg:p-9 lg:pb-12">
                    <div className="mb-4 inline-flex bg-accent px-2 py-1 text-xs font-bold uppercase leading-none text-white lg:mb-7">
                      {article.fields.tag}
                    </div>
                    <h2 className="mb-4 text-2xl font-bold leading-none sm:text-xl lg:text-4xl lg:mb-6 lg:tracking-tighter lg:leading-none">
                      <Link href={`/artikel/${article.sys.id}`} className="text-primary transition-colors hover:text-accent dark:text-white dark:hover:text-accent">
                        {article.fields.title}
                      </Link>
                    </h2>
                    <div className="mb-3 sm:text-sm lg:mb-6 lg:text-base">{moment(article.fields.date).locale('id').format("DD MMMM YYYY")}</div>
                    <div className="sm:text-sm lg:pr-20 lg:text-lg lg:leading-8 tracking-tight">
                      {article.fields.caption}

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

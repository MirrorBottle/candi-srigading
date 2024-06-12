import React from 'react'
import { getArticle } from "@/utils/contentful";
import moment from 'moment'
import 'moment/locale/id'
import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
export default async function ArticleDetailPage(props) {
  let article = {}
  try {
    article = await getArticle(props.params.id)
  } catch (error) {
    notFound()
  }
  return (
    <>
      <div className="bg-accent absolute inset-0 z-0" style={{ height: '40vh' }}></div>

      <main id="main-content" className="grow pt-44">

        <section className="pb-24 lg:pb-[220px]">
          <div className="container">
            <article className="grid-col-4 grid gap-x-4 md:grid-cols-12 md:gap-x-6 lg:gap-x-[30px] isolate relative">
              <div className="-mx-16 md:mx-0 col-span-full md:col-start-2 md:col-end-12 bg-white dark:bg-gray-900 h-[210px] -z-10 absolute inset-x-0"></div>

              <header className="col-span-full mb-5 flex flex-col items-start gap-y-6 pt-16 lg:pt-20 md:col-start-3 md:col-end-11 md:mb-14">
                <a className="bg-accent px-3 py-1 text-xs font-bold uppercase leading-snug text-white transition-colors hover:bg-accent/90 md:text-sm" href="#">
                  {article.fields.tag}
                </a>
                <h1 className="pb-1 text-2xl font-bold leading-tight tracking-tighter text-primary dark:text-white md:text-3xl lg:pr-20 lg:text-5xl lg:leading-none">
                  {article.fields.title}

                </h1>

                <ul className="mb-4 flex flex-wrap justify-center divide-x divide-accent pt-1 text-xs leading-none tracking-tight md:mb-7 md:text-base">
                  <li className="px-2 leading-none first:pl-0">{moment(article.fields.date).locale('id').format("DD MMMM YYYY")}</li>
                </ul>

              </header>

              <div className="col-span-full md:col-start-3 md:col-end-11 grid-col-4 grid gap-x-4 md:grid-cols-8 md:gap-x6 lg:gap-x-[30px]">

                <div className="col-span-full">
                  <div className="vv-prose">
                    {documentToReactComponents(article.fields.content)}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  )
}

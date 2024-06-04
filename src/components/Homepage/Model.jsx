import React from 'react'
export default function Model({ homepage }) {
  return (
    <section>
      <div className="isolate bg-white py-14">
        <div className="container">

          <div className="relative flex aspect-[1000/560] w-full flex-col items-center justify-between">
            <div className="flex flex-col flex-wrap items-center justify-center gap-y-6 xl:gap-y-12">
              <div className="flex flex-col-reverse items-center gap-y-2 text-center sm:gap-y-3 md:gap-y-4 lg:gap-y-5 xl:gap-y-6">
                <h2 className="leadin-none text-2xl font-bold tracking-tight text-primary dark:text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-6.5xl xl:leading-none"><span className="text-accent">3D</span> Model</h2>
                <div className="text-sm uppercase leading-tighter md:text-base">Candi Srigading dalam Bentuk</div>
              </div>
            </div>

            <div className="sketchfab-embed-wrapper mt-5 w-full"> <iframe title="Ilustrasi 3D Candi Srigading" frameBorder="0" allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking="true" execution-while-out-of-viewport="true" execution-while-not-rendered="true" web-share="true" src="https://sketchfab.com/models/42de446969bd477fbc4041a5f3b38486/embed" className="w-full h-[500px]"> </iframe></div>
          </div>
        </div>
      </div>
    </section>
  )
}

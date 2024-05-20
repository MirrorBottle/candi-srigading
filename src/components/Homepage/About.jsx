import React from 'react'

export default function HomepageAbout() {
  return (
    <section className="bg-[#F4F5FE] pt-10">
      <div className="container pt-10 pb-10">
        <section className="grid grid-cols-12 gap-x-5 gap-y-10 md:gap-x-6 lg:gap-x-[30px] mb-20 md:mb-30 lg:mb-40 xl:mb-50">
          <div className="col-span-full md:col-end-7 lg:col-end-7 xl:pt-14">
            <hgroup className="flex flex-col-reverse gap-y-2 md:gap-y-3 mb-6 md:mb-12">
              <h2 className="text-2xl font-bold leading-none text-primary dark:text-white md:text-3xl lg:text-4xl lg:tracking-tighter xl:text-5xl">Menyingkap Jejak Hindu di Malang</h2>
              <p className="leading-tight tracking-tighter text-primary dark:text-white xl:text-2xl">Pendahuluan</p>
            </hgroup>
            <div className="tracking-tighter md:text-md md:leading-8">
              <p>Dalam materi kajian koleksi museum, Museum Singhasari memiliki hasil kebudayaan material reruntuhan candi berupa reruntuhan Candi Srigading. Candi Srigading merupakan reruntuhan batu bata kuno berukuran raksasa yang membentuk gundukan tanah setinggi sekitar 2,5 meter, sehingga masyarakat setempat sering menyebutnya Candi Gumuk Srigading. Penamaan dari Candi Srigading sendiri berdasarkan dari nama wilayah ditemukannya yaitu di Dusun Manggis, Desa Srigading, dimana hal ini yang juga diberlakukan pada candi-candi lainnya. Secara Toponimi, Dusun Manggis pernah ditemukan pada suatu Prasasti logam yaitu Prasasti Walandit tahun 1303/1337 Ç (saka).
              </p>
            </div>
            <img src="/img/sponsor.png" alt="Sponsor" width="400" className='mt-3' />
          </div>
          <div className="col-span-full md:col-start-7 md:col-end-13 md:pl-7 lg:col-start-7 lg:col-end-12 lg:pl-[70px]">
            <figure className="relative isolate mx-auto w-fit after:absolute after:left-0 after:top-0 after:-z-10 after:ml-[20px] after:mt-[20px] after:h-full after:w-full after:bg-accent after:lg:ml-[30px] after:lg:mt-[30px]">
              <img src="/img/about.png" alt="Salah Satu Prasasti Candi Srigading" />
            </figure>
          </div>
        </section>
      </div>
    </section>
  )
}

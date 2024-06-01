import Image from "next/image";
import HomepageHero from "@/components/Homepage/Hero";
import HomepageAbout from "@/components/Homepage/About";
import HomepageProfile from "@/components/Homepage/Profile";
import HomepageModel from "@/components/Homepage/Model";

import 'glightbox/dist/css/glightbox.min.css'
import 'swiper/css';
import HomepageInscription from "@/components/Homepage/Inscription";
import HomepageArticle from "@/components/Homepage/Article";
import { getHomepage } from "@/utils/contentful";
export default async function Home() {
  const homepage = await getHomepage();
  console.log(homepage)
  return (
    <>
      <HomepageHero homepage={homepage} />
      <HomepageAbout />
      <HomepageInscription />
      <HomepageProfile />
      <HomepageModel />
      <HomepageArticle />
    </>
  );
}

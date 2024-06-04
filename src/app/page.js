import Image from "next/image";
import HomepageHero from "@/components/Homepage/Hero";
import HomepageAbout from "@/components/Homepage/About";
import HomepageProfile from "@/components/Homepage/Profile";
import HomepageModel from "@/components/Homepage/Model";

import 'glightbox/dist/css/glightbox.min.css'
import 'swiper/css';
import HomepageInscription from "@/components/Homepage/Inscription";
import HomepageArticle from "@/components/Homepage/Article";
import { getArticles, getHomepage, getInscriptions } from "@/utils/contentful";
export default async function Home() {
  const homepage = await getHomepage();
  const inscriptions = await getInscriptions();
  const articles = await getArticles({ limit: 3 })
  return (
    <>
      <HomepageHero homepage={homepage} />
      <HomepageAbout homepage={homepage} />
      <HomepageInscription  homepage={homepage} inscriptions={inscriptions} />
      <HomepageProfile homepage={homepage} />
      <HomepageModel homepage={homepage} />
      <HomepageArticle  homepage={homepage} articles={articles} />
    </>
  );
}

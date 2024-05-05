import Image from "next/image";
import HomepageHero from "@/components/Homepage/Hero";
import HomepageAbout from "@/components/Homepage/About";
import HomepageProfile from "@/components/Homepage/Profile";
import 'glightbox/dist/css/glightbox.min.css'
import 'swiper/css';
import HomepageInscription from "@/components/Homepage/Inscription";
import HomepageArticle from "@/components/Homepage/Article";

export default function Home() {
  return (
    <>
      <HomepageHero />
      <HomepageAbout />
      <HomepageProfile />
      <HomepageInscription />
      <HomepageArticle />
    </>
  );
}

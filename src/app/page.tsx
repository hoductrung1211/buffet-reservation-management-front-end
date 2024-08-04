import AboutUs from "@/layouts/home/AboutUs";
import BuffetPrice from "@/layouts/home/BuffetPrice";
import Footer from "@/layouts/home/Footer";
import Header from "@/layouts/home/Header";
import HeroSection from "@/layouts/home/HeroSection";
import Menu from "@/layouts/home/Menu";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Menu />
      <BuffetPrice />
      <AboutUs />
      <Footer />
    </>
  );
}
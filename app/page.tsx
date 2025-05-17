import AboutSection from "../components/sections/about";
import BlogSection from "../components/sections/blog";
import ButtonBackToTop from "../components/button-back-to-top";
import ClientsSection from "../components/sections/clients";
import ContactSection from "../components/sections/contact";
import Footer from "../components/footer";
import HeaderNav from "../components/header/header-nav";
import HeroSection from "../components/sections/hero";
import KeepUpToDateSection from "../components/sections/keep-up-to-date";
import MapSection from "../components/sections/map";
import PortfolioSection from "../components/sections/portfolio";
import ServicesSection from "../components/sections/services";
import StatisticsSection from "../components/sections/statistics";
import WorkSection from "../components/sections/work";
import { brand } from "../constants/config";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />

        <AboutSection />

        {/* <ServicesSection /> */}

        <PortfolioSection />

        {/* <ClientsSection /> */}

        <WorkSection />

        {/* <StatisticsSection /> */}

        {/* <BlogSection /> */}
        <ContactSection />

        {/* <MapSection /> */}

        {/* <KeepUpToDateSection /> */}
      </main>

      <Footer />
    </>
  );
}

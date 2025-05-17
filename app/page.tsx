import AboutSection from "../components/sections/about";
import BlogSection from "../components/sections/blog";
import ButtonBackToTop from "../components/button-back-to-top";
import ClientsSection from "../components/sections/clients";
import ContactSection from "../components/sections/contact";
import Footer from "../components/footer";
import HeaderNav from "../components/header-nav";
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
    <div id="main" className="relative">
      <ButtonBackToTop />

      <header className="w-full z-50 top-0 py-3 sm:py-5 absolute">
        <div className="container flex items-center justify-between">
          <div>
            <a className="flex items-center gap-2 text-white" href="/">
              <span className="text-2xl">&lt;/&gt;</span>
              <span className="leading-4 text-xl">{brand.name}</span>
            </a>
          </div>

          <HeaderNav />
        </div>
      </header>

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
    </div>
  );
}

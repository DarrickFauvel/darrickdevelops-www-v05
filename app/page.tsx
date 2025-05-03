import Footer from "../components/footer";
import ButtonBackToTop from "../components/button-back-to-top";
import HeaderNav from "../components/header-nav";
import { site } from "../constants/config";
import { HeroSection } from "../components/sections/hero";
import { AboutSection } from "../components/sections/about";
import { ServicesSection } from "../components/sections/services";
import { PortfolioSection } from "../components/sections/portfolio";
import { ClientsSection } from "../components/sections/clients";
import { WorkSection } from "../components/sections/work";
import { StatisticsSection } from "../components/sections/statistics";
import { BlogSection } from "../components/sections/blog";
import { ContactSection } from "../components/sections/contact";
import { MapSection } from "../components/sections/map";
import { KeepUpToDateSection } from "../components/sections/keep-up-to-date";

export default function Home() {
  return (
    <div id="main" className="relative">
      <ButtonBackToTop />

      <header className="w-full z-50 top-0 py-3 sm:py-5 absolute">
        <div className="container flex items-center justify-between">
          <div>
            <a className="flex items-center gap-2 text-white" href="/">
              <span className="text-2xl">&lt;/&gt;</span>
              <span className="leading-4 text-xl">{site.brand.name}</span>
            </a>
          </div>

          <HeaderNav />
        </div>
      </header>

      <main>
        <HeroSection />

        <AboutSection />

        <ServicesSection />

        <PortfolioSection />

        <ClientsSection />

        <WorkSection />

        <StatisticsSection />

        <BlogSection />

        <ContactSection />

        <MapSection />

        <KeepUpToDateSection />
      </main>

      <Footer />
      {/* <!--<script src="/assets/js/main.js"></script>--> */}
    </div>
  );
}

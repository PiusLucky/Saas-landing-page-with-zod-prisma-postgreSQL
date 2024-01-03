import NavBar from "@/components/common/NavBar";
import BenefitSection from "@/components/sections/BenefitSection";
import CollabSection from "@/components/sections/CollabSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import OurFeatureSection from "@/components/sections/OurFeatureSection";
import SupportOurPartnerSection from "@/components/sections/SupportOurPartnerSection";

export default function Home() {
  return (
    <main className="relative">
      <NavBar />
      <div className="mx-4 md:mx-[3.25rem] pt-32 lg:pt-16">
        <HeroSection />

        <div className=" hidden md:block md:absolute top-0 left-0 -z-10">
          <img src="/images/top_left_gradient.png" alt="top left gradient" />
        </div>
        <div className="absolute hidden md:block top-0 right-0 -z-10">
          <img src="/images/top_right_gradient.png" alt="top right gradient" />
        </div>
        <CollabSection />
      </div>

      <section>
        <SupportOurPartnerSection />
      </section>
      <div className="mx-4 md:mx-[3.25rem]">
        <OurFeatureSection />
        <BenefitSection />
      </div>

      <FooterSection />
    </main>
  );
}

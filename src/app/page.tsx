import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Footer } from "@/components/layout/Footer";
import { StickySiteNav } from "@/components/layout/StickySiteNav";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { HotDeals } from "@/components/sections/HotDeals";
import { TestimonialsSlider } from "@/components/sections/TestimonialsSlider";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { InquiryForm } from "@/components/sections/InquiryForm";
import { Stats } from "@/components/sections/Stats";
import { FAQ } from "@/components/sections/FAQ";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <main>
        <Hero />
        <FeaturedProducts />
        <CategoryGrid />
        <WhyChoose />
        <HowItWorks />
        <HotDeals />
        <TestimonialsSlider />
        <ServiceAreas />
        <InquiryForm />
        <Stats />
        <FAQ />
        <BlogTeaser />
        <FinalCTA />
      </main>
      <StickySiteNav />
      <Footer />
    </>
  );
}

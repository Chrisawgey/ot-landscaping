import Hero from '../components/home/Hero';
import ServicesOverview from '../components/home/ServicesOverview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import WorkGallery from '../components/home/WorkGallery';
import Testimonials from '../components/home/Testimonials';
import ServiceArea from '../components/home/ServiceArea';
import CTABanner from '../components/ui/CTABanner';

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <WorkGallery />
      <Testimonials />
      <ServiceArea />
      <CTABanner
        title="Let's Create Something Beautiful Together"
        subtitle="Contact us today for a free consultation and estimate. We'll help you design the outdoor space of your dreams."
      />
    </main>
  );
}

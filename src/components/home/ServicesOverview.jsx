import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ui/ServiceCard';
import { services } from '../../data/services';

export default function ServicesOverview() {
  // Show first 4 services on homepage
  const featuredServices = services.slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-sand-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-forest/10 text-forest text-sm font-semibold rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Complete Outdoor Solutions for Every Need
          </h2>
          <p className="text-lg text-stone leading-relaxed">
            From initial design to ongoing maintenance, we provide comprehensive landscaping
            and construction services tailored to your property and vision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featuredServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              featured={index === 0}
            />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-forest font-semibold text-lg hover:gap-3 transition-all duration-200"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

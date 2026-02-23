import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import {
  Leaf, Sprout, Hammer, HardHat, Droplets,
  Waves, Filter, Snowflake, Star, FlaskConical
} from 'lucide-react';

const iconMap = { Leaf, Sprout, Hammer, HardHat, Droplets, Waves, Filter, Snowflake, Star, FlaskConical };

export default function ServicesOverview() {
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

        {/* Services Grid — all 10 as image tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Leaf;
            return (
              <Link
                key={service.id}
                to={`/services#${service.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-charcoal text-sm leading-snug">{service.title}</h3>
                  <span className="text-forest text-xs font-medium flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-forest text-white font-semibold rounded-full hover:bg-forest-dark transition-colors duration-200 text-lg shadow-lg shadow-forest/20"
          >
            Explore All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

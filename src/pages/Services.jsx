import { services } from '../data/services';
import {
  Leaf,
  Sprout,
  Hammer,
  HardHat,
  Droplets,
  Waves,
  Filter,
  Snowflake,
  Star,
  FlaskConical,
  Check
} from 'lucide-react';
import CTABanner from '../components/ui/CTABanner';

const iconMap = {
  Leaf,
  Sprout,
  Hammer,
  HardHat,
  Droplets,
  Waves,
  Filter,
  Snowflake,
  Star,
  FlaskConical,
};

export default function Services() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-forest-dark to-forest">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Comprehensive landscaping, hardscaping, and outdoor construction services
              tailored to transform your property into a stunning outdoor living space.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-sand-light">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Leaf;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center scroll-mt-24`}
                >
                  {/* Image */}
                  <div className="lg:w-1/2">
                    <div className="rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full aspect-[4/3] object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-forest/10 rounded-xl">
                        <Icon className="w-6 h-6 text-forest" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-charcoal">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-lg text-stone mb-6 leading-relaxed">
                      {service.fullDescription}
                    </p>

                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <div className="w-5 h-5 bg-forest rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-charcoal">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner variant="gradient" />
    </main>
  );
}

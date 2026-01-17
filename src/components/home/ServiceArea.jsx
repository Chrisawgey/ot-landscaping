import { MapPin, Phone, Clock, Truck } from 'lucide-react';
import Button from '../ui/Button';

const unionCountyAreas = [
  'Roselle',
  'Elizabeth',
  'Union',
  'Linden',
  'Westfield',
  'Rahway',
  'Cranford',
  'Summit',
  'Scotch Plains',
  'Clark',
];

const surroundingAreas = [
  'Roselle Park',
  'Kenilworth',
  'Hillside',
  'Newark',
  'Plainfield',
  'Springfield',
  'Mountainside',
  'New Providence',
  'Irvington',
  'East Orange',
];

const features = [
  {
    icon: Truck,
    title: 'Same-Week Service',
    description: 'Quick response times for estimates and project starts'
  },
  {
    icon: MapPin,
    title: 'Local Experts',
    description: 'We know the region\'s climate, soil, and regulations'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Projects completed on schedule, every time'
  },
];

export default function ServiceArea() {
  return (
    <section className="py-20 md:py-28 bg-sand-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-forest/10 text-forest text-sm font-semibold rounded-full mb-4">
              Service Areas
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
              Proudly Serving Your Community
            </h2>
            <p className="text-lg text-stone leading-relaxed mb-8">
              Based in Roselle, NJ, we provide professional lawn care, gardening, and
              landscape design services throughout Union County and surrounding communities.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-8">
              {features.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal mb-1">{title}</h3>
                    <p className="text-stone">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact">
                Check Your Area
              </Button>
              <a
                href="tel:+12018707009"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-forest font-semibold hover:text-forest-dark transition-colors"
              >
                <Phone className="w-5 h-5" />
                (201) 870-7009
              </a>
            </div>
          </div>

          {/* Right Content - Area Lists */}
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Union County */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-forest rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-charcoal">Union County, NJ</h3>
              </div>
              <ul className="space-y-2">
                {unionCountyAreas.map((area) => (
                  <li key={area} className="flex items-center gap-2 text-stone">
                    <span className="w-1.5 h-1.5 bg-forest rounded-full"></span>
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            {/* Surrounding Areas */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-sage rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-charcoal">Surrounding Areas</h3>
              </div>
              <ul className="space-y-2">
                {surroundingAreas.map((area) => (
                  <li key={area} className="flex items-center gap-2 text-stone">
                    <span className="w-1.5 h-1.5 bg-sage rounded-full"></span>
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            {/* Map Placeholder */}
            <div className="sm:col-span-2 bg-gradient-to-br from-sage-light/50 to-forest/10 rounded-2xl h-48 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-forest/30 mx-auto mb-2" />
                <p className="text-stone">Interactive map placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

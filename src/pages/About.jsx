import { Shield, Award, Users, Leaf, Clock, ThumbsUp } from 'lucide-react';
import CTABanner from '../components/ui/CTABanner';

const stats = [
  { value: '2000', label: 'Founded' },
  { value: '500+', label: 'Projects' },
  { value: '25+', label: 'Years Experience' },
  { value: '98%', label: 'Client Retention' },
];

const values = [
  {
    icon: ThumbsUp,
    title: 'Quality First',
    description: 'We never cut corners. From materials to execution, excellence is our standard.'
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'Your vision drives every project. We listen, collaborate, and deliver beyond expectations.'
  },
  {
    icon: Leaf,
    title: 'Sustainable Practices',
    description: 'Environmentally conscious methods and native plants that thrive in our region.'
  },
  {
    icon: Clock,
    title: 'Reliable Service',
    description: 'On-time arrivals, clear communication, and projects completed as promised.'
  },
];

const certifications = [
  { icon: Shield, text: 'Fully Licensed & Insured' },
  { icon: Award, text: 'ICPI Certified Installers' },
  { icon: Leaf, text: 'EPA WaterSense Partner' },
];

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-forest-dark to-forest">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About OT Landscaping
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Specializing in lawn care, gardening, and landscape design since 2000.
              Proudly serving Union County, NJ and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-forest/10 text-forest text-sm font-semibold rounded-full mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                From Humble Beginnings to Industry Leaders
              </h2>
              <div className="space-y-4 text-stone leading-relaxed">
                <p>
                  OT Landscaping & Construction LLC started with a simple belief: every property
                  deserves an outdoor space that reflects its owners' dreams. Since 2000, we've
                  been dedicated to caring for lawns, gardening, and creating beautiful landscape
                  designs for our community.
                </p>
                <p>
                  Our company is prepared to meet the expectations of our clients and we are
                  always delighted to work with new projects. We've built our reputation one
                  yard at a time, treating every property as if it were our own.
                </p>
                <p>
                  Our goal is to improve the appearance and maintenance of your home. When you
                  work with OT, you're working with a company that takes pride in every project,
                  no matter the size. We proudly serve the community of Union County, NJ and
                  surrounding areas.
                </p>
              </div>
            </div>

            {/* Work Image */}
            <div className="rounded-3xl overflow-hidden">
              <img
                src="/work-3.jpg"
                alt="OT Landscaping work example"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-forest">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-sand-light">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-forest/10 text-forest text-sm font-semibold rounded-full mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              What Drives Us Every Day
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-forest" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">{title}</h3>
                <p className="text-stone">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {certifications.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-12 h-12 bg-forest rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="font-semibold text-charcoal">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}

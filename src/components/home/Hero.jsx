import { ArrowRight, Play, Star, Shield, Award } from 'lucide-react';
import Button from '../ui/Button';

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '100%', label: 'Satisfaction Guaranteed' },
];

const badges = [
  { icon: Shield, text: 'Licensed & Insured' },
  { icon: Award, text: 'Award Winning' },
  { icon: Star, text: '5-Star Rated' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/work-2.jpg"
          alt="Professional landscaping work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/75 to-charcoal/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24 pb-12">
        <div className="max-w-3xl">
          {/* Trust Badges */}
          <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-up">
            {badges.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm"
              >
                <Icon className="w-4 h-4 text-sage-light" />
                {text}
              </div>
            ))}
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up delay-100">
            Transform Your Outdoor Space Into a
            <span className="text-sage-light"> Living Masterpiece</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed animate-fade-in-up delay-200">
            Expert lawn care, gardening, and landscape design for homes across
            Union County, NJ and surrounding areas. Quality craftsmanship since 2000.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up delay-300">
            <Button to="/contact" size="lg">
              Get Your Free Estimate
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button to="/portfolio" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 animate-fade-in-up delay-400">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/60 text-xs sm:text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator - hidden on mobile */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

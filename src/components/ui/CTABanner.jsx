import { Phone } from 'lucide-react';
import Button from './Button';

export default function CTABanner({
  title = "Ready to Transform Your Outdoor Space?",
  subtitle = "Get a free estimate from our expert team. No obligation, just honest advice.",
  showPhone = true,
  variant = 'default'
}) {
  const bgStyles = {
    default: 'bg-forest',
    light: 'bg-sand',
    gradient: 'bg-gradient-to-r from-forest-dark to-forest',
  };

  const textStyles = {
    default: 'text-white',
    light: 'text-charcoal',
    gradient: 'text-white',
  };

  return (
    <section className={`${bgStyles[variant]} py-16 md:py-20`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textStyles[variant]}`}>
            {title}
          </h2>
          <p className={`text-lg mb-8 ${variant === 'light' ? 'text-stone' : 'text-white/80'}`}>
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/contact"
              variant={variant === 'light' ? 'primary' : 'white'}
              size="lg"
            >
              Get Your Free Estimate
            </Button>

            {showPhone && (
              <a
                href="tel:+12018707009"
                className={`
                  inline-flex items-center gap-2 font-semibold
                  ${variant === 'light' ? 'text-forest hover:text-forest-dark' : 'text-white hover:text-sand-light'}
                  transition-colors duration-200
                `}
              >
                <Phone className="w-5 h-5" />
                (201) 870-7009
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

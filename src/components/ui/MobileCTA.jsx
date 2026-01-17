import { useState, useEffect } from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="bg-white border-t border-sand shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-3 flex gap-3">
        <a
          href="tel:+12018707009"
          className="flex-1 flex items-center justify-center gap-2 bg-forest hover:bg-forest-dark text-white font-semibold py-3.5 rounded-xl transition-colors active:scale-[0.98]"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        <a
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 bg-charcoal hover:bg-charcoal-light text-white font-semibold py-3.5 rounded-xl transition-colors active:scale-[0.98]"
        >
          <MessageSquare className="w-5 h-5" />
          Free Estimate
        </a>
      </div>
    </div>
  );
}

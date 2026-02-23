import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-forest">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-semibold rounded-full mb-4">
            Client Reviews
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            We measure our success by the satisfaction of our clients.
            Here's what they have to say about working with us.
          </p>
        </div>

        {/* Top 3 — full white cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {testimonials.slice(0, 3).map((t) => (
            <div key={t.id} className="bg-white rounded-2xl p-8 relative flex flex-col shadow-xl">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-forest/8" />
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-charcoal leading-relaxed mb-6 flex-1">
                "{t.text}"
              </blockquote>
              <div className="flex items-center gap-3 border-t border-sand pt-5">
                <div className="w-12 h-12 bg-gradient-to-br from-sage-light to-forest rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-bold text-charcoal text-sm">{t.name}</div>
                  <div className="text-stone text-xs">{t.location}</div>
                  <div className="text-forest text-xs font-semibold">{t.project}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 2 — glass-style cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {testimonials.slice(3).map((t) => (
            <div key={t.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-7 border border-white/15">
              <div className="flex gap-1 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-white/90 text-sm leading-relaxed mb-5">
                "{t.text}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-white/50 text-xs">{t.location} · {t.project}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

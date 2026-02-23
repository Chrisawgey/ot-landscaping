import { Shield, DollarSign, Clock, ThumbsUp, Award, Phone } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed and insured on every job — protecting you, your property, and our crew.',
  },
  {
    icon: DollarSign,
    title: 'Free Estimates',
    description: 'We come to you, assess the job, and give you a detailed quote with zero obligation.',
  },
  {
    icon: Clock,
    title: 'On-Time, Every Time',
    description: 'We show up when we say we will and finish on schedule. No surprises, no excuses.',
  },
  {
    icon: ThumbsUp,
    title: '100% Satisfaction',
    description: "We don't consider a job done until you're completely happy with the results.",
  },
  {
    icon: Award,
    title: '25+ Years Experience',
    description: 'Decades of hands-on expertise in landscaping, hardscaping, and construction across NJ.',
  },
  {
    icon: Phone,
    title: 'Always Responsive',
    description: 'Real people answer our phones. We respond quickly and keep you informed throughout.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-sage-light text-sm font-semibold rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            The OT Landscaping Difference
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            We're not just another landscaping company. Here's why homeowners across
            Union County trust us with their properties year after year.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-sage-light/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-forest/40 group-hover:bg-forest rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                <Icon className="w-7 h-7 text-sage-light" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-white/60 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

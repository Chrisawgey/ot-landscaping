import { Link } from 'react-router-dom';
import {
  Leaf,
  Hammer,
  Building,
  Scissors,
  Droplets,
  Snowflake,
  Wrench,
  TreeDeciduous,
  Flower2,
  ArrowRight
} from 'lucide-react';

const iconMap = {
  Leaf,
  Hammer,
  Building,
  Scissors,
  Droplets,
  Snowflake,
  Wrench,
  TreeDeciduous,
  Flower: Flower2,
};

export default function ServiceCard({ service, featured = false }) {
  const Icon = iconMap[service.icon] || Leaf;

  return (
    <div
      className={`
        group relative bg-white rounded-2xl overflow-hidden
        border border-sand transition-all duration-300
        hover:shadow-xl hover:shadow-forest/10 hover:-translate-y-1
        ${featured ? 'md:col-span-2 md:flex' : ''}
      `}
    >
      {/* Service Image */}
      <div
        className={`
          relative overflow-hidden
          ${featured ? 'md:w-1/2 h-48 md:h-auto' : 'h-48'}
        `}
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className={`p-6 ${featured ? 'md:w-1/2 md:p-8 flex flex-col justify-center' : ''}`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-forest/10 rounded-lg">
            <Icon className="w-5 h-5 text-forest" />
          </div>
          <h3 className="text-xl font-bold text-charcoal">{service.title}</h3>
        </div>

        <p className="text-stone mb-4 leading-relaxed">
          {service.shortDescription}
        </p>

        {featured && service.features && (
          <ul className="mb-4 space-y-2">
            {service.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-charcoal-light">
                <span className="w-1.5 h-1.5 bg-forest rounded-full"></span>
                {feature}
              </li>
            ))}
          </ul>
        )}

        <Link
          to={`/services#${service.id}`}
          className="
            inline-flex items-center gap-2 text-forest font-semibold
            group-hover:gap-3 transition-all duration-200
          "
        >
          Learn More
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

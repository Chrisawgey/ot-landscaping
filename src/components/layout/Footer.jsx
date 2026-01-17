import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Clock
} from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Free Estimate', path: '/contact' },
];

const services = [
  { name: 'Landscape Design', path: '/services#landscaping' },
  { name: 'Hardscaping', path: '/services#hardscaping' },
  { name: 'Outdoor Construction', path: '/services#construction' },
  { name: 'Lawn Maintenance', path: '/services#maintenance' },
  { name: 'Irrigation Systems', path: '/services#irrigation' },
  { name: 'Seasonal Services', path: '/services#seasonal' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img
                src="/Logo.jpg"
                alt="OT Landscaping & Construction LLC"
                className="h-14 w-auto rounded-lg"
              />
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Specializing in lawn care, gardening, and landscape design since 2000.
              Proudly serving Union County, NJ and surrounding areas.
            </p>
            <a
              href="https://www.facebook.com/otequiLLC/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-forest rounded-lg transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span className="text-sm">Follow us on Facebook</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+12018707009"
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>(201) 870-7009</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:otequitlalpa@gmail.com"
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>otequitlalpa@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  Roselle, New Jersey<br />
                  Serving Union County & beyond
                </span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  Mon - Fri: 7am - 6pm<br />
                  Sat: 8am - 4pm
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 pb-24 lg:pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              &copy; {currentYear} OT Landscaping & Construction LLC. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-white/50 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/50 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

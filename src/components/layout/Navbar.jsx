import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
        }
      `}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/Logo.jpg"
              alt="OT Landscaping & Construction LLC"
              className="h-12 sm:h-14 w-auto rounded-lg"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  font-medium transition-colors duration-200 relative
                  ${location.pathname === link.path
                    ? isScrolled ? 'text-forest' : 'text-white'
                    : isScrolled ? 'text-charcoal hover:text-forest' : 'text-white/80 hover:text-white'
                  }
                  ${location.pathname === link.path ? 'after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-current after:rounded-full' : ''}
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+12018707009"
              className={`
                flex items-center gap-2 font-medium transition-colors
                ${isScrolled ? 'text-charcoal hover:text-forest' : 'text-white hover:text-sand-light'}
              `}
            >
              <Phone className="w-4 h-4" />
              (201) 870-7009
            </a>
            <Button to="/contact" variant={isScrolled ? 'primary' : 'white'} size="sm">
              Free Estimate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-charcoal hover:bg-sand-light' : 'text-white hover:bg-white/10'}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

      </div>

    </header>

      {createPortal(
        <>
          {/* Overlay */}
          <div
            className={`lg:hidden fixed inset-0 z-40 bg-charcoal/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setIsOpen(false)}
          />

          {/* Mobile Menu */}
          <div
            className={`lg:hidden fixed left-4 right-4 z-50 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
            style={{ top: isScrolled ? '90px' : '104px' }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4 max-h-[calc(100vh-120px)] overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 font-medium transition-colors text-lg ${location.pathname === link.path ? 'text-forest' : 'text-charcoal hover:text-forest'}`}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-sand" />
              <a
                href="tel:+12018707009"
                className="flex items-center gap-2 py-3 text-charcoal font-medium text-lg"
              >
                <Phone className="w-5 h-5" />
                (201) 870-7009
              </a>
              <Button to="/contact" className="w-full" size="lg">
                Get Free Estimate
              </Button>
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  );
}

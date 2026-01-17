import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const serviceOptions = [
  'Landscape Design',
  'Hardscaping',
  'Outdoor Construction',
  'Lawn Maintenance',
  'Irrigation Systems',
  'Seasonal Services',
  'Other',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    setIsSubmitted(true);
  };

  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-forest-dark to-forest">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get Your Free Estimate
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Ready to transform your outdoor space? Contact us for a free, no-obligation
              consultation. We'll visit your property, discuss your vision, and provide
              a detailed estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-sand-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-charcoal mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-8">
                <a
                  href="tel:+12018707009"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-forest rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-forest-dark transition-colors">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal group-hover:text-forest transition-colors">
                      (201) 870-7009
                    </div>
                    <div className="text-stone text-sm">Call or text anytime</div>
                  </div>
                </a>

                <a
                  href="mailto:otequitlalpa@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-forest rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-forest-dark transition-colors">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal group-hover:text-forest transition-colors">
                      otequitlalpa@gmail.com
                    </div>
                    <div className="text-stone text-sm">We respond within 24 hours</div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-forest rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal">Service Area</div>
                    <div className="text-stone text-sm">
                      Roselle, NJ - Serving Union County & beyond
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-forest rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal">Business Hours</div>
                    <div className="text-stone text-sm">
                      Mon - Fri: 7am - 6pm<br />
                      Sat: 8am - 4pm<br />
                      Sun: Closed
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-sage-light/50 to-forest/10 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-forest/30 mx-auto mb-2" />
                  <p className="text-stone">Interactive map</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-forest" />
                    </div>
                    <h3 className="text-2xl font-bold text-charcoal mb-4">
                      Thank You!
                    </h3>
                    <p className="text-stone mb-6">
                      We've received your message and will contact you within 24 hours
                      to schedule your free consultation.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-charcoal mb-2">
                      Request a Free Estimate
                    </h2>
                    <p className="text-stone mb-8">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3.5 rounded-xl border border-sand focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all text-base"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3.5 rounded-xl border border-sand focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all text-base"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3.5 rounded-xl border border-sand focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all text-base"
                            placeholder="(201) 870-7009"
                          />
                        </div>
                        <div>
                          <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-2">
                            Service Interested In
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-xl border border-sand focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all bg-white text-base"
                          >
                            <option value="">Select a service</option>
                            {serviceOptions.map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                          Tell Us About Your Project
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-4 py-3.5 rounded-xl border border-sand focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all resize-none text-base"
                          placeholder="Describe your project, property size, timeline, or any questions you have..."
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Send Request
                        <Send className="w-5 h-5" />
                      </Button>

                      <p className="text-sm text-stone text-center">
                        By submitting this form, you agree to our privacy policy.
                        We'll never share your information.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const workImages = [
  {
    id: 1,
    src: '/work-1.jpg',
    title: 'Lawn Renovation',
  },
  {
    id: 2,
    src: '/work-2.jpg',
    title: 'Landscaping Project',
  },
  {
    id: 3,
    src: '/work-3.jpg',
    title: 'Outdoor Transformation',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    title: 'Sod Installation',
  },
  {
    id: 5,
    src: '/work-4.jpg',
    title: 'Lawn Maintenance',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80',
    title: 'Property Maintenance',
  },
];

export default function WorkGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(workImages[index]);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % workImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(workImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + workImages.length) % workImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(workImages[newIndex]);
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-forest/10 text-forest text-sm font-semibold rounded-full mb-4">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Quality Craftsmanship You Can See
          </h2>
          <p className="text-lg text-stone leading-relaxed">
            Take a look at some of our recent projects. We take pride in every lawn,
            patio, and landscape we create.
          </p>
        </div>

        {/* Gallery Grid — large featured + 4 thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {workImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ aspectRatio: '4/3' }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-semibold text-sm">{image.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* View Portfolio Link */}
        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-forest font-semibold text-lg hover:gap-3 transition-all duration-200"
          >
            View Full Portfolio
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 p-2 text-white/70 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <img
            src={selectedImage.src}
            alt={selectedImage.title}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 p-2 text-white/70 hover:text-white transition-colors"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-white font-medium">{selectedImage.title}</p>
            <p className="text-white/50 text-sm">{currentIndex + 1} / {workImages.length}</p>
          </div>
        </div>
      )}
    </section>
  );
}

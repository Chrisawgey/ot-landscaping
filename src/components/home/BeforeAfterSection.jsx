import { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BeforeAfterSlider from '../ui/BeforeAfterSlider';
import { projects } from '../../data/projects';

export default function BeforeAfterSection() {
  const projectsWithComparison = projects.filter(p => p.beforeImage && p.afterImage);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsWithComparison.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsWithComparison.length) % projectsWithComparison.length);
  };

  const currentProject = projectsWithComparison[currentIndex];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-forest/10 text-forest text-sm font-semibold rounded-full mb-4">
            Transformations
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            See the Difference We Make
          </h2>
          <p className="text-lg text-stone leading-relaxed">
            Drag the slider to reveal the dramatic before and after transformations
            we create for our clients.
          </p>
        </div>

        {/* Slider Section */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <BeforeAfterSlider
              beforeImage={currentProject?.beforeImage}
              afterImage={currentProject?.afterImage}
              aspectRatio="16/10"
            />

            {/* Navigation Arrows */}
            {projectsWithComparison.length > 1 && (
              <>
                <button
                  onClick={prevProject}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-6 h-6 text-charcoal" />
                </button>
                <button
                  onClick={nextProject}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-6 h-6 text-charcoal" />
                </button>
              </>
            )}
          </div>

          {/* Project Info */}
          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-1">
                {currentProject?.title}
              </h3>
              <p className="text-stone">
                {currentProject?.location} • {currentProject?.type}
              </p>
            </div>

            {/* Dots Navigation */}
            <div className="flex items-center gap-2">
              {projectsWithComparison.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-forest w-8'
                      : 'bg-sand hover:bg-sage-light'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
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
    </section>
  );
}

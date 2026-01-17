import { useState } from 'react';
import { projects, projectCategories } from '../data/projects';
import CTABanner from '../components/ui/CTABanner';
import { MapPin, X } from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory || p.type === activeCategory);

  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-forest-dark to-forest">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Browse our collection of completed projects. Each transformation represents
              our commitment to quality craftsmanship and client satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="py-20 bg-sand-light">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-forest text-white'
                    : 'bg-white text-charcoal hover:bg-forest/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer"
              >
                {/* Project Image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end justify-center pb-6">
                    <span className="text-white font-medium px-4 py-2 bg-forest rounded-full">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-charcoal text-lg mb-1">{project.title}</h3>
                  <div className="flex items-center gap-2 text-stone text-sm">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  <div className="flex gap-2 mt-3">
                    <span className="px-3 py-1 bg-sand-light text-charcoal-light text-xs rounded-full">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 bg-forest/10 text-forest text-xs rounded-full">
                      {project.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/80 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full aspect-video object-cover rounded-t-3xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white rounded-full transition-colors shadow-lg"
              >
                <X className="w-6 h-6 text-charcoal" />
              </button>
            </div>
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-charcoal mb-1">
                {selectedProject.title}
              </h2>
              <p className="text-stone flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4" />
                {selectedProject.location}
              </p>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-sand-light text-charcoal-light text-sm rounded-full">
                  {selectedProject.category}
                </span>
                <span className="px-3 py-1 bg-forest/10 text-forest text-sm rounded-full">
                  {selectedProject.type}
                </span>
              </div>
              <p className="text-stone leading-relaxed">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <CTABanner variant="light" />
    </main>
  );
}

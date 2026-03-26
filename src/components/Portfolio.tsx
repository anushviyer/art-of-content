import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Design', 'Video', 'Marketing', 'Photography'];

  const projects = [
    { id: 1, title: 'Brand Identity Design', category: 'Design', color: 'from-green-400 to-green-600' },
    { id: 2, title: 'Product Launch Video', category: 'Video', color: 'from-pink-400 to-pink-600' },
    { id: 3, title: 'Social Media Campaign', category: 'Marketing', color: 'from-purple-400 to-indigo-600' },
    { id: 4, title: 'Corporate Photography', category: 'Photography', color: 'from-blue-400 to-blue-600' },
    { id: 5, title: 'Website Redesign', category: 'Design', color: 'from-green-400 to-teal-600' },
    { id: 6, title: 'Commercial Production', category: 'Video', color: 'from-pink-400 to-rose-600' },
    { id: 7, title: 'Content Strategy', category: 'Marketing', color: 'from-amber-400 to-orange-600' },
    { id: 8, title: 'Event Coverage', category: 'Photography', color: 'from-cyan-400 to-blue-600' },
    { id: 9, title: 'Logo & Branding', category: 'Design', color: 'from-green-400 to-emerald-600' },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Work</span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-6">
            Creative Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects that showcase our creativity, expertise, and commitment to delivering exceptional results.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-green-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white transform group-hover:scale-105 transition-transform duration-300">
                <span className="text-sm font-medium mb-2 opacity-80">{project.category}</span>
                <h3 className="text-2xl font-bold text-center mb-4">{project.title}</h3>
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink size={20} />
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-white/20 rounded-2xl group-hover:border-white/40 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

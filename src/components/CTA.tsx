import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
          <Sparkles size={18} />
          <span className="text-sm font-medium">Ready to Transform Your Brand?</span>
        </div>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Let's Create Something
          <br />
          <span className="bg-gradient-to-r from-green-400 to-pink-400 bg-clip-text text-transparent">
            Amazing Together
          </span>
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Whether you need a complete brand refresh or a single project, we're here to bring your vision to life with creativity and expertise.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#contact"
            className="group bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center space-x-2 text-lg font-medium"
          >
            <span>Contact Us</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          <a
            href="#portfolio"
            className="group bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center space-x-2 text-lg font-medium"
          >
            <span>View Our Work</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-400">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">48h</div>
            <div className="text-gray-400">Average Response</div>
          </div>
        </div>
      </div>
    </section>
  );
}

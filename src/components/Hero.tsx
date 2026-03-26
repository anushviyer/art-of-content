import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full mb-8 animate-fade-in">
          <Sparkles size={18} />
          <span className="text-sm font-medium">Creative Agency</span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up">
          We Create Content
          <br />
          <span className="bg-gradient-to-r from-green-600 to-pink-600 bg-clip-text text-transparent">
            That Moves Brands
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
          From compelling visuals to powerful storytelling, we craft content that captivates audiences and drives meaningful engagement for your brand.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-up animation-delay-400">
          <a
            href="#portfolio"
            className="group bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center space-x-2 text-lg font-medium"
          >
            <span>View Our Work</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          <a
            href="#contact"
            className="group bg-white text-gray-900 px-8 py-4 rounded-full border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center space-x-2 text-lg font-medium"
          >
            <span>Let's Work Together</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in animation-delay-600">
          <div>
            <div className="text-4xl font-bold text-gray-900">500+</div>
            <div className="text-gray-600 mt-2">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900">200+</div>
            <div className="text-gray-600 mt-2">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900">50+</div>
            <div className="text-gray-600 mt-2">Awards Won</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900">10+</div>
            <div className="text-gray-600 mt-2">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}

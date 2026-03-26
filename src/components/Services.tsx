import { Palette, PenTool, Video, TrendingUp, Camera, Layers } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Stunning visuals that capture attention and communicate your brand message with clarity and impact.',
      color: 'green',
    },
    {
      icon: PenTool,
      title: 'Content Writing',
      description: 'Compelling copy that tells your story, engages your audience, and drives action.',
      color: 'pink',
    },
    {
      icon: Layers,
      title: 'Creative Media',
      description: 'Innovative multimedia content that brings your ideas to life across all platforms.',
      color: 'green',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Strategic campaigns that amplify your reach and deliver measurable results.',
      color: 'pink',
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Professional photography that captures the essence of your brand with artistic precision.',
      color: 'green',
    },
    {
      icon: Video,
      title: 'Videography & Production',
      description: 'High-quality video content that engages viewers and elevates your brand story.',
      color: 'pink',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-6">
            What We Do Best
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to execution, we offer comprehensive creative services tailored to elevate your brand and achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer border border-gray-100"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  service.color === 'green'
                    ? 'bg-green-100 group-hover:bg-green-600'
                    : 'bg-pink-100 group-hover:bg-pink-600'
                }`}
              >
                <service.icon
                  className={`transition-colors duration-300 ${
                    service.color === 'green'
                      ? 'text-green-600 group-hover:text-white'
                      : 'text-pink-600 group-hover:text-white'
                  }`}
                  size={32}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <div
                className={`mt-6 inline-flex items-center font-medium transition-colors duration-300 ${
                  service.color === 'green'
                    ? 'text-green-600 group-hover:text-green-700'
                    : 'text-pink-600 group-hover:text-pink-700'
                }`}
              >
                Learn More
                <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

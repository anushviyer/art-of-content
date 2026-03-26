import { Lightbulb, Clock, Target, Package } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Lightbulb,
      title: 'Creative Thinking',
      description: 'We bring fresh, innovative ideas that set your brand apart from the competition.',
      gradient: 'from-green-400 to-green-600',
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Quality work delivered on time, every time. We respect your deadlines as much as you do.',
      gradient: 'from-pink-400 to-pink-600',
    },
    {
      icon: Target,
      title: 'Brand-Focused',
      description: 'Every decision we make is guided by your brand strategy and business objectives.',
      gradient: 'from-purple-400 to-indigo-600',
    },
    {
      icon: Package,
      title: 'End-to-End Production',
      description: 'From initial concept to final delivery, we handle every aspect of content creation.',
      gradient: 'from-blue-400 to-cyan-600',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-6">
            What Makes Us Different
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine creativity, strategy, and execution to deliver content that not only looks amazing but drives real business results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.gradient}`}></div>

              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>

              <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

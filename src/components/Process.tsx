import { Search, Palette, Rocket, TrendingUp } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Discover',
      description: 'We dive deep into your brand, audience, and goals to understand what makes you unique.',
      color: 'green',
    },
    {
      icon: Palette,
      number: '02',
      title: 'Create',
      description: 'Our creative team develops innovative concepts and brings your vision to life.',
      color: 'pink',
    },
    {
      icon: Rocket,
      number: '03',
      title: 'Execute',
      description: 'We produce high-quality content with meticulous attention to detail and craftsmanship.',
      color: 'green',
    },
    {
      icon: TrendingUp,
      number: '04',
      title: 'Grow',
      description: 'We measure, optimize, and scale your content strategy for maximum impact.',
      color: 'pink',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-6">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A proven, collaborative process that ensures every project is strategic, creative, and delivers exceptional results.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-200 via-pink-200 to-green-200 -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300 group">
                  <div
                    className={`absolute -top-6 left-8 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white bg-gradient-to-br ${
                      step.color === 'green' ? 'from-green-400 to-green-600' : 'from-pink-400 to-pink-600'
                    }`}
                  >
                    {step.number}
                  </div>

                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mt-8 transition-all duration-300 ${
                      step.color === 'green'
                        ? 'bg-green-100 group-hover:bg-green-600'
                        : 'bg-pink-100 group-hover:bg-pink-600'
                    }`}
                  >
                    <step.icon
                      className={`transition-colors duration-300 ${
                        step.color === 'green'
                          ? 'text-green-600 group-hover:text-white'
                          : 'text-pink-600 group-hover:text-white'
                      }`}
                      size={32}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

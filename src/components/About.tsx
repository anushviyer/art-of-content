import { Target, Zap, Heart, TrendingUp } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Target,
      title: 'Brand-Focused',
      description: 'Every piece of content we create is strategically aligned with your brand identity and business goals.',
    },
    {
      icon: Zap,
      title: 'Creative Excellence',
      description: 'Our team brings fresh perspectives and innovative ideas to every project, ensuring your content stands out.',
    },
    {
      icon: Heart,
      title: 'Passionate Team',
      description: 'We love what we do, and it shows in the quality and dedication we bring to every collaboration.',
    },
    {
      icon: TrendingUp,
      title: 'Results-Driven',
      description: 'Beautiful content that actually works. We focus on creating impact and driving measurable results.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-6">
            Storytellers at Heart
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Art of Content is where creativity meets strategy. We're a team of designers, writers, photographers, and digital innovators who believe that great content has the power to transform brands and captivate audiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gray-50 hover:bg-green-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
                <feature.icon className="text-green-600 group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

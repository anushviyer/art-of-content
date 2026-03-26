import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: ['Graphic Design', 'Content Writing', 'Creative Media', 'Digital Marketing', 'Photography', 'Video Production'],
    Company: ['About Us', 'Our Process', 'Careers', 'Blog', 'Contact'],
    Resources: ['Case Studies', 'Portfolio', 'Testimonials', 'FAQ', 'Privacy Policy'],
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold mb-4">
              <span className="text-white">Art of </span>
              <span className="text-green-500">Content</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              We're a creative agency that transforms ideas into compelling content that moves brands forward.
            </p>
            <div className="flex space-x-4">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse animation-delay-200"></div>
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse animation-delay-400"></div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-bold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-green-500 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {currentYear} Art of Content. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center space-x-2">
              <span>Made with</span>
              <Heart size={16} className="text-pink-500 fill-current" />
              <span>for creative brands</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

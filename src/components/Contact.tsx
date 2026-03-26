import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@artofcontent.com',
      link: 'mailto:hello@artofcontent.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'New York, NY',
      link: '#',
    },
  ];

  const socialLinks = [
    { icon: Instagram, link: '#', name: 'Instagram' },
    { icon: Twitter, link: '#', name: 'Twitter' },
    { icon: Linkedin, link: '#', name: 'LinkedIn' },
    { icon: Facebook, link: '#', name: 'Facebook' },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-6">
            Let's Talk
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Get in touch with us and let's discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="flex items-start space-x-4 p-6 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                  <info.icon className="text-green-600 group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">{info.title}</div>
                  <div className="text-lg font-semibold text-gray-900">{info.value}</div>
                </div>
              </a>
            ))}

            <div className="p-6 bg-white rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-100 outline-none transition-all duration-300"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-100 outline-none transition-all duration-300"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-100 outline-none transition-all duration-300"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-100 outline-none transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all duration-300 hover:shadow-xl flex items-center justify-center space-x-2 font-medium text-lg group"
              >
                <span>Send Message</span>
                <Send className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

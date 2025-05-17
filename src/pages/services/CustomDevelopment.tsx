
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Code, Link as LinkIcon, Building, Lock, Gauge, LayoutDashboard } from 'lucide-react';

const CustomDevelopment: React.FC = () => {
  const services = [
    {
      name: 'Tailored Software Solutions',
      description:
        'Develop custom software designed specifically to meet your unique business requirements.',
      icon: Code
    },
    {
      name: 'API Integration',
      description:
        'Seamlessly connect your software with third-party services and platforms.',
      icon: LinkIcon
    },
    {
      name: 'Enterprise Applications',
      description:
        'Build scalable enterprise-grade applications to support your business operations.',
      icon: Building
    },
    {
      name: 'User Authentication Systems',
      description:
        'Ensure secure access to your applications with robust user authentication mechanisms.',
      icon: Lock
    },
    {
      name: 'Performance Optimization',
      description:
        'Enhance the speed and responsiveness of your existing applications.',
      icon: Gauge
    },
    {
      name: 'Admin Dashboards',
      description:
        'Create intuitive and feature-rich dashboards for better management and monitoring.',
      icon: LayoutDashboard
    },
  ];

  const benefits = [
    'Solutions tailored to your specific needs.',
    'Improved operational efficiency.',
    'Scalable and future-ready applications.',
    'Seamless integration with existing systems.',
    'Enhanced security and compliance.',
    'Expert team for continuous support and maintenance.',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3D52A0] to-[#7091E6] text-white py-20 relative">
        <div className="absolute inset-0 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Custom Development</h1>
          <p className="text-lg md:text-xl text-[#ADBBDA] max-w-2xl mx-auto mb-8">
            Bring your ideas to life with fully tailored software solutions designed for your business needs.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#EDE8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center text-[#3D52A0]">Our Custom Development Services</h2>
          <p className="text-[#8697C4] text-center mb-12 max-w-2xl mx-auto">
            Powerful, scalable software solutions designed and built specifically for your unique business challenges.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition flex flex-col h-full"
              >
                <service.icon className="w-12 h-12 text-[#7091E6] mb-6" />
                <h3 className="text-xl font-bold mb-4 text-[#3D52A0]">{service.name}</h3>
                <p className="text-gray-700 mb-6 flex-grow">{service.description}</p>
                <a href="#" className="text-[#3D52A0] font-medium flex items-center hover:text-[#7091E6] transition">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#3D52A0]">
              Why Choose NexoraWave for Custom Development?
            </h2>
            <div className="mb-12">
              <p className="text-[#8697C4] text-center max-w-2xl mx-auto">
                Partner with our expert development team to transform your vision into a powerful, scalable, and secure software solution.
              </p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start bg-[#EDE8F5] p-4 rounded-lg">
                  <Check className="w-6 h-6 text-[#7091E6] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12 text-center">
              <Link to="/contact" className="bg-[#3D52A0] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#7091E6] transition-all duration-300 w-full sm:w-auto text-center">
                Start Your Development Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomDevelopment;

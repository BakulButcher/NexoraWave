import React from 'react';
import { Check } from 'lucide-react';

const DigitalTransformation: React.FC = () => {
  const services = [
    {
      name: 'Process Automation',
      description:
        'Streamline your business operations with cutting-edge automation tools and technologies.',
    },
    {
      name: 'Legacy System Modernization',
      description:
        'Upgrade outdated systems to modern platforms for enhanced efficiency and scalability.',
    },
    {
      name: 'Data Analytics & AI Integration',
      description:
        'Leverage data-driven insights and AI to make informed business decisions and gain a competitive edge.',
    },
    {
      name: 'Cloud Migration & Optimization',
      description:
        'Transform your IT infrastructure by moving to the cloud, ensuring cost-efficiency and reliability.',
    },
    {
      name: 'Customer Experience Enhancement',
      description:
        'Utilize digital tools to improve customer engagement and satisfaction at every touchpoint.',
    },
  ];

  const benefits = [
    'Enhanced operational efficiency.',
    'Improved scalability and flexibility.',
    'Cost optimization through modern tools and platforms.',
    'Data-driven decision-making with actionable insights.',
    'Competitive advantage through innovation.',
    'Seamless integration of new technologies.',
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Digital Transformation Consulting</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Empower your business to thrive in the digital age with innovative transformation solutions.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-600">{service.name}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose NexoraWave for Digital Transformation?
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformation;

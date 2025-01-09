import React from 'react';
import { Check } from 'lucide-react';

const CloudSolutions: React.FC = () => {
  const solutions = [
    {
      name: 'Cloud Migration',
      description:
        'Seamlessly migrate your business applications and infrastructure to the cloud with minimal downtime and maximum security.',
    },
    {
      name: 'Infrastructure as a Service (IaaS)',
      description:
        'Scalable and reliable virtualized computing resources to meet your business needs.',
    },
    {
      name: 'Application Hosting',
      description:
        'Host and optimize your business applications for performance, security, and scalability.',
    },
    {
      name: 'Backup and Disaster Recovery',
      description:
        'Ensure business continuity with secure backup solutions and disaster recovery strategies.',
    },
    {
      name: 'Hybrid Cloud Solutions',
      description:
        'Combine the best of public and private cloud technologies for a hybrid approach tailored to your business.',
    },
  ];

  const benefits = [
    'Scalable resources to match business growth.',
    'Cost-efficient cloud infrastructure.',
    'High availability and reliability.',
    'Enhanced security and compliance.',
    'Seamless collaboration and remote access.',
    'Customizable cloud environments for unique needs.',
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cloud Solutions</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Leverage the power of the cloud to enhance your business efficiency, scalability, and security.
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Cloud Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-600">{solution.name}</h3>
                <p className="text-gray-700">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Cloud Solutions?</h2>
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

export default CloudSolutions;

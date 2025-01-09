import React from 'react';
import { Check } from 'lucide-react';

const TechnologyConsulting: React.FC = () => {
  const consultingServices = [
    {
      name: 'Digital Transformation Strategies',
      description:
        'Develop actionable roadmaps to transition your business into the digital age with cutting-edge technologies.',
    },
    {
      name: 'System Architecture Planning',
      description:
        'Design robust and scalable system architectures tailored to your business operations.',
    },
    {
      name: 'Technology Stack Selection',
      description:
        'Choose the most effective tools, frameworks, and technologies for your projects.',
    },
    {
      name: 'IT Cost Optimization',
      description:
        'Streamline your IT expenditures and maximize the return on your technology investments.',
    },
    {
      name: 'Process Automation',
      description:
        'Enhance operational efficiency with tailored automation solutions.',
    },
  ];

  const benefits = [
    'Expert guidance from seasoned professionals.',
    'Customized solutions tailored to your business needs.',
    'Enhanced operational efficiency and productivity.',
    'Improved scalability and long-term growth.',
    'Risk mitigation and improved security.',
    'Optimized IT costs for better ROI.',
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Technology Consulting</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Empower your business with expert technology consulting to drive growth and efficiency.
          </p>
        </div>
      </section>

      {/* Consulting Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Consulting Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
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
            Why Choose NexoraWave for Technology Consulting?
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

export default TechnologyConsulting;

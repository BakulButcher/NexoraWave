import React from 'react';
import { Check } from 'lucide-react';

const DesignServices: React.FC = () => {
  const services = [
    {
      name: 'UI/UX Design',
      description:
        'Create intuitive and user-friendly interfaces to enhance user engagement and satisfaction.',
    },
    {
      name: 'Logo Design',
      description:
        'Craft professional and memorable logos that reflect your brand identity.',
    },
    {
      name: 'Brand Identity Creation',
      description:
        'Develop a consistent and recognizable brand image through visuals, typography, and color schemes.',
    },
    {
      name: 'Prototyping & Wireframing',
      description:
        'Visualize and test ideas with detailed prototypes and wireframes before full development.',
    },
    {
      name: 'Graphic Design',
      description:
        'Create impactful graphics for marketing materials, social media, and more.',
    },
  ];

  const benefits = [
    'Custom designs tailored to your brand.',
    'Improved user experience and engagement.',
    'Professional and consistent brand identity.',
    'Enhanced visual appeal for better marketing results.',
    'Expert designers with a focus on creativity and innovation.',
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Design Services</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Elevate your brand and user experience with our creative design solutions.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Design Services</h2>
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
            Why Choose NexoraWave for Design Services?
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

export default DesignServices;

import React from 'react';
import { Code, Smartphone, Database, Check, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description:
        'Custom websites and web applications built with modern technologies.',
      features: [
        'Responsive Web Design',
        'Progressive Web Apps (PWA)',
        'E-commerce Solutions',
        'Custom Web Applications',
      ],
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description:
        'Native and cross-platform mobile applications for iOS and Android.',
      features: [
        'iOS & Android Apps',
        'Cross-platform Development',
        'App Store Optimization',
        'Maintenance & Support',
      ],
    },
    {
      icon: Database,
      title: 'Custom Software',
      description:
        'Tailored software solutions to meet your specific business needs.',
      features: [
        'Business Process Automation',
        'Enterprise Software',
        'API Development',
        'Legacy System Integration',
      ],
    },
    {
      icon: PenTool,
      title: 'Logo Designing',
      description:
        'Professional logo design services to create a unique brand identity for you.',
      features: [
        'Custom Logo Design',
        'Brand Identity Creation',
        'Typography and Iconography',
        'Multiple Revisions',
      ],
    },
  ];

  return (
    <div className="py-20">
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Development Services
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Expert software development solutions to power your business
          </p>
        </div>
      </section>

      <section
        className="mx-auto px-4 sm:px-6 lg:px-8 py-20"
        style={{ maxWidth: '85rem' }}
      >
        <div
          id="service-cards"
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <service.icon className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Development Process
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {[
              {
                step: 'Step 1',
                title: 'Discovery',
                description: 'Understanding your requirements and objectives.',
                icon: '🔍', // Example icon, you can replace it with an actual icon
              },
              {
                step: 'Step 2',
                title: 'Planning',
                description:
                  'Detailed project planning and architecture design.',
                icon: '📋',
              },
              {
                step: 'Step 3',
                title: 'Development',
                description: 'Agile development with regular updates.',
                icon: '💻',
              },
              {
                step: 'Step 4',
                title: 'Delivery',
                description: 'Testing, deployment, and ongoing support.',
                icon: '🚚',
              },
            ].map((phase, index) => (
              <div
                key={index}
                className="text-center bg-white p-6 rounded-lg shadow-lg w-full md:w-1/4"
              >
                <div className="text-4xl font-bold text-blue-600 mb-4">
                  {phase.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

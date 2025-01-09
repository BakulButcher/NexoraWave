import React, { useState } from 'react';
import { Code, Smartphone, Database, Check, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const allServices = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
    },
    // {
    //   icon: Smartphone,
    //   title: 'App Development (Coming Soon)',
    //   description: 'Native and cross-platform mobile applications for iOS and Android.',
    // },
    {
      icon: Database,
      title: 'Custom Software',
      description: 'Tailored software solutions to meet your specific business needs.',
    },
    {
      icon: PenTool,
      title: 'Logo Designing',
      description: 'Professional logo design services to create a unique brand identity for you.',
    },
    {
      icon: Code,
      title: 'ERP & CRM Systems',
      description: 'Streamline business operations with customized ERP & CRM solutions.',
    },
    {
      icon: Code,
      title: 'Cloud Solutions',
      description: 'Leverage the power of cloud computing for scalability and efficiency.',
    },
    {
      icon: Code,
      title: 'Technology Consulting',
      description: 'Expert advice to drive digital transformation and innovation.',
    },
    {
      icon: Code,
      title: 'Digital Transformation',
      description: 'Empowering businesses to succeed in the digital age.',
    },
    {
      icon: Code,
      title: 'SEO & Digital Marketing',
      description: 'Boost your online presence with SEO and marketing strategies.',
    },
    {
      icon: Code,
      title: 'E-Commerce Solutions',
      description: 'Comprehensive solutions for your online store and business.',
    },
  ];

  const [visibleServices, setVisibleServices] = useState(6);

  const showMoreServices = () => {
    setVisibleServices(visibleServices + 6);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Expert software development solutions to power your business.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="mx-auto px-4 sm:px-6 lg:px-8 py-20" style={{ maxWidth: '85rem' }}>
        <div id="service-cards" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.slice(0, visibleServices).map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center">
                <service.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
                <Link
                  to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                >
                  Know More
                </Link>
              </div>
            </div>
          ))}
        </div>
        {visibleServices < allServices.length && (
          <div className="text-center mt-8">
            <button
              onClick={showMoreServices}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Show More
            </button>
          </div>
        )}
      </section>

      {/* Development Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Development Process</h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {[
              {
                step: 'Step 1',
                title: 'Discovery',
                description: 'Understanding your requirements and objectives.',
                icon: '🔍', // Example icon
              },
              {
                step: 'Step 2',
                title: 'Planning',
                description: 'Detailed project planning and architecture design.',
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
                <div className="text-4xl font-bold text-blue-600 mb-4">{phase.icon}</div>
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

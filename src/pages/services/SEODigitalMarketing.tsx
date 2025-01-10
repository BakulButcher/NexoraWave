import React from 'react';
import { Check } from 'lucide-react';

const SEODigitalMarketing: React.FC = () => {
  const services = [
    {
      name: 'On-Page SEO',
      description:
        'Optimize your website content, meta tags, and structure for better search engine rankings.',
    },
    {
      name: 'Off-Page SEO',
      description:
        'Build high-quality backlinks and improve your website’s authority and visibility.',
    },
    {
      name: 'Content Marketing',
      description:
        'Create and distribute engaging content to attract and retain your target audience.',
    },
    {
      name: 'Social Media Marketing',
      description:
        'Promote your brand and engage with your audience on platforms like Facebook, Instagram, and LinkedIn.',
    },
    {
      name: 'Pay-Per-Click (PPC) Advertising',
      description:
        'Run targeted ad campaigns to drive immediate traffic and generate leads.',
    },
    {
      name: 'Analytics & Reporting',
      description:
        'Track your website’s performance and optimize your strategies with data-driven insights.',
    },
  ];

  const benefits = [
    'Increased online visibility and traffic.',
    'Higher rankings on search engines like Google.',
    'Improved lead generation and conversions.',
    'Enhanced brand reputation and awareness.',
    'Cost-effective marketing strategies.',
    'Data-driven decision-making for continuous improvement.',
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 relative"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(37, 99, 235, 0.9), rgba(147, 51, 234, 0.9)),
        url('https://images.unsplash.com/photo-1519337265831-281ec6cc8514?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')
      `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='white' stroke-width='2'%3E%3Cpath d='M34 36 Q 36 34, 38 35 Q 40 36, 42 34'/%3E%3Cpath d='M34 6 Q 36 4, 38 5 Q 40 6, 42 4'/%3E%3Cpath d='M4 36 Q 6 34, 8 35 Q 10 36, 12 34'/%3E%3Cpath d='M4 6 Q 6 4, 8 5 Q 10 6, 12 4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            SEO & Digital Marketing
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Boost your online presence and drive results with our strategic marketing services.
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
            Why Choose NexoraWave for Digital Marketing?
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

export default SEODigitalMarketing;

import React from 'react';
import { Check } from 'lucide-react';

const WebDevelopment: React.FC = () => {
  const packages = [
    {
      name: 'Basic Package',
      priceRange: '₹5,000 - ₹15,000',
      features: [
        'Up to 5 static pages',
        'Responsive (mobile-friendly) design',
        'Basic HTML and SEO-ready (meta tags, titles, descriptions)',
        'Custom layout design',
        'Contact form (email-enabled)',
        'Social media links and buttons',
        'Testimonial management',
        'Newsletter setup',
        'Free hosting for 1 month',
        '1-month free support',
        'Website training (up to 2 hours)',
      ],
      additional: '₹300 per extra page',
    },
    {
      name: 'Standard Package',
      priceRange: '₹15,000 - ₹25,000',
      features: [
        'Up to 12 pages',
        'Dynamic website with CMS',
        'Blog/News section',
        'Google Maps integration',
        'XML sitemap and URL submission to search engines',
        '3-hour website training',
        '3 months of free support',
      ],
      additional: '₹500 per extra page',
    },
    {
      name: 'Custom Package',
      priceRange: 'Varies by requirements',
      features: [
        'Tailored website according to client requirements',
        'Responsive and dynamic design',
        'E-commerce solutions',
        'API integrations',
        'User authentication',
        'Admin panel and dashboards',
        'Advanced SEO optimization',
        'Third-party service integrations',
        'Performance and security optimization',
        '6 months of free support',
      ],
    },
  ];

  const addons = [
    'Maintenance and support',
    'Custom/business email setup',
    'Advanced SEO services',
    'Performance optimization',
    'Security and backup',
    'Additional changes',
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Web Development</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Build stunning, responsive, and high-performance websites tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-600">{pkg.name}</h3>
                <p className="text-gray-700 font-medium mb-4">{pkg.priceRange}</p>
                <ul className="space-y-3 mb-4">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {pkg.additional && (
                  <p className="text-sm text-gray-500">
                    <strong>Additional Cost:</strong> {pkg.additional}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Add-On Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addons.map((addon, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-md transition"
              >
                <p className="text-gray-700 font-medium">{addon}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;

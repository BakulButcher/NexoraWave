import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      mostPopular: false,
    },
    {
      name: 'Standard Package',
      priceRange: '₹15,000 - ₹25,000',
      features: [
        'Up to 12 pages',
        'Dynamic website with CMS',
        'Responsive (mobile-friendly) design',
        'Basic HTML and SEO-ready (meta tags, titles, descriptions)',
        'Custom layout design',
        'Contact form (email-enabled)',
        'Social media links and buttons',
        'Testimonial management',
        'Newsletter setup',
        'Free hosting for 1 month',
        'Google Maps integration',
        'XML sitemap and URL submission to search engines',
        '3-hour website training',
        '3 months of free support',
      ],
      additional: '₹500 per extra page',
      mostPopular: true,
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
      mostPopular: false,
    },
  ];

  const addons = [
    {
      name: 'Maintenance and Support',
      description: 'Keep your website up-to-date and running smoothly',
    },
    {
      name: 'Custom/Business Email Setup',
      description: 'Professional email addresses with your domain name',
    },
    {
      name: 'Advanced SEO Services',
      description: 'Boost your search rankings and online visibility',
    },
    {
      name: 'Performance Optimization',
      description: 'Faster loading times and better user experience',
    },
    {
      name: 'Security and Backup',
      description: 'Protect your website from threats and data loss',
    },
    {
      name: 'Additional Changes',
      description: 'Custom modifications and feature additions',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3D52A0] to-[#7091E6] text-white py-20 relative">
        <div className="absolute inset-0 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Web Development Services</h1>
          <p className="text-lg md:text-xl text-[#ADBBDA] max-w-2xl mx-auto mb-8">
            Build stunning, responsive, and high-performance websites tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-[#EDE8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center text-[#3D52A0]">Compare Our Packages</h2>
          <p className="text-[#8697C4] text-center mb-12 max-w-2xl mx-auto">
            Choose the perfect package that meets your requirements and budget. All packages include responsive design and SEO optimization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition relative ${pkg.mostPopular ? 'border-2 border-[#7091E6] transform md:-translate-y-2' : ''
                  }`}
              >
                {pkg.mostPopular && (
                  <div className="absolute top-0 inset-x-0 -mt-4 flex justify-center">
                    <span className="bg-[#7091E6] text-white text-sm font-bold rounded-full px-4 py-1">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold mb-4 text-[#3D52A0]">{pkg.name}</h3>
                <p className="text-[#8697C4] font-medium mb-6 text-lg">{pkg.priceRange}</p>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-[#7091E6] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                {pkg.additional && (
                  <p className="text-sm text-[#8697C4] mb-6">
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
          <h2 className="text-3xl font-bold mb-4 text-center text-[#3D52A0]">Add-On Services</h2>
          <p className="text-[#8697C4] text-center mb-12 max-w-2xl mx-auto">
            Enhance your website with these additional services to maximize its effectiveness and reach.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addons.map((addon, index) => (
              <div
                key={index}
                className="bg-[#EDE8F5] rounded-lg p-6 shadow hover:shadow-md transition border border-[#ADBBDA]"
              >
                <h3 className="text-lg font-medium mb-2 text-[#3D52A0]">{addon.name}</h3>
                <p className="text-[#8697C4]">{addon.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact" className="bg-[#3D52A0] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#7091E6] transition-all duration-300 w-full sm:w-auto text-center">
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;

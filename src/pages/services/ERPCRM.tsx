import React from 'react';
import { Check } from 'lucide-react';

const ERPCRM: React.FC = () => {
  const packages = [
    {
      name: 'Basic Package',
      priceRange: '₹25,000 - ₹50,000',
      features: [
        'Small-scale ERP or CRM system',
        'Essential modules (e.g., Sales, Inventory, Reporting)',
        'Custom dashboards for basic analytics',
        'User-friendly interface',
        'Role-based access controls',
        'Basic reporting tools',
      ],
    },
    {
      name: 'Standard Package',
      priceRange: '₹50,000 - ₹1,00,000',
      features: [
        'Mid-scale ERP or CRM system',
        'Advanced features (e.g., Multi-user access, Customer portals)',
        'Process automation for repetitive tasks',
        'Customizable dashboards',
        'Integration with third-party tools',
        'Advanced reporting and analytics',
      ],
    },
    {
      name: 'Custom Package',
      priceRange: 'Varies by requirements',
      features: [
        'Fully tailored enterprise-grade systems',
        'Advanced process automation',
        'Scalable architecture for large businesses',
        'Data migration from legacy systems',
        'API integrations for external services',
        'Comprehensive analytics and reporting',
      ],
    },
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ERP & CRM Systems</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Streamline your business operations with customized ERP & CRM solutions.
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Our ERP & CRM Solutions?</h2>
          <p className="text-gray-700 mb-8">
            Our ERP and CRM systems are designed to streamline operations, enhance productivity,
            and drive business growth. Tailored to meet the unique needs of your business,
            our solutions offer scalability, efficiency, and reliability.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              'Customizable modules to fit your needs',
              'Seamless integration with existing systems',
              'Enhanced collaboration across departments',
              'Data-driven decision-making with analytics',
              'Increased productivity through automation',
              'Scalable solutions for growing businesses',
            ].map((benefit, index) => (
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

export default ERPCRM;

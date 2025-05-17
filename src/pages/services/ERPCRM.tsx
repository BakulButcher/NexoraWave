import React from 'react';
import { Check, ArrowRight, Package, CreditCard, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      icon: Package
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
      icon: CreditCard
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
      icon: Settings
    },
  ];

  const benefits = [
    'Customizable modules to fit your needs',
    'Seamless integration with existing systems',
    'Enhanced collaboration across departments',
    'Data-driven decision-making with analytics',
    'Increased productivity through automation',
    'Scalable solutions for growing businesses',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3D52A0] to-[#7091E6] text-white py-20 relative">
        <div className="absolute inset-0 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">ERP & CRM Systems</h1>
          <p className="text-lg md:text-xl text-[#ADBBDA] max-w-2xl mx-auto mb-8">
            Streamline your business operations with customized ERP & CRM solutions.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-[#EDE8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center text-[#3D52A0]">Our Packages</h2>
          <p className="text-[#8697C4] text-center mb-12 max-w-2xl mx-auto">
            Choose from our range of flexible packages or let us build a custom solution tailored to your unique business requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition flex flex-col h-full"
              >
                <pkg.icon className="w-12 h-12 text-[#7091E6] mb-6" />
                <h3 className="text-xl font-bold mb-4 text-[#3D52A0]">{pkg.name}</h3>
                <p className="text-[#8697C4] font-medium mb-6">{pkg.priceRange}</p>
                <ul className="space-y-3 mb-6 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-[#7091E6] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" className="text-[#3D52A0] font-medium flex items-center hover:text-[#7091E6] transition">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#3D52A0]">
              Why Choose Our ERP & CRM Solutions?
            </h2>
            <div className="mb-12">
              <p className="text-[#8697C4] text-center max-w-2xl mx-auto">
                Our ERP and CRM systems are designed to streamline operations, enhance productivity,
                and drive business growth. Tailored to meet the unique needs of your business,
                our solutions offer scalability, efficiency, and reliability.
              </p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start bg-[#EDE8F5] p-4 rounded-lg">
                  <Check className="w-6 h-6 text-[#7091E6] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12 text-center">
              <Link to="/contact" className="bg-[#3D52A0] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#7091E6] transition-all duration-300 w-full sm:w-auto text-center">
                Request Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ERPCRM;

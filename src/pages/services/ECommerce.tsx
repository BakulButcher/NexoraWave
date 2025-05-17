import React from 'react';
import { Check, ArrowRight, ShoppingCart, CreditCard, Package, Database, Truck, Search } from 'lucide-react';

const ECommerce: React.FC = () => {
  const features = [
    {
      name: 'Custom Storefront Design',
      description:
        'Create unique, user-friendly storefronts that reflect your brand identity and engage your customers.',
      icon: ShoppingCart
    },
    {
      name: 'Shopping Cart Integration',
      description:
        'Implement secure and seamless shopping cart functionalities for a smooth customer experience.',
      icon: CreditCard
    },
    {
      name: 'Payment Gateway Setup',
      description:
        'Integrate multiple payment methods to offer flexibility and convenience to your customers.',
      icon: Package
    },
    {
      name: 'Inventory Management',
      description:
        'Simplify your operations with advanced inventory tracking and management tools.',
      icon: Database
    },
    {
      name: 'Order Management',
      description:
        'Automate order processing and tracking for enhanced efficiency.',
      icon: Truck
    },
    {
      name: 'SEO Optimization for E-Commerce',
      description:
        'Ensure your store ranks high in search results with tailored SEO strategies.',
      icon: Search
    },
  ];

  const benefits = [
    'Boosted online sales with optimized solutions.',
    'Enhanced customer engagement and satisfaction.',
    'Secure and scalable e-commerce platforms.',
    'Streamlined inventory and order management.',
    'Tailored solutions for unique business needs.',
    'Mobile-friendly and responsive designs.',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3D52A0] to-[#7091E6] text-white py-20 relative">
        <div className="absolute inset-0 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">E-Commerce Solutions</h1>
          <p className="text-lg md:text-xl text-[#ADBBDA] max-w-2xl mx-auto mb-8">
            Empower your business with tailored e-commerce solutions to thrive in the digital marketplace.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#EDE8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center text-[#3D52A0]">Our E-Commerce Features</h2>
          <p className="text-[#8697C4] text-center mb-12 max-w-2xl mx-auto">
            Comprehensive solutions to power your online store and deliver exceptional shopping experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition flex flex-col h-full"
              >
                {feature.icon && <feature.icon className="w-12 h-12 text-[#7091E6] mb-6" />}
                <h3 className="text-xl font-bold mb-4 text-[#3D52A0]">{feature.name}</h3>
                <p className="text-gray-700 mb-6 flex-grow">{feature.description}</p>
                <a href="#" className="text-[#3D52A0] font-medium flex items-center hover:text-[#7091E6] transition">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#3D52A0]">
              Why Choose NexoraWave for E-Commerce Solutions?
            </h2>
            <div className="mb-12">
              <p className="text-[#8697C4] text-center max-w-2xl mx-auto">
                With our proven track record and industry expertise, we deliver e-commerce solutions that give your business a competitive edge in the digital marketplace.
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
              <button className="bg-[#3D52A0] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#7091E6] transition shadow">
                Discuss Your E-Commerce Project
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ECommerce;

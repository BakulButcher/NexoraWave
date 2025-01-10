import React from 'react';
import { Check } from 'lucide-react';

const ECommerce: React.FC = () => {
  const features = [
    {
      name: 'Custom Storefront Design',
      description:
        'Create unique, user-friendly storefronts that reflect your brand identity and engage your customers.',
    },
    {
      name: 'Shopping Cart Integration',
      description:
        'Implement secure and seamless shopping cart functionalities for a smooth customer experience.',
    },
    {
      name: 'Payment Gateway Setup',
      description:
        'Integrate multiple payment methods to offer flexibility and convenience to your customers.',
    },
    {
      name: 'Inventory Management',
      description:
        'Simplify your operations with advanced inventory tracking and management tools.',
    },
    {
      name: 'Order Management',
      description:
        'Automate order processing and tracking for enhanced efficiency.',
    },
    {
      name: 'SEO Optimization for E-Commerce',
      description:
        'Ensure your store ranks high in search results with tailored SEO strategies.',
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
    <div className="py-20">
      {/* Hero Section */}
      <section
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 relative"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(37, 99, 235, 0.9), rgba(147, 51, 234, 0.9)),
        url('https://images.unsplash.com/photo-1565120130290-637f243db1da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80')
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
            E-Commerce Solutions
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Empower your business with tailored e-commerce solutions to thrive in the digital marketplace.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-600">{feature.name}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose NexoraWave for E-Commerce Solutions?
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

export default ECommerce;

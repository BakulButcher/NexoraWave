import React from 'react';
import { Check, ArrowRight, Megaphone, FileText, Share2, CreditCard, BarChart3 } from 'lucide-react';

const SEODigitalMarketing: React.FC = () => {
  const services = [
    {
      name: 'On-Page SEO',
      description:
        'Optimize your website content, meta tags, and structure for better search engine rankings.',
      icon: FileText
    },
    {
      name: 'Off-Page SEO',
      description:
        "Build high-quality backlinks and improve your website's authority and visibility.",
      icon: Share2
    },
    {
      name: 'Content Marketing',
      description:
        'Create and distribute engaging content to attract and retain your target audience.',
      icon: FileText
    },
    {
      name: 'Social Media Marketing',
      description:
        'Promote your brand and engage with your audience on platforms like Facebook, Instagram, and LinkedIn.',
      icon: Megaphone
    },
    {
      name: 'Pay-Per-Click (PPC) Advertising',
      description:
        'Run targeted ad campaigns to drive immediate traffic and generate leads.',
      icon: CreditCard
    },
    {
      name: 'Analytics & Reporting',
      description:
        "Track your website's performance and optimize your strategies with data-driven insights.",
      icon: BarChart3
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
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3D52A0] to-[#7091E6] text-white py-20 relative">
        <div className="absolute inset-0 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">SEO & Digital Marketing</h1>
          <p className="text-lg md:text-xl text-[#ADBBDA] max-w-2xl mx-auto mb-8">
            Boost your online presence and drive results with our strategic marketing services.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#EDE8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center text-[#3D52A0]">Our Marketing Services</h2>
          <p className="text-[#8697C4] text-center mb-12 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions to help your business attract, engage, and convert more customers online.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition flex flex-col h-full"
              >
                <service.icon className="w-12 h-12 text-[#7091E6] mb-6" />
                <h3 className="text-xl font-bold mb-4 text-[#3D52A0]">{service.name}</h3>
                <p className="text-gray-700 mb-6 flex-grow">{service.description}</p>
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
              Why Choose NexoraWave for Digital Marketing?
            </h2>
            <div className="mb-12">
              <p className="text-[#8697C4] text-center max-w-2xl mx-auto">
                Partner with us to elevate your online presence and achieve measurable results through data-driven marketing strategies tailored to your business goals.
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
                Boost Your Online Presence Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEODigitalMarketing;

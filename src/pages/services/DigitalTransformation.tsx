import React from 'react';
import { Check, ArrowRight, Zap, RefreshCw, Database, Cloud, Users } from 'lucide-react';

const DigitalTransformation: React.FC = () => {
  const services = [
    {
      name: 'Process Automation',
      description:
        'Streamline your business operations with cutting-edge automation tools and technologies.',
      icon: Zap
    },
    {
      name: 'Legacy System Modernization',
      description:
        'Upgrade outdated systems to modern platforms for enhanced efficiency and scalability.',
      icon: RefreshCw
    },
    {
      name: 'Data Analytics & AI Integration',
      description:
        'Leverage data-driven insights and AI to make informed business decisions and gain a competitive edge.',
      icon: Database
    },
    {
      name: 'Cloud Migration & Optimization',
      description:
        'Transform your IT infrastructure by moving to the cloud, ensuring cost-efficiency and reliability.',
      icon: Cloud
    },
    {
      name: 'Customer Experience Enhancement',
      description:
        'Utilize digital tools to improve customer engagement and satisfaction at every touchpoint.',
      icon: Users
    },
  ];

  const benefits = [
    'Enhanced operational efficiency.',
    'Improved scalability and flexibility.',
    'Cost optimization through modern tools and platforms.',
    'Data-driven decision-making with actionable insights.',
    'Competitive advantage through innovation.',
    'Seamless integration of new technologies.',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3D52A0] to-[#7091E6] text-white py-20 relative">
        <div className="absolute inset-0 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Transformation Consulting</h1>
          <p className="text-lg md:text-xl text-[#ADBBDA] max-w-2xl mx-auto mb-8">
            Empower your business to thrive in the digital age with innovative transformation solutions.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#EDE8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center text-[#3D52A0]">Our Digital Transformation Services</h2>
          <p className="text-[#8697C4] text-center mb-12 max-w-2xl mx-auto">
            Strategic solutions to help your organization navigate the complexities of digital evolution and emerge stronger.
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
              Why Choose NexoraWave for Digital Transformation?
            </h2>
            <div className="mb-12">
              <p className="text-[#8697C4] text-center max-w-2xl mx-auto">
                Partner with us to navigate your digital journey with confidence, leveraging our expertise to transform challenges into opportunities.
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
                Start Your Digital Transformation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformation;
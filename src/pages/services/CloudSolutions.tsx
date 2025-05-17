import React from 'react';
import { Check, ArrowRight, Cloud, Server, Globe, ShieldCheck, Network } from 'lucide-react';

const CloudSolutions: React.FC = () => {
  const solutions = [
    {
      name: 'Cloud Migration',
      description:
        'Seamlessly migrate your business applications and infrastructure to the cloud with minimal downtime and maximum security.',
      icon: Cloud
    },
    {
      name: 'Infrastructure as a Service (IaaS)',
      description:
        'Scalable and reliable virtualized computing resources to meet your business needs.',
      icon: Server
    },
    {
      name: 'Application Hosting',
      description:
        'Host and optimize your business applications for performance, security, and scalability.',
      icon: Globe
    },
    {
      name: 'Backup and Disaster Recovery',
      description:
        'Ensure business continuity with secure backup solutions and disaster recovery strategies.',
      icon: ShieldCheck
    },
    {
      name: 'Hybrid Cloud Solutions',
      description:
        'Combine the best of public and private cloud technologies for a hybrid approach tailored to your business.',
      icon: Network
    },
  ];

  const benefits = [
    'Scalable resources to match business growth.',
    'Cost-efficient cloud infrastructure.',
    'High availability and reliability.',
    'Enhanced security and compliance.',
    'Seamless collaboration and remote access.',
    'Customizable cloud environments for unique needs.',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3D52A0] to-[#7091E6] text-white py-20 relative">
        <div className="absolute inset-0 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cloud Solutions</h1>
          <p className="text-lg md:text-xl text-[#ADBBDA] max-w-2xl mx-auto mb-8">
            Leverage the power of the cloud to enhance your business efficiency, scalability, and security.
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-[#EDE8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center text-[#3D52A0]">Our Cloud Solutions</h2>
          <p className="text-[#8697C4] text-center mb-12 max-w-2xl mx-auto">
            Modern cloud services designed to optimize your IT infrastructure, reduce costs, and enhance business agility.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition flex flex-col h-full"
              >
                <solution.icon className="w-12 h-12 text-[#7091E6] mb-6" />
                <h3 className="text-xl font-bold mb-4 text-[#3D52A0]">{solution.name}</h3>
                <p className="text-gray-700 mb-6 flex-grow">{solution.description}</p>
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
              Why Choose Our Cloud Solutions?
            </h2>
            <div className="mb-12">
              <p className="text-[#8697C4] text-center max-w-2xl mx-auto">
                Experience the flexibility, reliability, and security of our enterprise-grade cloud services tailored to your unique business requirements.
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
                Explore Cloud Solutions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudSolutions;

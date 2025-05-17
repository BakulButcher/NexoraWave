import React from 'react';
import { Check, ArrowRight, Settings, Server, Code, TrendingDown, Zap } from 'lucide-react';

const TechnologyConsulting: React.FC = () => {
  const consultingServices = [
    {
      name: 'Digital Transformation Strategies',
      description:
        'Develop actionable roadmaps to transition your business into the digital age with cutting-edge technologies.',
      icon: Settings
    },
    {
      name: 'System Architecture Planning',
      description:
        'Design robust and scalable system architectures tailored to your business operations.',
      icon: Server
    },
    {
      name: 'Technology Stack Selection',
      description:
        'Choose the most effective tools, frameworks, and technologies for your projects.',
      icon: Code
    },
    {
      name: 'IT Cost Optimization',
      description:
        'Streamline your IT expenditures and maximize the return on your technology investments.',
      icon: TrendingDown
    },
    {
      name: 'Process Automation',
      description:
        'Enhance operational efficiency with tailored automation solutions.',
      icon: Zap
    },
  ];

  const benefits = [
    'Expert guidance from seasoned professionals.',
    'Customized solutions tailored to your business needs.',
    'Enhanced operational efficiency and productivity.',
    'Improved scalability and long-term growth.',
    'Risk mitigation and improved security.',
    'Optimized IT costs for better ROI.',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3D52A0] to-[#7091E6] text-white py-20 relative">
        <div className="absolute inset-0 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Technology Consulting</h1>
          <p className="text-lg md:text-xl text-[#ADBBDA] max-w-2xl mx-auto mb-8">
            Empower your business with expert technology consulting to drive growth and efficiency.
          </p>
        </div>
      </section>

      {/* Consulting Services Section */}
      <section className="py-16 bg-[#EDE8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center text-[#3D52A0]">Our Consulting Services</h2>
          <p className="text-[#8697C4] text-center mb-12 max-w-2xl mx-auto">
            Partner with our experts to navigate complex technological challenges and seize new opportunities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
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
              Why Choose NexoraWave for Technology Consulting?
            </h2>
            <div className="mb-12">
              <p className="text-[#8697C4] text-center max-w-2xl mx-auto">
                With our proven track record and industry expertise, we deliver technology solutions that give your business a competitive edge.
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
                Contact Our Consulting Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-[#EDE8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#3D52A0] to-[#7091E6] rounded-lg shadow-xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-[#ADBBDA] max-w-2xl mx-auto mb-8">
              Our expert consultants are ready to help you navigate the complex technology landscape and implement solutions that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-[#3D52A0] px-6 py-3 rounded-lg font-medium hover:bg-[#EDE8F5] transition">
                Schedule a Free Consultation
              </button>
              <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-[#3D52A0] transition">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default TechnologyConsulting;

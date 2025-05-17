import React from 'react';
import { Check, ArrowRight, Palette, Image, Layers, FileCode, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const DesignServices: React.FC = () => {
  const services = [
    {
      name: 'UI/UX Design',
      description:
        'Create intuitive and user-friendly interfaces to enhance user engagement and satisfaction.',
      icon: FileCode
    },
    {
      name: 'Logo Design',
      description:
        'Craft professional and memorable logos that reflect your brand identity.',
      icon: Image
    },
    {
      name: 'Brand Identity Creation',
      description:
        'Develop a consistent and recognizable brand image through visuals, typography, and color schemes.',
      icon: Palette
    },
    {
      name: 'Prototyping & Wireframing',
      description:
        'Visualize and test ideas with detailed prototypes and wireframes before full development.',
      icon: Layers
    },
    {
      name: 'Graphic Design',
      description:
        'Create impactful graphics for marketing materials, social media, and more.',
      icon: Lightbulb
    },
  ];

  const benefits = [
    'Custom designs tailored to your brand.',
    'Improved user experience and engagement.',
    'Professional and consistent brand identity.',
    'Enhanced visual appeal for better marketing results.',
    'Expert designers with a focus on creativity and innovation.',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3D52A0] to-[#7091E6] text-white py-20 relative">
        <div className="absolute inset-0 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Design Services</h1>
          <p className="text-lg md:text-xl text-[#ADBBDA] max-w-2xl mx-auto mb-8">
            Elevate your brand and user experience with our creative design solutions.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#EDE8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center text-[#3D52A0]">Our Design Services</h2>
          <p className="text-[#8697C4] text-center mb-12 max-w-2xl mx-auto">
            Innovative design solutions to help your brand stand out and create memorable experiences for your customers.
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
              Why Choose NexoraWave for Design Services?
            </h2>
            <div className="mb-12">
              <p className="text-[#8697C4] text-center max-w-2xl mx-auto">
                Partner with us to transform your visual identity with expert design services that elevate your brand and enhance user experiences.
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
                Start Your Design Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignServices;

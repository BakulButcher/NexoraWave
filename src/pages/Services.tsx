import React, { useState } from 'react';
import { Code, Smartphone, Database, Check, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const allServices = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
    },
    {
      icon: Database,
      title: 'Custom Development',
      description: 'Tailored software solutions to meet your specific business needs.',
    },
    {
      icon: PenTool,
      title: 'Design Services',
      description: 'Professional logo design services to create a unique brand identity for you.',
    },
    {
      icon: Code,
      title: 'Technology Consulting',
      description: 'Expert advice to drive digital transformation and innovation.',
    },
    {
      icon: Code,
      title: 'Digital Transformation',
      description: 'Empowering businesses to succeed in the digital age.',
    },
    {
      icon: Code,
      title: 'SEO & Digital Marketing',
      description: 'Boost your online presence with SEO and marketing strategies.',
    },
  ];

  const [visibleServices, setVisibleServices] = useState(3);

  const showMoreServices = () => {
    setVisibleServices(visibleServices + 6);
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="text-white py-20 relative"
        style={{
          backgroundImage: `
      linear-gradient(to right, rgba(61, 82, 160, 0.9), rgba(112, 145, 230, 0.9)),
      url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80')
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
            Services at NexoraWave
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl">
          Expert software development solutions to power your business.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="mx-auto px-4 sm:px-6 lg:px-8 py-20" style={{ maxWidth: '85rem' }}>
        <div id="service-cards" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.slice(0, visibleServices).map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center">
                <service.icon className="w-10 h-10 text-[#3D52A0] mb-4" />
                <h3 className="text-lg font-bold mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
                <Link
                  to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="mt-4 text-[#7091E6] hover:text-[#3D52A0] font-medium"
                >
                  Know More
                </Link>
              </div>
            </div>
          ))}
        </div>
        {visibleServices < allServices.length && (
          <div className="text-center mt-8">
            <button
              onClick={showMoreServices}
              className="px-6 py-2 bg-[#3D52A0] text-white rounded-lg hover:bg-[#7091E6] transition-colors"
            >
              Show More
            </button>
          </div>
        )}
      </section>

      {/* Development Process Section */}
      <section className="bg-[#EDE8F5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#3D52A0]">Website Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: 'Requirement Gathering',
                description: 'Understand goals, audience, and features',
                icon: '🔍',
              },
              {
                title: 'Planning',
                description: 'Define site structure, tech stack, and timeline',
                icon: '📋',
              },
              {
                title: 'Design',
                description: 'Create wireframes and user-friendly UI/UX',
                icon: '🎨',
              },
              {
                title: 'Frontend Development',
                description: 'Build responsive interface (HTML, CSS, JS)',
                icon: '💻',
              },
              {
                title: 'Backend Development',
                description: 'Set up server, database, and APIs',
                icon: '⚙️',
              },
              // {
              //   title: 'Content Integration',
              //   description: 'Add and optimize text, images, and media',
              //   icon: '📝',
              // },
              {
                title: 'Testing',
                description: 'Check functionality, performance, and compatibility',
                icon: '🔍',
              },
              {
                title: 'Deployment',
                description: 'Launch site with domain and hosting setup',
                icon: '🚀',
              },
              {
                title: 'Maintenance',
                description: 'Monitor, update, and secure the site regularly',
                icon: '🔧',
              },
            ].map((phase, index) => (
              <div
                key={index}
                className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl font-bold text-[#7091E6] mb-4">{phase.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-[#3D52A0]">{phase.title}</h3>
                <p className="text-[#8697C4]">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
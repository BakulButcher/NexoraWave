import React from 'react';
import {
  ArrowRight,
  Code,
  Smartphone,
  Database,
  Cpu,
  Paintbrush,
  ArrowDown,
  Star,
  Users,
  CheckCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description:
        'Custom websites and web applications built with modern technologies.',
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description:
        'Native and cross-platform mobile applications for iOS and Android.',
    },
    {
      icon: Database,
      title: 'Custom Software',
      description:
        'Tailored software solutions to meet your specific business needs.',
    },
    {
      icon: Paintbrush,
      title: 'UI/UX & Logo Design',
      description:
        'Beautiful designs that elevate user experience and brand identity.',
    },
  ];

  const stats = [
    { number: '2+', label: 'Projects Completed' },
    { number: '2+', label: 'Happy Clients' },
    { number: '3+', label: 'Expert Developers' },
    { number: '1+', label: 'Years Experience' },
  ];

  const testimonials = [
    {
      name: 'Riddhi Pattani',
      role: 'CEO, Rveechi',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      quote:
        'NexoraWave transformed our business with their exceptional web development services.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-dark-blue via-medium-blue to-blue-gray opacity-90" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518408232232-4f35b0540842?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjA4MHwwfDF8c2VhcmNofDEwfHxpY2vHoh%2C&id=g7d0')] bg-cover bg-center mix-blend-overlay" />
          <div className="absolute inset-0 opacity-30">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  backgroundColor: 'white',
                  borderRadius: '50%',
                }}
              />
            ))}
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in">
                Build Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-blue-gray to-very-light-lavender">
                  Digital Future
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-light-blue-gray animate-fade-in-delay">
                Expert software development services to transform your ideas
                into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
                <Link
                  to="/contact"
                  className="bg-white text-dark-blue px-8 py-4 rounded-lg font-medium hover:bg-light-blue-gray transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Start Your Project
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 text-center"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-medium-blue to-blue-gray rounded-full filter blur-3xl opacity-30 animate-pulse" />
              <div className="relative grid grid-cols-2 gap-4">
                {services.map(({ icon: Icon }, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl transform hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-dark-blue">Our Services</h2>
            <p className="text-xl text-blue-gray">
              Expert development solutions for your business
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {services.map(({ icon: Icon, title, description }, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <Icon className="w-12 h-12 text-dark-blue mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-dark-blue">{title}</h3>
                <p className="text-blue-gray mb-6">{description}</p>
                <Link
                  to="/services"
                  className="text-medium-blue font-medium flex items-center hover:text-dark-blue"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-dark-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-medium-blue transition-all duration-300"
            >
              See More Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-very-light-lavender">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-dark-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-gray">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-dark-blue">Client Testimonials</h2>
            <p className="text-xl text-blue-gray">
              What our clients say about us
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-very-light-lavender p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <div>
                    <div className="font-bold text-dark-blue">{testimonial.name}</div>
                    <div className="text-blue-gray">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-blue-gray italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-dark-blue to-medium-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-light-blue-gray mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our
            expert development services.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-dark-blue px-8 py-4 rounded-lg font-medium hover:bg-light-blue-gray transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
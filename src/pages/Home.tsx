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
      <section className="relative pt-24 pb-32 md:pt-36 md:pb-22 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-[#7091E6]/20 to-transparent opacity-70" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-[#3D52A0]/10 to-transparent opacity-70" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#EDE8F5]/30 animate-pulse-slow" />
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D52A0] to-[#7091E6]">Innovation in Motion</span>
            </h1>

            <p className="text-lg md:text-xl text-[#8697C4] mb-8 md:mb-10">
              At NexoraWave, we craft powerful digital solutions — from custom software and cloud infrastructure to e-commerce platforms — designed to move your business forward with purpose and precision.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/services" className="bg-[#3D52A0] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#7091E6] transition-all duration-300 w-full sm:w-auto text-center">
                Explore Services
              </Link>
              <Link to="/contact" className="border-2 border-[#3D52A0] text-[#3D52A0] px-8 py-3.5 rounded-lg font-medium hover:bg-[#EDE8F5] transition-all duration-300 w-full sm:w-auto text-center">
                Contact Us
              </Link>
            </div>

            {/* Floating highlights */}
            {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Web Development', 'App Development', 'E-Commerce', 'Cloud Solutions'].map((item, index) => (
                <div 
                  key={item}
                  className={`rounded-lg border border-[#3D52A0]/10 bg-white/70 backdrop-blur-sm py-3 px-4 shadow-sm
                    ${index % 2 === 0 ? 'animate-float' : 'animation-delay-1000 animate-float'}`}
                >
                  <p className="font-medium text-[#3D52A0]">{item}</p>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-2 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#3D52A0]">Our Services</h2>
            <p className="text-xl text-[#8697C4]">
              Expert development solutions for your business
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {services.map(({ icon: Icon, title, description }, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <Icon className="w-12 h-12 text-[#7091E6] mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-[#3D52A0]">{title}</h3>
                <p className="text-[#8697C4] mb-6">{description}</p>
                <Link
                  to="/services"
                  className="text-[#7091E6] font-medium flex items-center hover:text-[#3D52A0]"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-[#3D52A0] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#7091E6] transition-all duration-300"
            >
              See More Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 bg-[#EDE8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-[#3D52A0] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#8697C4]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#3D52A0]">Client Testimonials</h2>
            <p className="text-xl text-[#8697C4]">
              What our clients say about us
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-[#ADBBDA] p-8 rounded-xl shadow-md">
                <div className="flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="font-bold text-[#3D52A0] text-xl">{testimonial.name}</div>
                    <div className="text-[#8697C4]">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-[#8697C4] italic text-center text-lg">"{testimonial.quote}"</p>
                <div className="flex justify-center mt-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#7091E6] fill-[#7091E6]" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#3D52A0] to-[#7091E6] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-[#EDE8F5] mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our
            expert development services.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#3D52A0] px-8 py-4 rounded-lg font-medium hover:bg-[#EDE8F5] transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Target, Heart, Zap, Star } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Rocket,
      title: 'Innovation First',
      description:
        "We push boundaries and embrace cutting-edge technologies to deliver tomorrow's solutions today.",
    },
    {
      icon: Heart,
      title: 'Customer Success',
      description:
        "Your success is our success. We're committed to understanding and solving your unique challenges.",
    },
    {
      icon: Zap,
      title: 'Agile Excellence',
      description:
        'We adapt quickly, iterate constantly, and deliver solutions that evolve with your needs.',
    },
    {
      icon: Star,
      title: 'Quality Driven',
      description:
        'We maintain the highest standards in code quality, security, and user experience.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-gradient-to-r from-dark-blue to-medium-blue text-white py-20 relative"
        style={{
          backgroundImage: `
      linear-gradient(to right, rgba(61, 82, 160, 0.9), rgba(112, 145, 230, 0.9)),
      url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80')
    `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 opacity-10">
          {/* Pattern overlay */}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About NexoraWave
          </h1>
          <p className="text-xl text-light-blue-gray max-w-2xl">
            Shaping the future of software development with innovation and expertise
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-very-light-lavender">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-dark-blue">Our Vision</h2>
              <p className="text-blue-gray">
                To revolutionize the software development landscape by creating
                innovative, scalable, and user-centric solutions that empower
                businesses to thrive in the digital age.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-dark-blue">Our Mission</h2>
              <p className="text-blue-gray">
                To empower businesses through innovative software solutions that
                drive growth, efficiency, and success. We're committed to
                delivering high-quality, scalable, and user-friendly
                applications that solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-very-light-lavender">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-blue">Who We Are</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Interactive image grid */}
            <div className="grid grid-cols-2 gap-4 relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Office workspace"
                className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 mt-8"
              />
            </div>

            {/* Right side - Text content with interactive elements */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-3 text-dark-blue">Our Expertise</h3>
                <p className="text-blue-gray">
                  Our team of skilled developers, designers, and strategists works
                  collaboratively to turn complex challenges into elegant solutions.
                  We're not just coding; we're crafting digital experiences that make
                  a difference.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-3 text-dark-blue">Our Approach</h3>
                <p className="text-blue-gray">
                  We combine technical expertise with creative problem-solving to
                  deliver exceptional digital solutions that transform businesses and
                  empower them to thrive in a digital-first world.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-light-blue-gray p-4 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-dark-blue">100+</div>
                  <div className="text-sm text-blue-gray">Projects</div>
                </div>
                <div className="bg-light-blue-gray p-4 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-dark-blue">50+</div>
                  <div className="text-sm text-blue-gray">Clients</div>
                </div>
                <div className="bg-light-blue-gray p-4 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-dark-blue">95%</div>
                  <div className="text-sm text-blue-gray">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-very-light-lavender py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-dark-blue">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <value.icon className="w-12 h-12 text-dark-blue mb-4" />
                <h3 className="text-xl font-bold mb-2 text-dark-blue">{value.title}</h3>
                <p className="text-blue-gray">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-dark-blue">Why Choose NexoraWave?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-dark-blue">🌱 Fresh Perspective</h3>
              <p className="text-blue-gray">
                We approach challenges with new ideas and a willingness to
                innovate. Our startup culture fosters creativity and agility,
                allowing us to deliver unique solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-dark-blue">
                🤝 Client-Centric Approach
              </h3>
              <p className="text-blue-gray">
                We focus on building long-term relationships with our clients by
                delivering tailored solutions that address their unique needs
                and challenges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-dark-blue">
                ⚡ Agility and Innovation
              </h3>
              <p className="text-blue-gray">
                As a startup, we're nimble and quick to adapt. We leverage the
                latest technologies to ensure our solutions are future-proof and
                scalable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-dark-blue to-medium-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-light-blue-gray mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life with innovative
            software solutions.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-dark-blue px-8 py-4 rounded-lg font-medium hover:bg-light-blue-gray transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
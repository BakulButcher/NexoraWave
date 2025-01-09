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
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About NexoraWave
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Shaping the future of software development with innovation and
            expertise
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To revolutionize the software development landscape by creating
                innovative, scalable, and user-centric solutions that empower
                businesses to thrive in the digital age.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold">Who We Are</h2>
            {/* <p className="text-xl text-gray-600">
              NexoraWave is a dynamic software development startup driven by
              passion for technology and innovation.
            </p> */}
          </div>
          <p className="text-gray-600 text-lg mb-6">
            Our team of skilled developers, designers, and strategists works
            collaboratively to turn complex challenges into elegant solutions.
            We're not just coding; we're crafting digital experiences that make
            a difference.
          </p>
          <p className="text-gray-600 text-lg">
            We combine technical expertise with creative problem-solving to
            deliver exceptional digital solutions that transform businesses and
            empower them to thrive in a digital-first world.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <value.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose NexoraWave?</h2>
            {/* <p className="text-xl text-gray-600">
              As a newly established IT startup, we bring a fresh perspective,
              cutting-edge technology, and a passion for solving real-world
              problems. Here’s why you should partner with us:
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">🌱 Fresh Perspective</h3>
              <p className="text-gray-600">
                We approach challenges with new ideas and a willingness to
                innovate. Our startup culture fosters creativity and agility,
                allowing us to deliver unique solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">
                🤝 Client-Centric Approach
              </h3>
              <p className="text-gray-600">
                We focus on building long-term relationships with our clients by
                delivering tailored solutions that address their unique needs
                and challenges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">
                ⚡ Agility and Innovation
              </h3>
              <p className="text-gray-600">
                As a startup, we’re nimble and quick to adapt. We leverage the
                latest technologies to ensure our solutions are future-proof and
                scalable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life with innovative
            software solutions.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;

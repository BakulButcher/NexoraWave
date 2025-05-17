import React from 'react';
import { Check, Briefcase, Globe, Heart, Rocket } from 'lucide-react';

const Careers: React.FC = () => {
  const trainingPrograms = [
    {
      name: 'Web Development Training',
      description:
        'Learn how to build responsive and user-friendly websites with HTML, CSS, JavaScript, and React.',
    },
    {
      name: 'Cloud Computing Training',
      description:
        'Master the fundamentals of cloud computing and deployment on platforms like AWS, Azure, and Google Cloud.',
    },
    {
      name: 'SEO & Digital Marketing Training',
      description:
        'Understand the strategies and tools to boost online presence, including SEO, PPC, and social media marketing.',
    },
  ];

  const jobOpportunities = [
    {
      title: 'Front-End Developer',
      type: 'Full-Time',
      location: 'Ahmedabad, Gujarat',
      description:
        "We're looking for a creative front-end developer with expertise in React, TypeScript, and Tailwind CSS.",
    },
    {
      title: 'Cloud Solutions Architect',
      type: 'Full-Time',
      location: 'Ahmedabad, Gujarat',
      description:
        'Join us to design, implement, and manage scalable cloud architectures.',
    },
    {
      title: 'Digital Marketing Specialist',
      type: 'Part-Time',
      location: 'Remote',
      description:
        'Help businesses grow by creating and executing effective digital marketing campaigns.',
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Supportive Environment',
      description: 'A collaborative workspace that fosters growth and innovation.',
    },
    {
      icon: Globe,
      title: 'Global Exposure',
      description: 'Opportunities to work on global projects and cutting-edge technologies.',
    },
    {
      icon: Rocket,
      title: 'Career Growth',
      description: 'Mentorship programs and career development plans.',
    },
    {
      icon: Briefcase,
      title: 'Competitive Benefits',
      description: 'Health insurance, paid time off, and flexible work hours.',
    },
  ];

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
            Careers at NexoraWave
          </h1>
          <p className="text-xl text-gray-100">
            Join a team that values creativity, innovation, and a passion for solving real-world problems.
          </p>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-16 bg-[#EDE8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#3D52A0]">Training Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold mb-4 text-[#3D52A0]">{program.name}</h3>
                <p className="text-gray-700">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Opportunities Section */}
      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#3D52A0]">Job Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpportunities.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold mb-2 text-[#3D52A0]">{job.title}</h3>
                <p className="text-sm text-[#8697C4]">{job.type} · {job.location}</p>
                <p className="text-gray-700 mt-4">{job.description}</p>
                <button className="mt-4 bg-[#3D52A0] text-white py-2 px-4 rounded hover:bg-[#7091E6] transition">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Benefits Section */}
      <section className="py-16 bg-[#EDE8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#3D52A0]">Why Work at NexoraWave?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <benefit.icon className="w-12 h-12 text-[#7091E6] mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2 text-[#3D52A0]">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;

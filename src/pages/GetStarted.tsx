import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Database, PenTool, Cloud, User, Monitor } from 'lucide-react';

const GetStarted: React.FC = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        Ready to Take Your Business to the Next Level?
                    </h1>
                    <p className="text-xl sm:text-2xl text-blue-100 max-w-2xl mx-auto mb-8">
                        Whether you're starting from scratch or looking to grow, we have the tools and expertise to help you succeed.
                    </p>
                    <Link
                        to="/services"
                        className="bg-white text-blue-600 px-8 py-3 text-lg font-medium rounded-lg shadow-lg hover:bg-blue-50 transition"
                    >
                        Explore Our Services
                    </Link>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-16 bg-white text-gray-800">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl sm:text-4xl font-semibold mb-6">What We Do</h2>
                    <p className="text-lg sm:text-xl mb-8">
                        NexoraWave provides end-to-end technology solutions to help businesses scale and succeed. From website development to custom software, our services are tailored to meet your unique needs.
                    </p>
                    <Link
                        to="/services"
                        className="bg-blue-600 text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-blue-700 transition"
                    >
                        Discover How We Can Help
                    </Link>
                </div>
            </section>

            {/* Our Services Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Our Core Services</h2>
                    <p className="text-lg sm:text-xl mb-12">
                        We offer a range of services to ensure your business is equipped for success. Explore the services we specialize in.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service Cards */}
                        {[
                            {
                                icon: Code,
                                title: 'Web Development',
                                description: 'Custom websites and web applications built with the latest technologies.',
                                link: '/services/web-development',
                            },
                            {
                                icon: Database,
                                title: 'Custom Software',
                                description: 'Tailored solutions to streamline your operations and boost productivity.',
                                link: '/services/custom-development',
                            },
                            {
                                icon: PenTool,
                                title: 'Logo & Branding',
                                description: 'Create a unique brand identity with professional logo design services.',
                                link: '/services/design-services',
                            },
                            {
                                icon: Cloud,
                                title: 'Cloud Solutions',
                                description: 'Scalable and efficient cloud computing services for your business.',
                                link: '/services/cloud-solutions',
                            },
                            {
                                icon: User,
                                title: 'Consulting & Strategy',
                                description: 'Expert consulting to drive digital transformation and strategic growth.',
                                link: '/services/technology-consulting',
                            },
                            {
                                icon: Monitor,
                                title: 'IT Support',
                                description: 'Reliable IT support services to ensure your systems run smoothly and securely.',
                                link: '/services/it-support',
                            },
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg overflow-hidden p-6 hover:shadow-xl transition-shadow"
                            >
                                <div className="flex flex-col items-center">
                                    <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                                    <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
                                    <p className="text-gray-600 text-center">{service.description}</p>
                                    <Link
                                        to={service.link}
                                        className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: 'Step 1',
                                title: 'Discovery',
                                description: 'We start by understanding your business, goals, and challenges.',
                                icon: '🔍',
                                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
                            },
                            {
                                step: 'Step 2',
                                title: 'Planning',
                                description: 'A detailed project plan will guide the development process.',
                                icon: '📋',
                                image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
                            },
                            {
                                step: 'Step 3',
                                title: 'Development',
                                description: 'Our team uses agile methodology to develop your solution efficiently.',
                                icon: '💻',
                                image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
                            },
                            {
                                step: 'Step 4',
                                title: 'Delivery',
                                description: 'We test, deploy, and provide ongoing support to ensure success.',
                                icon: '🚚',
                                image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
                            },
                        ].map((phase, index) => (
                            <div key={index} className="text-center bg-white p-6 rounded-lg shadow-lg w-full">
                                <img
                                    src={phase.image}
                                    alt={phase.title}
                                    className="w-full h-40 object-cover mb-4 rounded-md"
                                />
                                <div className="text-4xl font-bold text-blue-600 mb-4">{phase.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                                <p className="text-gray-600">{phase.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-lg sm:text-xl mb-8">
                        Let’s turn your ideas into reality. Contact us today to discuss your next project!
                    </p>
                    <Link
                        to="/contact"
                        className="bg-white text-blue-600 px-8 py-3 text-lg font-medium rounded-lg shadow-lg hover:bg-blue-50 transition"
                    >
                        Contact Us Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default GetStarted;

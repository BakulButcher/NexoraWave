import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const Contact = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent successfully!');
  };

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqItems = [
    {
      question: 'What services do you offer?',
      answer:
        'We offer a wide range of services including Web Development, Mobile App Development, Custom Software Solutions, and IT Consulting.',
    },
    {
      question: 'How can I book a consultation?',
      answer:
        'You can book a consultation by filling out our contact form, or you can reach us directly at contact@nexorawave.com.',
    },
    {
      question: 'Do you offer ongoing support after project completion?',
      answer:
        'Yes! We provide ongoing support and maintenance services to ensure your systems run smoothly.',
    },
    {
      question: 'Can you help with legacy system integrations?',
      answer:
        'Absolutely. Our team specializes in integrating modern solutions with legacy systems to improve efficiency and performance.',
    },
    {
      question: 'What is the typical project timeline?',
      answer:
        'Project timelines vary based on the scope and complexity. We’ll provide a detailed timeline during the planning phase.',
    },
  ];

  return (
    <div>
      {/* Contact Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get in touch with our team of experts to learn how we can help your
            business grow.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option value="">Select a service</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="security">Cybersecurity</option>
                    <option value="development">Software Development</option>
                    <option value="consulting">IT Consulting</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-blue-600 mr-4" />
                    <span>contact@nexorawave.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-blue-600 mr-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                    <span>123 Tech Street, Silicon Valley, CA 94025</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 text-blue-600 mr-4" />
                    <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqItems.map((item, index) => (
                    <div key={index} className="border-b pb-4">
                      <div
                        onClick={() => toggleFAQ(index)}
                        className="flex justify-between items-center cursor-pointer"
                      >
                        <h3 className="text-lg font-medium text-gray-700">
                          {item.question}
                        </h3>
                        {activeFAQ === index ? (
                          <ChevronUp className="w-5 h-5 text-blue-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-blue-600" />
                        )}
                      </div>
                      {activeFAQ === index && (
                        <p className="mt-4 text-gray-600">{item.answer}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

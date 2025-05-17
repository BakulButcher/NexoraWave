import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NexoraWave</h3>
            <p className="text-light-blue-gray">
              Empowering businesses through innovative IT solutions and digital
              transformation.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-light-blue-gray hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-light-blue-gray hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light-blue-gray hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-light-blue-gray hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services#service-cards"
                  className="text-light-blue-gray hover:text-white"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services#service-cards"
                  className="text-light-blue-gray hover:text-white"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services#service-cards"
                  className="text-light-blue-gray hover:text-white"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services#service-cards"
                  className="text-light-blue-gray hover:text-white"
                >
                  Logo Designing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-light-blue-gray hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-light-blue-gray hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/nexorawave" className="text-light-blue-gray hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-light-blue-gray hover:text-white">
                <Instagram size={20} />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-light-blue-gray">Contact Us:</p>
              <p className="text-light-blue-gray">contact@nexorawave.com</p>
              <p className="text-light-blue-gray">+91 83204 11204</p>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-gray mt-8 pt-8 text-center">
          <p className="text-light-blue-gray">
            © {new Date().getFullYear()} NexoraWave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
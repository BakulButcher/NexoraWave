import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#3D52A0] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NexoraWave</h3>
            <p className="text-[#EDE8F5]">
              Empowering businesses through innovative IT solutions and digital
              transformation.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-[#ADBBDA] hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#ADBBDA] hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#ADBBDA] hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-[#ADBBDA] hover:text-white">
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
                  to="/services/web-development"
                  className="text-[#ADBBDA] hover:text-white"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/e-commerce"
                  className="text-[#ADBBDA] hover:text-white"
                >
                  E-commerce Solution
                </Link>
              </li>
              <li>
                <Link
                  to="/services/custom-development"
                  className="text-[#ADBBDA] hover:text-white"
                >
                  Custom Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/digital-transformation"
                  className="text-[#ADBBDA] hover:text-white"
                >
                  Graphics Designing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-[#ADBBDA] hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[#ADBBDA] hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/nexorawave" className="text-[#ADBBDA] hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-[#ADBBDA] hover:text-white">
                <Instagram size={20} />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-[#EDE8F5]">Contact Us:</p>
              <a href='mailto:contact@nexorawave.com' className="text-[#ADBBDA]">contact@nexorawave.com</a><br />
              <a href='tel:+918320411204' className="text-[#ADBBDA]">+91 83204 11204</a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#8697C4] mt-8 pt-8 text-center">
          <p className="text-[#ADBBDA]">
            © {new Date().getFullYear()} NexoraWave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

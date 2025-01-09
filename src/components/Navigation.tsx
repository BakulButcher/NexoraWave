import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">NexoraWave</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  isActive(item.href)
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                } px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}

            {/* Services Navigation with Dropdown */}
            <div className="relative">
              <div className="flex items-center space-x-2">
                <Link
                  to="/services"
                  className={`${
                    isActive('/services')
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  } px-3 py-2 text-sm font-medium transition-colors duration-200`}
                >
                  Services
                </Link>
                <button
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  className="text-gray-700 hover:text-blue-600"
                >
                  <ChevronDown size={16} />
                </button>
              </div>
              {isServicesDropdownOpen && (
                <div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg w-48 py-2 z-10">
                  <Link
                    to="/services/web-development"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Web Development
                  </Link>
                  <Link
                    to="/services/erp-crm"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    ERP & CRM Systems
                  </Link>
                  <Link
                    to="/services/cloud-solutions"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Cloud Solutions
                  </Link>
                  <Link
                    to="/services/technology-consulting"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Technology Consulting
                  </Link>
                  <Link
                    to="/services/digital-transformation"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Digital Transformation
                  </Link>
                  <Link
                    to="/services/design-services"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Design Services
                  </Link>
                  <Link
                    to="/services/e-commerce"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    E-Commerce Solutions
                  </Link>
                  <Link
                    to="/services/seo-digital-marketing"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    SEO & Digital Marketing
                  </Link>
                  <Link
                    to="/services/custom-development"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Custom Development
                  </Link>
                  <span className="block px-4 py-2 text-gray-400">
                    App Development (Coming Soon)
                  </span>
                </div>
              )}
            </div>

            {/* Get Started Button */}
            <Link
              to="/get-started"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block ${
                isActive(item.href)
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              } py-2`}
            >
              {item.name}
            </Link>
          ))}
          <div className="py-2">
            <button
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              className="text-gray-700 hover:text-blue-600 flex items-center w-full"
            >
              Services <ChevronDown className="ml-2" size={16} />
            </button>
            {isServicesDropdownOpen && (
              <div className="pl-4 mt-2">
                <Link
                  to="/services/web-development"
                  className="block text-gray-700 hover:bg-gray-50 py-1 rounded"
                >
                  Web Development
                </Link>
                {/* Other services */}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

import React, { useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = React.useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', isDropdown: true },
    { name: 'Careers', href: '/careers' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  // Close dropdown when location changes (user navigates to a new page)
  useEffect(() => {
    setIsServicesDropdownOpen(false);
    setIsOpen(false);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-[#3D52A0]">NexoraWave</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) =>
              item.isDropdown ? (
                <div key={item.name} className="relative" ref={dropdownRef}>
                  <div className="flex items-center space-x-2">
                    <Link
                      to={item.href}
                      className={`${isActive(item.href)
                          ? 'text-[#3D52A0] border-b-2 border-[#3D52A0]'
                          : 'text-gray-700 hover:text-[#7091E6]'
                        } px-3 py-2 text-sm font-medium transition-colors duration-200`}
                    >
                      {item.name}
                    </Link>
                    <button
                      onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                      className="text-gray-700 hover:text-[#7091E6]"
                    >
                      <ChevronDown size={16} />
                    </button>
                  </div>
                  {isServicesDropdownOpen && (
                    <div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg w-48 py-2 z-10">
                      <Link
                        to="/services/web-development"
                        className="block px-4 py-2 text-gray-700 hover:bg-[#EDE8F5]"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        Web Development
                      </Link>
                      <Link
                        to="/services/technology-consulting"
                        className="block px-4 py-2 text-gray-700 hover:bg-[#EDE8F5]"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        Technology Consulting
                      </Link>
                      <Link
                        to="/services/digital-transformation"
                        className="block px-4 py-2 text-gray-700 hover:bg-[#EDE8F5]"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        Digital Transformation
                      </Link>
                      <Link
                        to="/services/design-services"
                        className="block px-4 py-2 text-gray-700 hover:bg-[#EDE8F5]"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        Design Services
                      </Link>
                      <Link
                        to="/services/e-commerce"
                        className="block px-4 py-2 text-gray-700 hover:bg-[#EDE8F5]"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        E-Commerce Solutions
                      </Link>
                      <Link
                        to="/services/seo-digital-marketing"
                        className="block px-4 py-2 text-gray-700 hover:bg-[#EDE8F5]"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        SEO & Digital Marketing
                      </Link>
                      <Link
                        to="/services/custom-development"
                        className="block px-4 py-2 text-gray-700 hover:bg-[#EDE8F5]"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        Custom Development
                      </Link>
                      <span className="block px-4 py-2 text-[#8697C4]">
                        ERP & CRM Systems (Coming Soon)
                      </span>
                      <span className="block px-4 py-2 text-[#8697C4]">
                        Cloud Solutions (Coming Soon)
                      </span>
                      <span className="block px-4 py-2 text-[#8697C4]">
                        App Development (Coming Soon)
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${isActive(item.href)
                      ? 'text-[#3D52A0] border-b-2 border-[#3D52A0]'
                      : 'text-gray-700 hover:text-[#7091E6]'
                    } px-3 py-2 text-sm font-medium transition-colors duration-200`}
                >
                  {item.name}
                </Link>
              )
            )}
            {/* <Link
              to="/get-started"
              className="bg-[#3D52A0] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#7091E6] transition-colors duration-200"
            >
              Get Started
            </Link> */}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#7091E6]"
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
            <div key={item.name}>
              {item.isDropdown ? (
                <>
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.href}
                      className={`${isActive(item.href) ? 'text-[#3D52A0]' : 'text-gray-700 hover:text-[#7091E6]'} py-2`}
                    >
                      {item.name}
                    </Link>
                    <button
                      onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                      className="text-gray-700 hover:text-[#7091E6]"
                    >
                      <ChevronDown size={16} />
                    </button>
                  </div>
                  {isServicesDropdownOpen && (
                    <div className="pl-4">
                      <Link
                        to="/services/web-development"
                        className="block py-2 text-gray-700 hover:text-[#7091E6]"
                        onClick={() => {
                          setIsServicesDropdownOpen(false);
                          setIsOpen(false);
                        }}
                      >
                        Web Development
                      </Link>
                      <Link
                        to="/services/technology-consulting"
                        className="block py-2 text-gray-700 hover:text-[#7091E6]"
                        onClick={() => {
                          setIsServicesDropdownOpen(false);
                          setIsOpen(false);
                        }}
                      >
                        Technology Consulting
                      </Link>
                      {/* Add other mobile service links here */}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.href}
                  className={`block ${isActive(item.href) ? 'text-[#3D52A0]' : 'text-gray-700 hover:text-[#7091E6]'} py-2`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          {/* <Link
            to="/get-started"
            className="block bg-[#3D52A0] text-white px-4 py-2 mt-2 rounded-md text-sm font-medium hover:bg-[#7091E6] transition-colors duration-200 text-center"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link> */}
        </div>
      )}
    </nav>
  );
};

export default Navigation;

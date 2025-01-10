import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock, ChevronUp, Search, ChevronDown } from "lucide-react";
import { Alert, AlertDescription } from "./AlertComponent";
import emailjs from "emailjs-com";

interface Country {
  code: string;
  name: string;
  flag: string;
  pattern?: string;
  maxLength?: number;
}

interface PhoneVerificationResponse {
  valid: boolean;
  number: string;
  local_format: string;
  international_format: string;
  country_prefix: string;
  country_code: string;
  country_name: string;
  location: string;
  carrier: string;
  line_type: string;
}

const Contact = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    service: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const [countries, setCountries] = useState<Country[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoadingCountries, setIsLoadingCountries] = useState(true);
  const [manualCountryCode, setManualCountryCode] = useState("+91");
  const [isManualInput, setIsManualInput] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country>({
    code: "+91",
    name: "India",
    flag: "",
    pattern: "^[6-9]\\d{9}$",
    maxLength: 10
  });

  // Fetch countries data
  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoadingCountries(true);
      try {
        const response = await fetch("https://restcountries.com/v3.1/all?fields=name,idd,flags,cca2");
        const data = await response.json();

        const formattedCountries = data
          .filter((country: any) =>
            country.idd.root && country.idd.suffixes?.[0]
          )
          .map((country: any) => ({
            code: `${country.idd.root}${country.idd.suffixes[0]}`,
            name: country.name.common,
            flag: country.flags.svg,
            pattern: getPhonePattern(country.cca2),
            maxLength: getMaxLength(country.cca2)
          }))
          .sort((a: Country, b: Country) => a.name.localeCompare(b.name));

        setCountries(formattedCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setCountries([
          { code: "+91", name: "India", flag: "", pattern: "^[6-9]\\d{9}$", maxLength: 10 },
          { code: "+1", name: "United States", flag: "", pattern: "^\\d{10}$", maxLength: 10 },
          { code: "+44", name: "United Kingdom", flag: "", pattern: "^\\d{10}$", maxLength: 10 },
        ]);
      } finally {
        setIsLoadingCountries(false);
      }
    };
    fetchCountries();
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const getPhonePattern = (countryCode: string) => {
    const patterns: { [key: string]: string } = {
      "IN": "^[6-9]\\d{9}$",
      "US": "^\\d{10}$",
      "GB": "^\\d{10}$",
      "CA": "^\\d{10}$",
    };
    return patterns[countryCode] || "^\\d{1,15}$";
  };

  const getMaxLength = (countryCode: string) => {
    const lengths: { [key: string]: number } = {
      "IN": 10,
      "US": 10,
      "GB": 10,
      "CA": 10,
    };
    return lengths[countryCode] || 15;
  };

  const validatePhoneNumber = async (phone: string, countryCode: string): Promise<{
    isValid: boolean;
    verificationData?: PhoneVerificationResponse;
    error?: string;
  }> => {
    try {
      // Try numverify API first
      const numverifyKey = import.meta.env.VITE_NUMVERIFY_API_KEY;
      const numberVerifyKey = import.meta.env.VITE_NUMBER_VERIFY_API_KEY;

      if (!numverifyKey && !numberVerifyKey) {
        console.error('No API keys found for phone verification services');
        return { isValid: true, error: 'Phone verification service unavailable' };
      }

      let response;
      let data;

      // Try numverify first
      if (numverifyKey) {
        console.log('Attempting numverify validation...');
        response = await fetch(
          `https://api.numverify.com/v1/validate?number=${countryCode}${phone}&api_key=${numverifyKey}`
        );

        if (response.ok) {
          data = await response.json();
          console.log('Numverify validation result:', data);
          return {
            isValid: data.valid,
            verificationData: data
          };
        } else {
          console.warn('Numverify validation failed, falling back to number_verification API');
        }
      }

      // Try number_verification API as fallback
      if (numberVerifyKey) {
        console.log('Attempting number_verification API validation...');
        response = await fetch(
          `https://api.apilayer.com/number_verification/validate?number=${countryCode}${phone}`,
          {
            headers: {
              apikey: numberVerifyKey
            }
          }
        );

        if (response.ok) {
          data = await response.json();
          console.log('Number verification API result:', data);
          return {
            isValid: data.valid,
            verificationData: data
          };
        } else {
          console.error('Number verification API failed:', await response.text());
          return { isValid: true, error: 'Phone verification service error' };
        }
      }

      // If both APIs fail, fall back to pattern validation
      console.warn('All phone verification services failed, using pattern validation only');
      return { isValid: true, error: 'Phone verification services unavailable' };

    } catch (error) {
      console.error("Phone validation error:", error);
      return { isValid: true, error: 'Phone verification error' };
    }
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateFullName = (name: string) => {
    return name.length >= 2 && /^[a-zA-Z\s]*$/.test(name);
  };

  const handleInputChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });

    if (name === "fullName") {
      if (!validateFullName(value)) {
        setFormErrors(prev => ({
          ...prev,
          fullName: "Please enter a valid name (only letters and spaces)"
        }));
      }
    } else if (name === "email") {
      if (!validateEmail(value)) {
        setFormErrors(prev => ({
          ...prev,
          email: "Please enter a valid email address"
        }));
      }
    } else if (name === "phone") {
      const pattern = new RegExp(selectedCountry.pattern || "^\\d{1,15}$");
      if (!pattern.test(value)) {
        setFormErrors(prev => ({
          ...prev,
          phone: `Please enter a valid ${selectedCountry.name} phone number`
        }));
      }
    }
  };

  const handleManualCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (!value.startsWith("+")) {
      value = "+" + value;
    }

    if (/^\+\d*$/.test(value) || value === "+") {
      setManualCountryCode(value);
      setFormData(prev => ({ ...prev, countryCode: value }));
    }
  };

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    country.code.includes(searchQuery)
  );

  const renderPhoneSection = () => (
    <div>
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
        Phone Number *
      </label>
      <div className="relative flex">
        <div className="relative">
          {isManualInput ? (
            <input
              type="text"
              value={manualCountryCode}
              onChange={handleManualCodeChange}
              className="w-24 px-3 py-2 border rounded-l-lg focus:ring-2 focus:ring-blue-500"
              placeholder="+91"
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center px-4 py-2 border rounded-l-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[100px]"
            >
              <span className="mr-2">{formData.countryCode}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          )}

          <button
            type="button"
            onClick={() => setIsManualInput(!isManualInput)}
            className="absolute right-0 top-0 mt-2 mr-2 text-xs text-blue-600 hover:text-blue-800"
          >
            {isManualInput ? "Select" : "Manual"}
          </button>

          {isDropdownOpen && !isManualInput && (
            <div className="absolute top-full left-0 mt-1 w-80 bg-white border rounded-lg shadow-lg z-50">
              <div className="p-2 border-b">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search countries..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="max-h-60 overflow-y-auto">
                {isLoadingCountries ? (
                  <div className="p-4 text-center text-gray-500">Loading countries...</div>
                ) : filteredCountries.length > 0 ? (
                  filteredCountries.map((country) => (
                    <button
                      key={country.code}
                      type="button"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, countryCode: country.code }));
                        setSelectedCountry(country);
                        setIsDropdownOpen(false);
                        setSearchQuery("");
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 flex items-center"
                    >
                      {country.flag && (
                        <img
                          src={country.flag}
                          alt={`${country.name} flag`}
                          className="w-6 h-4 mr-2 object-cover"
                        />
                      )}
                      <span className="w-20 font-medium">{country.code}</span>
                      <span className="ml-2 text-gray-600">{country.name}</span>
                    </button>
                  ))
                ) : (
                  <div className="p-4 text-center text-gray-500">No countries found</div>
                )}
              </div>
            </div>
          )}
        </div>

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          maxLength={selectedCountry.maxLength}
          className="flex-1 px-4 py-2 border rounded-r-lg focus:ring-2 focus:ring-blue-500"
          placeholder={`Enter ${selectedCountry.maxLength || ''} digit number`}
          required
        />
      </div>
      {formErrors.phone && (
        <Alert variant="destructive" className="mt-2">
          <AlertDescription>{formErrors.phone}</AlertDescription>
        </Alert>
      )}
    </div>
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = {
      fullName: !validateFullName(formData.fullName) ? "Please enter a valid name" : "",
      email: !validateEmail(formData.email) ? "Please enter a valid email address" : "",
      phone: ""
    };

    // Basic pattern validation
    const phonePattern = new RegExp(selectedCountry.pattern || "^\\d{1,15}$");
    if (!phonePattern.test(formData.phone)) {
      errors.phone = `Please enter a valid ${selectedCountry.name} phone number`;
    } else {
      // Advanced API validation
      const { isValid, verificationData, error } = await validatePhoneNumber(
        formData.phone,
        selectedCountry.code.replace("+", "")
      );

      if (!isValid) {
        errors.phone = "Please enter a valid phone number";
      }

      // If validation successful, proceed with form submission
      if (isValid) {
        const serviceID = "service_s9owso9";
        const templateID = "template_gw4i9sk";
        const userID = "bEpSc0Vs91Vi23voR";

        // Format verification data for email
        const verificationDetails = verificationData ? {
          numberValid: verificationData.valid,
          internationalFormat: verificationData.international_format,
          carrier: verificationData.carrier || 'Unknown',
          lineType: verificationData.line_type || 'Unknown',
          location: verificationData.location || 'Unknown',
        } : { error: error || 'Verification data unavailable' };

        const emailData = {
          fullName: formData.fullName,
          email: formData.email,
          phone: `${formData.countryCode} ${formData.phone}`,
          service: formData.service,
          message: formData.message || "No message provided",
          phoneVerification: JSON.stringify(verificationDetails, null, 2)
        };

        try {
          await emailjs.send(serviceID, templateID, emailData, userID);
          console.log('Email sent with verification data:', verificationDetails);
          setFormStatus("Your message has been sent successfully!");
          setFormData({
            fullName: "",
            email: "",
            countryCode: "+91",
            phone: "",
            service: "",
            message: ""
          });
        } catch (error) {
          console.error("EmailJS Error:", error);
          setFormStatus("Failed to send the message. Please try again.");
        }
      }
    }

    setFormErrors(errors);
  };

  const faqItems = [
    {
      question: "What services do you offer?",
      answer: "We offer a wide range of services including Web Development, Mobile App Development, Custom Software Solutions, IT Consulting and many more."
    },
    {
      question: "How can I book a consultation?",
      answer: "You can book a consultation by filling out our contact form, or you can reach us directly at contact@nexorawave.com."
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer: "Yes! We provide ongoing support and maintenance services to ensure your systems run smoothly."
    },
    {
      question: "Can you help with legacy system integrations?",
      answer: "Absolutely. Our team specializes in integrating modern solutions with legacy systems to improve efficiency and performance."
    },
    {
      question: "What is the typical project timeline?",
      answer: "Project timelines vary based on the scope and complexity. We'll provide a detailed timeline during the planning phase."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 relative"
        style={{
          backgroundImage: `
      linear-gradient(to right, rgba(37, 99, 235, 0.9), rgba(147, 51, 234, 0.9)),
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
            Contact Us
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Get in touch with our team of experts to learn how we can help your business grow.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${formErrors.fullName ? 'border-red-500' : ''
                      }`}
                  />
                  {formErrors.fullName && (
                    <Alert variant="destructive" className="mt-2">
                      <AlertDescription>{formErrors.fullName}</AlertDescription>
                    </Alert>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${formErrors.email ? 'border-red-500' : ''
                      }`}
                  />
                  {formErrors.email && (
                    <Alert variant="destructive" className="mt-2">
                      <AlertDescription>{formErrors.email}</AlertDescription>
                    </Alert>
                  )}
                </div>

                {renderPhoneSection()}

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest *
                  </label>
                  <select
                    name="service"
                    id="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Custom Software">Custom Software</option>
                    <option value="Logo Designing">Logo Designing</option>
                    <option value="Technology Consulting">Technology Consulting</option>
                    <option value="Digital Transformation">Digital Transformation</option>
                    <option value="SEO & Digital Marketing">SEO & Digital Marketing</option>
                    <option value="E-Commerce Solutions">E-Commerce Solutions</option>
                    <option value="ERP & CRM Systems">ERP & CRM Systems  (Coming Soon)</option>
                    <option value="Cloud Solutions">Cloud Solutions  (Coming Soon)</option>
                    <option value="App Development">App Development (Coming Soon)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    aria-label="Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Submit
                </button>

                {formStatus && (
                  <Alert variant={formStatus.includes("success") ? "default" : "destructive"}>
                    <AlertDescription>{formStatus}</AlertDescription>
                  </Alert>
                )}
              </form>
            </div>

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
                    <span>+91 83204 11204</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                    <span>Ahmedabad, Gujarat, India</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 text-blue-600 mr-4" />
                    <span>Mon - Fri, 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqItems.map((faq, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition-shadow"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFAQ(index)}
                        className="flex items-center justify-between w-full text-left"
                      >
                        <span className="text-lg font-medium">{faq.question}</span>
                        {activeFAQ === index ? <ChevronUp /> : <ChevronDown />}
                      </button>
                      {activeFAQ === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
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
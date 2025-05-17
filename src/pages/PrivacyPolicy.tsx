import React from 'react';
import { Shield, Mail, Globe, Calendar, FileText, Lock, UserCheck, Bell, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

    const sections = [
        {
            id: 'information-we-collect',
            title: 'Information We Collect',
            icon: FileText,
            content: (
                <>
                    <p className="mb-4">We may collect the following types of information:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Personal Information</strong>: Name, email address, phone number, company name (only when you submit a contact or inquiry form).</li>
                        <li><strong>Usage Data</strong>: Information about how you use our website (e.g., pages visited, time spent, browser type) through cookies and analytics tools.</li>
                        <li><strong>Device Information</strong>: IP address, browser type, operating system, and other technical information about the device you use to access our services.</li>
                    </ul>
                </>
            )
        },
        {
            id: 'how-we-use-information',
            title: 'How We Use Your Information',
            icon: UserCheck,
            content: (
                <>
                    <p className="mb-4">We use the collected data to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Respond to your inquiries or requests</li>
                        <li>Provide and improve our services</li>
                        <li>Analyze website performance and user behavior</li>
                        <li>Send relevant updates or marketing communications (only with your consent)</li>
                        <li>Ensure the security and functionality of our platform</li>
                    </ul>
                </>
            )
        },
        {
            id: 'cookies',
            title: 'Cookies',
            icon: Globe,
            content: (
                <p>
                    Our website may use cookies to enhance user experience. You can choose to disable cookies in your browser settings,
                    but some features of the site may not function properly as a result. We use both session cookies (which expire when you close your browser)
                    and persistent cookies (which remain on your device until they expire or you delete them).
                </p>
            )
        },
        {
            id: 'data-security',
            title: 'Data Security',
            icon: Lock,
            content: (
                <p>
                    We implement appropriate technical and organizational measures to protect your personal information from unauthorized access,
                    disclosure, or destruction. This includes encryption, secure servers, regular security audits, and strict access controls for our team members.
                </p>
            )
        },
        {
            id: 'third-party-services',
            title: 'Third-Party Services',
            icon: AlertCircle,
            content: (
                <p>
                    We may use trusted third-party tools (such as analytics or contact forms) that collect limited data to help us operate and improve our services.
                    These third parties are bound by confidentiality agreements and are prohibited from using your information for any other purposes.
                </p>
            )
        },
        {
            id: 'your-rights',
            title: 'Your Rights',
            icon: Bell,
            content: (
                <>
                    <p className="mb-4">You have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Access, update, or delete your personal information</li>
                        <li>Withdraw consent for marketing at any time</li>
                        <li>Request a copy of the data we have about you</li>
                        <li>Object to the processing of your data in certain circumstances</li>
                        <li>Lodge a complaint with a supervisory authority</li>
                    </ul>
                    <p className="mt-4">
                        To exercise these rights, please contact us at <a href="mailto:contact@nexorawave.com" className="text-[#3D52A0] hover:text-[#7091E6] underline">contact@nexorawave.com</a>.
                    </p>
                </>
            )
        },
        {
            id: 'changes-to-policy',
            title: 'Changes to This Policy',
            icon: Calendar,
            content: (
                <p>
                    We may update this Privacy Policy from time to time. All changes will be posted on this page with the updated effective date.
                    For significant changes, we may provide additional notice through our website or via email notification.
                </p>
            )
        },
        {
            id: 'contact-us',
            title: 'Contact Us',
            icon: Mail,
            content: (
                <div>
                    <p className="mb-4">If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
                    <div className="bg-[#EDE8F5] p-4 rounded-lg">
                        <p className="font-bold text-[#3D52A0]">NexoraWave</p>
                        <p>Email: <a href="mailto:contact@nexorawave.com" className="text-[#3D52A0] hover:text-[#7091E6] underline">contact@nexorawave.com</a></p>
                        <p>Website: <a href="https://www.nexorawave.com" className="text-[#3D52A0] hover:text-[#7091E6] underline">www.nexorawave.com</a></p>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#3D52A0] to-[#7091E6] text-white py-16 relative">
                <div className="absolute inset-0 opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <Shield className="w-16 h-16 mx-auto mb-6 text-white opacity-90" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-lg md:text-xl text-[#ADBBDA] max-w-2xl mx-auto">
                        How we collect, use, and protect your information at NexoraWave
                    </p>
                    <p className="mt-6 text-[#ADBBDA]">
                        <strong>Effective Date:</strong> {formattedDate}
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-12 bg-[#EDE8F5]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <p className="text-lg text-[#8697C4]">
                            At <span className="font-bold text-[#3D52A0]">NexoraWave</span>, your privacy is important to us.
                            This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our services.
                        </p>
                    </div>
                </div>
            </section>

            {/* Policy Sections */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-10">
                        {sections.map((section, index) => (
                            <div key={section.id} className="bg-white rounded-lg shadow-lg p-8">
                                <div className="flex items-center mb-6">
                                    <div className="bg-[#EDE8F5] p-3 rounded-full mr-4">
                                        <section.icon className="w-6 h-6 text-[#3D52A0]" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-[#3D52A0]">{index + 1}. {section.title}</h2>
                                </div>
                                <div className="text-gray-700">
                                    {section.content}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-12 bg-[#EDE8F5]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-2xl font-bold text-[#3D52A0] mb-4">Have Questions About Our Privacy Practices?</h3>
                    <p className="text-[#8697C4] mb-8">
                        Our team is here to help you understand how we protect your data and answer any questions you may have.
                    </p>
                    <Link to="/contact" className="bg-[#3D52A0] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#7091E6] transition-all duration-300 w-full sm:w-auto text-center">
                        Contact Our Privacy Team
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
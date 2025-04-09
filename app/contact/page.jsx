import { FaFacebook, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import ContactForm from './ContactForm';

export default function Contact() {
  // JSON object for content
  const contactInfo = {
    heading: "Contact Us",
    description:
      "Please don't hesitate to contact me and see how I can accommodate you and be of service.",
    email: "sales@cflaserengravers.org.za",
    phone: "+27 76 168 2245",
    socialLinks: [
      { id: 1, name: "Facebook", href: "https://facebook.com", icon: FaFacebook },
      { id: 2, name: "Whatsapp", href: "https://wa.me/27761682245", icon: FaWhatsapp },
    ],
  };

  return (
    <main className="flex flex-col items-center justify-center md:h-screen pt-48 md:pt-24 pb-4 px-4 bg-gradient-to-b from-gray-100 to-gray-200">
      
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-[#c65f3e] mb-6">{contactInfo.heading}</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12">
            {contactInfo.description}
          </p>
          <p className="mb-6 text-gray-700 flex items-center gap-2">
            <FaEnvelope className="text-[#c65f3e]" />
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-[#c65f3e] hover:underline"
            >
              {contactInfo.email}
            </a>
          </p>
          <p className="mb-6 text-gray-700 flex items-center gap-2">
            <FaPhone className="text-[#c65f3e]" />
            <a
              href={`tel:${contactInfo.phone}`}
              className="text-[#c65f3e] hover:underline"
            >
              {contactInfo.phone}
            </a>
          </p>
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-[#c65f3e] mb-4">Get Social</h3>
            <div className="flex space-x-6">
              {contactInfo.socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#c65f3e] transition duration-300"
                  aria-label={link.name}
                >
                  <link.icon size={28} />
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <ContactForm />
      </div>
    </main>
  );
}

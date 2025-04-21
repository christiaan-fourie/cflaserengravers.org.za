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
      { id: 1, name: "Facebook", href: "https://www.facebook.com/cflaserengravers", icon: FaFacebook },
      { id: 2, name: "Whatsapp", href: "https://wa.me/27761682245", icon: FaWhatsapp },
    ],
  };

  return (
    <main className="h-screen md:overflow-hidden flex flex-col items-center justify-center pt-[10vh] md:pt-28 pb-16 px-4 bg-gray-50">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg md:overflow-hidden grid grid-cols-1 md:grid-cols-2  border border-[#c65f3e]">
        {/* Contact Information Section (Left Side) */}
        <div className="p-8 md:p-10 bg-gradient-to-br from-[#c65f3e] to-[#b05030] text-white">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">{contactInfo.heading}</h2>
          <p className="text-base md:text-md opacity-90 mb-10">
            {contactInfo.description}
          </p>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FaEnvelope className="w-5 h-5 opacity-90" />
              <a
                href={`mailto:${contactInfo.email}`}
                className="hover:opacity-100 opacity-90 transition duration-300 break-all"
              >
                {contactInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="w-5 h-5 opacity-90" />
              <a
                href={`tel:${contactInfo.phone}`}
                className="hover:opacity-100 opacity-90 transition duration-300"
              >
                {contactInfo.phone}
              </a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-medium opacity-90 mb-5">Get Social</h3>
            <div className="flex space-x-5">
              {contactInfo.socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition duration-300"
                  aria-label={link.name}
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Contact Form Section (Right Side) */}
        <div className="">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}

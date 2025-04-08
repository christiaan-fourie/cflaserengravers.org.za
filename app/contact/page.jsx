import { FaFacebook, FaTwitter, FaYoutube, FaTelegram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  // JSON object for content
  const contactInfo = {
    heading: "Contact Us",
    description:
      "Please don't hesitate to contact me and see how I can accommodate you and be of service.",
    address: "16 Feather Street, Jagtershof, Kuils River, Western Cape, 7580",
    email: "sales@cflaserengravers.org.za",
    phone: "+27 76 168 2245",
    socialLinks: [
      { id: 1, name: "Facebook", href: "https://facebook.com", icon: FaFacebook },
      { id: 2, name: "Twitter", href: "https://twitter.com", icon: FaTwitter },
      { id: 3, name: "YouTube", href: "https://youtube.com", icon: FaYoutube },
      { id: 4, name: "Telegram", href: "https://telegram.org", icon: FaTelegram },
    ],
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen pt-12 px-4 bg-gradient-to-b from-gray-100 to-gray-200">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 text-center">
        Contact Us
      </h1>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{contactInfo.heading}</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12">
            {contactInfo.description}
          </p>
          <p className="mb-6 text-gray-700 flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-600" />
            {contactInfo.address}
          </p>
          <p className="mb-6 text-gray-700 flex items-center gap-2">
            <FaEnvelope className="text-blue-600" />
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-blue-600 hover:underline"
            >
              {contactInfo.email}
            </a>
          </p>
          <p className="mb-6 text-gray-700 flex items-center gap-2">
            <FaPhone className="text-blue-600" />
            <a
              href={`tel:${contactInfo.phone}`}
              className="text-blue-600 hover:underline"
            >
              {contactInfo.phone}
            </a>
          </p>
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              {contactInfo.socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                  aria-label={link.name}
                >
                  <link.icon size={28} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}

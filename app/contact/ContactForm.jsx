import React from 'react'

export default function ContactForm() {
  return (
    <form className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-[#c65f3e]">Send Us a Message</h2>
        <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
        </label>
        <input
            type="text"
            id="name"
            className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-[#c65f3e] focus:border-[#c65f3e] p-3"
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
            className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-[#c65f3e] focus:border-[#c65f3e] p-3"
            required
        />
        </div>
        {/* <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
        </label>
        <textarea
            id="message"
            rows="5"
            className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-[#c65f3e] focus:border-[#c65f3e] p-3"
            required
        ></textarea>
        </div> */}
        <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
        Send Message
        </button>
  </form>
  )
}

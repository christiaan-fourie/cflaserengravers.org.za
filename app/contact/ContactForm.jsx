'use client'

import React, { useState } from 'react';

export default function ContactForm() {

    // JSON object for content using useState
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);


    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return; // Prevent multiple submissions

        setIsSubmitting(true);
        setError(""); // Clear any previous errors
        setMessage(""); // Clear any previous messages

        try {
            const response = await fetch('/api/send-mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            });

            if (response.ok) {
                console.log('Email sent successfully');
                // Optionally, reset the form fields
                setEmail("");
                setName("");
                setMessage("Message sent successfully!"); // Set success message
                setIsSent(true);
            } else {
                console.error('Failed to send email');
                setError("Failed to send email. Please try again."); // Set error message
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setError("An unexpected error occurred. Please try again later."); // Set generic error message
        } finally {
            setIsSubmitting(false);
        }

        console.log("Form submitted with:", { name, email });
    };

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "name") {
            setName(value);
        }
    };


  return (
    <form className="bg-white p-8 rounded-xl shadow-lg" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-[#c65f3e]">Send Us a Message</h2>
        {!isSent && (
            <>
                <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-[#c65f3e] focus:border-[#c65f3e] p-3"
                        required
                        onChange={handleInputChange}
                        name="name"
                        value={name}
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
                        onChange={handleInputChange}
                        name="email"
                        value={email}
                    />
                </div>


                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>
            </>
        )}


        {/* Display the Message or error */}
        <div className="mt-6">
            {message && <p className="text-green-600">{message}</p>}
            {error && <p className="text-red-600">{error}</p>}
        </div>

    </form>
  )
}

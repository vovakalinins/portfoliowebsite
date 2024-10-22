// components/ContactMe.tsx
'use client';

import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const ContactMe: React.FC = () => {
    return (
        <section id="contact" className="bg-gray-100 dark:bg-gray-800 py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white">Contact Me</h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        I&apos;d love to hear from you! Whether you have a question or just want to say hi, feel free to reach out.
                    </p>
                </div>

                {/* Contact Information */}
                <div className="flex flex-col items-center space-y-8">
                    {/* Email */}
                    <a
                        href="mailto:vladimirskalinins@outlook.com" // Replace with your email
                        className="flex items-center space-x-4 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-md"
                        aria-label="Send an email"
                    >
                        <FaEnvelope className="text-red-500 text-3xl" />
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Email Me</h3>
                            <p className="text-gray-600 dark:text-gray-300">vladimirskalinins@outlook.com</p>
                        </div>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/vladimirs-kalinins-420a39233/" // Replace with your LinkedIn profile
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-md"
                        aria-label="Visit my LinkedIn profile"
                    >
                        <FaLinkedin className="text-blue-700 text-3xl" />
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">LinkedIn</h3>
                            <p className="text-gray-600 dark:text-gray-300">Connect with me on LinkedIn</p>
                        </div>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/vovakalinins" // Replace with your GitHub profile
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-md"
                        aria-label="Visit my GitHub repository"
                    >
                        <FaGithub className="text-gray-800 text-3xl" />
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">GitHub</h3>
                            <p className="text-gray-600 dark:text-gray-300">Check out my projects on GitHub</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;

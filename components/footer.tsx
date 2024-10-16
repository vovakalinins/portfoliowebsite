// components/Footer.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer: React.FC = () => {
    // Function to scroll back to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className="bg-gray-800 text-gray-200 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Footer Content */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Navigation Links */}
                    <div className="flex space-x-6 mb-6 md:mb-0">
                        <Link href="/" className="hover:text-white transition-colors duration-300">
                            Home
                        </Link>
                        <Link href="/about" className="hover:text-white transition-colors duration-300">
                            About
                        </Link>
                        <Link href="/projects" className="hover:text-white transition-colors duration-300">
                            Projects
                        </Link>
                        <Link href="/contact" className="hover:text-white transition-colors duration-300">
                            Contact
                        </Link>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-6 mb-6 md:mb-0">
                        <a
                            href="https://www.linkedin.com/in/vladimirkalinins" // Replace with your LinkedIn profile
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 transition-colors duration-300"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href="https://github.com/vladimirkalinins" // Replace with your GitHub profile
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400 transition-colors duration-300"
                            aria-label="GitHub"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="mailto:vladimirs.kalinins@example.com" // Replace with your email
                            className="hover:text-red-500 transition-colors duration-300"
                            aria-label="Email"
                        >
                            <FaEnvelope size={24} />
                        </a>
                    </div>

                    {/* Back to Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
                        aria-label="Back to Top"
                    >
                        <FaArrowUp />
                        <span>Back to Top</span>
                    </button>
                </div>

                {/* Divider */}
                <hr className="my-8 border-gray-700" />

                {/* Footer Bottom */}
                <div className="text-center">
                    <p className="text-sm">
                        © {new Date().getFullYear()} Vladimir Kalinins. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

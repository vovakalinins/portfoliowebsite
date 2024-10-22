'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        // { name: 'About', path: '/about' },
        // { name: 'Projects', path: '/projects' },
        // { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="bg-white text-gray-800 fixed w-full z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Branding */}
                    <div className="flex-shrink-0 flex items-center text-2xl font-black text-black">
                        <Link href="/">
                            &gt; Vladimirs Kalinins
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.path}>
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-blue-600 focus:outline-none transition duration-300"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                // Close Icon
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                // Menu Icon
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.path}>
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;

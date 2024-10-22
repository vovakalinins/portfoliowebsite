// components/AboutMe.tsx
import React from 'react';
import Image from 'next/image';
import { FaReact, FaNodeJs, FaDatabase, FaPython, FaRust, FaJava, FaPlus } from 'react-icons/fa';

const AboutMe: React.FC = () => {
    return (
        <section id="about" className="bg-gray-100 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-800">About Me</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        A passionate Computer Science student at TMU, dedicated to building innovative and efficient solutions.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    {/* Profile Image */}
                    <div className="w-48 h-48 md:w-64 md:h-64 relative mb-8 md:mb-0">
                        <Image
                            src="/imgs/linkedin.png"
                            alt="Vladimir Kalinins"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full shadow-lg"
                        />
                    </div>
                    {/* Description */}
                    <div className="md:flex-1">
                        <p className="text-gray-700 mb-4">
                            Hello! I'm Vladimir Kalinins, a Computer Science student at TMU with a keen interest in software development, data analysis, and problem-solving. I thrive in collaborative environments and enjoy tackling challenging projects that push the boundaries of technology.
                        </p>
                        <p className="text-gray-700 mb-6">
                            My journey in computer science has equipped me with a strong foundation in various programming languages and frameworks. I'm constantly seeking opportunities to learn and grow, whether it's through personal projects, internships, or contributing to open-source initiatives.
                        </p>
                        {/* Skills */}
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">My Skills</h3>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
                                    <FaReact className="text-blue-500 text-2xl" />
                                    <span className="text-gray-700 font-medium">React</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
                                    <FaNodeJs className="text-green-500 text-2xl" />
                                    <span className="text-gray-700 font-medium">Node.js</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
                                    <FaDatabase className="text-yellow-500 text-2xl" />
                                    <span className="text-gray-700 font-medium">Databases</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
                                    <FaPython className="text-blue-400 text-2xl" />
                                    <span className="text-gray-700 font-medium">Python</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
                                    <FaRust className="text-orange-900 text-2xl" />
                                    <span className="text-gray-700 font-medium">Rust</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
                                    <FaJava className="text-red-900 text-2xl" />
                                    <span className="text-gray-700 font-medium">Java</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
                                    <FaPlus className="text-black text-2xl" />
                                    <span className="text-black font-medium">More!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;

// components/Projects.tsx
'use client'
import React from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
    title: string;
    description: string;
    image: string; // Path to the project image in the public folder
    demoLink?: string; // URL to live demo
    githubLink?: string; // URL to GitHub repository
}

const projects: Project[] = [
    {
        title: 'Octavee',
        description:
            'A SaaS platform for AI-powered MIDI chord generation with user authentication via Supabase SQL. Integrated Stripe for payment processing and the ChatGPT API for generating custom chord progressions.',
        image: '/imgs/octavee.png',
        demoLink: 'http://octavee.com',
        githubLink: undefined, // Code available upon request
    },
    {
        title: 'Privvid',
        description:
            'A TikTok-style video-sharing platform with user authentication via Supabase SQL. Integrated AWS S3 for video storage and retrieval, enabling video upload, sharing, and interaction features.',
        image: '/imgs/privvid.png',
        demoLink: 'http://privvid.com', // Code available upon request
        githubLink: undefined, // Code available upon request
    },
    {
        title: 'OllamaServe',
        description:
            'An open-source HTTP server built with Rust and Axum, integrating with the Ollama AI engine. Supports asynchronous prompt handling via HTTP POST requests with AI-generated responses.',
        image: '/imgs/ollamaserve.png',
        demoLink: undefined,
        githubLink: 'https://github.com/vovakalinins/OllamaServe',
    },
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-800">Projects</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Explore some of the projects I've worked on, showcasing my skills and passion for technology.
                    </p>
                </div>
                {/* Projects Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 w-full">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            {/* Project Details */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                                <p className="mt-2 text-gray-600">{project.description}</p>
                                {/* Project Links */}
                                <div className="mt-4 flex space-x-4">
                                    {project.demoLink && (
                                        <a
                                            href={project.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                                            aria-label={`${project.title} Live Demo`}
                                        >
                                            <FaExternalLinkAlt className="mr-1" />
                                            Live Demo
                                        </a>
                                    )}
                                    {project.githubLink && (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-gray-800 hover:text-gray-900 transition-colors duration-300"
                                            aria-label={`${project.title} GitHub Repository`}
                                        >
                                            <FaGithub className="mr-1" />
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
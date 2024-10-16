'use client'
import React, { useState, useEffect, useRef, FormEvent, ChangeEvent } from 'react';

const initialMessages: string[] = [
    "Loading Vladimir's Portfolio...",
    "Debugging the debugger...",
    "Unassigning pointers...",
    "Loading infinite loops...",
    "Rewriting in Rust...",
    "Just Scroll Down Already...",
    "Casting null to undefined...",
    "Synthesizing algorithms...",
    "Spinning up virtual machines...",
    "Reducing technical debt...",
];

const Hero: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [typingMessage, setTypingMessage] = useState<string>('');
    const [currentMessageIndex, setCurrentMessageIndex] = useState<number>(0);
    const [input, setInput] = useState<string>('');
    const terminalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (currentMessageIndex < initialMessages.length) {
            const message = initialMessages[currentMessageIndex];
            let isCancelled = false;

            const typeMessage = async () => {
                for (let i = 0; i < message.length; i++) {
                    if (isCancelled) break;
                    setTypingMessage((prev) => prev + message.charAt(i));
                    await new Promise((resolve) => setTimeout(resolve, 50)); // Typing speed: 50ms per character
                }
                if (!isCancelled) {
                    setMessages((prevMessages) => [...prevMessages, message]);
                    setTypingMessage('');
                    setCurrentMessageIndex((prevIndex) => prevIndex + 1);
                }
            };

            typeMessage();

            return () => {
                isCancelled = true;
            };
        }
    }, [currentMessageIndex]);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [messages, typingMessage]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (input.trim() !== '') {
            setMessages((prevMessages) => [...prevMessages, input]);
            setInput('');
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    return (
        <div className="bg-white text-green-500 min-h-screen flex items-center justify-center">
            <div
                className="bg-black text-green-500 font-mono p-4 w-full max-w-3xl h-96 overflow-y-auto rounded-md shadow-lg"
                ref={terminalRef}
            >
                {messages.map((msg, index) => (
                    <div key={index}>
                        <span>&gt; {msg}</span>
                    </div>
                ))}
                {typingMessage && (
                    <div>
                        <span>&gt; {typingMessage}<span className="animate-pulse">|</span></span>
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="flex">
                        <span>&gt; </span>
                        <input
                            type="text"
                            value={input}
                            onChange={handleInputChange}
                            className="bg-black text-green-500 font-mono focus:outline-none flex-1"
                            autoFocus
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Hero;

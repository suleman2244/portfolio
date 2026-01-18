'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';

interface Message {
    id: string;
    text: string;
    sender: 'bot' | 'user';
    timestamp: Date;
}

const INITIAL_MESSAGE: Message = {
    id: '1',
    text: "Hi! I'm Sulaman's AI assistant. Ask me anything about his expertise, projects, or how to contact him!",
    sender: 'bot',
    timestamp: new Date(),
};

const KNOWLEDGE_BASE = {
    expertise: "Sulaman is a Senior Software Engineer specializing in Frontend (React, Next.js, TypeScript) and Mobile development (React Native). He holds an M.Sc. in AI and focuses on LLMs and RAG pipelines. He is fluent in English, Hindi, Urdu, Pashto, Punjabi, and has A2 German proficiency.",
    projects: "Key projects include Tapestry Stitch AI (LLM RAG for 500+ users), JazzCash (50M+ users scale), myABL Banking, Nar'aakom Healthcare (100K+ downloads in Qatar), and the HEC National Portal. He has achieved 60% crash reduction and 45% performance gains.",
    contact: "You can reach Sulaman at sulamankhan54425@gmail.com, via WhatsApp at +49 176 6758 6298, on LinkedIn, or check his GitHub at github.com/suleman2244.",
    experience: "His career spans impactful roles at Visionet Systems (USA Remote) and Systems Limited. He has progressed from Intern to Senior Lead, architecting solutions for national platforms like JazzCash, HEC Portal, and Qatar's healthcare system.",
    skills: "Mastery in React, Next.js, TypeScript, React Native, and Flutter. AI expertise includes LangChain, Python, LLMs, and Vector Databases. Backend skills cover Node.js, FastAPI, and Cloud (Azure/AWS/Firebase).",
    languages: "Sulaman is a polyglot: Fluent in English, Hindi, Urdu, Pashto, and Punjabi. He also holds a German A2 certification."
};

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        // Simulate bot response
        setTimeout(() => {
            const response = generateResponse(inputValue);
            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: response,
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMsg]);
            setIsTyping(false);
        }, 1500);
    };

    const generateResponse = (input: string): string => {
        const text = input.toLowerCase();
        if (text.includes('expertise') || text.includes('skill') || text.includes('stack')) return KNOWLEDGE_BASE.skills + " " + KNOWLEDGE_BASE.expertise;
        if (text.includes('project') || text.includes('work')) return KNOWLEDGE_BASE.projects;
        if (text.includes('contact') || text.includes('email') || text.includes('reach')) return KNOWLEDGE_BASE.contact;
        if (text.includes('experience') || text.includes('years')) return KNOWLEDGE_BASE.experience;
        if (text.includes('hello') || text.includes('hi')) return "Hello! How can I help you today?";

        return "I'm not sure I understand that yet, but I can tell you about Sulaman's expertise, projects, or contact details!";
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4 w-[350px] sm:w-[400px] h-[500px] flex flex-col glass-card overflow-hidden shadow-2xl border-[--accent-primary]/20"
                    >
                        {/* Header */}
                        <div className="p-4 bg-[--accent-primary]/10 border-b border-[--border-glass] flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="bg-[--accent-primary] p-2 rounded-full">
                                    <Bot size={20} className="text-black" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-gradient">Sulaman AI</h3>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                        <span className="text-[10px] text-[--text-secondary] uppercase tracking-wider">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X size={20} className="text-[--text-secondary]" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-green">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`flex gap-2 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.sender === 'user' ? 'bg-[--accent-primary]/20' : 'bg-white/5'
                                            }`}>
                                            {msg.sender === 'user' ? <User size={16} /> : <Bot size={16} className="text-[--accent-primary]" />}
                                        </div>
                                        <div className={`p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                                            ? 'bg-[--accent-primary] text-black rounded-tr-none'
                                            : 'bg-white/5 border border-[--border-glass] text-[--text-primary] rounded-tl-none'
                                            }`}>
                                            {msg.text}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white/5 border border-[--border-glass] p-3 rounded-2xl rounded-tl-none">
                                        <div className="flex gap-1">
                                            <span className="w-1.5 h-1.5 bg-[--text-secondary] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <span className="w-1.5 h-1.5 bg-[--text-secondary] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <span className="w-1.5 h-1.5 bg-[--text-secondary] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Quick Actions */}
                            {!isTyping && messages.length === 1 && (
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {[
                                        "View Skills",
                                        "Key Projects",
                                        "Experience",
                                        "Contact Info"
                                    ].map((action) => (
                                        <button
                                            key={action}
                                            onClick={() => {
                                                setInputValue(action);
                                                setTimeout(() => handleSend(), 100);
                                            }}
                                            className="text-[10px] px-3 py-1.5 rounded-full border border-[--accent-primary]/30 bg-[--accent-primary]/5 text-[--accent-primary] hover:bg-[--accent-primary] hover:text-black transition-all"
                                        >
                                            {action}
                                        </button>
                                    ))}
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-[--border-glass] bg-black/20">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Ask about Sulaman..."
                                    className="w-full bg-white/5 border border-[--border-glass] rounded-xl py-3 px-4 pl-4 pr-12 text-sm focus:outline-none focus:border-[--accent-primary]/50 transition-colors"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!inputValue.trim() || isTyping}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[--accent-primary] hover:bg-[--accent-primary]/10 rounded-lg transition-all disabled:opacity-50 disabled:hover:bg-transparent"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                            <p className="text-[10px] text-[--text-secondary] text-center mt-2 flex items-center justify-center gap-1">
                                <Sparkles size={10} /> Powered by Sulaman's Portfolio AI
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className={`bg-[--accent-primary] text-black p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 relative group ${isOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                    }`}
            >
                <MessageCircle size={28} />
                <span className="absolute -top-12 right-0 bg-white text-black text-[10px] font-bold px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
                    Chat with me!
                </span>
            </motion.button>

            {isOpen && (
                <button
                    onClick={() => setIsOpen(false)}
                    className="bg-white/10 backdrop-blur-md text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 transform scale-100 opacity-100 absolute bottom-0 right-0 sm:hidden"
                >
                    <X size={28} />
                </button>
            )}
        </div>
    );
}

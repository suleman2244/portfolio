'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface FormStatus {
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: 'Sending...' });

        try {
            // Using Formspree (free service) - replace with your Formspree endpoint
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Failed to send message');
            }
        } catch {
            setStatus({ type: 'error', message: 'Failed to send message. Please try email directly.' });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className='glass-card p-8 space-y-6'
        >
            <div>
                <label htmlFor='name' className='block text-sm font-medium text-[--text-primary] mb-2'>
                    Name *
                </label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 rounded-xl bg-[--bg-card] border border-[--border-glass] text-[--text-primary] placeholder-[--text-secondary] focus:border-[--accent-primary] focus:outline-none transition-colors'
                    placeholder='Your name'
                />
            </div>

            <div>
                <label htmlFor='email' className='block text-sm font-medium text-[--text-primary] mb-2'>
                    Email *
                </label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 rounded-xl bg-[--bg-card] border border-[--border-glass] text-[--text-primary] placeholder-[--text-secondary] focus:border-[--accent-primary] focus:outline-none transition-colors'
                    placeholder='your.email@example.com'
                />
            </div>

            <div>
                <label htmlFor='message' className='block text-sm font-medium text-[--text-primary] mb-2'>
                    Message *
                </label>
                <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className='w-full px-4 py-3 rounded-xl bg-[--bg-card] border border-[--border-glass] text-[--text-primary] placeholder-[--text-secondary] focus:border-[--accent-primary] focus:outline-none transition-colors resize-none'
                    placeholder='Tell me about your project or opportunity...'
                />
            </div>

            <button
                type='submit'
                disabled={status.type === 'loading'}
                className='w-full btn-primary py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed'
            >
                {status.type === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status.message && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-center ${status.type === 'success'
                        ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                        : status.type === 'error'
                            ? 'bg-red-500/10 border border-red-500/30 text-red-400'
                            : ''
                        }`}
                >
                    {status.message}
                </motion.div>
            )}

            <p className='text-xs text-[--text-secondary] text-center'>
                Or reach out directly at{' '}
                <a href='mailto:sulamankhan54425@gmail.com' className='text-[--accent-primary] hover:underline'>
                    sulamankhan54425@gmail.com
                </a>
            </p>
        </motion.form>
    );
}

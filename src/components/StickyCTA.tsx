'use client';
import React from 'react';
import { FaWhatsapp, FaCalendarCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function StickyCTA() {
    return (
        <div className="fixed bottom-6 left-6 z-[60] flex flex-col gap-3 md:hidden">
            <motion.a
                href="https://wa.me/4917667586298"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center gap-2 bg-[#25D366] text-white p-3 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all"
                title="Chat on WhatsApp"
            >
                <FaWhatsapp size={24} />
            </motion.a>

            <motion.a
                href="https://calendar.app.google/Q6axPy9XXiu56TV9A"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex items-center gap-2 bg-blue-600 text-white p-3 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all"
                title="Google Meet"
            >
                <FaCalendarCheck size={24} />
            </motion.a>
        </div>
    );
}

'use client';
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full glass-card hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center w-10 h-10 border border-[--border-glass]"
            aria-label="Toggle Theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                transition={{ duration: 0.5, type: 'spring' }}
            >
                {theme === 'dark' ? (
                    <FiMoon className="text-[--accent-primary] text-xl" />
                ) : (
                    <FiSun className="text-orange-500 text-xl" />
                )}
            </motion.div>
        </button>
    );
}

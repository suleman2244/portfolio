'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
    className?: string;
    fallbackSrc?: string;
}

export default function OptimizedImage({
    src,
    alt,
    className,
    fallbackSrc = '/images/placeholder.png',
    ...props
}: OptimizedImageProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-[--bg-card] animate-pulse z-10 flex items-center justify-center"
                    >
                        <div className="w-8 h-8 border-2 border-[--accent-primary]/30 border-t-[--accent-primary] rounded-full animate-spin"></div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Image
                src={error ? fallbackSrc : src}
                alt={alt}
                className={`transition-all duration-700 ${isLoading ? 'scale-110 blur-sm' : 'scale-100 blur-0'}`}
                onLoad={() => setIsLoading(false)}
                onError={() => {
                    setError(true);
                    setIsLoading(false);
                }}
                {...props}
            />
        </div>
    );
}

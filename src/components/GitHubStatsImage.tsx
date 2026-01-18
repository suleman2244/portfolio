'use client';

import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

interface GitHubImageProps {
    src: string;
    alt: string;
    fallbackTitle: string;
}

const GitHubStatsImage: React.FC<GitHubImageProps> = ({ src, alt, fallbackTitle }) => {
    const [hasError, setHasError] = useState(false);

    if (hasError) {
        return (
            <div className='text-center p-8 text-[--text-secondary]'>
                <FaGithub className='text-4xl mx-auto mb-4 opacity-50' />
                <p className='text-sm mb-2'>📊 {fallbackTitle} temporarily unavailable</p>
                <a
                    href='https://github.com/suleman2244'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-[--accent-primary] hover:underline text-sm inline-flex items-center gap-2'
                >
                    View GitHub Profile →
                </a>
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className='w-full max-w-lg object-contain'
            loading='lazy'
            onError={() => setHasError(true)}
        />
    );
};

export default GitHubStatsImage;

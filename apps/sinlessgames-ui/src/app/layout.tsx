import React from 'react';
import './global.css';
import Background from '../components/background';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://sinlessgamesllc.com/'),
  title: 'SinLess Games',
  description: 'SinLess Games is a game development studio that creates highly immersive games with well-thought-out storylines and great graphics.',
  generator: 'Next.js',
  creator: 'Timothy A. Pierce',
  publisher: 'SinLess Games LLC',
  formatDetection: {
    email:     true,
    telephone: true,
    address:   true,
  }
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Background 
          image="https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg"
        />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

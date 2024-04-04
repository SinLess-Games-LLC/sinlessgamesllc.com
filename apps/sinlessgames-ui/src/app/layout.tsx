import React from 'react';
import './global.css';
import Background from '../components/background';
import type { Metadata } from 'next'
import StyledComponentsRegistry from './lib/registry'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import App from 'next/app';


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
        <AppRouterCacheProvider>
          <StyledComponentsRegistry>
            <Background 
              $image="https://img.freepik.com/free-photo/glowing-spaceship-orbits-planet-starry-galaxy-generated-by-ai_188544-9655.jpg" 
            />
            {children}
          </StyledComponentsRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;

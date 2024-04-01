import React from 'react';
import './global.css';


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

import React from 'react';

const ColoredLine = ({ color }) => {
  return (
    <hr
      style={{
        border: 0,
        height: '2px',
        backgroundImage: `linear-gradient(to right, ${color}, ${color} 50%, transparent 50%, transparent)`,
      }}
    />
  );
};

export default ColoredLine;

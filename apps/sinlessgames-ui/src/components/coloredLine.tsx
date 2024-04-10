import React from 'react'

const ColoredLine = ({ color }) => {
  return (
    <hr
      style={{
        border: 0,
        height: '0.5rem',
        width: 'auto',
        borderRadius: '1rem',
        backgroundColor: `${color}`
      }}
    />
  )
}

export default ColoredLine

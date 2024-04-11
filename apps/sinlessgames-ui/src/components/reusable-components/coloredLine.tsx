import React from "react"
import styles from "./coloredLine.module.scss"

const ColoredLine = ({ color }) => {
  return (
    <hr
      className={styles.coloredLine}
      style={{
        border: 0,
        height: "0.5rem",
        width: "auto",
        borderRadius: "1rem",
        backgroundColor: `${color}`
      }}
    />
  )
}

export default ColoredLine

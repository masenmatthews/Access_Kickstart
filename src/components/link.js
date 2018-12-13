import React from "react"
import linkStyles from "./link.module.css"

export default ({ children }) => (
  <div className={linkStyles.link}>{children}</div>
)

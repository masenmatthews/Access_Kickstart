import React from "react"
import headerStyles from "./header.module.css"

export default ({ children }) => (
  <div className={headerStyles.header}>{children}</div>
)

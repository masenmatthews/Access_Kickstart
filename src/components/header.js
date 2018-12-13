import React from "react"
import headerStyles from "./header.module.css"
import { css } from "react-emotion"

export default ({ children }) => (
  <div className={headerStyles.header}>{children}</div>
)

import React from "react"
import { css } from "react-emotion"
import { rhythm } from "../utils/typography"
import Header from "../components/header"

export default ({ children }) => (
  <div>
    <div>
      <Header/>
    </div>
    <div className={css`
        margin: 0 auto;
        max-width: 1000px;
        padding: ${rhythm(0.5)};
        `}>
      {children}
    </div>
  </div>
)

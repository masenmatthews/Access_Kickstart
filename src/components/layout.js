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
        padding: ${rhythm(1.5)};
        padding-left: ${rhythm(5)};
        padding-right: ${rhythm(5)};
        `}>
      {children}
    </div>
  </div>
)

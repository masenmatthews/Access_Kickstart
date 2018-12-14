import React from "react"
import { css } from "react-emotion"
import { StaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Header from "../components/header"

export default ({ children }) => (
  <div>
    <Header/>
    <div className={css`
        margin: 0 auto;
        max-width: 1000px;
        padding: ${rhythm(0.5)};
        `}>
    {children}</div>
  </div>
)

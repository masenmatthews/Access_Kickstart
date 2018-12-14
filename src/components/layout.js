import React from "react"
import { css } from "react-emotion"
import { StaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Header from "../components/header"
import headerStyles from "./header.module.css"
import "./layout.css"

export default ({ children }) => (
  <Header>
    <div className={headerStyles.header}>{children}</div>
  </Header>
)

import React from "react"
import { css } from "react-emotion"
import { StaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import cardStyles from "./card.module.css"

export default ({ children }) => (
  <div>
    <div className={cardStyles.card}>
      <div class="card">
        {children}
      </div>
    </div>
  </div>
)

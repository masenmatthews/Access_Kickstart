import React from "react"
import { css } from "react-emotion"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

export default () => (
  <div>
    <div style={{ margin: `3rem auto`, maxWidth: 700 }}>
      <h1
      className={css`
        display: inline-block;
        border-bottom: 1px solid;
      `}
    >
      AccessiReference
    </h1>
    <div>
      <p>
        A site designed to help the web become more accessible.
      </p>
    </div>
    <p>I want to make my application more accessible for people that struggle with...</p>
    <table>
      <tr>
        <th>Vision</th>
        <th>Hearing</th>
        <th>Mobility</th>
      </tr>
      <tr>
        <th>Speech</th>
        <th>Cognition</th>
        <th>Other</th>
      </tr>
    </table>
  </div>
</div>
)

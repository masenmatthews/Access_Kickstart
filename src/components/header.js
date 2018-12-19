import React from "react"
import { css } from "react-emotion"
import { StaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import "./layout.css"

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  }
    render={data => (
    <div>
      <div
        className={css`
          background-color: #ffb6c1;
          margin: 0 auto;
          max-width: 1000px;
          padding: ${rhythm(0.5)};
          padding-top: ${rhythm(0.5)};
        `}
      >
        <Link to={`/`}>
          <h3
            className={css`
              display: inline-block;
              font-style: normal;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <Link
          to={`/about/`}
          className={css`
            float: right;
            margin-left: ${rhythm(1)};
          `}
        >
          About
        </Link>
        <Link
          to={`/contact/`}
          className={css`
            float: right;
          `}
        >
          Contact
        </Link>
      </div>
    </div>
    )}
  />
)

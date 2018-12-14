import React from "react"
import { css } from "react-emotion"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import Header from "../components/header"

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <p>
          A site designed to help the web become more accessible.
        </p>
      </div>
      <p>I want to make my application more accessible for people that struggle with...</p>
      <Link
        to={`/vision/`}
        className={css`
          margin-left: ${rhythm(3.5)};
          margin-right: ${rhythm(1)};
        `}
        >
        Vision
      </Link>
      <Link
        to={`/hearing/`}
        className={css`
          margin-right: ${rhythm(1)};
        `}
        >
        Hearing
      </Link>
      <Link
        to={`/mobility/`}
        className={css`
          margin-right: ${rhythm(1)};
        `}
        >
        Mobility
      </Link>
      <Link
        to={`/speech/`}
        className={css`
          margin-right: ${rhythm(1)};
        `}
        >
        Speech
      </Link>
      <Link
        to={`/cognition/`}
        className={css`
          margin-right: ${rhythm(1)};
        `}
        >
        Cognition
      </Link>
      <Link
        to={`/other/`}
        className={css`
          margin-right: ${rhythm(2.5)};
        `}
        >
        Other
      </Link>
    </Layout>
  )
}

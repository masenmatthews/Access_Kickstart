import React from "react"
import { css } from "react-emotion"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import Card from "../components/card"

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <p>
          A site designed to help the web become more accessible.
        </p>
      </div>
      <p>I want to make my application more accessible for people that struggle with...</p>
      <Card>
        <Link
          to={`/vision/`}
          >
          Vision
        </Link>
      </Card>
      <Card>
        <Link
          to={`/hearing/`}
          >
          Hearing
        </Link>
      </Card>
      <Card>
        <Link
          to={`/mobility/`}
          >
          Mobility
        </Link>
      </Card>
      <Card>
        <Link
          to={`/speech/`}
          >
          Speech
        </Link>
      </Card>
      <Card>
        <Link
          to={`/cognition/`}
          >
          Cognition
        </Link>
      </Card>
      <Card>
        <Link
          to={`/other/`}
          >
          Other
        </Link>
      </Card>
    </Layout>
  )
}

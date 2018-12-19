import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Card from "../components/card"
import { css } from "react-emotion"

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <p>
          A site designed to help the web become more accessible.
        </p>
      </div>
      <p>I want to make my application more accessible for people that struggle with...</p>
      <div className={css`
           display: flex;
           flex-direction: row;
           align-items: center;
           justify-content: center;
          `}>
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
      </div>
    </Layout>
  )
}

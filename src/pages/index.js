import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Card from "../components/card"
import { css } from "react-emotion"
import eye from '../images/eye.png'
import ear from '../images/ear.png'
import hand from '../images/hand.png'
import mouth from '../images/mouth.png'
import brain from '../images/brain.png'
import elipses from '../images/elipses.png'

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
          <img src={eye} alt="eye icon"/>
          <Link
            to={`/vision-index/`}
            >
            Vision
          </Link>
        </Card>
        <Card>
          <img src={ear} alt="ear icon"/>
          <Link
            to={`/hearing-index/`}
            >
            Hearing
          </Link>
        </Card>
        <Card>
          <img src={hand} alt="hand icon"/>
          <Link
            to={`/mobility-index/`}
            >
            Mobility
          </Link>
        </Card>
      </div>
      <div className={css`
           display: flex;
           flex-direction: row;
           align-items: center;
           justify-content: center;
          `}>
        <Card>
          <img src={mouth} alt="mouth icon"/>
          <Link
            to={`/speech-index/`}
            >
            Speech
          </Link>
        </Card>
        <Card>
          <img src={brain} alt="brain icon"/>
          <Link
            to={`/cognition-index/`}
            >
            Cognition
          </Link>
        </Card>
        <Card>
          <img src={elipses} alt="elipses icon"/>
          <Link
            to={`/other-index/`}
            >
            Other
          </Link>
        </Card>
      </div>
    </Layout>
  )
}

import React from "react"
import { css } from "react-emotion"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Collapsible from 'react-collapsible';

export default ({ data }) => (
  <Layout>
    <h1>Vision</h1>
    <h2>Help me with...</h2>
      <Link
        to={'/site-navigation-visual/'}
        className={css`
          display: inline-block;
        `}
        >
        Understanding how screen readers work
      </Link>
      <Link
        to={'/site-navigation-visual/'}
        className={css`
          display: inline-block;
        `}
        >
        Making my site navigtable for blind and visually impaired users
      </Link>
      {/* Need to figure out how to style collapsible trigger - CSS module has been tricky */}
      <Collapsible
        trigger="Click here to see helpful shortcuts related to zooming!">
          <p>Zoom in</p>
          <ul>CMND + (Mac)</ul>
          <ul>CTRL + (Windows)</ul>
          <p>Zoom out</p>
          <ul>CMND - (Mac)</ul>
          <ul>CTRL - (Windows)</ul>
      </Collapsible>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

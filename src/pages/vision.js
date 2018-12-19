import React from "react"
import { css } from "react-emotion"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Collapsible from 'react-collapsible';

export default ({ data }) => (
  <Layout>
    <h1>Vision</h1>
    <h2>Help me with...</h2>
    <div>
        <Link
          to={'/about-screen-readers/'}
          className={css`
            display: inline-block;
          `}
          >
          Understanding how screen readers work
        </Link>
      </div>
      <div>
        <Link
          to={'/about-alt-and-aria-tags/'}
          className={css`
            display: inline-block;
          `}
          >
          Learning how to implement alt and ARIA tags effectively
        </Link>
      </div>
      <div>
        <Link
          to={'/blind-and-low-vision-navigation/'}
          className={css`
            display: inline-block;
          `}
          >
          Making my site navigtable for blind and visually impaired users
        </Link>
      </div>
      <div>
        <Link
          to={'/blind-and-low-vision-more-resources/'}
          className={css`
            display: inline-block;
          `}
          >
          Finding more resources to learn about blind and low vision accessibility
        </Link>
      </div>
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

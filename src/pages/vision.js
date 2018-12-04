import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Collapsible from 'react-collapsible';

export default ({ data }) => (
  <Layout>
    <h1>Vision</h1>
    {/* Need to figure out how to style collapsible trigger - CSS module has been tricky */}
    <Collapsible
      trigger="Helpful shortcuts (click to expand)">
    <p>Zoom in</p>
      <ul>CMND + (Mac)</ul>
      <ul>CTRL + (Windows)</ul>
    <p>Zoom out</p>
      <ul>CMND - (Mac)</ul>
      <ul>CTRL - (Windows)</ul>
    </Collapsible>
    <h3>Making navigation easier for people with vision problems</h3>
    <h4>Always include the following:</h4>
      <ol>1. Concise page titles (i.e. "Vision - AccessiReference")</ol>
      <ol>2. Primary language of the page within the HTML element (i.e. html lang="en")</ol>
      <ol>*These help screen readers communicate information in an effective way!</ol>
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

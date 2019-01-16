import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>Screen Readers</h1>
    <p>Some blind users use screen readers to navigate through websites.</p>
    <p>This video explains screen readers in more detail:</p>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/Lktz1KXbTOU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <h2>Screen Readers and Landmarks</h2>
    <p>It's important to consider the use of landmarks throughout the development process because of the role that these tags play in regards to screen readers.</p>
    <p>HTML5 (and their ARIA equivalent) landmarks include:</p>
    <ul>HTML5 -> ARIA equivalents:
      <li>header -> role=banner</li>
      <li>nav -> role=navigation</li>
      <li>n/a -> role=search</li>
      <li>main -> role=main</li>
      <li>footer -> role=contentinfo</li>
      <li>aside -> role=complimentary</li>
      <li>section -> role=region</li>
      <li>article -> role=article</li>
      <li>form -> role=form</li>
    </ul>
  </Layout>
)

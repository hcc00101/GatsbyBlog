import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You Just Hit A Route That Doesn&#39;t Exist... The Sadness.</p>
  </Layout>
)

export default NotFoundPage
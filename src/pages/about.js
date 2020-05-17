import React from "react"
import { graphql} from 'gatsby'


import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/HeroSection'
import Infoblock from '../components/Reusable/infoblock'
import DualInfoblock from '../components/Reusable/DualInfoblock'
import TeamPhotoSection from '../components/About/TeamPhotoSection'
const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home"/>
    <HeroSection
    img={data.img.childImageSharp.fluid}
    title="About the Platform"
    subtitle=""
    heroclass="about-background"/>
    <DualInfoblock heading="A Message From CEO"/>
    <Infoblock heading="About Vision"/>
    <TeamPhotoSection/>
  </Layout>
)

export const query = graphql`

{
  img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG

        }
      }
    }
}

`

export default AboutPage

import React from "react"
import { graphql} from 'gatsby'


import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reusable/HeroSection'
import Infoblock from '../components/Reusable/infoblock'
import DualInfoblock from '../components/Reusable/DualInfoblock'
import Coursecart from '../components/cart/Coursecart'
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home"/>
    <HeroSection
    img={data.img.childImageSharp.fluid}
    title="I write code"
    subtitle="Learncodeonline.in"
    heroclass="hero-background"/>
    <Infoblock heading="About us"/>
    <Coursecart courses={data.mycourses}/>
    <DualInfoblock heading="Our Team"/>
  </Layout>
)

export const query = graphql`

{
  img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG

        }
      }
    }
    mycourses:allContentfulCourses{
      edges{
        node{
          id
          title
          price
          category
          description{
            description
          }
          image{
            fixed(width:200,height:120){
              ...GatsbyContentfulFixed_tracedSVG

            }
          }
        }
      }
    }
}

`

export default IndexPage

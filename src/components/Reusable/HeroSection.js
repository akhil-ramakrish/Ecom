import React from 'react'
import BackgroundImage from 'gatsby-background-image'


export default function HeroSection(props) {
    return (
        <BackgroundImage
        className={props.heroclass}
        fluid={props.img}
       >
           <h1 className="text-white text-uppercase  text-center display-4">{props.title}</h1>
           <div>
            <h4 className="text-warning">{props.subtitle}</h4>
           </div>
        </BackgroundImage>
    )
}

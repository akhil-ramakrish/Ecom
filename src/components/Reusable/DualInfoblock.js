import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'
import Teamimg from '../../images/Akhil.jpg'
export default function DualInfoblock(props) {
    return (
        <section className="my-5 py-4 bg-theme">
            <div className="container">
                  <Heading title={props.heading}/>
                  <div className="row">
                       <div className="col-8 mx-auto">
                           <p className="lead text-white mb-5">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy. 
                           </p>
                       </div>
                       <div className="col-4">

                       <div className="card bg-dark">
                        <img className="card-img-top" src={Teamimg} alt="Card image cap"/>
                        <div className="card-body text-white">
                            <h5 className="card-title">Just Click photos</h5>
                            <p className="card-text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy. 
                            </p>
                          <Link to="/" className="btn btn-warning btn-block">{props.heading}</Link>
                        </div>
                        </div>

                       </div>
                  </div>
            </div>
        </section>
    )
}

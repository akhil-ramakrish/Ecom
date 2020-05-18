import React from 'react'
import Heading from '../Reusable/Heading'
export default function Contact() {
    return (
        <section className="py-3">
             <Heading title="Contact Us"/>
             <div className="col-10 col-sm-8 mx-auto">
                     <form action="" method="POST">
                          <div className="form-group">
                                <input 
                                type='text' 
                                name='name' 
                                id="name" 
                                placeholder="Your Name" 
                                className="form-control"/>
                                </div>
                                <div className="form-group">
                                <input 
                                type='email' 
                                name='e-mail' 
                                id="e-mail" 
                                placeholder="Your E-mail" 
                                className="form-control"/>
                                </div>
                                <div className="form-group">
                                <input 
                                type='text' 
                                name='mobile' 
                                id="mobile" 
                                placeholder="Your mobile" 
                                className="form-control"/>
                                </div>
                                <div className="form-group">
                                <textarea 
                                type='text' 
                                name='description' 
                                id="description" 
                                placeholder="Your Description" 
                                className="form-control"/>
                                </div>
                                <button type="submit" className="btn btn-outline-info btn-block">
                                    Submit
                                </button>
                     </form>
             </div>
        </section>
    )
}

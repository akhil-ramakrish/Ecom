import React, { Component } from 'react'
import Heading from '../Reusable/Heading'
import Img from 'gatsby-image'
export default class Coursecart extends Component {
    state={
        courses:[],
        mycourses:[],
        categories:['all','Mobile','Web']
    }
    componentDidMount(){
        this.setState({
            courses:this.props.courses.edges,
            mycourses:this.props.courses.edges
        });
    }

    categoryClicked =(category)=>{
        if(category==='all'){
            this.setState({mycourses:this.state.courses});
        }
        else{
            let filteredCoursesByCategory = this.state.courses.filter(course=>course.node.category===category);
            this.setState({mycourses:filteredCoursesByCategory});
        }
       
    }
    render() {
        
        return (
            <section className="py-5">
                <div className="container">
                      <Heading title="courses"/>
                      <div className="row my-3">
                          <div className="col-10 mx-auto text-center">
                                    {this.state.categories.map((category,i)=>{
                                        return (
                                            <button type="button" 
                                            key={i} 
                                            className="btn btn-info m-3 px-3"
                                            onClick={()=>{
                                                this.categoryClicked(category)
                                            }}>
                                                {category}
                                            </button>
                                        );
                                    })}
                          </div>
                        
                      </div>
                      <div className="row">
                           {
                              this.state.mycourses.map(({node})=>{
                                   return(
                                       <div key={node.id} className="col-11 col-md-6 d-flex my-3 mx-auto">
                                              <Img fixed={node.image.fixed}/>
                                              <div className="flex-grow-1 px-3">
                                                    <div className="d-flex justify-content-between">
                                                       <h6 className="mb-0">{node.title}</h6>
                                                       <h6 className="mb-0 text-success">${node.price}</h6>
                                                    </div>
                                                    <p className="text-muted">
                                                        <small>
                                                            {node.description.description}
                                                        </small>
                                                    </p>
                                                    <button 
                                                        data-item-id={node.id}
                                                        data-item-name={node.title}
                                                        data-item-price={node.price}
    
                                                        data-item-url="https://react-gatsby-ecommerce.netlify.app/"
                                                        data-item-image={node.image.fixed.src}
                                                    className="btn btn-warning snipcart-add-item">
                                                        Join Now!
                                                    </button>
                                              </div>
                                       </div>

                                   );    
                              }) 
                           }
                      </div>
                </div>
            </section>
        )
    }
}

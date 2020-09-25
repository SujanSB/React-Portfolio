import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Project extends Component {
    state = {  }
    render() { 
        return ( 
        <Fade bottom>
        <div className='project'>
            <img src={this.props.imageSrc} alt={this.props.title}></img>
        <div className="cover">
            <div className="middle">
            <h2>{this.props.title}</h2>
            <a href={this.props.url}>View Details</a>
        </div>
        </div> 
        </div>
            </Fade>);
    }
}
 
export default Project;
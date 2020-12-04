import React,{useState,useEffect} from 'react'
import Fade from "react-reveal/Fade";
// import data from "../yourdata";
import Footer from './Footer'

import '../Blog.css'
function Blog() {
    const [blogss,setBlogs]=useState()

    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@invalidsb45')
        .then(resp => resp.json())
        .then(blogs => setBlogs({blogs}))
    }, [])
    
    const renderBlogs = () => {
        console.log(blogss)
        // if(blogss.items){
        // return blogss.items.map(post => {
        // return <div className="column">
        // <div className="card">
        // <img src = {post.thumbnail} className = "Img" alt="aayena"/>
        // <h1 className = "cardHeader">{post.title}</h1>
        // <p className = "cardText">Posted on: {post.pubDate}</p>
        // <a href = {post.link} className = "Link"> Read the Full Blog Here!</a>
        // </div> 
        // </div> })}
        }



    return (
        <div className="Blogs">
              <h1>
  <Fade bottom cascade> Blogs.</Fade>
  </h1>
        <div>
            {renderBlogs()}
        </div>



  <Fade bottom>
        <Footer/>





      </Fade>
        </div>
    )
}

export default Blog

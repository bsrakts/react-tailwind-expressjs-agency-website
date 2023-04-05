import React, {useEffect, useState} from "react";
import Fade from 'react-reveal/Fade';
import { fetchBlogPosts } from '../../../api/api';
import './Blog.css';

export const Blog = () => {

  const [blogContent, setBlogContent] = useState([]);

  useEffect(() => {
    fetchBlogPosts().then((data) => setBlogContent(data));
  }, [setBlogContent]);

  const blog = blogContent.slice(0, 4).map((blog) => {
    const {id, blogİmg, blogTag, blogTitle, blogText} = blog;

        const firstBlog = id > 8 ;

        if (blog = firstBlog){
            return (
                <Fade left>
                    <div className="first-blog">
            <div className='first-blog-img'>
              <img
                src={blogİmg}
                className="duration-500 hover:scale-125"
              />
            </div>
            <p className="first-blog-tag">
              <span>
                {blogTag}
              </span>
            </p>
            <h3 className="first-blog-title">
              {blogTitle}
            </h3>
            <p className="first-blog-text">
            {blogText}
            </p>
            {/* <span className="read-more">
              {readMore}
            </span> */}
          </div>
                </Fade>
            )
        } else {
            return (
                <Fade left>
                    <div className="latest-blog">
                <img src={blogİmg}  />
                <div className="latest-blog-content">
                <p className="first-blog-tag">
                <span>
                  {blogTag}
                </span>
              </p>
                  <h4 className="latest-blog-title">
                    {blogTitle}
                  </h4>
                  <p className="latest-blog-text">
                    {blogText}
                  </p>
                </div>
              </div>
                </Fade>
            )
        }
    })

    return(
        <div className="blog">
        <h1 className="blog-header">
          Blog
        </h1>
        <div className="blog-content">
          {blog}
        </div>
    </div>
    )
}
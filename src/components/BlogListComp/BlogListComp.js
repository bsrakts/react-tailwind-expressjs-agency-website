import React from 'react';
import { Link } from "react-router-dom";

export const BlogListComp = ({blogContent}) => {

  return (
    <ul className="blog-list">
      {blogContent.map((blogPost, index) => (
        <li key={blogPost.id} className="latest-blog py-8">
          <Link to={`/blog/${blogPost.id}`}>
            <img src={blogPost.blogİmg} alt="Blog post image" />
            <div className="latest-blog-content">
              <p className="first-blog-tag">
                <span>
                  {blogPost.blogTag}
                </span>
              </p>
              <h4 className="latest-blog-title">
                {blogPost.blogTitle}
              </h4>
              <p className="latest-blog-text">
                {blogPost.blogText}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
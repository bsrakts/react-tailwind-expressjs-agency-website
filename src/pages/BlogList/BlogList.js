import React, { useState, useEffect } from 'react';
import {BlogListComp} from '../../components/BlogListComp/BlogListComp'
import { Pagination } from '../../components/Pagination/Pagination';
import { fetchBlogPosts } from '../../api/api';

import './BlogList.css'

export const BlogListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const [blogContent, setBlogContent] = useState([]);

  useEffect(() => {
  fetchBlogPosts().then((data) => setBlogContent(data));
}, [setBlogContent]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBlogContent = blogContent.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="blog-list-page container mx-auto">
      <div className='blog-list-content'>
      <h1 className='blog-container-title'>Bloglarımız</h1>
      <BlogListComp 
      blogContent={currentBlogContent} />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={blogContent.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      </div>
    </div>
  );
};

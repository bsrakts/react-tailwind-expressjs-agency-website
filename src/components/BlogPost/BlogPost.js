import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const BlogPost = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/blog-posts/${id}`)
      .then((response) => {
        setBlogPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div >
      <h2>{blogPost.blogTitle}</h2>
      <p>{blogPost.blogText}</p>
    </div>
  );
}
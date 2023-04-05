import axios from 'axios';


//fetch blog
export const fetchBlogPosts = async () => {
  const response = await axios.get('http://localhost:5000/api/blog-posts');
  const data = response.data;
  return data;
};

//fetch project
export const fetchProjectDetail = async () => {
  const responseProject = await axios.get('http://localhost:5000/api/projects');
  const projectData = responseProject.data;
  return projectData;
}

//fetch services
export const fetchServices = async () => {
  const responseService = await axios.get('http://localhost:5000/api/services');
  const serviceData = responseService.data;
  return serviceData;
}
import React, { useEffect, useState } from 'react';
import { fetchBlogPosts } from '../../../api/api';
import Fade from 'react-reveal/Fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { CiHashtag } from "react-icons/ci";
import './Blog.css';

export const Blog = () => {

  SwiperCore.use([Navigation]);

  const [blogContent, setBlogContent] = useState([]);

  useEffect(() => {
    fetchBlogPosts().then((data) => setBlogContent(data));
  }, []);

  return (
    <div className="blog">
      <div className="blog-content">
        <div className='blog-swiper-content'>
          <h1 className="blog-header">Blog</h1>
          <Swiper
            className='max-h-[30rem] bg-transparent'
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={-25}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev-blog',
              nextEl: '.swiper-button-next-blog',
            }}
            scrollbar={{ draggable: true }}
            speed={4000}
            loop={true}
            autoplay={{
              delay: 4000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false
            }}
          >
            {blogContent.slice(0, 4).map((blog) => (
              <SwiperSlide
                key={blog.id}>
                <Fade left>
                  <div className="first-blog">
                    <div className='px-4 py-8 h-[29rem]'>
                      <div className="first-blog-img">
                        <img src={blog.blogİmg}
                          className="blog-img duration-500 hover:scale-105"
                        />
                        <div className='flex-row w-full'>
                          <p className="first-blog-tag">
                            <span className='flex items-center'>
                              <a className='font-semibold text-black text-xl'>
                                <CiHashtag />
                              </a>
                              {blog.blogTag}</span>
                          </p>
                          <div className='blog-title flex w-full h-full justify-center mt-16'>
                            <h3 className="first-blog-title">{blog.blogTitle}</h3>
                          </div>
                        </div>
                      </div>
                      <div className='blog-text-content'>
                        <p className="first-blog-text">
                          {blog.blogText}</p>
                      </div>
                      {/* <span className="read-more">
                    {readMore}
                  </span> */}
                    </div>
                  </div>
                </Fade>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="prev-next-button-blog">
            <div className="swiper-button-prev-blog">
              <BsArrowLeft />
            </div>
            <div className="swiper-button-next-blog">
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};  
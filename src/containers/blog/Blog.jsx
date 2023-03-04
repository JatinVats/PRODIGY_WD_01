import React from 'react' ;
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import { Article } from '../../components';
import './blog.css' ;
const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
    <div className='gpt3__blog-heading'>
      <h1 className='gradient__text'>Blogs,<br /> In the making...</h1>
    </div>
    <div className='gpt3__blog-container' >
      <div className='gpt3__blog-container_groupA'>
        <Article imgUrl={blog01} date="Sep 26, 2021" text="DALL-E, a new era?"/>
      </div>
      <div className='gpt3__blog-container_groupB'>
      <Article imgUrl={blog02} date="Feb 26, 2023" text="Open AI's ChatGPT or Google's Bard."/>
      <Article imgUrl={blog03} date="March 02, 2024" text="Meaning of AI dominance."/>
      <Article imgUrl={blog04} date="Sep 26, 2021" text="Choose wisely, the future lies there."/>
      <Article imgUrl={blog05} date="Sep 28, 2021" text="Humans VS Artificial Intelligence."/>
      </div>
    </div>
    </div>
  )
}

export default Blog ;

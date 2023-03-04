import React from 'react' ;
import './whatGPT3.css' ;
import { Feature } from '../../components';
const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is Aligned" text="Offering direct links to world class artificial intelligence websites and prospects. Search for everything you want through AI. Lead yourself to your own success"/>
      </div>

      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore the library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="Search solutions through world class, leading chat AI services. Captions, Assignments, Projects:  All in one click." />
        <Feature title="Image Processing" text="Text to Image, Image to Upscaled Image, Replacing Objects. All is possible"/>
        <Feature title="Education" text=" Learn from AI itself. Code it, Ask it, Make it Possible"/>
      </div>
     
    </div>
  )
}

export default WhatGPT3 ;

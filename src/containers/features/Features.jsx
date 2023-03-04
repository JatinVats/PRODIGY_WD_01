import React from 'react' ;
import { Feature } from '../../components';
import './features.css' ;

const featuresData = [

  {
    title: 'DALL-E',
    text: 'DALL-E is an AI model developed by OpenAI that generates high-quality images from textual descriptions using state-of-the-art language and image processing techniques.',
  },
  {
    title: 'Chat-GPT',
    text: 'ChatGPT is an advanced language model developed by OpenAI designed to provide assistance and respond to various user queries.',
  },
  {
    title: 'Open-CV',
    text: 'OpenCV is an open-source computer vision library with 2,500+ optimized algorithms for image and video processing used in various applications.',
  },
  {
    title: 'Tensor-Flow',
    text: 'TensorFlow is a popular open-source machine learning framework used to build and train neural networks for various applications.',
  }
]



const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className='gpt3__features-container'>
      {
        featuresData.map((item,index)=>(
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))
      }
    </div>
    </div>
  )
}

export default Features;

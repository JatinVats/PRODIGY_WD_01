import React from 'react'
import {Blog, Features, Footer, Header,Possibility, WhatGPT3} from './containers';
import { CTA, Brand, Navbar} from './components' ;
import './App.css' ;
import './index.css' ;


const App = () => {
  return (
    <div className='App'>
        
         <Navbar  /> 
         {/* done */}
         <Header /> 
         {/* done */}
        
         <Brand />
         {/* done  */}
         <WhatGPT3 />

         {/* done  */}
         <Features />
         {/* done  */}
         <Possibility />
         {/* done  */}
         <CTA />
         {/* done  */}
         <Blog />
         {/* done  */}
         <Footer />
        </div >
        )
        }

export default App ;

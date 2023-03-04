import { logRoles } from '@testing-library/react';
import React from 'react' ;
import './footer.css' ;
import gpt3Logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading '>
        <h1 className='gradient__text'>Design is a conversation</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>One Touch Register</p>
        {/* <button type='button'></button> */}
      </div>


      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt="gpt3logo" />
          <p>Gurugram India <br /> All Rights Reserved</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
        </div>

        <div className='gpt3__footer-links_div'>
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
        </div>

        <div className='gpt3__footer-links_div'>
      <h4>Get in touch</h4>
        <p>Gurugram India</p>
        <p>8700303710</p>
        <p>vatsjatin804@gmail.com</p>
        </div>

      </div>
<div className='gpt3__footer-copyright'>
  <p>@2023 Aligned. Dil Se Indian.</p>
</div>

    </div>
  )
}

export default Footer ;

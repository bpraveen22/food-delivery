import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
              <img src={assets.logo} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perferendis nesciunt quidem nostrum, sit inventore eum modi atque voluptatem. Perferendis amet adipisci dolore explicabo eos dolores quisquam, nulla harum suscipit.</p>
              <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
              </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
                </div>
            <div className="footer-content-right">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>+91 88464 02864</li>
                        <li>contactusdelivery@gmail.com</li>
                    </ul>
            </div>
           
        </div>
      <hr />
      <p className="footer-copyright">
        Copyrights 2024 food delivery - All Rights Reserved. 
      </p>
    </div>
  )
}

export default Footer

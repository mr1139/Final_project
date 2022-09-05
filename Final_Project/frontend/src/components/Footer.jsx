import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/footer.css"

const Footer = () => {
  return (
    <div className='f-container'>
        <div className="f-row">
          <div className="f-col">
            <img src="/images/logo/logo.png" alt="" />
            <p><strong>CLOTHING HOUSE.</strong> , Inc. is an International  corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of clothing such as Mens,Kids, Women wear, accessories, and services. The company is headquartered in near Pimpri Chincahwad , Bhosari , Pune metropolitan area.</p>
          </div>
          <div className="f-col">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="f-col">
            <h2>Category</h2>
            <ul>
              <li>
                <NavLink to="/">Men</NavLink>
              </li>
              <li>
                <NavLink to="/">Women</NavLink>
              </li>
              <li>
                <NavLink to="/">Kids</NavLink>
              </li>
            </ul>
          </div>
          <div className="f-col">
            <h2>Stay in touch with us</h2>
            <div className="socials">
                <a href="/"><img src="/images/socials/facebook.png" alt="" /></a>
                <a href="/"><img src="/images/socials/instagram.png" alt="" /></a>
                <a href="/"><img src="/images/socials/twitter.png" alt="" /></a>
                <a href="/"><img src="/images/socials/youtube.png" alt="" /></a>
            </div>
          </div>
        </div>
        <div className="f-copyrow">
           <strong> <p>&copy; 2022. Created by Md.Rahil.</p></strong>
        </div>
    </div>
  )
}

export default Footer
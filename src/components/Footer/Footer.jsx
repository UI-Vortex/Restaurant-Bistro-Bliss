import React from 'react'
import './Footer.css'
import logos from '../../assets/wholeLogo.png'
import { Link } from 'react-router-dom'
import insta1 from '../../assets/Home-image/instagram1.png'
import insta2 from '../../assets/Home-image/instagram2.png'
import insta3 from '../../assets/Home-image/instagram3.png'
import insta4 from '../../assets/Home-image/instagram4.png'

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer_container">
          <div className="footer_logo">
            <img src={logos} alt="logo" />
            <p className="footer_desc">In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
            <div className="footer_icons">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-github"></i>
            </div>
          </div>
          <div className="footer_pages">
            <h4 className="title_page">Pages</h4>
            <ul className="footer_list">
              <li className="footer_item"><Link to="/">Home</Link></li>
              <li className="footer_item"><Link to="/about">About</Link></li>
              <li className="footer_item"><Link to="/menu">Menu</Link></li>
              <li className="footer_item"><Link to="/pages">Blog</Link></li>
              <li className="footer_item"><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          {/* <div className="footer_instagram">
            <h4 className="insta_title">Follow Us On Instagram</h4>
            <div className="insta_container">
              <div className="insta_img">
                <img src={insta1} alt="instagram" />
                <img src={insta2} alt="instagram" />
              </div>
              <div className="insta_img">
                <img src={insta3} alt="instagram" />
                <img src={insta4} alt="instagram" />
              </div>
            </div>
          </div> */}
        </div>
      </footer>
    </>
  )
}

export default Footer
import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Home_background from '../../assets/Home-image/home-background-image.png'

function Home() {
  return (
    <>
      <main className='main'>


        <div className="best_food">
          <div className="best_food_texts">
            <h1 className="food_title">Best food for
              your taste</h1>
            <p className="food_desc">Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
            <div className="food_buttons">
              <button className="food_button_1"><Link to="/table">Book A Table</Link></button>
              <button className="food_button_2"><Link to="/menu">Explore Menu</Link></button>
            </div>
          </div>
        </div>

        <div className="browse_menu">
          <h1 className="browse_menu_title">Browse Our Menu</h1>
        </div>

        {/* main menu has Started */}
        <div className="main_menu">
          <div className="menu_flexer">
            <div className="menu_categories">
              <i class="fa-solid fa-mug-hot"></i>
              <h3 className="menu_title">Breakfast</h3>
              <p className="menu_desc">In the new era of technology we look in the future with certainty and pride for our life.</p>
              <b className="menu_explore"><Link to="/menu">Explore Menu</Link></b>
            </div>
            <div className="menu_categories">
              <i class="fa-solid fa-bowl-food"></i>
              <h3 className="menu_title">Breakfast</h3>
              <p className="menu_desc">In the new era of technology we look in the future with certainty and pride for our life.</p>
              <b className="menu_explore"><Link to="/menu">Explore Menu</Link></b>
            </div>
            <div className="menu_categories">
              <i class="fa-solid fa-wine-glass"></i>
              <h3 className="menu_title">Breakfast</h3>
              <p className="menu_desc">In the new era of technology we look in the future with certainty and pride for our life.</p>
              <b className="menu_explore"><Link to="/menu">Explore Menu</Link></b>
            </div>
            <div className="menu_categories">
              <i class="fa-solid fa-cake-candles"></i>
              <h3 className="menu_title">Breakfast</h3>
              <p className="menu_desc">In the new era of technology we look in the future with certainty and pride for our life.</p>
              <b className="menu_explore"><Link to="/menu">Explore Menu</Link></b>
            </div>
          </div>
        </div>
        {/* main_menu has been finished. */}


        {/* Healthy food has started here */}
        <div className="healthy_food">
          <div className="food_flexer">
            <div className="food_image">
              <img src={Home_background} alt="error" />
              <div className="food_image_texts">
                <h3 className="image_title">Come and visit us</h3>
                <div className="image_icons_flexer">
                  <div className="image_icons">
                    <i class="fa-solid fa-phone"></i>
                    <p className="image_desc">(414) 857 - 0107</p>
                  </div>
                  <div className="image_icons">
                    <i class="fa-solid fa-envelope"></i>
                    <p className="image_desc">happytummy@restaurant.com</p>
                  </div>
                  <div className="image_icons">
                  <i class="fa-solid fa-location-dot"></i>
                    <p className="image_desc">837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="food_health">
              <h1 className="health_title">We provide healthy food for your family.</h1>
              <b className="health_story">Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</b>
              <p className="health_desc">At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
              <button className="health_button"><Link to="/about">More About Us</Link></button>
            </div>
          </div>
        </div>
        {/* health food ended here */}


        







      </main>
    </>
  )
}

export default Home
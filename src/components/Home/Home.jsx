import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Home_background from '../../assets/Home-image/home-background-image.png'
import service1 from '../../assets/Home-image/service1.png'
import service2 from '../../assets/Home-image/service2.png'
import service3 from '../../assets/Home-image/service3.png'
import service4 from '../../assets/Home-image/service4.png'

import customer1 from '../../assets/Home-image/customer1.png'
import customer2 from '../../assets/Home-image/customer2.png'
import customer3 from '../../assets/Home-image/customer3.png'

import blog_food_big from '../../assets/Home-image/blog_food_big.png'
import section1 from '../../assets/Home-image/section1.png'
import section2 from '../../assets/Home-image/section2.png'
import section3 from '../../assets/Home-image/section3.png'
import section4 from '../../assets/Home-image/section4.png'
import Footer from '../Footer/Footer'

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

        {/* unique food started */}
        <div className="unique">
          <h1 className="unique_title">We also offer unique services for your events</h1>
          <div className="unique_flexer">
            <div className="unique_services">
              <img className='service_image' src={service1} alt="Error" />
              <h3 className="service_title">Caterings</h3>
              <p className="service_desc">In the new era of technology we look in the future with certainty for life.</p>
            </div>
            <div className="unique_services">
              <img className='service_image' src={service2} alt="Error" />
              <h3 className="service_title">Birthdays</h3>
              <p className="service_desc">In the new era of technology we look in the future with certainty for life.</p>
            </div>
            <div className="unique_services">
              <img className='service_image' src={service3} alt="Error" />
              <h3 className="service_title">Weddings</h3>
              <p className="service_desc">In the new era of technology we look in the future with certainty for life.</p>
            </div>
            <div className="unique_services">
              <img className='service_image' src={service4} alt="Error" />
              <h3 className="service_title">Events</h3>
              <p className="service_desc">In the new era of technology we look in the future with certainty for life.</p>
            </div>
          </div>
        </div>
        {/* Unique food ended */}

        {/* Customers say started */}

        <div className="customer">
          <h1 className="customer_title">What Our Customers Say</h1>
          <div className="customer_flexer">
            <div className="customer_op">
              <h2 className="op_title">“The best restaurant”</h2>
              <p className="op_desc">Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</p>
              <hr className="op_line" />
              <div className="op_comment">
                <img src={customer1} alt="Error" />
                <div className="op_comment_say">
                  <h3 className="op_comment_title">Sophire Robson</h3>
                  <p className="op_comment_desc">Los Angeles, CA</p>
                </div>
              </div>
            </div>
            <div className="customer_op">
              <h2 className="op_title">“Simply delicious”</h2>
              <p className="op_desc">Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.</p>
              <hr className="op_line" />
              <div className="op_comment">
                <img src={customer2} alt="Error" />
                <div className="op_comment_say">
                  <h3 className="op_comment_title">Matt Cannon</h3>
                  <p className="op_comment_desc">San Diego, CA</p>
                </div>
              </div>
            </div>
            <div className="customer_op">
              <h2 className="op_title">“One of a kind restaurant”</h2>
              <p className="op_desc">The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.</p>
              <hr className="op_line" />
              <div className="op_comment">
                <img src={customer3} alt="Error" />
                <div className="op_comment_say">
                  <h3 className="op_comment_title">Andy Smith</h3>
                  <p className="op_comment_desc">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customers say ended */}

        {/* blog started */}

        <div className="blog">
          <div className="blog_article">
            <h1 className="article_title">Our Blog & Articles</h1>
            <Link to="/pages">
            <button className="article_button">Read All Articles</button>
            </Link>
          </div>

          <section className="blog_foods_flexer">
            <div className="blog_food">
              <img className='blog_image' src={blog_food_big} alt="Error" />
              <h4 className="blog_date">January 3, 2023</h4>
              <h3 className="blog_title">The secret tips & tricks to prepare a perfect burger & pizza for our customers</h3>
              <p className="blog_desc">Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.</p>
            </div>
            <div className="blog_food_2">
              <div className="section_blog">
                <div className="section_blog_texts">
                  <img src={section1} alt="error" />
                  <div className="blog_basic">
                    <h4 className="basic_date">January 3, 2023</h4>
                    <h2 className="basic_title">How to prepare the perfect french fries in an air fryer</h2>
                  </div>
                </div>
                <div className="section_blog_texts">
                  <img src={section2} alt="error" />
                  <div className="blog_basic">
                    <h4 className="basic_date">January 3, 2023</h4>
                    <h2 className="basic_title">How to prepare the perfect french fries in an air fryer</h2>
                  </div>
                </div>
                <div className="section_blog_texts">
                  <img src={section3} alt="error" />
                  <div className="blog_basic">
                    <h4 className="basic_date">January 3, 2023</h4>
                    <h2 className="basic_title">How to prepare the perfect french fries in an air fryer</h2>
                  </div>
                </div>
                <div className="section_blog_texts">
                  <img src={section4} alt="error" />
                  <div className="blog_basic">
                    <h4 className="basic_date">January 3, 2023</h4>
                    <h2 className="basic_title">How to prepare the perfect french fries in an air fryer</h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* blog ended */}

        {/* Footer has started */}

        <Footer />

        {/* Footer has ended */}


      </main>
    </>
  )
}

export default Home
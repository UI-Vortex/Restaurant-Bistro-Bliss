import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

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


        </main>
    </>
  )
}

export default Home
import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home_image" src="image/b3.jpg" />
            <div className="home_row">
            <Product 
              id="123450"
              title="the lean startup the lean startup the lean startup"
              price="1111.96"
              rating={5}
              image="image/img1.jpg"
          />
          <Product 
              id="123451"
              title="the lean startup"
              price="1111.96"
              rating={5}
              image="image/img2.jpg"
          />
            </div>
            <div className="home_row">
            <Product 
              id="123452"
              title="the lean startup"
              price="1111.96"
              rating={5}
              image="image/img3.jpg"
          />
          <Product 
              id="123453"
              title="the lean startup"
              price="1111.96"
              rating={5}
              image="image/img4.jpg"
          />
          <Product 
              id="123454"
              title="the lean startup"
              price="1111.96"
              rating={5}
              image="image/img5.jpg"
          />
            </div>
            <div className="home_row">
            <Product 
              id="123455"
              title="the lean startupthe lean startupthe lean startup"
              price="1111.96"
              rating={5}
              image="image/img6.jpg"
          />
            </div>
         
            
        </div>
    )
}

export default Home

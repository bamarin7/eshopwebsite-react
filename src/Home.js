import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2478&q=80" alt="Home Page" className="home__image" />

          <div className="home__row">
            <Product
              id='1234'
              title='C4 Sport Pre Workout Powder Blue Raspberry - Pre Workout Energy with 3g Creatine Monohydrate + 135mg Caffeine and Beta-Alanine Performance Blend - NSF Certified for Sport | 30 Servings'
              price={17.49}
              image='https://m.media-amazon.com/images/I/817UWJozaRL._AC_SX425_.jpg'
              rating={5}
            />
            <Product
              id='5678'
              title='Muscle Milk Genuine Protein Shake, Chocolate, 20g Protein, 11.16 Fl Oz (Pack of 12), Packaging May Vary'
              price={19.19}
              image='https://m.media-amazon.com/images/I/812a7X9nSBL._SX466_PIbundle-12,TopRight,0,0_AA466SH20_.jpg'
              rating={4}
            />
          </div>
          <div className="home__row">
            <Product
              id='5611'
              title='Muscle Milk Genuine Protein Shake, Chocolate, 20g Protein, 11.16 Fl Oz (Pack of 12), Packaging May Vary'
              price={19.19}
              image='https://m.media-amazon.com/images/I/812a7X9nSBL._SX466_PIbundle-12,TopRight,0,0_AA466SH20_.jpg'
              rating={4}
            />
            <Product
              id='5622'
              title='Muscle Milk Genuine Protein Shake, Chocolate, 20g Protein, 11.16 Fl Oz (Pack of 12), Packaging May Vary'
              price={19.19}
              image='https://m.media-amazon.com/images/I/812a7X9nSBL._SX466_PIbundle-12,TopRight,0,0_AA466SH20_.jpg'
              rating={4}
            />
            <Product
              id='5633'
              title='Muscle Milk Genuine Protein Shake, Chocolate, 20g Protein, 11.16 Fl Oz (Pack of 12), Packaging May Vary'
              price={19.19}
              image='https://m.media-amazon.com/images/I/812a7X9nSBL._SX466_PIbundle-12,TopRight,0,0_AA466SH20_.jpg'
              rating={4}
            />
          </div>
          <div className="home__row">
            <Product
              id='5644'
              title='Muscle Milk Genuine Protein Shake, Chocolate, 20g Protein, 11.16 Fl Oz (Pack of 12), Packaging May Vary'
              price={19.19}
              image='https://m.media-amazon.com/images/I/812a7X9nSBL._SX466_PIbundle-12,TopRight,0,0_AA466SH20_.jpg'
              rating={4}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
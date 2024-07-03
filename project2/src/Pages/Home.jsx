import React from 'react'
import Layout from '../Layout'
import style from'../components/styles.css'


//image
import fashion3 from '../image/fashion3.jpg'
import fashion4 from '../image/fashion4.jpg'
import fashion5 from '../image/fashion5.jpg'
import fashion2 from '../image/fashion2.jpg'

export default function Home() {
  return (
    <Layout>
        <section className="py-5 mt-5">
        <div className="container text-center">
          <h1 className='p-5'>Welcome to Mens Fashion</h1>
          <img src={fashion2} alt="Fashion 2" className='img-fluid rounded-3 custom-border ' 
        />
          <p>Your guide to a healthier and happier life.</p>
        </div>
      </section>
      
      <section className="py-5 text-center bg-secondary ">
        <div className="container">
          <h2>Adult men's fashion</h2>
          <p>Learn more about our mission and values.</p>
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="img-container">
                <img src={fashion3} alt="Image 1" className="img-fluid rounded-5" />
                <p>Fashion man in leather jacket and glasses</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="img-container">
                <img src={fashion4} alt="Image 2" className="img-fluid rounded-5" />
                <p>Need inspiration for men's casual style</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="img-container">
                <img src={fashion5} alt="Image 3" className="img-fluid rounded-5" />
                <p>OOTD style inspiration for men</p>
              </div>
            </div>
          </div>
        </div>
      </section>   
  </Layout>
  )
}

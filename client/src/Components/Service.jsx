import React from 'react'

const Service = () => {
  return (
    <section className="services" id="services">
        <h2 className="heading">My <span>Services</span></h2>

        <div className="services-container">
            <div className="services-box">
                <i className='bi bi-code-slash'></i>
                <h3>Web Development</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi itaque similique, architecto
                    eaque ut quas delectus pariatur nesciunt in eligendi mollitia dicta.</p>
                <a href="#" className="button">Read More</a>
            </div>
            <div className="services-box">
                <i className='bi bi-paint'></i>
                <h3>Graphic Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi itaque similique, architecto
                    eaque ut quas delectus pariatur nesciunt in eligendi mollitia dicta.</p>
                <a href="#" className="button">Read More</a>
            </div>
            <div className="services-box">
                <i className='bi bi-bar-chart-alt'></i>
                <h3>Digital Marketing</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi itaque similique, architecto
                    eaque ut quas delectus pariatur nesciunt in eligendi mollitia dicta.</p>
                <a href="#" className="button">Read More</a>
            </div>
        </div>
    </section>
  )
}

export default Service
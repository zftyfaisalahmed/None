import React from 'react'

const Home = () => {
  return (
    <section className='home' id='home'>
      <div className="home-content">
        <h3>Hello, I am</h3>
        <h1>Faisal Ahmed</h1>
        <p>
          I'm a web developer who loves to create beautiful and functional websites
          for people who want to make a difference in the world.
        </p>
        <p>
          Currently I'm a student of The Jump Digital School, where I'm learning how to
          create beautiful and functional websites using HTML, CSS, JavaScript, and WordPress.
        </p>
        <div className='social-media'>
          <a href="#"><i className='bi bi-facebook'></i></a>
          <a href="#"><i className='bi bi-twitter'></i></a>
          <a href="#"><i className='bi bi-instagram'></i></a>
          <a href="#"><i className='bi bi-linkedin'></i></a>
        </div>
        <a href="#" className='button'>Download CV</a>
      </div>
      <div className="profession-container">
          <div className="profession-box">
              <div className="profession" style={{"--i":"0"}}>
                  <i className='bi bi-code-slash'></i>
                  <h3>Web Developer</h3>
              </div>
              <div className="profession" style={{"--i":"1"}}>
                  <i className='bi bi-camera'></i>
                  <h3>Photographer</h3>
              </div>
              <div className="profession" style={{"--i":"2"}}>
                  <i className='bi bi-palette'></i>
                  <h3>Web Designer</h3>
              </div>
              <div className="profession" style={{"--i":"3"}}>
                  <i className='bi bi-video-recording'></i>
                  <h3>Videographer</h3>
              </div>

              <div className="circle"></div>
          </div>

          <div className="overlay"></div>
      </div>
      <div className="home-img">
          <img src="" alt="" />
      </div>
    </section>
  )
}

export default Home
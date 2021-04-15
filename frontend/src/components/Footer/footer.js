import React from 'react'

import '../../css-sass/footer.css'

export const Footer = () => {
  return (
    <div className='footer-root'>
      <footer>
        <div className="container">
          <div className="sec about-us">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita iure illum, incidunt corporis dolor delectus at ipsam eveniet quis aliquid. Tempora explicabo nulla ipsa ipsum similique ratione debitis obcaecati voluptas? Ipsa ab corrupti maxime adipisci qui enim ratione autem!</p>
            <ul className="sci">
              <li><a href="#"><i class="fab fa-facebook-square" /></a></li>
              <li><a href="#"><i class="fab fa-twitter" /></a></li>
              <li><a href="#"><i className="fab fa-instagram" alt='instagram' /></a></li>
              <li><a href="#"><i class="fab fa-youtube" /></a></li>
              <li><a href="#"><i class="fab fa-github" /></a></li>
            </ul>
          </div>
          <div className="sec quick-links">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="#">Quick Links</a></li>
              <li><a href="#">Quick Links</a></li>
              <li><a href="#">Quick Links</a></li>
              <li><a href="#">Quick Links</a></li>
            </ul>

          </div>
          <div className="sec quick-links">
            <h2>Shop</h2>
            <ul>
              <li><a href="#">Shop Links</a></li>
              <li><a href="#">Shop Links</a></li>
              <li><a href="#">Shop Links</a></li>
              <li><a href="#">Shop Links</a></li>
            </ul>

          </div>
          <div className="sec contact-us">
            <h2>Contact Us</h2>
            <ul className='info'>
              <li>
                <span><i class="fas fa-map-marker-alt"></i></span>
                <span>Address</span></li>
              <li>
                <span><i class="fas fa-phone"></i></span>
                <p>
                  <a href="tel:+12345678900">+1 234 567 8900</a> <br />
                  <a href="tel:+12345678900">+1 234 567 8900</a>
                </p>
              </li>
              <li><span><i class="fas fa-envelope"></i></span>
                <p><a href="mailto:example@example.com">example@example.com</a></p>
              </li>
            </ul>

          </div>
        </div>
      </footer>
      <div className="copyright-text">
        <p>Source: <a href="https://www.youtube.com/watch?v=g-HY5peTHcs">Responsive Footer Design</a></p>
      </div>
    </div>
  )
}

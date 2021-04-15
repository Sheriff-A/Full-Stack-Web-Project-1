import React from 'react'

import '../../css-sass/contact-page.css'

export const ContactPage = () => {
    return (
        <div>
            <section>
                <div className="contact-page-container">
                    <div className="contactInfo">
                        <div>
                            <h2>Contact Info</h2>
                            <ul className="info">
                                <li>
                                    <span><i class="fas fa-map-marker-alt"></i></span>
                                    <span>Address</span>
                                </li>
                                <li>
                                    <span><i class="fas fa-envelope"></i></span>
                                    <span>example@example.com</span>
                                </li>
                                <li>
                                    <span><i class="fas fa-phone"></i></span>
                                    <span>+1 234 567 8900</span>
                                </li>
                                <li>
                                    <span><i class="fas fa-info"></i></span>
                                    <span><a
                                        href="https://www.youtube.com/watch?v=ZafzM_z9PLs&t=103s">
                                        Responsive Contact Us
                                        </a></span>
                                </li>
                            </ul>
                        </div>
                        <ul className='sci'>
                            <li><a href="#"><i class="fab fa-facebook-square"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                            <li><a href="#"><i class="fab fa-github"></i></a></li>
                        </ul>
                    </div>
                    <div className="contactForm">
                        <h2>Send A Message</h2>
                        <div className="formBox">
                            <div className="inputBox w50">
                                <input type="text" required />
                                <span>First Name</span>
                            </div>
                            <div className="inputBox w50">
                                <input type="text" required />
                                <span>Last Name</span>
                            </div>
                            <div className="inputBox w50">
                                <input type="email" required />
                                <span>Email</span>
                            </div>
                            <div className="inputBox w50">
                                <input type="text" required />
                                <span>Mobile Number</span>
                            </div>
                            <div className="inputBox w100">
                                <textarea required></textarea>
                                <span>Write Your Message Here...</span>
                            </div>
                            <div className="inputBox w100">
                                <input type="button" value="Send" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

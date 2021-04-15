import React, {Component} from 'react'
import '../../css-sass/socials.css'

export default class Socials extends Component {
    constructor(props){
        super(props)

        this.state = {
            instagram: 'https://www.instagram.com/_sheriff_a_/',
            github: 'https://github.com/Sheriff-A',
            facebook: 'https://www.facebook.com/profile.php?id=100002498183296',
            youtube: 'https://www.youtube.com/channel/UCfv2-RDR7k4W3hjgzqpL7Pg',
            twitter: 'https://twitter.com/manshari619'
        }
    }

    render(){
        return (
            <div>
                <div className='social-container'>
                {/* Instagram */}
                <a href={this.state.instagram} className="social-item instagram">
                <i className="fab fa-instagram" alt='instagram'></i>
                </a>
                {/* Github */}
                <a href={this.state.github} className="social-item github">
                <i class="fab fa-github"></i>
                </a>
                {/* Facebook */}
                <a href={this.state.facebook} className="social-item facebook">
                <i class="fab fa-facebook-square"></i>
                </a>
                {/* Youtube */}
                <a href={this.state.youtube} className="social-item youtube">
                <i class="fab fa-youtube"></i>
                </a>
                {/* Twitter */}
                <a href={this.state.twitter} className="social-item twitter">
                <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
        )
    }
}
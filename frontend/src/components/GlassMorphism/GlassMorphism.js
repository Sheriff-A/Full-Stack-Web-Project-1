import React from 'react'
import '../../css-sass/glassMorphism.css'

export const GlassMorphism = () => {
    return (
        <div>
           <section>
               <div className="glass-morph-box">
                   <div className='square' style={{'--i':0}}></div>
                   <div className='square' style={{'--i':1}}></div>
                   <div className='square' style={{'--i':2}}></div>
                   <div className='square' style={{'--i':3}}></div>
                   <div className='square' style={{'--i':4}}></div>
                   <div className="container">
                       <div className="form">
                           <h2>Login Form</h2>
                           <form>
                               <div className="inputBox">
                                   <input type="text" placeholder='Username'/>
                                </div>
                                <div className="inputBox">
                                   <input type="password" placeholder='Password'/>
                                </div>
                                <div className="inputBox">
                                   <input type="button" value='Login'/>
                                </div>
                                <p className="forget">Forgot password? <a href="#">
                                    Click here
                                </a>
                                </p>
                                <p className="forget">Don't have an account? <a href="#">
                                    Sign up
                                </a>
                                </p>
                                <p className="forget">Source: <a 
                                href="https://www.youtube.com/watch?v=mW0Z1T8l7sU">
                                    Glass Morphism
                                </a>
                                </p>
                           </form>
                       </div>
                   </div>
               </div>
           </section>
        </div>
    )
}

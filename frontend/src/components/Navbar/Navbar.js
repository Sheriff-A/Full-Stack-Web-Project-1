import React from 'react'
import { Link } from 'react-router-dom'


// CSS
import '../../css-sass/navbar.css'

export const Navbar = () => {
    return (
        <header>
            {/* Logo */}
            <Link to={'/'} className='logo'>
                {/* <i className='bi bi-house' alt='home-icon' /> */}
                MANSHARI
            </Link>
            <div className='navbar-toggle'></div>
            <nav>
                <ul>
                    <li>
                        <Link className='nav-link' to={'/dark-mode'}>Dark Mode</Link>
                    </li>
                    <li>
                        <Link className='nav-link' to={'/glass'}>Glass Morphism</Link>
                    </li>
                    <li>
                        <Link className='nav-link' to={'/contact'}>Contact Us</Link>
                    </li>
                    <li>
                        <a className='nav-link' href='https://www.youtube.com/watch?v=kEt5DCHeyJo'>Source</a>
                    </li>
                </ul>
            </nav>
            <div className="clearfix"></div>
        </header>

        // <div className='navbar'>
        //     {/* Navbar Options */}
        //     <div className='bar'>
        //         <li className='navbar-logo'>
        //             <Link to={'/'}>
        //                 <i className='bi bi-house' alt='home-icon' />
        //             </Link>
        //         </li>
        //         <ul>
        //             <li>
        //                 <Link to={'/dark-mode'}>
        //                     Dark Mode
        //             </Link>
        //             </li>
        //             <li>
        //                 <Link to={'/glass'}>
        //                     Glass Morphism
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link to={'/contact'}>
        //                     Contact
        //             </Link>
        //             </li>
        //         </ul>
        //     </div>
        // </div>
    )
}

import React from 'react'
import '../../css-sass/dark-mode.css'

import {Toggle} from '../../utils/toggle'

export const DarkModePage = ({theme, toggleTheme}) => {
    return (
        <div id='dark-mode-page'>
            <div>
            <div className='dark-mode-box enable-dark-mode'>
                <h1>{theme === 'light' ? 'Light' : 'Dark'} Mode</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe laboriosam facere libero exercitationem voluptas pariatur minus amet maxime unde consequuntur. Similique quo molestias quis at neque numquam eligendi quod corrupti asperiores alias ipsam aspernatur quidem, nulla minima velit a molestiae.</p>
                <Toggle bool={theme} func={toggleTheme} trueValue='light' />
                <br/>
                <p>Source: <a id='source-link'
                 href="https://www.youtube.com/watch?v=Zgvm-mP9_3A&t=1373s">
                How to Add Dark Mode
                </a></p>
            </div>
            </div>
        </div>
    )
}

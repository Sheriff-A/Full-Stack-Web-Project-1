import React from 'react'
import '../css-sass/toggle.css'

export const Toggle = ({bool, func, trueValue}) => {
    console.log(bool)
    return (
        <div id='toggle-button' className={bool !== trueValue ? '' : 'checked'} onClick={func}>
            <i className="indicator"></i>
        </div>
    )
}

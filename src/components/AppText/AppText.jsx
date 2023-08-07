import React from 'react'
import './AppText.css'

function AppText({ text, style }) {
    return (
        <div className='apptext'>
            <p style={style}>{text}</p>
        </div>
    )
}

export default AppText

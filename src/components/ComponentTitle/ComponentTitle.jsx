import React from 'react'
import './ComponentTitle.css'

function ComponentTitle({ title, subTitle }) {
    return (
        <div className='componentheader'>
             <h1>{title}</h1>
             <p className='component__subheader'>{subTitle}</p>
        </div>
    )
}

export default ComponentTitle

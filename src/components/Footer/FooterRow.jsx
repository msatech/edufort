import React from 'react'
import './FooterRow.css'

function FooterRow({content , title}) {
    return (
        <div className='footerrow__section'>
            <p className='footerrow__title'>{title} <span className='title__line'></span> </p>
            <div className='footerrow__grid__component'>
                {content.map((item) => (
                    <p className='footerrow__content'> {item} </p>
                ))}
            </div>
        </div>
    )
}

export default FooterRow

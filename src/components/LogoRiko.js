import React from 'react'
import "./LogoRikoComponents.css"

export default function LogoRiko({width, height}) {
    return (
        <div className='moldura-logo' style={{ width: `${width}`, height: `${height}` }}>
            {/* <img src={LogoRiko}/> */}
            <h1>RikoGuim</h1>
        </div>
    )
}

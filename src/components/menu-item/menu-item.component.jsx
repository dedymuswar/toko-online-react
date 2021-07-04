import React from 'react'
import { withRouter } from 'react-router-dom'

import './menu-item.style.scss'
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    // console.log({history, match}); match.url adalah '/'
    return (
        <div onClick={() => history.push(`${match.url}${linkUrl}`) }
            className={`${size} menu-item`}>
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="content">
                <div className="title">{title.toUpperCase()}</div>
                <span className="subtitle">BELANJA SEKARANG</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)

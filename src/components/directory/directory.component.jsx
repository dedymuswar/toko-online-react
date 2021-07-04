import React, { Component } from 'react'
import './directory.style.scss'
import MenuItem from '../menu-item/menu-item.component'

export class Directory extends Component {
    constructor(){
        super();
        this.state = {
            sections : [
                {
                    title: 'topi',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'hats'
                },
                {
                    title: 'baju',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'sepatu',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'wanita',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'pria',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                }
            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({id,title, imageUrl, linkUrl}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} linkUrl={linkUrl} />
                ))}
            </div>
        )
    }
}

export default Directory


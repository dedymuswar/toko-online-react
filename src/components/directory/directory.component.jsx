import React from 'react'
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectDirectoryItems } from '../../redux/directory/directory.selector';

import './directory.style.scss'
import MenuItem from '../menu-item/menu-item.component'

const Directory = ({ sections }) => {
    return (
        <div className="directory-menu">
            {sections.map(({ id, title, imageUrl, linkUrl }) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} linkUrl={linkUrl} />
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    sections: selectDirectoryItems
})

export default connect(mapStateToProps)(Directory)


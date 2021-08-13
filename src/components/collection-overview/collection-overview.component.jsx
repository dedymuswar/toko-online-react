import React from 'react'
import './collection-overview.style.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const CollectionOverview = ({ shopCollections }) => {
    return (
        <div className="collection-overview">
            {shopCollections.map(({ id, title, items }) => (
                <CollectionPreview key={id} title={title} items={items} />
            ))}
        </div>
    )

    // CONTOH DATA YANG DIAMBIL
    // hats : {
    //     id: 1,
    //     title: 'Hats',
    //     routeName: 'hats',
    //     items: [
    //       {
    //         id: 11,
    //         name: 'Brown Brim',
    //         imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
    //         price: 25
    //       }
    //     ]
    // }
}

const mapStatetoProps = createStructuredSelector({
    shopCollections: selectCollectionsForPreview
})

export default connect(mapStatetoProps)(CollectionOverview)

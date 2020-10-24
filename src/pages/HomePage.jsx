import React from 'react';

import { Banner, ProductsList } from '../components';

function HomePage() {
    return (
        <React.Fragment>
            <Banner />
            <div className="bottom-gradient"></div>
            <ProductsList />
        </React.Fragment>
    )
}

export default HomePage

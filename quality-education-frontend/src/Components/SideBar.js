import React from 'react';
import useFetch from './Fetch';
import LatestNews from './LatestNews';

function SideBar() {
    const { data: articles, loading, error } = useFetch('http://localhost:8000/articles')

    return (
        <div className='hero'>
            {loading && <p>Loading......</p>}
            {error && <p>{error}</p>}
            <div>{articles && <LatestNews articles={articles} title={"All Articles!"} />}  </div>
        </div>
    )
}

export default SideBar;
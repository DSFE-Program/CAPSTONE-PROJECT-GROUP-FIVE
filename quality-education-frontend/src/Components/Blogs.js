import React from 'react'
import useFetch from './Fetch';
import Blog from "./Blog"


const Blogs = () => {

    const { data: articles, loading, error } = useFetch('http://localhost:8000/articles')

    return (
        <div className='blg'>
            {loading && <p>Loading......</p>}
            {error && <p>{error}</p>}
            {articles && <Blog articles={articles} title={"All Articles!"} />}
        </div>
    )
}
export default Blogs;
import React from 'react'
import Corousel from './Corousel';
import useFetch from './Fetch';
import Courses from './Courses';


const Home = () => {

    const { data: articles, loading, error } = useFetch('http://localhost:8000/articles')


    return (
        <div className='hero'>
            <Corousel />
            {loading && <p>Loading......</p>}
            {error && <p>{error}</p>}
            {articles && <Courses articles={articles} title={"All Articles!"} />}

        </div>
    )
}


export default Home;


import React from 'react'
import Corousel from './Corousel';
import useFetch from './Fetch';
import Courses from './Courses';

const Home = () => {

    const {data:articles, loading, error} = useFetch('http://localhost:8000/articles')


    return (
        <div className='hero'>
            <Corousel/>
            
             {loading&& <p>Loading......</p>}
        {error&&<p>{error}</p>}
        {articles &&<Courses articles = {articles} title = {"All Articles!"}/>}
         
             {/* <div className="card bg-dark text-white border-0">
                <img src="assets/bk-1.png" className="card-img" alt="background" height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className='container'>
                        <h5 className="card-title display-3 fw-bolder text-warning"   >EDUCATION IS THE FOUNDATION OF EVERY SUCCESSFULL NATION!!!</h5>
                        <p className="card-text lead fs-2 fw-bolder text-success">CHECK OUT OUR LIST OF COURSES...</p>
                        <button type="button" className="btn btn-warning">Warning</button>
                    </div>
                </div>
            </div> */}
           
           {/*  <Products/>  */}
          {/*  <Corousel/>
           <Courses/>
            <Footertech/>
             */}
            
        </div>

    )

}


export default Home;

import React from "react";



const Courses = ({ articles, titles, handleDelete }) => {

    return (
        <div>
            <div>
                <div className='container my-0 py-5'>
                    <div className='row'>
                        <div className='col-12 mb-5'>
                            <h6 className='lead fw-bold text-center text-warning'>BROWSE THROUGH OUR ONLINE COURSES....</h6>
                            <hr />
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                    </div>
                </div>
            </div>

            {articles.map((article) => (
                <div  >
                    <div>

                        {/* course_card STARTS */}
                        <div key={article.id} className=' course_card col-md-3 mb-4 ' >
                            <div class="d-lg-flex   card h-100 text-center p-4 ">
                                <div class="course_card border-0 me-lg-4 mb-lg-0 mb-4">
                                    <div class="backgroundEffect"></div>
                                    <div class="pic">   <img class="" src="./assets/ms-word.jpg" alt="" />
                                        <p class="h-1 mt-4">{article.title} </p>
                                        <p class="text-muted text-truncate mt-3 ">{article.body}</p>
                                        <div class="d-flex align-items-center justify-content-between mt-3 pb-3">
                                            <div class="btn btn-primary">Start Course Now !!!</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* course_card ENDS */}
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Courses;
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./Fetch";
import SideBar from "./SideBar";
import Comment from "./Comment";


const BlogDetails = () => {
    const Navigate = useNavigate()
    const { id } = useParams();
    const { data: articles, loading, error } = useFetch('http://localhost:8000/articles/' + id);

    return (
        <div className="container bld">
            <p>{loading}</p>
            {error && <div> {error} </div>}
            {articles && (
                <section >
                    <div className="container" >
                        <div className="row">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src="../assets/bk-2.jpg" className="card-img" alt="..." />
                                </div>
                                <div className="col-md-8">

                                    <div className="card-body">
                                        <ul>
                                            <li><a href="#!"><i>
                                                <img src="../assets/bk-3.png" className="avatar" alt="..." />
                                            </i>{articles.author} </a></li>

                                            <small><li>2 days ago</li></small>
                                        </ul>
                                        <h5 className="card-title">{articles.title} </h5>
                                        <p className="back"></p>

                                        <p className="card-text truncate-overflow">{articles.body} </p>

                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">

                                                <p className="comment card-text"><a href="#!"><i className="far fa-comment-dots"></i><span> 26</span></a></p>
                                            </div>
                                            <div className="col">
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Comment />
                        <hr />
                        <div className="sideblogs" ><SideBar /></div>
                    </div>
                </section>



            )}
            {/* <Link to="/homepage"> <button className="btn">View All Articles</button></Link>
 */}
        </div>
    );
}

export default BlogDetails;
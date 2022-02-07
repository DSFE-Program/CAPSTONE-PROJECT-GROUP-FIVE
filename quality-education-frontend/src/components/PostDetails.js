import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./Fetch";
import Header from "./Header";
import { Link } from "react-router-dom";

const PostDetails = () => {
    const {data:articles, loading, error} = useFetch('http://localhost:8000/articles')

    const Navigate = useNavigate()
    const { id } = useParams();
    const { data: articles, loading, error } = useFetch('http://localhost:8000/articles/' + id);

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            fetch('http://localhost:8000/articles/' + articles.id, {
                method: 'DELETE',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            })
                .then(() => {
                    Navigate('/homepage')
                })
        }
    }

    return (

        <div className="article-preview">
            <Header />
            <p>{loading}</p>
            {error && <div> {error} </div>}
            {articles && (
                <div className="article-preview" >
                    <h1> {articles.title} </h1><br />
                    <h3>Article By: {articles.author}</h3><br />
                    <div>{articles.body}</div>
                </div>
            )}
           {articles &&<Blog articles = {articles} title = {"All Articles!"}  />}  
        </div>
    );
}

export default PostDetails;
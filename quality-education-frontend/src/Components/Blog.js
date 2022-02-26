import React from "react";
import "./blog.css"
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

const Blog = ({ articles, titles }) => {

  const [title] = useState('');
  const [author] = useState('');
  const [body] = useState('');
  const { id } = useParams();

  return (
    <div className="container">
      {/* blog starts */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />

      <div className="text-center ">
        <h5 className="navyi h2 mb-5 ">All Posts</h5>
      </div>
      {articles.map((article) => (
        <span className="border border-warning">
          <section >
            <div className="container" key={article.id}>
              <div className="row">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src="./assets/bk-2.jpg" className="card-img" alt="..." />
                  </div>
                  <div className="col-md-8">

                    <div className="card-body">
                      <ul>
                        <li><a href="#!"><i>
                          <img src="./assets/bk-3.jpg" className="avatar" alt="..." />
                        </i>{article.author} </a></li>

                        <small><li>2 days ago</li></small>
                      </ul>
                      <h5 className="card-title">{article.title} </h5>
                      <p className="back"></p>

                      <p className="card-text tronc">{article.body} </p>
                      <a className="readmore" href={`/article/${article.id}`} >Read More</a>
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

            </div>
          </section>
        </span>
      ))}
      {/* blog ends */}
    </div>
  );
};
export default Blog;
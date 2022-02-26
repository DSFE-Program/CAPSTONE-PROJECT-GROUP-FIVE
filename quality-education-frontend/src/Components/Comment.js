import React from 'react';

function Comment() {
    return (
        <div>
            <form className='cmt'>
                <h4>Comments</h4>
                <p>Kindly drop your thought on this article</p>

                <div class="form-row">
                    <div class="form-group fw-bold">
                        <label for="firstname">First Name</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="Enter your first name..." />
                    </div><br/>

                    <div class="form-group fw-bold">
                        <label for="lastname">Last Name</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Enter your last name..." />
                    </div><br/>

                    <div class="form-group col-md-6 fw-bold">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email must contain '@' " />
                    </div><br/>
                    <div class="form-group col-md-6 fw-bold">
                        <label for="comment">Comment</label>
                        <textarea type="text" class="form-control" id="comment" placeholder="Write a comment" cols="20" row="20" />
                    </div>
                </div><br/>
                <button type="submit" class="btn btn-primary">Comment</button>
            </form>

        </div>
    );
}

export default Comment;
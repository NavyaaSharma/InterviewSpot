import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { list, removeBlog } from '../../actions/blog';
import moment from 'moment';

const BlogRead = ({ username }) => {
    const [blogs, setBlogs] = useState([]);
    const token = getCookie('token');

    useEffect(() => {
        loadBlogs();
    }, []);

    const loadBlogs = () => {
        list(username).then(data => {
            console.log(data)
            if (data.error) {
                console.log(data.error);
            } else {
                setBlogs(data);
            }
        });
    };


    const showAllBlogs = () => {
        return blogs.map((blog, i) => {
            var check=""
            if(blog.isPublished==false)
            {
                check="Blog will be published after the admin reviews and publishes it"
                return (
                    <div key={i} className="pb-5">
                        <h3>{blog.title}</h3>
                        <p className="mark">
                            Written by <a href={`/profile/${blog.postedBy.username}`}>{blog.postedBy.name}</a> | {check}
                        </p>
                    </div>
                );
            }
            else
            {
                check="Published on "+moment(blog.updatedAt).fromNow()
                return (
                    <div key={i} className="pb-5">
                        <h3><a href={`/blogs/${blog.slug}`}>{blog.title}</a></h3>
                        <p className="mark">
                            Written by <a href={`/profile/${blog.postedBy.username}`}>{blog.postedBy.name}</a> | {check}
                        </p>
                    </div>
                );
            }
        });
    };

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-12">
                    {showAllBlogs()}
                </div>
            </div>
        </React.Fragment>
    );
};

export default BlogRead;
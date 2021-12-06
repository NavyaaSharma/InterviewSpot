import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { list, removeBlog, publish } from '../../actions/blog';
import moment from 'moment';

const BlogRead = ({ username }) => {
    const [blogs, setBlogs] = useState([]);
    const [message, setMessage] = useState('');
    const token = getCookie('token');

    useEffect(() => {
        loadBlogs();
    }, []);

    const loadBlogs = () => {
        list(username).then(data => {
            //console.log(data)
            if (data.error) {
                console.log(data.error);
            } else {
                setBlogs(data);
            }
        });
    };

    const deleteBlog = slug => {
        removeBlog(slug, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setMessage(data.message);
                loadBlogs();
            }
        });
    };

    const deleteConfirm = slug => {
        let answer = window.confirm('Are you sure you want to reject this blog?');
        if (answer) {
            deleteBlog(slug);
        }
    };

    const publishBlog = id => {
        publish(id, token).then(data => {
            console.log(data)
            if (data.error) {
                console.log(data.error);
            } else {
                setMessage(data.message);
                loadBlogs();
            }
        });
    };

    const publishConfirm = slug => {
        let answer = window.confirm('Are you sure you want to publish this blog?');
        if (answer) {
            publishBlog(slug);
        }
    };

    const showUpdateButton = blog => {
        if (isAuth() && isAuth().role === 0) {
            return (
                <Link href={`/user/crud/${blog.slug}`}>
                    <a className="ml-2 btn btn-sm btn-warning">Update</a>
                </Link>
            );
        } else if (isAuth() && isAuth().role === 1) {
            return (
                <Link href={`/admin/crud/${blog.slug}`}>
                    <a className="ml-2 btn btn-sm btn-warning">View/Make Changes</a>
                </Link>
            );
        }
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
                        <button className=" btn btn-sm btn-success" onClick={() => publishConfirm(blog.slug)}>
                            Publish
                        </button>
                        <button className="ml-2 btn btn-sm btn-danger" onClick={() => deleteConfirm(blog.slug)}>
                            Reject
                        </button>
                        {showUpdateButton(blog)}
                    </div>
                );
            }
           
        });
    };

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-12">
                    {message && <div className="alert alert-primary">{message}</div>}
                    {showAllBlogs()}
                </div>
            </div>
        </React.Fragment>
    );
};

export default BlogRead;
import Layout from '../../../components/Layout';
import Private from '../../../components/auth/Private';
import BlogList from '../../../components/crud/BlogList';
import Link from 'next/link';
import { isAuth } from '../../../actions/auth';

const Blog = () => {
    const username = isAuth() && isAuth().username;
    return (
        <div className="content1">
        <Layout>
            <Private>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>My blogs</h2>
                        </div>
                        <div className="col-md-12">
                            <BlogList username={username} />
                        </div>
                    </div>
                </div>
            </Private>
        </Layout>
        </div>
    );
};

export default Blog;
import Layout from '../../components/Layout'
import Private from '../../components/auth/Private'
import '../../static/css/style.css'
import Link from 'next/link';

const userIndex=()=>{
    return(
        <div className="content">
        <Layout>
            <Private>
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>User Dashboard</h2>
                        </div>
                        <div className="col-md-4">
                            <ul class="list-group">
                                <li className="list-group-item">
                                    <a href="/user/crud/blog">Create Blog</a>
                                </li>
                                <li className="list-group-item">
                                    <Link href="/user/crud/myblogs">
                                        <a>My Blogs</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/user/crud/blogs">
                                        <a>Update/Delete Blog</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <a href="/user/update">Update profile</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Private>
        </Layout>
        </div>
    )
}

export default userIndex
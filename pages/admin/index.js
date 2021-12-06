import Layout from '../../components/Layout'
import Admin from '../../components/auth/Admin'
import Link from 'next/link'
import '../../static/css/style.css'

const adminIndex=()=>{
    return(
        <div className="content1">
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Admin Dashboard</h2>
                        </div>
                        <div className="col-md-6">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <Link href="admin/crud/category-tag">
                                        <a>Create category and tags</a>
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                        <a href="/admin/crud/blog">Create a blog</a>
                                </li>
                                <li className="list-group-item">
                                    <Link href="/admin/crud/blogs">
                                        <a>Update/Delete Blog</a>
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <Link href="/admin/crud/review">
                                        <a>Review And Publish Blogs</a>
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <Link href="/user/update">
                                        <a>Update Profile</a>
                                    </Link>
                                </li>
                            </ul>

                        </div>
                        
                    </div>

                </div>
            </Admin>
        </Layout>
        </div>
    )
}

export default adminIndex
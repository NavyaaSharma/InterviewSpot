import Layout from '../../../components/Layout'
import Admin from '../../../components/auth/Admin'
import Link from 'next/link'
import BlogCreate from '../../../components/crud/BlogCreate'
import '../../../static/css/style.css'

const Blog=()=>{
    return(
        <div className="content1">
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Create A New Blog</h2>
                        </div>
                        <div className="col-md-12">
                        <BlogCreate/>
                        </div>
                    </div>

                </div>
            </Admin>
        </Layout>
        </div>
    )
}

export default Blog
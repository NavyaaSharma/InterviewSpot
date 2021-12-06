import Layout from '../../../components/Layout'
import Admin from '../../../components/auth/Admin'
import Link from 'next/link'
import BlogPublish from '../../../components/crud/BlogPublish'
import '../../../static/css/style.css'

const CategoryTag=()=>{
    return(
        <div className="content1">
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Review And Publish Blogs</h2>
                        </div>
                        <div className="col-md-12">
                        <BlogPublish/>
                        </div>
                    </div>

                </div>
            </Admin>
        </Layout>
        </div>
    )
}

export default CategoryTag
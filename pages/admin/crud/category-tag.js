import Layout from '../../../components/Layout'
import Admin from '../../../components/auth/Admin'
import Link from 'next/link'
import Category from '../../../components/crud/category'
import Tag from '../../../components/crud/tag'
import '../../../static/css/style.css'

const CategoryTag=()=>{
    return(
        <div className="content1">
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Manage categories and tags</h2>
                        </div>
                        <div className="col-md-6">
                        <Category></Category>
                        </div>
                        <div className="col-md-6">
                        <Tag></Tag>
                        </div>
                    </div>

                </div>
            </Admin>
        </Layout>
        </div>
    )
}

export default CategoryTag
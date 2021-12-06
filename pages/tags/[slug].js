import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { singleTag } from '../../actions/tag';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import Card from '../../components/blog/Card';

const Tag = ({ tag, blogs, query }) => {
    const head = () => (
        <Head>
            <title>
                {tag.name} | {APP_NAME}
            </title>
            <link rel="icon" href="https://img.icons8.com/external-itim2101-lineal-color-itim2101/64/000000/external-blog-copywriting-itim2101-lineal-color-itim2101-1.png" type="image/png" />
            <meta name="description" content={`Blogs on ${tag.name}`} />
            <link rel="canonical" href={`${DOMAIN}/categories/${query.slug}`} />
            <meta property="og:title" content={`${tag.name}| ${APP_NAME}`} />
            <meta property="og:description" content={`Blogs on ${tag.name}`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/categories/${query.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/static/images/interview.jpg`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/interview.jpg`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );

    return (
        <div className="content main">
            <React.Fragment>
                {head()}
                <Layout>
                    <main>
                        <div className="container-fluid">
                            <header>
                                <div className="col-md-12 pt-3">
                                    <h1 className="display-4 font-weight-bold text-center">{tag.name}</h1>
                                    {blogs.map((b, i) => (
                                        <div>
                                            <Card key={i} blog={b} />
                                            <hr />
                                        </div>
                                    ))}
                                </div>
                            </header>
                        </div>
                    </main>
                </Layout>
            </React.Fragment>
        </div>
    );
};

Tag.getInitialProps = ({ query }) => {
    return singleTag(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return { tag: data.tag, blogs: data.blogs, query };
        }
    });
};

export default Tag;
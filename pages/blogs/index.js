import Head from 'next/head';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Layout from '../../components/Layout';
import { useState } from 'react';
import { listBlogsWithCategoriesAndTags } from '../../actions/blog';
import Card from '../../components/blog/Card';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import '../../static/css/style.css'
import Search from '../../components/blog/Search';

const Blogs = ({ blogs, categories, tags, totalBlogs, blogsLimit, blogSkip, router }) => {
    const head = () => (
        <Head>
            <title>{APP_NAME}</title>
            <link rel="icon" href="https://img.icons8.com/external-itim2101-lineal-color-itim2101/64/000000/external-blog-copywriting-itim2101-lineal-color-itim2101-1.png" type="image/png" />
            <meta
                name="description"
                content="Interview Spot brings to you the Interview Experiences of your peers who got Internship/Placemet Oppurtunities in reputed companies."
            />
            {/* <link rel="canonical" href={`${DOMAIN}${router.pathname}`} /> */}
            <meta property="og:title" content={`Interview Spot`} />
            <meta
                property="og:description"
                content="Interview Spot brings to you the Interview Experiences of your peers who got Internship/Placemet Oppurtunities in reputed companies."
            />
            <meta property="og:url" content='https://blogspot.theexpresscoder.com/blogs' />

            <meta property="og:image" content='https://insights.dice.com/wp-content/uploads/2019/07/Tell-Me-About-Yourself-Interview-Job-Interview-Interview-Questions-Dice.png' />
            {/* <meta property="og:image:secure_url" ccontent={`${DOMAIN}/static/images/interview.jpg`} /> */}
            <meta property="og:image:type" content="image/png" />
            <meta property="og:type" content="webiste" />

            <meta property="og:site_name" content='Interview Spot' />
            {/* <meta property="fb:app_id" content={`${FB_APP_ID}`} /> */}
        </Head>
    );

    const [limit, setLimit] = useState(blogsLimit);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(totalBlogs);
    const [loadedBlogs, setLoadedBlogs] = useState([]);

    const loadMore = () => {
        let toSkip = skip + limit;
        listBlogsWithCategoriesAndTags(toSkip, limit).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setLoadedBlogs([...loadedBlogs, ...data.payload.blogs]);
                setSize(data.size);
                setSkip(toSkip);
            }
        });
    };

    const loadMoreButton = () => {
        return (
            size > 0 &&
            size >= limit && (
                <button onClick={loadMore} className="btn btn-outline-primary btn-lg">
                    Load More
                </button>
            )
        );
    };

    const showAllBlogs = () => {
        return blogs.map((blog, i) => {
            // ()
            return (
                <article key={i}>
                    <Card blog={blog} />
                    <hr />
                </article>
            );

        });
    };

    const showAllCategories = () => {
        return categories.map((c, i) => (
            <Link href={`/categories/${c.slug}`} key={i}>
                <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
            </Link>
        ));
    };

    const showAllTags = () => {
        return tags.map((t, i) => (
            <Link href={`/tags/${t.slug}`} key={i}>
                <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
            </Link>

        ));
    };

    const showLoadedBlogs = () => {
        return loadedBlogs.map((blog, i) => (
            <article key={i}>
                <Card blog={blog} />
                <hr />
            </article>
        ));
    };

    return (
        <React.Fragment>
            {head()}
            <div className="content"></div>
            <Search />
            <Layout>
                <main>
                    <div className="container-fluid">
                        <header>
                            <div className="col-md-12 pt-3 pb-3" style={{ backgroundColor: 'lightblue', borderRadius: '10px' }}>
                                <h1 className="headfont font-weight-bold text-center">
                                    Start reading the Interview Experiences of your peers to get ready for your next interview !
                                </h1>
                            </div>
                            <section>
                                <div className="pb-5 text-center">
                                    {showAllCategories()}
                                    <br />
                                    {/* {showAllTags()} */}
                                </div>
                                {/* <div className="pb-5 text-center" style={{ maxHeight: '200px', overflowY: 'scroll' }}>
                                    {showAllTags2()}
                                </div> */}
                            </section>
                        </header>
                    </div>

                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-md-3">
                                <div>
                                    <h5 className="text-center font-weight-bold">Select by Company</h5>
                                    <hr />
                                    <ul className="cmpnylist" style={{
                                        paddingLeft: '5px'
                                    }}>{showAllTags()}</ul>
                                    <hr />
                                </div>
                            </div>
                            <div className="pl-4 pr-4 col-md-9" >
                                <h4 className="text-center font-weight-bold" style={{ border: '2px solid black' }}>Recent Interview Experirences</h4>
                                {showAllBlogs()}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="container-fluid pl-4 pr-4 col-md-9">{showLoadedBlogs()}</div>
                        </div>
                        <div className="text-center pt-5 pb-5">{loadMoreButton()}</div>
                    </div>


                </main>
            </Layout>
        </React.Fragment>
    );
};

Blogs.getInitialProps = async () => {
    let skip = 0;
    let limit = 5;
    var data = await listBlogsWithCategoriesAndTags(skip, limit)
    console.log(data)
    return {
        blogs: data.payload.blogs,
        categories: data.categories,
        tags: data.tags,
        totalBlogs: data.size,
        blogsLimit: limit,
        blogSkip: skip
    }

}
export default withRouter(Blogs);
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { userPublicProfile } from '../../actions/user';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import moment from 'moment';
import ContactForm from '../../components/form/ContactForm';

const UserProfile = ({ user, blogs, query }) => {
    const head = () => (
        <Head>
            <title>
                {user.username} | {APP_NAME}
            </title>
            <link rel="icon" href="https://img.icons8.com/external-itim2101-lineal-color-itim2101/64/000000/external-blog-copywriting-itim2101-lineal-color-itim2101-1.png" type="image/png" />
            <meta name="description" content={`Blogs by ${user.username}`} />
            <link rel="canonical" href={`${DOMAIN}/profile/${query.username}`} />
            <meta property="og:title" content={`${user.username}| ${APP_NAME}`} />
            <meta property="og:description" content={`Blogs by ${user.username}`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/profile/${query.username}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/static/images/interview.jpg`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/interview.jpg`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );

    const showUserBlogs = () => {
        return blogs.map((blog, i) => {
            if (blog.isPublished == false) {
                return (
                    <div className="mt-4 mb-4" key={i}>
                        <a className="lead">{blog.title}</a>
                    </div>
                );
            }
            else {
                return (
                    <div className="mt-4 mb-4" key={i}>
                        <Link href={`/blogs/${blog.slug}`}>
                            <a className="lead">{blog.title}</a>
                        </Link>
                    </div>
                );
            }

        });
    };

    return (
        <div className="content">
            <React.Fragment>
                {head()}
                <Layout>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <h5>{user.name}</h5>
                                                <p className="text-muted">Joined {moment(user.createdAt).fromNow()}</p>
                                                <p>{user.about}</p>
                                            </div>
                                            <div className="col-md-4">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />

                    <div className="container pb-5">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title bg-primary pt-4 pb-4 pl-4 pr-4 text-white">
                                            Recent blogs by {user.name}
                                        </h5>

                                        {showUserBlogs()}
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">

                                <img src={`${API}/user/photo/${user.username}`}
                                    className="img img-fluid img-thumbnail mb-3"
                                    style={{ maxHeight: '100%', maxWidth: '100%' }}
                                    alt="user profile"
                                />
                            </div>
                        </div>
                    </div>
                </Layout>
            </React.Fragment>
        </div>
    );
};

UserProfile.getInitialProps = ({ query }) => {
    // console.log(query);
    return userPublicProfile(query.username).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            console.log(data);
            return { user: data.user, blogs: data.blogs, query };
        }
    });
};

export default UserProfile;
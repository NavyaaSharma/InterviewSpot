import Layout from '../components/Layout';
import Link from 'next/link';
import '../static/css/style.css'
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../config';
import Head from 'next/head';

const Index = () => {
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
            <meta property="og:url" content='https://blogspot.theexpresscoder.com' />

            <meta property="og:image" content={`https://blogspot.theexpresscoder.com/static/images/interview.jpg`} />
            {/* <meta property="og:image:secure_url" ccontent={`${DOMAIN}/static/images/interview.jpg`} /> */}
            <meta property="og:image:type" content="image/jpg" />
            <meta property="og:type" content="webiste" />

            <meta property="og:site_name" content='Interview Spot' />
            {/* <meta property="fb:app_id" content={`${FB_APP_ID}`} /> */}
        </Head>
    );
    return (
        <React.Fragment>
            {head()}
            <div className="content2">
                <Layout>
                    <article className="overflow-hidden">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    {/* <h1 className="display-4 font-weight-bold">
                                        Interview Spot
                                    </h1> */}
                                    <img style={{ borderRadius: '20px', width: '100%' }} src="./static/images/logo.gif"></img>
                                </div>
                            </div>
                        </div>

                        {/* <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center pt-4 pb-5">
                                <p className="lead">
                                    A collection of handpicked blogs from experienced students to help and guide you throughout your university life.
                                </p>
                            </div>
                        </div>
                    </div> */}
                        <div className="container-fluid">
                            <div className="row card mb-3 ml-3 mr-3 mt-3 here" style={{ border: '2px solid black' }}>
                                <div className="p-3">
                                    <h2 className="card-title text-center" style={{ backgroundColor: 'beige' }}>Worried About Placements And Internship Oppurtunities?</h2>
                                    <p className="card-text fsize text-center">Interview Spot brings to you the Interview Experiences of your peers who got Internship/Placement Oppurtunities in reputed companies.<br />
                                        Get informed about the process of hiring, important questions the companies focus on and get inspired by the success stories of these people.</p>
                                </div>
                                <div className="text-center mb-3">
                                    <a href="/blogs" className="btn btn-primary text-light">Read Interview Experiences</a>
                                </div>
                                <div className="col-md-12 mb-3 text-center">
                                    <img src="../static/images/interview.jpg" className="mainimg" alt="frwe" />
                                </div>

                            </div>

                            <div className="row card mb-3 ml-3 mr-3" style={{ backgroundColor: 'beige' }}>
                                <div className="p-3" >
                                    <h4 className="card-title text-center">Do you also have an interview experience ?<br /> Want it to be shared among your peers ?</h4>
                                    <p className="card-text text-center fsize"> Feel free to take a few minutes and post your interview experience here ! <br />
                                        Create An Account --&gt; Login --&gt; Post your own blog of your interview experience
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <div style={{ backgroundColor: "rgb(32, 32, 78)", height: '80px', color: 'white' }}>
                        <p className="text-center p-4">Made with &#10084;&#65039; by <a target="_blank" href="https://www.linkedin.com/in/navyaa-sharma-532756189/">Navyaa Sharma</a></p>
                    </div>
                </Layout>
            </div >
        </React.Fragment>
    );
};

export default Index;
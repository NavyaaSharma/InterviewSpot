import Layout from '../components/Layout'
import SigninComponent from '../components/auth/signinComponent'
import { withRouter } from 'next/router';
import Link from 'next/link'
import '../static/css/login.css'


const Signin = ({ router }) => {
    const showRedirectMessage = () => {
        if (router.query.message) {
            return <div className="alert alert-danger">{router.query.message}</div>;
        } else {
            return;
        }
    };

    return (
        <Layout>
            {/* <div className="container-fluid">
 
                <div className="container">
                    <div className="col-xl-10 col-lg-11 login-container">
                        <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="row">
                            <div className="col-lg-7 img-box">
                                <img src="./static/images/login-banner.png" alt="" />
                            </div>
                            <div className="col-lg-5 no-padding">
                                <div className="login-box">
                                    <SigninComponent />
                                </div>
                                <div className="login-row donroo row no-margin">
                                    <p>Dont have an Account ? <a href="">Sign Up</a></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center mt-3">Don't have an account?<br />
                        <Link href={`/signup`}>
                            <a>
                                SignUp here
                            </a>
                        </Link></div>
                </div>
            </div> */}
            <div class="container-fluid px-md-5 px-lg-1 px-xl-5 py-5 mx-auto" style={{ backgroundColor: 'lightsteelblue' }}>
                <div class="card card0 border-0" style={{ marginTop: '60px' }}>
                    <div class="row d-flex">
                        <div class="col-lg-6">
                            <div class="card1 pb-3">
                                <div class="row px-3 justify-content-center mt-5 border-line"> <img src="./static/images/logo2.jpeg" alt="LOGO" className="loginlogo" /> </div>
                                <div class="row px-3 justify-content-center border-line"> <img src="./static/images/main.jpg" class="image" /> </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="card2 card border-0 px-4 py-5">
                                <div className="row">
                                    <div className="col-md-6 offset-md-3">{showRedirectMessage()}</div>
                                </div>
                                <div class="row px-3 mb-4">
                                    {/* <div class="line"> </div> */}
                                    <h2 className="text-center font-weight-bold">Log In</h2>
                                    {/* <div class="line"></div> */}
                                </div>
                                <SigninComponent />
                                <div class="row mb-4 px-3"> <small class="font-weight-bold"><a className="newa" href="/auth/password/forgot" style={{ color: 'red' }} class="text-danger">Forgot Password</a></small> </div>
                                <div class="row mb-4 px-3"> <small class="font-weight-bold">Don't have an account? <a className="newa" href="/signup" style={{ color: 'red' }} class="text-danger">SignUp</a></small> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default withRouter(Signin)
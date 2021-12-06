import Layout from '../components/Layout'
import SignupComponent from '../components/auth/signupComponent'
import Link from 'next/link'
import '../static/css/login.css'

const Signup = () => {
    return (
        <Layout>
            <div class="container-fluid px-md-5 px-lg-1 px-xl-5 py-5 mx-auto" style={{ backgroundColor: 'lightsteelblue' }}>
                <div class="card card0 border-0" style={{ marginTop: '59px' }}>
                    <div class="row d-flex">
                        <div class="col-lg-6">
                            <div class="card1 pb-3">
                                <div class="row px-3 justify-content-center mt-5 border-line"> <img src="./static/images/logo2.jpeg" alt="LOGO" className="loginlogo" /> </div>
                                <div class="row px-3 justify-content-center border-line"> <img src="./static/images/main.jpg" class="image" /> </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="card2 card border-0 px-4 py-5">

                                <div class="row px-3 mb-4">
                                    <div class="line"> </div>
                                    <h2 className="text-center font-weight-bold">Sign Up</h2>
                                    <div class="line"></div>
                                </div>
                                <SignupComponent />
                                <div class="row mb-2 px-3"> <small class="font-weight-bold">Already have an account? <a className="newa" href="/signin" style={{ color: 'red' }} class="text-danger ">LogIn</a></small> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Signup
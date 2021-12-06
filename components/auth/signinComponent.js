import { useState, useEffect } from 'react'
import Router, { withRouter } from 'next/router'
import { signin, authenticate, isAuth } from '../../actions/auth'
import Link from 'next/link';
import '../../static/css/login.css'
const SigninComponent = () => {

    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        message: '',
        showForm: true
    })
    const { email, password, error, loading, message, showForm } = values

    useEffect(() => {
        isAuth() && Router.push('/')
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        //console.table({name,email,password,error,loading,message,showForm})
        setValues({ ...values, loading: true, error: false })
        const user = { email, password }

        signin(user).then((result) => {
            console.log(result)
            result.json().then((data) => {
                if (data.error) {
                    setValues({ ...values, error: data.error })
                }
                else {
                    authenticate(data, () => {
                        if (isAuth() && isAuth().role == 1) {
                            Router.push('/admin')
                        }
                        else {
                            Router.push('/user')
                        }
                    })

                }
            })
        })
    }

    const handleChange = name => e => {
        e.preventDefault()
        setValues({ ...values, error: false, [name]: e.target.value })
    }

    const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '')
    const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '')
    const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : '')

    const signinForm = () => {
        return (
            // <form onSubmit={handleSubmit}>
            //     <h2 style={{ textAlign: 'center' }}>LOG IN</h2>
            //     <div className="form-group">
            //         <input value={email} onChange={handleChange('email')} type="email" className="form-control" placeholder="Enter email" required></input>
            //     </div>
            //     <div className="form-group">
            //         <input value={password} onChange={handleChange('password')} type="password" className="form-control" placeholder="Enter password" required></input>
            //     </div>
            //     <div className="text-center">
            //         <button className="btn btn-primary btn-block">Login</button>
            //     </div>
            // </form>

            <form onSubmit={handleSubmit}>
                <div class="row px-3"> <label class="mb-1">
                    <h6 class="mb-0 text-sm">Email Address</h6>
                </label> <input style={{ border: '0.5px solid black' }} class="mb-4" value={email} onChange={handleChange('email')} type="email" name="email" placeholder="Enter a valid email address" required /> </div>
                <div class="row px-3"> <label class="mb-1">
                    <h6 class="mb-0 text-sm">Password</h6>
                </label> <input style={{ border: '0.5px solid black' }} type="password" value={password} onChange={handleChange('password')} name="password" placeholder="Enter password" required /> </div>
                <div class="row mb-3 px-3 mt-4"> <button type="submit" class="btn btn-blue btn-block text-center">Login</button> </div>
            </form>
        )
    }

    return (
        <div>
            <React.Fragment>
                {showError()}
                {showLoading()}
                {showMessage()}
                {showForm && signinForm()}
                {/* <div className="text-center">
                    <Link href="/auth/password/forgot">
                        <a className="mt-3 btn btn-outline-danger btn-block">Forgot password</a>
                    </Link>
                </div> */}
            </React.Fragment>
        </div>
    )
}

export default SigninComponent
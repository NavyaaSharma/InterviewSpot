import { useState, useEffect } from 'react'
import { signup, isAuth } from '../../actions/auth'
import Router from 'next/router'
import '../../static/css/login.css'
const SignupComponent = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        loading: false,
        message: '',
        showForm: true
    })
    const { name, email, password, error, loading, message, showForm } = values

    useEffect(() => {
        isAuth() && Router.push('/')
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        //console.table({name,email,password,error,loading,message,showForm})
        setValues({ ...values, loading: true, error: false })
        const user = { name, email, password }

        signup(user).then((result) => {
            console.log(result)
            result.json().then((data) => {
                if (data.error) {
                    setValues({ ...values, error: data.error })
                }
                else {
                    setValues({ ...values, name: '', email: '', password: '', error: '', loading: false, message: data.message, showForm: false })
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

    const signupForm = () => {
        return (
            // <form onSubmit={handleSubmit}>
            //     <h2 style={{ textAlign: 'center' }}>SIGN UP</h2>
            //     <div className="form-group">
            //         <input value={name} onChange={handleChange('name')} type="text" className="form-control" placeholder="Enter name" required></input>
            //     </div>
            //     <div className="form-group">
            //         <input value={email} onChange={handleChange('email')} type="email" className="form-control" placeholder="Enter email" required></input>
            //     </div>
            //     <div className="form-group">
            //         <input value={password} onChange={handleChange('password')} type="password" className="form-control" placeholder="Enter password" required></input>
            //     </div>
            //     <div>
            //         <button className="btn btn-primary btn-block">Signup</button>
            //     </div>
            // </form>
            <form onSubmit={handleSubmit}>
                <div class="row px-3"> <label class="mb-1">
                    <h6 class="mb-0 text-sm">Name</h6>
                </label> <input style={{ border: '0.5px solid black' }} class="mb-4" value={name} onChange={handleChange('name')} type="text" name="name" placeholder="Enter your name" required /> </div>
                <div class="row px-3"> <label class="mb-1">
                    <h6 class="mb-0 text-sm">Email Address</h6>
                </label> <input style={{ border: '0.5px solid black' }} class="mb-4" value={email} onChange={handleChange('email')} type="email" name="email" placeholder="Enter a valid email address" required /> </div>
                <div class="row px-3"> <label class="mb-1">
                    <h6 class="mb-0 text-sm">Password</h6>
                </label> <input style={{ border: '0.5px solid black' }} type="password" value={password} onChange={handleChange('password')} name="password" placeholder="Enter password" required /> </div>
                <div class="row mb-3 px-3 mt-4"> <button type="submit" class="btn btn-blue btn-block text-center">SignUp</button> </div>
            </form>
        )
    }

    return (
        <div>
            <React.Fragment>
                {showError()}
                {showLoading()}
                {showMessage()}
                {showForm && signupForm()}
            </React.Fragment>
        </div>
    )
}

export default SignupComponent
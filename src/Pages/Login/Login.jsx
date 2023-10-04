import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const {logIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);
        logIn(email, password)
        .then()
        // navigate after login
        navigate(location?.state ? location.state : '/')
        .catch(error => alert(error.message))
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-[80vh]">
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <h1 className='text-4xl font-bold text-center mt-4 text-rose-500'>Please Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className='text-base font-semibold mt-4'>Do not have an account? please <Link to='/register' className='font-bold text-rose-500 hover:underline'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
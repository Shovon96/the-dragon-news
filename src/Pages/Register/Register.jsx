import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const Register = () => {

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const photoURL = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photoURL, email, password);
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero h-[80vh] mt-4">
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                <h1 className='text-4xl font-bold text-center mt-2 text-rose-500'>Please Register</h1>
                    <form onSubmit={handleRegister} className="px-8 py-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p className='text-base font-semibold mt-4'>Already have an account? please <Link to='/login' className='font-bold text-rose-500 hover:underline'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
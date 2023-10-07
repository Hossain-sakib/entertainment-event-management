import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthPeovider";

const SignIn = () => {
    const { signInUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleSignIn = e => {
        e.preventDefault();
        

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');


        signInUser(email, password)
            .then(res => {
                console.log(res.user);
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => console.error(error))

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-300">
                <div className="hero-content flex-col lg:flex-row-reverse border border-amber-600 p-10 rounded-lg bg-black ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-amber-500">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl pb-8  border bg-base-200 border-amber-600">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Enter Your Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered border-amber-600 bg-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Enter Your Password</span>
                                </label>
                                <input type="password" placeholder="Password" name="password" className="input input-bordered border-amber-600 bg-black" required />
                                <div>
                                    <Link to='/forgetpass' className="text-xs text-white hover:underline hover:text-amber-600">Forgot password?</Link>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-amber-600 border hover:border-amber-600 text-white">Sign In</button>
                            </div>
                        </form>
                        <p className="text-xs text-white text-center" >Do not have an account? Please<Link to='/signup' className="hover:underline hover:text-amber-600"> Sign Up</Link>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SignIn;
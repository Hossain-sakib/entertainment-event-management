import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { AiOutlineGoogle } from "react-icons/ai";


const SignIn = () => {
    const [signInError, setSignInError] = useState('');
    const [success, setSuccess] = useState('');

    const { signInUser, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handleSignIn = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        signInUser(email, password)
            .then(res => {
                navigate(location?.state ? location.state : '/');
                setSuccess("User logged in successfully.");
            })
            .catch(error => {
                console.error(error);
                setSignInError(error.message);

            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate("/");
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        
            <div className="flex items-center justify-center px-12  w-6xl hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse border border-amber-600 p-6 rounded-lg bg-black ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-amber-500">Sign In now!</h1>
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
                        {
                            signInError && <p className="text-sm text-center text-red-600 p-4">{signInError}</p>
                        }
                        {
                            success && <p className="text-sm text-center text-green-600">{success}</p>
                        }
                        <div className="flex flex-col text-center items-center justify-center space-y-3 text-white mx-6">
                            <h3 className="text-sm">OR</h3>
                            <h2 className="text-sm">Continue With Google</h2>
                            <h2 onClick={handleGoogleSignIn} className="text-4xl hover:text-amber-600"><AiOutlineGoogle></AiOutlineGoogle></h2>
                        </div>
                        <p className="text-xs text-white text-center mt-4" >Do not have an account? Please<Link to='/signup' className="hover:underline hover:text-amber-600"> Sign Up</Link>.</p>
                    </div>
                </div>
            </div>
        
    );
};


export default SignIn;
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthPeovider";
import { Link } from "react-router-dom";


const SignUp = () => {
    const { signUpUser } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const image = form.get('image');
        const email = form.get('email');
        const password = form.get('password');

        signUpUser(email, password)
            .then(res => console.log(res.user))
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse border border-amber-600 p-10 rounded-lg bg-black ">
                    <div className="text-5xl font-bold text-amber-500">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl pb-8  border bg-base-200 border-amber-600">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Your Full Name</span>
                                </label>
                                <input type="name" placeholder="Name" name="name" className="input input-bordered border-amber-600 bg-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Your Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name="image" className="input input-bordered border-amber-600 bg-black" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Your Email Address</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered border-amber-600 bg-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Create A Password</span>
                                </label>
                                <input type="password" placeholder="Password" name="password" className="input input-bordered border-amber-600 bg-black" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-amber-600 border hover:border-amber-600 text-white">Sign In</button>
                            </div>
                        </form>
                        <p className="text-xs text-center" >Already have an account? Please<Link to='/signin' className="hover:underline hover:text-amber-600"> Sign In</Link>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
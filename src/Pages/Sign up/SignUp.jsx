import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";


const SignUp = () => {
    const [signUpError, setSignUpError] = useState('');
    const [success, setSuccess] = useState('');

    const { signUpUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignUp = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const image = form.get('image');
        const email = form.get('email');
        const password = form.get('password');

        if (password.length < 6) {
            setSignUpError('Password should be at least 6 characters.');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setSignUpError('Required at least one uppercase character.');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setSignUpError('Required at least one lowercase character.');
            return;
        }
        else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) {
            setSignUpError('Required at least one special character.')
        }

        else if (!/[0-9]/.test(password)) {
            setSignUpError('Required at least one numerical character.');
            return;
        }

        //    reset error 
        setSignUpError('');
        setSuccess('');

        signUpUser(email, password, name, image)
            .then((res) => {
                navigate(location?.state ? location.state : '/');
                setSuccess("User created successfully.")

            })
            .catch(error => console.error(error))
    }
    return (
  
            <div className="flex items-center justify-center px-12  w-6xl hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse border border-amber-600 p-6 rounded-lg bg-black ">
                    <div className="text-5xl font-bold text-amber-500">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
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
                                <button type="submit" className="btn bg-amber-600 border hover:border-amber-600 text-white">Sign Up</button>
                            </div>
                        </form>
                        {
                            signUpError && <p className="text-xs text-center text-red-600 p-4">{signUpError}</p>
                        }
                        {
                            success && <p className="text-xs text-center text-green-600">{success}</p>
                        }
                        <p className="text-sm text-center mt-4" >Already have an account? Please<Link to='/signin' className="hover:underline hover:text-amber-600"> Sign In</Link>.</p>
                    </div>
                </div>
            </div>
       
    );
};

export default SignUp;
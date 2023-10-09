import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthPeovider";
import { CgProfile } from "react-icons/cg";


const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const handleSignOut = () => {
        signOutUser()
            .then()
            .catch()
    }
    const navLinks =
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/events'>Events</NavLink></li>
            <li><NavLink to='/services'>Services</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
        </>
    return (
        <div className="mx-6 mt-6">
            <div className="navbar bg-base-100 rounded-lg border border-amber-600">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="bg-black btn border hover:border-amber-600 text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <Link to='/' className="btn hover:border-amber-600 text-white normal-case text-xl hover:bg-black ml-2 md:ml-8">EntertainXpert</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end space-x-4 flex items-center">
                    {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="rounded-full">
                                    {
                                        user?.photoURL ? <img src={user.photoURL} alt={user.displayName} />
                                            :
                                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                <div className="w-8 rounded-full  bg-white border hover:border-amber-600 text-black">
                                                    <div className="text-3xl flex items-center justify-center ">
                                                        <CgProfile></CgProfile>
                                                    </div>
                                                </div>
                                            </label>

                                    }
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm bg-black text-white btn-ghost border hover:border-amber-600">{user.displayName}</button>
                                </li>
                                <li>
                                    <button className="btn btn-sm bg-black text-white  btn-ghost border hover:border-amber-600"><Link to='/profileDetails'>Profile details</Link></button>
                                </li>
                            </ul>
                        </div>
                            :
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-8 rounded-full  bg-white border hover:border-amber-600 text-black">
                                    <div className="text-3xl flex items-center justify-center ">
                                        <CgProfile></CgProfile>
                                    </div>
                                </div>
                            </label>
                    }
                    {
                        user ?
                            <button onClick={handleSignOut} className="btn bg-black border hover:border-amber-600 text-white">Sign Out</button>
                            :
                            <Link to='/signin'>
                                <button className="btn bg-black border hover:border-amber-600 text-white">Sign in</button>
                            </Link>

                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
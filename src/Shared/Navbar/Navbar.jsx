import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks =
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/career'>Career</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>

        </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn border hover:border-amber-600 text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <Link to='/' className="btn hover:border-amber-600 text-white normal-case text-xl bg-black">EntertainXpert</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn text-white bg-amber-500 hover:bg-amber-600">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
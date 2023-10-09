import { Link } from "react-router-dom";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";



const Footer = () => {
    return (
        <div className="border-t-4 border-amber-600 rounded-lg">
            <footer className="footer footer-center p-10 bg-black text-base-content rounded ">
                <nav className="grid grid-flow-col gap-4">
                    <Link className="hover:underline hover:text-amber-600" to='/about'>About</Link>
                    <Link className="hover:underline hover:text-amber-600" to='/contact'>Contact</Link>
                    <Link className="hover:underline hover:text-amber-600" to='/partners'>Partners</Link>
                    <Link className="hover:underline hover:text-amber-600" to='/blog'>Blog!</Link>
                    <Link className="hover:underline hover:text-amber-600" to='/faq'>FAQ</Link>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a className="text-3xl text-white hover:text-amber-600" href="https://facebook.com/entertainxpert"><BiLogoFacebook></BiLogoFacebook></a>
                        <a className="text-3xl text-white hover:text-amber-600" href="https://twitter.com/entertainxpert"><BiLogoTwitter></BiLogoTwitter></a>
                        <a className="text-3xl text-white hover:text-amber-600" href="https://instagram.com/entertainxpert"><BiLogoInstagram></BiLogoInstagram></a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © 2023 - All right reserved by HOSSAIN SAKIB</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;
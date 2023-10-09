import { Link } from "react-router-dom";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import AOS from 'aos';
import PropTypes from 'prop-types';


const Services = ({ event }) => {
    
    useEffect(()=>{
        AOS.init({duration:1000});
    },[])

    
    const { title, image, description, id } = event || {};
    return (
        <div className="card w-96 bg-black text-white border border-amber-600 shadow-xl "  data-aos="fade-up">
            <figure><img className="h-64" src={image} /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{title}</h2>
                <p className="text-white">{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/events/${id}`}><button className="btn text-white bg-amber-600 hover:bg-amber-500 ">More Details</button></Link>
                </div>
            </div>
        </div>
    );
};

Services.propTypes ={
    event: PropTypes.object
}

export default Services;
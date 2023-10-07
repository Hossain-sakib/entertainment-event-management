import { Link } from "react-router-dom";


const Services = ({ event }) => {
    const { title, image, description, id } = event;
    return (
        <div className="card w-96 bg-black text-white border border-amber-600 shadow-xl ">
            <figure><img className="h-64" src={image} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/events/${id}`}><button className="btn text-white bg-amber-600 hover:bg-amber-500 ">More Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Services;
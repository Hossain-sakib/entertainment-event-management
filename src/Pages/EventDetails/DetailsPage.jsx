import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DetailsPage = ({ idDetail }) => {
    const { title, image, description, charges, features } = idDetail || {};

    return (
        <div className="p-6 card glass mb-10">
            <figure><img src={image} /></figure>
            <div className="card-body">
                <h2 className="card-title text-5xl text-amber-600 font-bold">{title}</h2>
                <p className='text-xl text-white mb-5'>{description}</p>
                <h2 className='text-3xl text-amber-600 font-bold'>Features:</h2>
                {features ? (
                    <ul className='list-disc text-white mb-4'>
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-white">No features available.</p>
                )}
                <p className='text-3xl text-white'>Service Charge: {charges} USD.</p>
                <div className="card-actions justify-end">
                    <Link to='/contact'><button className="btn text-white bg-amber-600 hover:bg-amber-500 ">Contact Now!</button></Link>
                </div>
            </div>
        </div>
    );
};


DetailsPage.propTypes ={
    idDetail: PropTypes.object
}

export default DetailsPage;
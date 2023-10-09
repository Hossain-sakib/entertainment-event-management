import { Link } from "react-router-dom";


const Premium = () => {
    return (
        <div className=" flex flex-col">
            <h3 className='text-3xl text-amber-600 font-bold mb-6'>What is in premium membership?</h3>
            <ul className='list-disc text-white mb-4 space-y-3'>
                <li> Subscribers get first dibs on event tickets and venue reservations.</li>
                <li> Exclusive access to backstage tours, meet-and-greets, and VIP lounges.</li>
                <li> Enjoy special rates and promotions on event tickets.</li>
                <li> Fast-track customer support for subscribers.</li>
                <li> Get a head start with early event announcements and ticket sales.</li>
                <li>Enjoy an ad-free browsing and ticketing experience</li>
                <li>Receive tailored event suggestions based on your preferences.</li>
            </ul>
            <div className="flex justify-end pt-16">
                <Link to='/premiumMembership'><button className="btn text-white bg-amber-600 hover:bg-amber-500">Get Premium</button></Link>
            </div>
        </div>
    );
};

export default Premium;
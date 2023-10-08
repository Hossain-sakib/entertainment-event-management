import { useLoaderData } from "react-router-dom";
import Banner from "../../Shared/Banner/Banner";
import Services from "../Services/Services";


const Home = () => {
    const events = useLoaderData();
    return (
        <div className="mb-10">
            <div>
                <Banner></Banner>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-center text-4xl font-semibold mb-4 mt-4 text-amber-600">Our Services:</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        events.map(event => <Services key={event.id} event={event}></Services>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsPage from "./DetailsPage";



const EventDetails = () => {
    const [idDetail, setIdDetail] = useState();
    const { id } = useParams();
    const details = useLoaderData();

    useEffect(() => {
        const findDetail = details?.find(idDetail => idDetail.id == id);
        setIdDetail(findDetail);
    }, [id, details]);

    return (

        <div className="flex items-center justify-center pt-10 px-8 bg-black m-6 rounded-lg border border-amber-600">
            <DetailsPage idDetail={idDetail}></DetailsPage>
        </div>
    );
};

export default EventDetails;
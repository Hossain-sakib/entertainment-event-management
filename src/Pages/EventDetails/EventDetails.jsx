import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsPage from "./DetailsPage";
import Premium from "../../Shared/Premium/Premium";
import LastEvent from "../../Shared/Last events/LastEvent";



const EventDetails = () => {
    const [idDetail, setIdDetail] = useState();
    const { id } = useParams();
    const details = useLoaderData();

    useEffect(() => {
        const findDetail = details?.find(idDetail => idDetail.id == id);
        setIdDetail(findDetail);
    }, [id, details]);

    return (

        <div>
            <div className="flex items-center justify-center pt-10 px-8 bg-black m-6 rounded-lg border border-amber-600">
                <DetailsPage idDetail={idDetail}></DetailsPage>
            </div>
            <div className="flex flex-col md:flex-row pt-12 p-8 gap-10">
                <div className="flex-1 border border-amber-600 rounded-lg bg-black p-8">
                    <Premium></Premium>
                </div>
                <div className="flex-1 border border-amber-600 rounded-lg bg-black p-8">
                    <LastEvent></LastEvent>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;

import { AiOutlineMobile, AiOutlineMail } from "react-icons/ai";
import { FaRegAddressCard } from 'react-icons/fa';
import Premium from "../../Shared/Premium/Premium";
import LastEvent from "../../Shared/Last events/LastEvent";


const Contact = () => {
    return (
        <div>
            <div className="my-20 p-40 border-2 border-amber-600 bg-black">
                <div className="text-center">
                    <h1 className="text-5xl text-amber-600 font-bold underline">Contact Us</h1>
                    <div className="mt-6 space-y-4 flex flex-col items-center justify-center">
                        <h2 className="flex items-center text-white"><AiOutlineMobile></AiOutlineMobile>   +8801955703819</h2>
                        <h2 className="flex items-center text-white"><AiOutlineMail></AiOutlineMail>  Entertainxpert@gmail.com</h2>
                    </div>
                    <div>
                        <h2 className="flex items-center justify-center text-white mt-4"><FaRegAddressCard></FaRegAddressCard> Office</h2>
                        <h2 className="text-white text-center">17/2 BB Road,Chashara,Narayangonj</h2>
                    </div>
                </div>
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

export default Contact;
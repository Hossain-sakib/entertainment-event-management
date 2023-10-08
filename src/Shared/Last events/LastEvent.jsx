
const LastEvent = () => {
    return (
        <div className=" ">
            <h3 className='text-3xl text-center text-amber-600 font-bold mb-6'>Our last 4 events</h3>
                    <div className="carousel w-full">
                        <div id="item1" className="carousel-item w-full">
                            <img src="https://i.ibb.co/VqF8ztN/music-event-banner-template-with-photo-52683-13689.jpg" className="w-full" />
                        </div>
                        <div id="item2" className="carousel-item w-full">
                            <img src="https://i.ibb.co/FqWd0Vr/mff23.jpg" className="w-full" />
                        </div>
                        <div id="item3" className="carousel-item w-full">
                            <img src="https://i.ibb.co/gJn0bmt/images.jpg" className="w-full" />
                        </div>
                        <div id="item4" className="carousel-item w-full">
                            <img src="https://i.ibb.co/wpzfqdr/ferfgerfg.jpg" className="w-full" />
                        </div>
                    </div>
                    <div className="flex justify-center w-full py-2 gap-2">
                        <a href="#item1" className="btn btn-xs">1</a>
                        <a href="#item2" className="btn btn-xs">2</a>
                        <a href="#item3" className="btn btn-xs">3</a>
                        <a href="#item4" className="btn btn-xs">4</a>
                    </div>
        </div>
    );
};

export default LastEvent;
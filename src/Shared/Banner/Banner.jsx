
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/XpsMLsz/banner1.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-white text-5xl font-bold">EntertainXpert: Where Moments Come to Life</h1>
                                <p className="mb-5 text-white">EntertainXpert specializes in creating unforgettable moments. We bring your vision to life, ensuring every detail of your event is meticulously planned and flawlessly executed. From concept to celebration, we are your partners in making memories that last a lifetime.</p>
                                <button className="btn text-white bg-amber-600 hover:bg-amber-500">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/HtddLqd/banner2.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-white text-5xl font-bold">  EntertainXpert: Where Moments Come to Life</h1>
                                <p className="mb-5 text-white"> Your journey begins here, where every detail of your event is meticulously orchestrated. From concept to execution, we are your partners in creating unforgettable moments.</p>
                                <button className="btn text-white bg-amber-600 hover:bg-amber-500">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/tBS5vFn/maxime-bhm-4-Ixxu74o06-E-unsplash.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-white text-5xl font-bold">  EntertainXpert: Where Moments Come to Life</h1>
                                <p className="mb-5 text-white">We are thrilled to welcome you to EntertainXpert, your gateway to crafting extraordinary events. With our expertise, your vision transforms into reality.</p>
                                <button className="btn text-white bg-amber-600 hover:bg-amber-500">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/9rYXsYv/vishnu-r-nair-m1-WZS5ye404-unsplash.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-white text-5xl font-bold">  EntertainXpert: Where Moments Come to Life</h1>
                                <p className="mb-5 text-white">Step into a world of event possibilities. We are here to streamline your event management journey, ensuring every aspect is seamless and memorable.</p>
                                <button className="btn text-white bg-amber-600 hover:bg-amber-500">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
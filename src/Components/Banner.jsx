import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {
    return (
        <>
            <div className='my-5 px-5'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="md:min-h-full h-[400px] w-full">
                            <div className="absolute rounded-md z-[1] inset-0 bg-cover bg-center" style={{
                                backgroundImage: `url('https://i.ibb.co/dGxLRQN/bangladesh-picture.jpg')`
                            }}></div>
                            <div className="absolute rounded-md inset-0 bg-black opacity-10"></div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide><div className="md:min-h-full h-[400px] w-full">
                        <div className="absolute rounded-md z-[1] inset-0 bg-cover bg-center" style={{
                            backgroundImage: `url('https://i.ibb.co/kQS5yph/slider-1.jpg')`
                        }}></div>
                        <div className="absolute rounded-md inset-0 bg-black opacity-10"></div>

                    </div></SwiperSlide>
                    <SwiperSlide><div className="md:min-h-full h-[400px] w-full">
                        <div className="absolute rounded-md z-[1] inset-0 bg-cover bg-center" style={{
                            backgroundImage: `url('https://i.ibb.co/8cTQMx6/2.jpg')`
                        }}></div>
                        <div className="absolute rounded-md inset-0 bg-black opacity-10"></div>

                    </div></SwiperSlide>
                    <SwiperSlide><div className="md:min-h-full h-[400px] w-full">
                        <div className="absolute rounded-md z-[1] inset-0 bg-cover bg-center" style={{
                            backgroundImage: `url('https://i.ibb.co/mvr33RD/sylhet.jpg')`
                        }}></div>
                        <div className="absolute rounded-md inset-0 bg-black opacity-10"></div>

                    </div></SwiperSlide>
                    <SwiperSlide><div className="md:min-h-full h-[400px] w-full">
                        <div className="absolute rounded-md z-[1] inset-0 bg-cover bg-center" style={{
                            backgroundImage: `url('https://i.ibb.co/5h2RJxW/slider-4.png')`
                        }}></div>
                        <div className="absolute rounded-md inset-0 bg-black opacity-10"></div>

                    </div></SwiperSlide>

                </Swiper>
            </div>
        </>
    );
};

export default Banner;
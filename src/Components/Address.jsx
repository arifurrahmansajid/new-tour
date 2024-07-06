import LottieReact from "./LottieReact";
import { useTypewriter } from "react-simple-typewriter";

const Address = () => {
    const [typeEffect] = useTypewriter({
        words: ['Shahin Tourism', 'World Best Tourism Experience', 'Contact us +8801744-604009'],
        loop: {},
        typeSpeed: 100,
        delaySpeed: 40,
    })
    return (
        <>
            <div className="text-yellow-600 text-7xl md:-mt-20">{typeEffect}</div>
            <div className="hero min-h-screen bg-base-200 rounded-md">

                <div className=" flex-col lg:flex-row-reverse">
                    <LottieReact />
                    <div className="w-full">
                        <h1 className="text-5xl font-bold">Dhaka Office</h1>
                        <p className="">69/A Cummila House</p>
                        <p className="">PanthaPath Green Road</p>
                        <p className="">Dhaka-1205</p>
                        <p>Mobile: +880 1744604009</p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Address;
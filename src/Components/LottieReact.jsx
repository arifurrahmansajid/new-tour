import Lottie from "lottie-react";
import lottie from '../lottie react.json';
const LottieReact = () => {
    return (
        <>
            <div className="w-full">
                <Lottie animationData={lottie}></Lottie>
            </div>
        </>
    );
};

export default LottieReact;
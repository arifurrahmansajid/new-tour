import Address from "../../Components/Address";
import Banner from "../../Components/Banner";
import CountryCard from "../../Components/CountryCard";
import Mission from "../../Components/Mission";
import TouristSpotSection from "../../Components/TouristSpotSection";


const Home = () => {
    return (
        <div className="w-full md:my-10 md:px-10 font-roboto">
            <Banner></Banner>
            <TouristSpotSection/>
            <CountryCard></CountryCard>
            <Mission/>
            <Address></Address>
        </div>
    );
};

export default Home;
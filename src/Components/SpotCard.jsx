import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SpotCard = ({ spot }) => {
    const { email, name, image, touristSpotName, countryName, location, description, averageCost, seasonality, travelTime, visitor, _id } = spot;
    return (
        <>
            <div className="card card-compact md:w-96 w-full bg-base-100 shadow-xl">
                <figure><img src={image} className="md:h-72 md:w-[22rem] rounded-md" alt="Shoes" /></figure>
                <div className="p-8">
                    <h2 className="text-center text-xl font-bold">Place Name: {touristSpotName}</h2>
                    <p> <span className="font-bold">Average Coast: </span> {averageCost}</p>
                    <p> <span className="font-bold">Country Name:</span> {countryName}</p>
                    <div className="flex gap-3">
                    <FaPeopleGroup />
                    <p>{visitor}</p>
                    </div>
                    <p><span className="font-bold">Travel Time: </span>{travelTime}</p>
                    <p> <span className="font-bold">season:</span>  {seasonality}</p>
                    <div className="w-full justify-center text-center py-3">
                        <Link to={`/details/${_id}`}>
                        <button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SpotCard;
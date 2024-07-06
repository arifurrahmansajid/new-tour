import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FaPeopleGroup } from "react-icons/fa6";
import Swal from "sweetalert2";

const MyListCard = ({ spot }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { _id, email, name, image, touristSpotName, countryName, description, averageCost, seasonality, travelTime, visitor, } = spot;

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://shahin-tourism-server.vercel.app/delete/${_id}`, {
                    method: "DELETE",

                })

                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your Spot has been deleted.",
                                    icon: "success"
                                });
                            }
                        }
                    })
                navigate(location?.state ? location.state : '/allspot')
            }
        });

    }

    return (
        <>
            <div className="card card-compact md:w-96 w-full bg-base-100 shadow-xl">
                <figure><img src={image} className="md:h-72 md:w-[22rem] rounded-md" alt="Shoes" /></figure>
                <div className="p-8">
                    <h2 className="text-center text-xl font-bold">Place Name: {touristSpotName}</h2>
                    <p> <span className="font-bold">Average Coast: </span> {averageCost}</p>
                    <div className="flex gap-3">
                        <FaPeopleGroup />
                        <p>{visitor}</p>
                    </div>
                    <p><span className="font-bold">Travel Time: </span>{travelTime}</p>
                    <p> <span className="font-bold">season:</span>  {seasonality}</p>
                    <div className="w-full justify-center text-center py-3">
                        <Link to={`update/${_id}`}>
                            <button className="btn btn-primary mr-3">Update</button></Link>
                        <Link>
                            <button onClick={() => { handleDelete(_id) }} className="btn btn-warning">Delete</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyListCard;
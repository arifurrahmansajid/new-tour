import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../Provider/useAuth";
import Swal from "sweetalert2";


const UpdateSpot = () => {
    const { user } = useAuth() || {};
    const spot = useLoaderData();
    const navigate = useNavigate()
    if (!spot && !spot?.data) {
        navigate('/')
    }
    const { email, name, image, touristSpotName, countryName, location, description, averageCost, seasonality, travelTime, visitor, _id } = spot?.data;

    const handleUpdateSpot = event => {
        event.preventDefault();

        const form = event.target;
        // const email = user.email;
        const email = form.email.value;
        const name = form.name.value;
        const image = form.image.value;
        const touristSpotName = form.touristspotname.value;
        const countryName = form.countryname.value;
        const location = form.location.value;
        const description = form.description.value;
        const averageCost = form.averagecost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.traveltime.value;
        const visitor = form.visitor.value;

        const updatedSpot = { email, name, image, touristSpotName, countryName, location, description, averageCost, seasonality, travelTime, visitor }
        console.log(updatedSpot)

        // send data to the server
        fetch(`https://shahin-tourism-server.vercel.app/mylist/update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.status) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Your Data Updated Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/allspot')
                }
            })



    }
    return (
        <>
            <section className="p-6 bg-slate-800 text-white">
                <h1 className="text-3xl font-bold text-center">Update Your Tourism Spot:{touristSpotName}</h1>
                <form onSubmit={handleUpdateSpot} noValidate="" action="" className="container flex flex-col justify-between ">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-md">User Email

                                </label>
                                <input name="email" type="text" defaultValue={email} placeholder="Email" className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 mt-2  text-black" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="name" className="text-md">User Name

                                </label>
                                <input name="name" type="text" defaultValue={name} placeholder="Your Name" className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:dark:ring-violet-600  text-black dark:border-gray-300 mt-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="image" className="text-md ">Image</label>
                                <input name="image" defaultValue={image} type="text" placeholder="Image URL" className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75  text-black focus:dark:ring-violet-600 dark:border-gray-300 mt-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="touristspotname" className="text-md">Tourists Spot Name
                                </label>
                                <input name="touristspotname" defaultValue={touristSpotName} type="text" placeholder="Tourist Spot Name" className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75  text-black focus:dark:ring-violet-600 dark:border-gray-300 mt-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="countryname" className="text-md">Country Name
                                </label>
                                <input name="countryname" defaultValue={countryName} type="text" placeholder="Country Name" className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75  text-black focus:dark:ring-violet-600 dark:border-gray-300 mt-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="Location" className="text-md">Location
                                </label>
                                <input name="location" defaultValue={location} type="text" placeholder="Location" className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75  text-black focus:dark:ring-violet-600 dark:border-gray-300 mt-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="Short description" className="text-md">Short Description
                                </label>
                                <input name="description" defaultValue={description} type="text" placeholder="Short description" className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75  text-black focus:dark:ring-violet-600 dark:border-gray-300 mt-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="averagecost" className="text-md">Average Cost

                                </label>
                                <input name="averagecost" defaultValue={averageCost} type="text" placeholder="Average Cost" className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75  text-black focus:dark:ring-violet-600 dark:border-gray-300 mt-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="seasonality" className="text-md">Seasonality

                                </label>
                                <input name="seasonality" defaultValue={seasonality} type="text" placeholder="Summer / Winter" className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75  text-black focus:dark:ring-violet-600 dark:border-gray-300 mt-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="traveltime" className="text-md">Travel Time

                                </label>
                                <input name="traveltime" defaultValue={travelTime} type="text" placeholder="Travel Time" className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75  text-black focus:dark:ring-violet-600 dark:border-gray-300 mt-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="total-visitors-per-year" className="text-md">Total Visitors Per Year

                                </label>
                                <input name="visitor" defaultValue={visitor} type="text" placeholder="Total Visitors Per Year" className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75  text-black focus:dark:ring-violet-600 dark:border-gray-300 mt-2" />
                            </div>
                        </div>

                    </fieldset>
                    <div className="items-center text-center">
                        {/* <Link to='/allspot'> */}
                        <input type="submit" value="Updated Information" className="btn btn-success lg:-ml-32 w-1/2 items-center"></input>
                        {/* </Link> */}
                    </div>
                </form>


            </section>
        </>
    );
};

export default UpdateSpot;
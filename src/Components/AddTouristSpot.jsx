import Swal from "sweetalert2";
import useAuth from "../Provider/useAuth";


const AddTouristSpot = () => {
    const { user } = useAuth() || {};

    const handleAddSpot = event => {
        event.preventDefault();

        const form = event.target;
        const email = user.email;
        // const email= form.email.value;
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

        const newSpot = { email, name, image, touristSpotName, countryName, location, description, averageCost, seasonality, travelTime, visitor }
        console.log(newSpot)

        // send data to the server
        fetch('https://shahin-tourism-server.vercel.app/addspot', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Your Data Add Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })



    }
    return (
        <>
            <section className="p-6 bg-slate-800 text-white">
                <h1 className="text-3xl font-bold text-center">Add Your Tourism Spot</h1>
                <form onSubmit={handleAddSpot} noValidate="" action="" className="container flex flex-col justify-between ">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-md">User Email

                                </label>
                                <input name="email" type="text" placeholder="Email" className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300 mt-2  text-black" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="name" className="text-md">User Name

                                </label>
                                <input name="name" type="text" placeholder="Your Name" className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:dark:ring-violet-600  text-black dark:border-gray-300 mt-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="image" className="text-md ">Image</label>
                                <input name="image" type="text" placeholder="Image URL" className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75  text-black focus:dark:ring-violet-600 dark:border-gray-300 mt-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="touristspotname" className="text-md">Tourists Spot Name
                                </label>
                                <input name="touristspotname" type="text" placeholder="Tourist Spot Name" className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75  text-black focus:dark:ring-violet-600 dark:border-gray-300 mt-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="countryname" className="text-md">Country Name
                                </label>
                                <input name="countryname" type="text" placeholder="Country Name" className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75  text-black focus:dark:ring-violet-600 dark:border-gray-300 mt-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="Location" className="text-md">Location
                                </label>
                                <input name="location" type="text" placeholder="Location" className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75  text-black focus:dark:ring-violet-600 dark:border-gray-300 mt-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="Short description" className="text-md">Short Description
                                </label>
                                <input name="description" type="text" placeholder="Short description" className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75  text-black focus:dark:ring-violet-600 dark:border-gray-300 mt-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="averagecost" className="text-md">Average Cost

                                </label>
                                <input name="averagecost" type="text" placeholder="Average Cost" className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75  text-black focus:dark:ring-violet-600 dark:border-gray-300 mt-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="seasonality" className="text-md">Seasonality

                                </label>
                                <input name="seasonality" type="text" placeholder="Summer / Winter" className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75  text-black focus:dark:ring-violet-600 dark:border-gray-300 mt-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="traveltime" className="text-md">Travel Time

                                </label>
                                <input name="traveltime" type="text" placeholder="Travel Time" className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75  text-black focus:dark:ring-violet-600 dark:border-gray-300 mt-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="total-visitors-per-year" className="text-md">Total Visitors Per Year

                                </label>
                                <input name="visitor" type="text" placeholder="Total Visitors Per Year" className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75  text-black focus:dark:ring-violet-600 dark:border-gray-300 mt-2" />
                            </div>
                        </div>

                    </fieldset>
                    <div className="items-center text-center">
                        <button className="btn btn-success lg:-ml-32 w-1/2 items-center">Add</button>
                    </div>
                </form>


            </section>
        </>
    );
};

export default AddTouristSpot;
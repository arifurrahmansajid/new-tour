import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
    const spot = useLoaderData()
    console.log(spot)
    const { image, touristSpotName, countryName, location, description, averageCost, seasonality, travelTime, visitor, _id } = spot?.data;

    return (
        <div>
            <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src={image} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">{touristSpotName}</a>
                            <p className="text-xs dark:text-gray-600">
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">{countryName}</a>
                            </p>
                        </div>
                        <div className="dark:text-gray-800">
                            <p>{description}</p>
                        </div>
                        <Link to='/' className="btn btn-success">Back To Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
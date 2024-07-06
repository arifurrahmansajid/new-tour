import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CountryDetails = () => {
    // const country = useLoaderData();
    const { id } = useParams();
    console.log(id)
    const [country, setCountry] = useState({});

    useEffect(() => {
        fetch(`https://shahin-tourism-server.vercel.app/country/details/${id}`)
            .then(res => res.json())
            .then(data => {
                setCountry(data);
                console.log(data)
            })

    }, [id])
    const { image, tourist_spot_name, country_name, short_description
        , _id, location } = country;



    return (
        <div>
            <div>
                <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
                    <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                        <img src={image} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
                            <div className="space-y-2">
                                <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl"></a>
                                <p className="text-xl font-bold dark:text-gray-600">
                                    Country : {country_name}
                                </p>
                                <p className="text-xl font-semibold">Tourist Spot Name: {tourist_spot_name}</p>
                                <p className="text-md">Location: {location}</p>
                                <p>Description: {short_description}</p>
                            </div>

                            <Link to='/' className="btn btn-success">Back To Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryDetails;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CountryCard = () => {
    const [country, setCountry] = useState([]);
    const countryData = () => {
        fetch(`https://shahin-tourism-server.vercel.app/countrydata`)
            .then(res => res.json())
            .then(data => {
                setCountry(data);
            })
    }
    useEffect(() => {
        countryData();
    })

    return (
        <><div className="">
            <h1 className="text-5xl font-bold text-center py-10">Selected Country</h1>
            <div className="grid md:grid-cols-3 gap-4">
            {
                country.map(data => {
                    return (<div key={data._id} className="card card-compact md:w-96 w-full bg-base-100 shadow-xl">
                        <figure><img src={data.image} className="md:h-72 md:w-[22rem] rounded-md" alt="Shoes" /></figure>
                        <div className="p-8">
                            <h2 className="text-center text-xl font-bold">Place Name: {data.tourist_spot_name}</h2>
                            <p> <span className="font-bold">Country Name:</span> {data.country_name}</p>
                            <div className="w-full justify-center text-center py-3">
                                <Link to={`/country/details/${data._id}`}>
                                    <button className="btn btn-primary">View Details</button></Link>
                            </div>
                        </div>
                    </div>)
                })
            }
            </div>
        </div>
        </>
    );
};

export default CountryCard;
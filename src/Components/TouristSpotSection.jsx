import { useEffect, useState } from "react";
import SpotCard from "./SpotCard";

const TouristSpotSection = () => {
    let [addSpot, setAddSpot] = useState([])
    const getAllSpot = (countryName) => {
        fetch(`https://shahin-tourism-server.vercel.app/allspot?limit=6${
            countryName?'&country_name='+countryName:""
        }`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setAddSpot(data)
            })
    }
    useEffect(() => {
        getAllSpot()
    }, [])
    return (
        <>
            <div>
                <div className="item-center">
                    <h1 className="md:text-5xl text-2xl font-bold text-center"> Southeast Asia</h1>
                    <select className="select select-bordered join-item md:ml-10 text-center " onChange={(e) => getAllSpot(e.target.value)}>
                        <option disabled selected>sort</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value='Thailand'>Thailand</option>
                        <option value='Vietnam'>Vietnam</option>
                        <option value='Cambodia'>Cambodia</option>
                        <option value='Indonesia'>Indonesia</option>
                        <option value='Thailand'>Malaysia</option>

                    </select>
                </div>
                <div className="grid md:grid-cols-3 my-5 px-5 gap-5">
                    {
                        addSpot && addSpot?.map(spot => <SpotCard key={addSpot._id}
                            spot={spot}
                        />)
                    }

                </div>
            </div>
        </>
    );
};

export default TouristSpotSection;
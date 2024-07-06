import SpotCard from "../../Components/SpotCard";
import { useEffect, useState } from "react";

const TouristSpot = () => {
    let [addSpot, setAddSpot] = useState([])
    const getAllSpot = (sortBy = null) => {
        fetch(`https://shahin-tourism-server.vercel.app/allspot${sortBy ? '?sort_by=' + sortBy : ''}`)
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
                        <option value="desc">Low to High Price</option>
                        <option value='asc'>High to Low Price</option>

                    </select>
                </div>
                <div className="grid md:grid-cols-3 my-5 px-5 gap-5">
                    {
                        addSpot && addSpot?.map(spot => <SpotCard key={spot._id}
                            spot={spot}
                        />)
                    }

                </div>
            </div>
        </>
    );
};

export default TouristSpot;
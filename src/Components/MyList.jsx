import { useEffect, useState } from "react";
import useAuth from "../Provider/useAuth";
import MyListCard from "./MyListCard";


const MyList = () => {
    const { user } = useAuth() || {};
    let [myList, setMyList] = useState([]);
    useEffect(() => {
        console.log(user)
        fetch(`https://shahin-tourism-server.vercel.app/mylist/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyList(data)
            })
    }, [user]);
    return (
        <>
            <div>
                <h1 className="md:text-5xl text-2xl font-bold text-center"> My List</h1>
                <div className="grid md:grid-cols-3 my-5 px-5 gap-5">
                    {
                        myList?.map(spot => <MyListCard key={spot._id}
                            spot={spot}></MyListCard>)
                    }
                </div>
            </div>
        </>
    )
};

export default MyList;
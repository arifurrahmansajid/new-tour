import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData()
    return (
        <div>
            users:
        </div>
    );
};

export default Users;
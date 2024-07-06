import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Provider/useAuth";
import Swal from "sweetalert2";
import { ThemeContext } from "../../Provider/ThemeProvider";


const Navbar = () => {
    const navigate = useNavigate();
    const { theme, changeTheme } = useContext(ThemeContext)
    const { user, logMeOut } = useAuth() || {};

    const handleLogOut = () => {
        logMeOut()
            .then(result => {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Log Out Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            })
            .catch(error => {
                alert.error(error);
            });
    }

    return (
        <div className="md:my-10 md:px-10">
            <div className="navbar bg-white-100 dark:bg-indigo-900 dark:text-white  font-dancing rounded-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="https://i.ibb.co/10dT9vw/logo.png" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box z-[9999] w-52">

                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/allspot'>All Tourists Spot</NavLink></li>
                            {
                                (user && user?.email) && (<>
                                    <li><NavLink to='/addspot'>Add Tourists Spot</NavLink></li>
                                    <li><NavLink to='/mylist'>My List</NavLink></li>
                                </>)
                            }

                            {
                                !user && (<>
                                    <li><NavLink to='/login'>Login</NavLink></li>
                                    <li><NavLink to='/register'>Register</NavLink></li>
                                </>)
                            }

                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl md:h-24 md:w-40 h-24 w-32 dark:bg-slate-100">
                        <img src="https://i.ibb.co/vxQkM4t/logo-1.png" alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/allspot'>All Tourists Spot</NavLink></li>
                        {
                            (user && user?.email) && (<>
                                <li><NavLink to='/addspot'>Add Tourists Spot</NavLink></li>
                                <li><NavLink to='/mylist'>My List</NavLink></li>
                            </>)
                        }

                        {
                            !user && (<>
                                <li><NavLink to='/login'>Login</NavLink></li>
                                <li><NavLink to='/register'>Register</NavLink></li>
                            </>)
                        }

                    </ul>
                </div>
                <div className="navbar-end md:gap-4">
                    <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-800">
                        <span className="relative">
                            <input id="Toggle1"
                                defaultChecked={theme}
                                type="checkbox" className="hidden peer" onChange={changeTheme} />
                            <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-600 peer-checked:dark:bg-violet-600"></div>
                            <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-100"></div>
                        </span>
                    </label>
                    {
                        (!user && !user?.email) && <Link to='/login' className="btn">Login</Link>
                    }



                    {
                        (user && user?.email) && (<>
                            <div className="dropdown dropdown-end" title={user?.email}>
                                <div tabIndex={0} role="button" className="btn m-1">
                                    <div className="avatar online">
                                        <div className="w-8 rounded-full">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </div>                                    
                                    <ul tabIndex={0} className="dropdown-content z-[999] menu p-2 shadow bg-base-100 rounded-box w-60">
                                        <li><a>{user?.email}</a></li>
                                        <li onClick={handleLogOut}><a>Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                        </>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
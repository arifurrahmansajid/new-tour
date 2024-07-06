import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../Components/Footer";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../Provider/ThemeProvider";

const Root = () => {
    const { theme } = useContext(ThemeContext)
    const location = useLocation()

    useEffect(() => {
        document.title = `${import.meta.env.VITE_APP_NAME} - ${getTitle(location.pathname)}`;
    }, [location]);
    
    function getTitle(pathname) {
        switch (pathname) {
            case '/':
                return 'Home';
            case '/allspot':
                return 'All Tourist Spot';
            case '/mylist':
                return 'My List';
            case '/addspot':
                return 'Add Tourist Spot Form';
            case '/login':
                return 'Login';
            case '/register':
                return 'Register';
            default:
                return '';
        }
    }
        return (
            <div className={theme ? 'dark' : ''}>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        );
    };

    export default Root;
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";



const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;
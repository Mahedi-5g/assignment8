import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-lg fixed pr-20">
            <div className="navbar-start">
                <NavLink to='/' className=" gap-0 text-secondary normal-case text-2xl font-bold">Book <span className="text-primary">Vibe</span></NavLink>
            </div>
            <div className="navbar-center">
                <ul className="menu menu-horizontal px-1  text-lg font-semibold">
                    <NavLink to='/' className={({ isActive }) => isActive ? 'p-1  mx-2 border-2 text-[#23BE0A] rounded-lg border-[#23BE0A]' : 'p-1  mx-2'}>Home</NavLink>
                    <NavLink to='/listed' className={({ isActive }) => isActive ? 'p-1  mx-2 border-2 text-[#23BE0A] rounded-lg border-[#23BE0A]' : 'p-1  mx-2'}>Listed Books</NavLink>
                    <NavLink to='/readpage' className={({ isActive }) => isActive ? 'p-1  mx-2 border-2 text-[#23BE0A] rounded-lg border-[#23BE0A]' : 'p-1  mx-2'}>Pages to Read</NavLink>
                </ul>
            </div>
            <div className="navbar-end text-lg font-semibold gap-2">
                <a className="btn bg-[#23BE0A] text-white">Sign in</a>
                <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;

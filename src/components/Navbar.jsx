

import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-lg fixed pr-10 lg:pr-20 lg:pl-8 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'p-1 mx-2 border-2 text-[#23BE0A] rounded-lg border-[#23BE0A]' : 'p-1 mx-2'}>Home</NavLink>
                        <NavLink to='/listed' className={({ isActive }) => isActive ? 'p-1 mx-2 border-2 text-[#23BE0A] rounded-lg border-[#23BE0A]' : 'p-1 mx-2'}>Listed Books</NavLink>
                        <NavLink to='/readpage' className={({ isActive }) => isActive ? 'p-1 mx-2 border-2 text-[#23BE0A] rounded-lg border-[#23BE0A]' : 'p-1 mx-2'}>Pages to Read</NavLink>
                        <NavLink to='/about' className={({ isActive }) => isActive ? 'p-1 mx-2 border-2 text-[#23BE0A] rounded-lg border-[#23BE0A]' : 'p-1 mx-2'}>About Us</NavLink>
                        <NavLink to='/review' className={({ isActive }) => isActive ? 'p-1 mx-2 border-2 text-[#23BE0A] rounded-lg border-[#23BE0A]' : 'p-1 mx-2'}>Contact Us</NavLink>
                    </ul>
                </div>
                <div>
                    <NavLink to='/' className="gap-0 text-secondary normal-case text-xl lg:text-2xl font-bold">Book <span className="text-primary">Vibe</span></NavLink>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg lg:text-xl font-semibold">
                    <NavLink to='/' className={({ isActive }) => isActive ? 'p-1 mx-2 border-2 text-[#23BE0A] rounded-lg border-[#23BE0A]' : 'p-1 mx-2'}>Home</NavLink>
                    <NavLink to='/listed' className={({ isActive }) => isActive ? 'p-1 mx-2 border-2 text-[#23BE0A] rounded-lg border-[#23BE0A]' : 'p-1 mx-2'}>Listed Books</NavLink>
                    <NavLink to='/readpage' className={({ isActive }) => isActive ? 'p-1 mx-2 border-2 text-[#23BE0A] rounded-lg border-[#23BE0A]' : 'p-1 mx-2'}>Pages to Read</NavLink>
                    <NavLink to='/about' className={({ isActive }) => isActive ? 'p-1 mx-2 border-2 text-[#23BE0A] rounded-lg border-[#23BE0A]' : 'p-1 mx-2'}>About Us</NavLink>
                    <NavLink to='/review' className={({ isActive }) => isActive ? 'p-1 mx-2 border-2 text-[#23BE0A] rounded-lg border-[#23BE0A]' : 'p-1 mx-2'}>Contact Us</NavLink>

                </ul>
            </div>
            <div className="navbar-end text-lg lg:text-xl font-semibold gap-2">
                <a className="btn bg-[#23BE0A] text-white">Sign in</a>
                <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;

import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="grid w-full bg-cover bg-base-200 mt-10 p-20">
            <div className="flex flex-col lg:flex-row-reverse items-center justify-between">
                <div className="">
                    <img src="https://i.ibb.co/7Rr9kSP/the-silent-patient.webp" className="max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div className="">
                    <h1 className="text-6xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                    <div className="pt-10">
                        <Link to='/listed'><button className="btn bg-[#23BE0A] text-white">View The List</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
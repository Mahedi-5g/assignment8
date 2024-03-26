

const Banner = () => {
    return (
        <div className="grid w-full bg-cover bg-base-200 mt-10 p-20">
            <div className="flex flex-col lg:flex-row-reverse items-center justify-between">
                <div className="ml-20">
                <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div className="">
                    <h1 className="text-6xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                    <div className="pt-10">
                    <button className="btn bg-[#23BE0A] text-white">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
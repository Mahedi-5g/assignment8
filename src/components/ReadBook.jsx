import { Link } from "react-router-dom";


const ReadBook = ({ book }) => {
    const { author, image, bookName, category, rating, bookId } = book
    return (
        <div className="w-full h-72 p-4 border-2 my-5 rounded-2xl relative">
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col  mx-auto   lg:flex-row">
                    <div className="flex items-center justify-center  h-56 sm:h-64 lg:h-56 xl:h-112 2xl:h-128  ">
                        <img src={book.image} alt="" className="object-contain h-56 sm:h-64 lg:h-56 xl:h-112 2xl:h-128 w-44 " />
                    </div>
                    <div className="flex flex-col justify-center lg:pl-8 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className=" lg:text-2xl font-bold leading-none sm:text-4xl mb-2">
                            {book.bookName}
                        </h1>
                        <h2 className="text-base font-medium mb-2">By:{book.author}</h2>
                        <div className="flex gap-5 mb-4">
                            <h2 className="text-base font-bold">Tag</h2>
                            <button className="text-[#23BE0A] bg-lime-50 p-1 rounded-lg">#{book.tags[0]}</button>
                            <button  className="text-[#23BE0A] bg-lime-50 p-1 rounded-lg">#{book.tags[1]}</button>
                            <div className="flex">
                                <span><img src="src/assets/Frame (1).svg" alt="" /></span>
                            <h3> Year of Publishing:{book.yearOfPublishing}</h3>
                            </div>
                        </div>
                        <div className="flex gap-5 pb-3">
                            <div className="flex">
                                <img src="src/assets/Frame (2).svg" alt="" />
                                <h3>Publisher:{book.publisher}
                            </h3>
                            </div>
                            <div className="flex">
                                <img src="src/assets/Frame (3).svg" alt="" />
                                <h3 className="">Page:{book.totalPages}</h3>
                            </div>
                            
                        </div>
                        <hr />
                        <div className="flex gap-5 pt-3">
                            <h2 className="text-base font-medium text-[#328EFF] bg-[#328EFF26] p-1 rounded-lg">{book.category}</h2>
                            <h3 className="text-base font-medium text-[#FFAC33] bg-[#FFAC3326] p-1 rounded-lg">Rating: <span className=""> {book.rating}</span></h3>
                            <Link to={`/book/${book.bookId}`}  className="text-base font-medium text-white bg-[#23BE0A] p-1 rounded-lg"><button>View Details</button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ReadBook;
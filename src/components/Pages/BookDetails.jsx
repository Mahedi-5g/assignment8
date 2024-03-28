

import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveReadBook } from "../utility/LocalStoreg";
import { saveWishBook } from "../utility/LocalStoreg2";


const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const bookIdInit = parseInt(bookId);
    const book = books.find(book => book.bookId === bookIdInit);
    console.log(book);

    const handleRead = () =>{
        saveReadBook(bookIdInit);
        toast('Successfully added to read!');
    }


    const handleWish = () => {
        saveWishBook(bookIdInit);
        toast('successfully added to wishlist!');
    }

    return (
        <div>

            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center items-center p-6 mx-auto sm:py-12  lg:flex-row">
                    <div className="flex items-center justify-center p-10 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 ">
                        <img src={book.image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 " />
                    </div>
                    <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-4xl font-bold leading-none sm:text-6xl mb-2">
                            {book.bookName}
                        </h1>
                        <h2 className="text-xl font-medium mb-2">By:{book.author}</h2>
                        <hr />
                        <h2 className="text-xl font-medium py-2">{book.category}</h2>
                        <hr />
                        <p className="mt-6 mb-8 text-lg font-medium sm:mb-12"> <span className="text-xl font-bold">Review:</span>{book.review}
                        </p>
                        <div className="flex gap-5 mb-4">
                            <h2 className="text-xl font-bold">Tag</h2>
                            <button>{book.tags[0]}</button>
                            <button>{book.tags[1]}</button>
                        </div>
                        <hr />
                        <div className="">
                            <h3 className="">Number of pages: <span className="pl-5">{book.totalPages}</span></h3>
                            <h3>Publisher: <span className="pl-20">{book.publisher}</span> </h3>
                            <h3>Year of Publishing: <span className="pl-5">{book.yearOfPublishing}</span> </h3>
                            <h3>Rating: <span className="pl-[100px]"> {book.rating}</span></h3>
                        </div>
                        <div className="flex gap-5 mt-5">
                            <button onClick={handleRead} className="btn btn-outline btn-accent">Read</button>
                            <button onClick={handleWish} className="btn btn-outline btn-info">Wishlist</button>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;



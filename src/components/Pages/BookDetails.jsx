import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
    const book = useLoaderData();
    const { bookId } = useParams();
    const bookIdInit = parseInt(bookId);
    const b = book.find(b => b.bookId === bookIdInit);
    console.log(b);
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center items-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row">
                    <div className="flex items-center justify-center p-6 mt-8 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 bg-base-200">
                        <img src={b.image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 " />
                    </div>
                    <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-4xl font-bold leading-none sm:text-6xl">
                            {b.bookName}
                        </h1>
                        <h2 className="text-xl font-medium">by:{b.author}</h2>
                        <hr />
                        <h2 className="text-xl font-medium py-2">{b.category}</h2>
                        <hr />
                        <p className="mt-6 mb-8 text-lg font-medium sm:mb-12"> <span className="text-xl font-bold">Review:</span>{b.review}
                        </p>
                        <div className="flex gap-5 mb-4">
                            <h2 className="text-xl font-bold">Tag</h2>
                            <button>{b.tags[0]}</button>
                            <button>{b.tags[1]}</button>
                        </div>
                        <hr />
                        <div className="">
                            <h3 className="">Number of pages: <span className="pl-5">{b.totalPages}</span></h3>
                            <h3>Publisher: <span className="pl-20">{b.publisher}</span> </h3>
                            <h3>Year of Publishing: <span className="pl-5">{b.yearOfPublishing}</span> </h3>
                            <h3>Rating: <span className="pl-[100px]"> {b.rating}</span></h3>
                        </div>
                        <div className="flex gap-10">
                            <button>Read</button>
                            <button>Wishlist</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookDetails;
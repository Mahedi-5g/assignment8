import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { author, image,bookName,category,rating,bookId } = book;
    return (
        <div >
            <Link to={`/book/${bookId}`} rel="noopener noreferrer" href="#" className="max-w-sm mx-auto  group hover:no-underline focus:no-underline dark:bg-gray-50">
            <div className="card w-96 bg-base-100 shadow-xl transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-64 w-52 " />
                </figure>
                <div className="card-body h-[240px]">
                    <div className="flex gap-6  rounded-lg  text-[#23BE0A]">
                        <p className="bg-lime-50 p-2 rounded-xl ">Young Adult</p>
                        <p className="bg-lime-50  p-2 rounded-xl">Identity</p>
                    </div>
                    <h2 className="card-title text-2xl font-bold">{bookName}</h2>
                    <p className="text-base font-medium">by:{author}</p>
                    <hr />
                    <div className="card-actions flex justify-between text-base font-medium">
                        <p>{category}</p>
                        <div className="flex gap-2">
                        <p>{rating}</p>
                        <p className="pt-1"><FaRegStar /></p>
                        </div>
                    </div>
                </div>
            </div>
            </Link>
           
        </div>
    );
};

export default Book;
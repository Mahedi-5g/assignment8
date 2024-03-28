import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishBook } from "./utility/LocalStoreg2";
import WishlistBook from "./WishlistBook";

const WishlistBooks = () => {
    const books = useLoaderData();
    const [wish,setWish] = useState([]);
    useEffect(() =>{
        const storedWishIds = getStoredWishBook();
        if(books?.length > 0){
            const bookWish = books.filter(book =>
            storedWishIds.includes(book.bookId))
            setWish(bookWish);
        }
    },[]);
    return (
        <div>
            {
                wish.map(book => <WishlistBook key={book.bookId} book={book}></WishlistBook>)
            }
        </div>
    );
};

export default WishlistBooks;

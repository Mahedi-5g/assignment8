import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "./utility/LocalStoreg";
import ReadBook from "./ReadBook";


const ReadBooks = () => {
    const books = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);
    console.log(readBooks)
    useEffect(() => {
        const storedBookIds = getStoredReadBook();
        console.log(books, readBooks)
        if (books?.length > 0) {
            const bookRead = books.filter(book => storedBookIds.includes(book.bookId))
            // console.log(bookRead,storedBookIds,books)
            setReadBooks(bookRead);
        }
    }, [books]);
    return (
        <div>
            <div>
                {/* <h1>listed books:{books.length} </h1> */}
            </div>
            
            <div>
                {
                    readBooks.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>
                      
                    )
                }
            </div>
        </div>
    );
};

export default ReadBooks;
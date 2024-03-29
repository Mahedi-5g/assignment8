import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "./utility/LocalStoreg";
import ReadBook from "./ReadBook";


const ReadBooks = ({ sortBy }) => {
    const books = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);
    // const [sortBy, setSortBy] = useState("");
    useEffect(() => {
        const storedBookIds = getStoredReadBook();
        let bookRead = books.filter(book => storedBookIds.includes(book.bookId));
        if (sortBy === "rating") {
            bookRead = bookRead.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === "pages") {
            bookRead = bookRead.sort((a, b) => b.pages - a.pages);
        } else if (sortBy === "year") {
            bookRead = bookRead.sort((a, b) => b.year - a.year);
        }
        setReadBooks([...bookRead])
        console.log(books, readBooks)
        if (books?.length > 0) {
            const bookRead = books.filter(book => storedBookIds.includes(book.bookId))
            // console.log(bookRead,storedBookIds,books)
            setReadBooks(bookRead);
        }
    }, [books, sortBy]);
    // const handleSorting = (event) => {
    //     setSortBy(event.target.value); // Update the sorting option when selected from the dropdown
    // };
    return (
        <div>
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
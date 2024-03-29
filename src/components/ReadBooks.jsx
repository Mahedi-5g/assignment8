

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "./utility/LocalStoreg";
import ReadBook from "./ReadBook";

const ReadBooks = ({ sortBy }) => {
    const books = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        const storedBookIds = getStoredReadBook();
        let filteredBooks = books.filter(book => storedBookIds.includes(book.bookId));

        switch (sortBy) {
            case "rating":
                filteredBooks.sort((a, b) => b.rating - a.rating);
                break;
            case "pages":
                filteredBooks.sort((a, b) => b.totalPages - a.totalPages);
                break;
            case "year":
                filteredBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
                break;
            default:
                break;
        }

        setReadBooks(filteredBooks);
    }, [books, sortBy]);

    return (
        <div>
            {readBooks.map(book => <ReadBook key={book.bookId} book={book} />)}
        </div>
    );
};

export default ReadBooks;

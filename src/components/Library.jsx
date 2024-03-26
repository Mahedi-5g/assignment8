import { useEffect, useState } from "react";
import Book from "./Book";


const Library = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://mahedi-5g.github.io/create-json-file/fake.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])

    return (
        <div>
            <div className="pt-10">
                <h1 className="text-center text-4xl font-bold">Books</h1>
            </div>
            <div  className="grid md:grid-cols-2 lg:grid-cols-3 pt-5 gap-5">
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Library;
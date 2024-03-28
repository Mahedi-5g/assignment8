

const ReadBook = ({book}) => {
    const {author, image,bookName,category,rating,bookId} = book
    return (
        <div>
            <h1>read book:{bookName}</h1>
        </div>
    );
};

export default ReadBook;
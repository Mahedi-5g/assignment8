

const Book = ({ book }) => {
    const { author, image,bookName,category,rating } = book;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-64 w-52" />
                </figure>
                <div className="card-body h-[240px]">
                    <div className="flex gap-6  rounded-lg  text-[#23BE0A]">
                        <button className="bg-lime-50 p-2 rounded-xl ">Young Adult</button>
                        <button className="bg-lime-50  p-2 rounded-xl">Identity</button>
                    </div>
                    <h2 className="card-title text-2xl font-bold">{bookName}</h2>
                    <p className="text-base font-medium">by:{author}</p>
                    <hr />
                    <div className="card-actions flex justify-between text-base font-medium">
                        <p>{category}</p>
                        <p>{rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;
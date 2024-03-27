import ReadBooks from "../ReadBooks";
import WishlistBooks from "../WishlistBooks";


const ListedBooks = () => {
    return (
        <div>
            <div className="mt-8  w-full">
                <h1 className="text-center items-center bg-base-200 py-4 text-xl font-bold ">Books</h1>
            </div>
            <div>
                <div className="navbar bg-base-100 items-center justify-center text-center">
                    <div className="navbar-center lg:flex">
                        <ul className="menu  p-1 ">
                            <li>
                                <details>
                                    <summary className="bg-[#23BE0A] text-white">Sort By</summary>
                                    <ul className="border-2 pl-2">
                                        <li><a>Rating</a></li>
                                        <li><a>Number of pages</a></li>
                                        <li><a>Publisher year</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl font-semibold" aria-label="Read Books" />
                    <div role="tabpanel" className="tab-content rounded-box p-6"><ReadBooks></ReadBooks></div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl font-semibold" aria-label="Wishlist Books" checked />
                    <div role="tabpanel" className="tab-content rounded-box p-6"><WishlistBooks></WishlistBooks></div>
                </div>
            </div>

        </div>
    );
};

export default ListedBooks;


import { useState } from "react";
import ReadBooks from "../ReadBooks";
import WishlistBooks from "../WishlistBooks";

const ListedBooks = () => {
    const [sortBy, setSortBy] = useState("");

    const handleSorting = (event) => {
        setSortBy(event.target.value);
    };

    return (
        <div>
            <div className="mt-8 w-full">
                <h1 className="text-center items-center bg-base-200 py-4 text-xl font-bold">Books</h1>
            </div>
            <div>
                <div className="navbar bg-base-100 items-center justify-center text-center">
                    <div className="navbar-center lg:flex">
                        <ul className="menu p-1">
                            <li>
                                <details>
                                    <summary className="bg-[#23BE0A] text-white">Sort By</summary>
                                    <div className="sort-selection">
                                        <form action="#">
                                            <label htmlFor="sort"></label>
                                            <select name="sort" id="sort" className="sort-selection--style" onChange={handleSorting}>
                                                <option value="rating">Rating</option>
                                                <option value="pages">Number of pages</option>
                                                <option value="year">Publisher year</option>
                                            </select>
                                        </form>
                                    </div>
                                </details>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl font-semibold" aria-label="Read Books" checked/>
                    <div role="tabpanel" className="tab-content rounded-box p-6"><ReadBooks sortBy={sortBy}></ReadBooks></div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl font-semibold" aria-label="Wishlist Books"  />
                    <div role="tabpanel" className="tab-content rounded-box p-6"><WishlistBooks sortBy={sortBy}></WishlistBooks></div>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;

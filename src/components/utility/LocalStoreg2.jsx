

const getStoredWishBook =() =>{
    const storedWishBook = localStorage.getItem('wish-books');
    if(storedWishBook){
        return JSON.parse(storedWishBook);
    }
    return[];
}

const saveWishBook = id =>{
    const storedWishBook = getStoredWishBook();
    const exists = storedWishBook.find(bookName => bookName === id);
    if(!exists){
        storedWishBook.push(id);
        localStorage.setItem('wish-books', JSON.stringify(storedWishBook))
    }
}

export{ getStoredWishBook,saveWishBook}

const getStoredReadBook = () =>{
    const storedReadBook = localStorage.getItem('read-books');
    if(storedReadBook){
        return JSON.parse(storedReadBook);
    }
    return[];
}

const saveReadBook = id =>{
    const storedReadBook = getStoredReadBook();
    const exists = storedReadBook.find(bookId => bookId === id);
    if(!exists){
        storedReadBook.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedReadBook))
    }
}

export { getStoredReadBook,saveReadBook}


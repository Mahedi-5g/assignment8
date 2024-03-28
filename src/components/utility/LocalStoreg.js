

// export const saveToLocalStoreg = (book, storageKey) => {
//     let saveData = JSON.parse(localStorage.getItem(storageKey)) || []; 
//     const existedData = saveData.find((item) => item.id === book.id);
//     if (!existedData) {
//         saveData.push(book);
//         localStorage.setItem(storageKey, JSON.stringify(saveData));
//         alert("Added successfully");
//     } else {
//         alert("Data already exists");
//     }
// };

// export const getFromLocalStoreg = (storageKey) => {
//     return JSON.parse(localStorage.getItem(storageKey)) || [];
// };


// export const saveToLocalStoreg = (book) => {
//     let saveData = JSON.parse(localStorage.getItem("bookName")) || []; 
//     const existedData = saveData.find((item) => item.id == book.id);
//     if (!existedData) {
//         saveData.push(book);
//         localStorage.setItem("bookName", JSON.stringify(saveData));
//         alert("Added successfully");
//     } else {
//         alert("Data already exists");
//     }
// };
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
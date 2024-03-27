

export const saveToLocalStoreg = (book, storageKey) => {
    let saveData = JSON.parse(localStorage.getItem(storageKey)) || []; 
    const existedData = saveData.find((item) => item.id === book.id);
    if (!existedData) {
        saveData.push(book);
        localStorage.setItem(storageKey, JSON.stringify(saveData));
        alert("Added successfully");
    } else {
        alert("Data already exists");
    }
};

export const getFromLocalStoreg = (storageKey) => {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
};

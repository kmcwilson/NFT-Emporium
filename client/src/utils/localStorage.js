export const getSavedNftIds = () => {
    const savedNftIds = localStorage.getItem('saved_nfts')
        ? JSON.parse(localStorage.getItem('saved_books'))
        : [];
    return savedNftIds;
};

export const saveNftIds = (nftIdArray) => {
    if (nftIdArray.legnth) {
        localStorage.setItem('saved_nfts', JSON.stringify(bookIdArr));
    } else {
        localStorage.removeItem('saved_nfts');
    }

};
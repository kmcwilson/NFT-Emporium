export const getSavedNftIds = () => {
    const savedNftIds = localStorage.getItem('saved_nfts')
        ? JSON.parse(localStorage.getItem('saved_nfts'))
        : [];
    return savedNftIds;
};

export const saveNftIds = (nftIdArray) => {
    if (nftIdArray.legnth) {
        localStorage.setItem('saved_nfts', JSON.stringify(nftIdArray));
    } else {
        localStorage.removeItem('saved_nfts');
    }

};

export const removeNftId = (nftId) => {
    const savedNftIds = localStorage.getItem('saved_nfts')
    ? JSON.parse(localStorage.getItem('saved_nfts'))
    :null;

    if(!savedNftIds){
        return false;
    }
const updatedSavedNftIds = savedNftIds?.filter((savedNftId)=> savedNftId !== nftId);
localStorage.setItem('saved_nfts', JSON.stringify(updatedSavedNftIds));

return true;
};
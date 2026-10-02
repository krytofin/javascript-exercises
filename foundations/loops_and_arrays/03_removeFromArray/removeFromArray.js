const removeFromArray = function(arr, ...toRemove) {
    arr = arr.slice();
    for(let itemToRemove of toRemove){
        let index;
        do {
            index = arr.indexOf(itemToRemove);
            if (index >= 0){
                arr.splice(index, 1);
            }
        }
        while (index >= 0); // indexOf return -1 if there is no such item in array
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

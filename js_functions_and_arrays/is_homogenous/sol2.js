function isHomogenous(arr) {
    let currentType;
    let previousType;
    for (let i = 0; i <= arr.length; i++) {

        console.log(previousType, currentType);
        if (previousType === undefined) {
            previousType = typeof arr[i]
        }
        else {
            currentType = typeof arr[i];
            if (previousType !== currentType) {
                return false
            } 
            else {
                previousType = currentType
            }
        }
    }
    return true
}

console.log(isHomogenous([2,33]))
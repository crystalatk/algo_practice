function mergeTwoLists (l1, l2) {
    let finalArray= [];
    for (let i = 0; i < l1.length; i ++) {
        if (l1[i] < l2[i]) {
            finalArray.push(l1[i])
        } else {
            for (let j = 0; j < length.l2; j ++) {
                if (l1[i] > l2[j]) {
                    finalArray.push(l2[j])
                } else {
                    break
                }
            }
        } 
        if (l1[i+1] > l2[i]) {
            finalArray.push(l2[i])
        }
    }
    if (l2.length > l1.length) {
        for (let j = l1.length; j < l2.length; j ++) {
            finalArray.push(l2[j])
        }
    }
    return finalArray;
};

const arr1 = [1, 3, 5, 6];
const arr2 = [2, 4, 7, 9, 10];

console.log(mergeTwoLists(arr1, arr2));




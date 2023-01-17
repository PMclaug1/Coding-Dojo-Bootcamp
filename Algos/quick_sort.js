// Function designates an element as the pivot. Should rearrange elements in the array so that all values less than the pivot are moved to the left and all values greater moved to the right
// order to left or right doesn't matter
// should not make a new array, should return index of pivot

const nums1 = [11, 8, 14, 3, 6, 2, 7];
const expected1 = [2, 3, 6, 7, 8, 11, 14];

const nums2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected2 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

const nums3 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const expected3 = [2, 3, 3, 3, 6, 7, 8, 11, 14];

const nums4 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected4 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

function pivot(arr, start=0, end=arr.length-1){
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
let pivot = arr[start];
let swapIdx = start;

for(let i = start + 1; i <= end; i++){
    if(pivot > arr[i]){
        swapIdx++;
        swap(arr,swapIdx,i)
    }
    }
    swap(arr, start, swapIdx)
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        console.log(arr)
        let pivotIndex = pivot(arr, left, right)
        console.log(pivotIndex)
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
    }
    console.log(arr)
    return arr;
} 

quickSort([1, 17, 12, -3, -9, 13, 21, 4, 27])
// Function designates an element as the pivot. Should rearrange elements in the array so that all values less than the pivot are moved to the left and all values greater moved to the right
// order to left or right doesn't matter
// should not make a new array, should return index of pivot
// pivot should be roughly median value for best big O

function pivot(arr, start=0, end=arr.length-1){
    const swap = (array, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
let pivot = arr[start];
let swapIdx = start;

for(let i = start + 1; i <= end; i++){
    if(pivot > arr[i]){
        swapIdx++;
        swap(arr,swapIdx,i)
        console.log(arr)
    }
    }
    swap(arr, start, swapIdx)
    console.log(swapIdx)
    return swapIdx;
}
pivot([4,8,2,1,5,7,6,3])
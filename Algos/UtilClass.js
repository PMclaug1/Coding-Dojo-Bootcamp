class UtilClass {
    //Given an array of numbers return the sum of the numbers using a function
    constructor(arr) {
        this.arr = arr
    }
    getSum(arr) {
        let sum = 0
        for (let i = 0; i<arr.length; i++ ) {
            sum += arr[i]
        }
        return sum
    }

    //Create a function that return the difference between the last number and the first number
    getDiff(arr) {
        let diff = arr[arr.length-1] - arr[0]
        return diff
    }

    //Create another function that prints the last string in an array
    getLastStr(arr) {
        let last = ""
        for (let i = 0; i<arr.length; i++) {
            if (typeof arr[i] === "string") {
                last = arr[i]
            }
        }
        return last
    }
}

var testArr = [1, 2, 3, 4, 5]
var testArrWStr = ["hey", 1, 2, "hello", 3, 4, "cheese"]

//Little hint
let newBot = new UtilClass()
console.log(typeof "Hey")
console.log(newBot.getSum(testArr))
console.log(newBot.getDiff(testArr))
console.log(newBot.getLastStr(testArrWStr))


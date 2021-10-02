let nums = []
let num;

// Functions

function newNums() {
    for (let j = 0; j < 32; j++) {
        do {
            num = getRandomInt(40, 200)
        } while (nums.includes(num))
        nums[j] = num
    }
    printToChart(nums)
}

async function bubbleSort() {
    let array = nums
    for(let i = 0; i < array.length-1; i++) {
        for(let j = 0; j < array.length-i-1; j++) {
            if(array[j] > array[j+1]) {
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
                await delay(5);
                nums = array
                printToChart(nums)
            }
        }
    }
    nums = array
    printToChart(nums)
}

async function selectionSort() {
    let array = nums
    for(let i = 0; i < array.length-1; i++) {
        let min = i
        for (let j = i + 1; j < array.length; j++) {
            if(array[min] > array[j]) min = j
        }
        let temp = array[i]
        array[i] = array[min]
        array[min] = temp
        await delay(40);
        nums = array
        printToChart(nums)
    }
    nums = array
    printToChart(nums)
}

async function insertionSort() {
    let array = nums
    for(let i = 1; i < array.length; i++) {
        let temp = array[i]
        let j = i-1
        while(j >= 0 && array[j] > temp) {
            array[j+1] = array[j]
            j--
            await delay(6);
            nums = array
            printToChart(nums)
        }
        array[j+1] = temp
    }
    nums = array
    printToChart(nums)
}

function delay(delayInMs) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(2);
        }, delayInMs);
    });
}

function printNumsObjToChart(numsObj) {
    let bars = document.getElementsByClassName("bar");
    for (let i = 0; i < bars.length; i++) {
        if (numsObj[i] !== undefined) {
            bars[i].style.height = numsObj[i] + "px";
        }
    }
}

function printToChart(numbers) {
    let bars = document.getElementsByClassName("bar");
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.height = numbers[i] + "px";
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function initMergeSort() {
    let numsObj = {}
    for (let i = 0; i < nums.length; i++) {
        numsObj[i] = nums[i]
    }
    // console.log(Object.size(numsObj))
    console.log(numsObj)
    // console.log(getPartOfNumsObj(Object.keys(numsObj).filter(key => (key < nums.length/2)), numsObj))
    // console.log(getPartOfNumsObj(Object.keys(numsObj).filter(key => (key >= nums.length/2)), numsObj))
    printNumsObjToChart(mergeSort(numsObj))
}

function getPartOfNumsObj(start, stop, numsObj) {
    let newNumsObj = {}

    index = start
    for(var prop in numsObj) {
        if (index >= stop) break
        else {
            newNumsObj[prop] = numsObj[index]
            index++
        }
    }
    return newNumsObj
}

function mergeSort(numsObj) {
    if (Object.size(numsObj) <= 1) {
        return numsObj
    }
    console.log(Object.size(numsObj))

    // const keys = Object.keys(numsObj)
    const left = getPartOfNumsObj(0, Object.size(numsObj)/2, numsObj)
    const right = getPartOfNumsObj(Object.size(numsObj)/2, Object.size(numsObj), numsObj)
    console.log(left, right)

    const res = merge(mergeSort(left), mergeSort(right));
    return res
}

function merge(leftObj, rightObj) {
    let sortedArr = [];
    let left = Object.values(leftObj)
    let right = Object.values(rightObj)

    while (left.length && right.length) {
        // insert the smallest element to the sortedArr
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }

    const newArr = [...sortedArr, ...left, ...right];

    let numsObj = {}
    for (let i = 0; i < newArr.length; i++) {
        numsObj[i] = newArr[i]
    }
    return numsObj
}

Object.size = function(obj) {
    var size = 0,
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
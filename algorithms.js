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
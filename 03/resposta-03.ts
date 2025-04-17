const number: number[] = [];

const calculate = (numbers: number[]) => {
    for (let i: number = 0; i < numbers.length; i++) {

        console.log(`Tabuada do numerto ${numbers[i]}`)

        for (let multiplier: number = 0; multiplier <= 10; multiplier++) {
            let count: number = multiplier * numbers[i];
            console.log(` ${multiplier} x ${numbers[i]} = ${count}`)
        }

        console.log(`-----------------------------------------------------------------------`)
    }
}
calculate([1, 5, 3])

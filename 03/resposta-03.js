var number = [];
var calculate = function (numbers) {
    for (var i = 0; i < numbers.length; i++) {
        console.log("Tabuada do numerto ".concat(numbers[i]));
        for (var multiplier = 0; multiplier <= 10; multiplier++) {
            var count = multiplier * numbers[i];
            console.log(" ".concat(multiplier, " x ").concat(numbers[i], " = ").concat(count));
        }
        console.log("-----------------------------------------------------------------------");
    }
};
calculate([1, 5, 3]);

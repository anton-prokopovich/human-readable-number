module.exports = function toReadable(number) {
    let hundred = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let dozes = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let ones = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let arr = [];
    if (number >= 100) {
        arr.push(hundred[parseInt(number / 100)] + " hundred");
        if (number % 100 > 0) {
            number = number % 100;
        }
    }
    if (number >= 20) {
        arr.push(ones[parseInt(number / 10)]);
        arr.push(hundred[parseInt(number % 10)]);
        number = number % 10;
    } else if (number >= 10) {
        arr.push(dozes[parseInt(number % 10)]);
    } else if (number >= 1) {
        arr.push(hundred[number]);
    } else {
        arr = ["zero"];
    }
    return arr.join(" ").trim();
};

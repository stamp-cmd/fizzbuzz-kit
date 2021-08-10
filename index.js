/**
 * @param {Number} num 
 */

function isFizzBuzz(num) {
    if (typeof(num) === "number" && Number.isSafeInteger(num)) {
        if (num % 15 === 0) {
            return true;
        }else {
            return false;
        }
    }else {
        throw new TypeError("[ERROR]: Pamareter must be SafeInteger number");
    }
}

/**
 * @param {Number} num
 */

function isBuzz(num) {
    if (typeof(num) === "number" && Number.isSafeInteger(num)) {
        if (num % 5 === 0 && num % 3 !== 0) {
            return true;
        }else {
            return false;
        }
    }else {
        throw new TypeError("[ERROR]: Pamareter must be SafeInteger number");
    }
}

/**
 * @param {Number} num
 */

 function isFizz(num) {
    if (typeof(num) === "number" && Number.isSafeInteger(num)) {
        if (num % 3 === 0 && num % 5 !== 0) {
            return true;
        }else {
            return false;
        }
    }else {
        throw new TypeError("[ERROR]: Pamareter must be SafeInteger number");
    }
}

/**
 * @param {Number} num 
 */

function isNormal(num) {
    if (typeof(num) === "number" && Number.isSafeInteger(num)) {
        if (num % 3 !== 0 && num % 5 !== 0) {
            return true;
        }else {
            return false;
        }
    }else {
        throw new TypeError("[ERROR]: Pamareter must be SafeInteger number");
    }
}

/**
 * @param {Number} num 
 */

function FizzBuzzSet(num) {
    if (typeof(num) === "number" && Number.isSafeInteger(num)) {
        let set = []
        for (let i = 1; i < num + 1; i++) {
            set.push(15 * i);
        }
        return set;
    }else {
        throw new TypeError("[ERROR]: Pamareter must be SafeInteger number");
    }
}

/**
 * @param {Number} num 
 */

function BuzzSet(num) {
    if (typeof(num) === "number" && Number.isSafeInteger(num)) {
        let set = []
        for (let i = 1; i < num + 1; i++) {
            set.push(5 * i);
        }
        return set;
    }else {
        throw new TypeError("[ERROR]: Pamareter must be SafeInteger number");
    }
}

/**
 * @param {Number} num 
 */

function FizzSet(num) {
    if (typeof(num) === "number" && Number.isSafeInteger(num)) {
        let set = []
        for (let i = 1; i < num + 1; i++) {
            set.push(3 * i);
        }
        return set;
    }else {
        throw new TypeError("[ERROR]: Pamareter must be SafeInteger number");
    }
}

/**
 * @param {Number} num 
 */

function NormalEvenSet(num) {
    if (typeof(num) === "number" && Number.isSafeInteger(num)) {
        let set = []
        for (let i = 1; i < num + 1; i++) {
            set.push(2 * i);
        }
        return set;
    }else {
        throw new TypeError("[ERROR]: Pamareter must be SafeInteger number");
    }
}

/**
 * @param {Number} num 
 */

function SearchFizzBuzz(num) {
    if (typeof(num) === "number" && Number.isSafeInteger(num)) {
        if (num % 15 === 0) {
            return "FizzBuzz";
        }else if (num % 5 === 0) {
            return "Buzz";
        }else if (num % 3 === 0) {
            return "Fizz";
        }else {
            return "Normal";
        }
    }else {
        throw new TypeError("[ERROR]: Pamareter must be SafeInteger number");
    }
}

/**
 * @param {Number} num 
 */

function SearchFizzBuzz(num) {
    if (typeof(num) === "number" && Number.isSafeInteger(num)) {
        let set = [];
        for (let i = 1; i < num + 1; i++) {
            if (i % 15 === 0) {
                set.push("FizzBuzzz " + i);
            }else if (i % 5 === 0) {
                set.push("Buzz " + i);
            }else if (i % 3 === 0) {
                set.push("Fizz " + i)
            }else {
                set.push("Normal " + i);
            }
        }
        return set;
    }else {
        throw new TypeError("[ERROR]: Pamareter must be SafeInteger number");
    }
}

/**
 * @param {Number} num 
 */

function TotalFizzBuzz(num) {
    if (typeof(num) === "number" && Number.isSafeInteger(num)) {
        let total = 0;
        for(let i = 0; i < num; i++) {
            if (i % 15 === 0) {
                total++;
            }
        }
        return total;
    }else {
        throw new TypeError("[ERROR]: Pamareter must be SafeInteger number");
    }
}

/**
 * @param {Number} num 
 */

function TotalBuzz(num) {
    if (typeof(num) === "number" && Number.isSafeInteger(num)) {
        let total = 0;
        for(let i = 0; i < num; i++) {
            if (i % 5 === 0 && i % 3 !== 0) {
                total++;
            }
        }
        return total;
    }else {
        throw new TypeError("[ERROR]: Pamareter must be SafeInteger number");
    }
}

/**
 * @param {Number} num 
 */

function TotalFizz(num) {
    if (typeof(num) === "number" && Number.isSafeInteger(num)) {
        let total = 0;
        for(let i = 0; i < num; i++) {
            if (i % 3 === 0 && i % 5 !== 0) {
                total++;
            }
        }
        return total;
    }else {
        throw new TypeError("[ERROR]: Pamareter must be SafeInteger number");
    }
}

/**
 * @param {Number} num 
 */

function TotalBuzz(num) {
    if (typeof(num) === "number" && Number.isSafeInteger(num)) {
        let total = 0;
        for(let i = 0; i < num; i++) {
            if (i % 3 !== 0 && i % 5 === 0) {
                total++;
            }
        }
        return total;
    }else {
        throw new TypeError("[ERROR]: Pamareter must be SafeInteger number");
    }
}

/**
 * @param {Number} num 
 */

 function TotalNormal(num) {
    if (typeof(num) === "number" && Number.isSafeInteger(num)) {
        let total = 0;
        for(let i = 0; i < num; i++) {
            if (i % 3 !== 0 && i % 5 !== 0) {
                total++;
            }
        }
        return total;
    }else {
        throw new TypeError("[ERROR]: Pamareter must be SafeInteger number");
    }
}

/**
 * @param {String} str
 */

 function FindFizzBuzz(str) {
    if (typeof(str) === "string") {
        return /fizzbuzz/.test(str.toLowerCase());
    }else {
        throw new TypeError("[ERROR]: Pamareter must be string");
    }
}

/**
 * @param {String} str
 */

 function FindBuzz(str) {
    if (typeof(str) === "string") {
        return /buzz/.test(str.toLowerCase());
    }else {
        throw new TypeError("[ERROR]: Pamareter must be string");
    }
}

/**
 * @param {String} str
 */

 function FindFizz(str) {
    if (typeof(str) === "string") {
        return /fizz/.test(str.toLowerCase());
    }else {
        throw new TypeError("[ERROR]: Pamareter must be string");
    }
}

/**
 * @param {String} str
 */

 function FindNormal(str) {
    if (typeof(str) === "string") {
        return /normal/.test(str.toLowerCase());
    }else {
        throw new TypeError("[ERROR]: Pamareter must be string");
    }
}

module.exports = {
    isFizzBuzz,
    isBuzz,
    isFizz,
    isNormal,
    FizzBuzzSet,
    BuzzSet,
    FizzSet,
    NormalEvenSet,
    SearchFizzBuzz,
    TotalFizzBuzz,
    TotalFizz,
    TotalBuzz,
    TotalNormal,
    FindFizzBuzz,
    FindBuzz,
    FindFizz,
    FindNormal
}

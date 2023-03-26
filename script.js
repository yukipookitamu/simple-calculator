// numbers
let one_btn = document.getElementById("one");
let two_btn = document.getElementById("two");
let three_btn = document.getElementById("three");
let four_btn = document.getElementById("four");
let five_btn = document.getElementById("five");
let six_btn = document.getElementById("six");
let seven_btn = document.getElementById("seven");
let eight_btn = document.getElementById("eight");
let nine_btn = document.getElementById("nine");
let zero_btn = document.getElementById("zero");
 
// operations
let equal_btn = document.getElementById("equal-btn");
let clear_btn = document.getElementById("clear-btn");

let add_btn = document.getElementById("add");
let sub_btn = document.getElementById("sub");
let div_btn = document.getElementById("div");
let mul_btn = document.getElementById("mul");

// screen
let result = document.querySelector(".res");

// calculations
let storeNum = +result;
let storing = false;

let adding = false;
let subtracting = false;
let dividing = false;
let mulitplying = false;

// test
// result.textContent = "some number";

window.addEventListener("load", function() {
    result.textContent = "0";
    storeNum = +result.textContent;
    console.log(typeof(storeNum));
})

clear_btn.addEventListener("click", function() {
    result.textContent = "0";
    storeNum = 0;
})

one_btn.addEventListener("click", function() {
    if (result.textContent === "0") {
        result.textContent = "1";
    } else {
        result.textContent += "1";
    }
})

two_btn.addEventListener("click", function() {
    if (result.textContent === "0") {
        result.textContent = "2";
    } else {
        result.textContent += "2";
    }
})

three_btn.addEventListener("click", function() {
    if (result.textContent === "0") {
        result.textContent = "3";
    } else {
        result.textContent += "3";
    }
})

four_btn.addEventListener("click", function() {
    if (result.textContent === "0") {
        result.textContent = "4";
    } else {
        result.textContent += "4";
    }
})

five_btn.addEventListener("click", function() {
    if (result.textContent === "0") {
        result.textContent = "5";
    } else {
        result.textContent += "5";
    }
})

six_btn.addEventListener("click", function() {
    if (result.textContent === "0") {
        result.textContent = "6";
    } else {
        result.textContent += "6";
    }
})

seven_btn.addEventListener("click", function() {
    if (result.textContent === "0") {
        result.textContent = "7";
    } else {
        result.textContent += "7";
    }
})

eight_btn.addEventListener("click", function() {
    if (result.textContent === "0") {
        result.textContent = "8";
    } else {
        result.textContent += "8";
    }
})

nine_btn.addEventListener("click", function() {
    if (result.textContent === "0") {
        result.textContent = "9";
    } else {
        result.textContent += "9";
    }
})

zero_btn.addEventListener("click", function() {
    if (result.textContent === "0") {
        result.textContent = "0";
    } else {
        result.textContent += "0";
    }
})

add_btn.addEventListener("click", function() {
    console.log("click");
    if (!adding) {
        storeNum += +result.textContent;
        result.textContent = "0";
        adding = true;
        console.log(storeNum);
    } else {
        storeNum += +result.textContent;
        storing = false;
        console.log(storeNum);
    }
})

equal_btn.addEventListener("click", function() {
    if (adding) {
        storeNum += +result.textContent;
        result.textContent = storeNum;
        adding = false;
    }
})
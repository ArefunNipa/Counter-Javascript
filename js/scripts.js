// -----------------------------------------
//   Counter one
// -----------------------------------------

let counter = document.querySelector(".counter");
let countStart = 0;

function counterUp() {
    countStart++;
    counter.innerHTML = countStart;

    if (countStart == counter.dataset.count) {
        clearInterval(stop);
    }
}

let stop = setInterval(function () {
    counterUp();
}, 300);



// -----------------------------------------
//   Counter Two
// -----------------------------------------

let countertwo = document.querySelectorAll(".countertwo");
let arry = Array.from(countertwo);

arry.map((number) => {

    let countt = 0;
    function counterup() {
        countt++;
        number.innerHTML = countt;

        if (countt == number.dataset.count) {
            clearInterval(stop);
        }
    }

    let stop = setInterval(function () {
        counterup();
    }, 500);
});
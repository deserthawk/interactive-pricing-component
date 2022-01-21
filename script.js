let thePrice = document.getElementsByClassName("price");
let theView = document.getElementsByClassName("views");
let yearlyFlag = document.getElementById("yearly");
let theSlider = document.getElementsByClassName("slider");
let list = [
    ["10K", 8.00],
    ["50K", 12.00],
    ["100K", 16.00],
    ["500K", 24.00],
    ["1M", 36.00]
];

for (let e of document.querySelectorAll('input[type="range"].slider')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '1' : e.min);
    e.style.setProperty('--max', e.max == '' ? '5' : e.max);
    e.addEventListener('input', () => {
        e.style.setProperty('--value', e.value);
        theView[0].innerText = list[e.value - 1][0];
        updatePrice(list[e.value - 1][1]);
    });
}

yearlyFlag.addEventListener('change', () => {
    updatePrice(list[theSlider[0].value - 1][1]);
});

function updatePrice(value){
    if (yearlyFlag.checked) {
        thePrice[0].innerText = "$" + (value * 0.75).toFixed(2);
    }
    else {
        thePrice[0].innerText = "$" + (value).toFixed(2);
    }
}
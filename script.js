const value = document.getElementById("value");
const maisButton = document.getElementById("mais")
const menosButton = document.getElementById("menos")
const resetButton = document.getElementById('reset')

const updateValue = () => {
    value.innerHTML = count;
};

let count = 0;
let intervalId = 0;

maisButton.addEventListener('mousedown', () => {

    intervalId = setInterval(() => {
        count += 1;
        updateValue();
    }, 70);

});

menosButton.addEventListener('mousedown', () => {

    intervalId = setInterval(() => {
        if (count >= 1) {
            count -= 1;
            updateValue();
        }

    }, 70);

})


resetButton.addEventListener('mousedown', () => {

    intervalId = setInterval(() => {
        count = 0;
        updateValue();
    }, 70);

})

document.addEventListener('mouseup', () => clearInterval(intervalId));
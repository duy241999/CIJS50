const $time = document.getElementById('time');
const $red = document.getElementById('red');
const $yellow = document.getElementById('yellow');
const $green = document.getElementById('green');

function changeRed() {
    $green.style.opacity = .3;
    $red.style.opacity = 1;
    $yellow.style.opacity = 0.3;
    setTimeout(function () {
        $time.innerText = 10;
        changeGreen();
    }, 15100);
}

function changeGreen() {
    $time.innerText = 10;
    $green.style.opacity = 1;
    $red.style.opacity = 0.3;
    $yellow.style.opacity = .3;
    setTimeout(function () {
        $time.innerText = 3;
        changeYellow();
    }, 10100);
}

function changeYellow() {
    $green.style.opacity = 0.3;
    $red.style.opacity = .3;
    $yellow.style.opacity = 1;
    setTimeout(function () {
        $time.innerText = 15;
        changeRed();
    }, 3100);
}

function myInterval() {
    setInterval(function () {
        --$time.innerText;
    }, 1000);
    changeRed();
}
myInterval();


function main() {
    canvasInterface();
    randomValGenerator(20, 10);
    displayTimer(15);
}

function randomValGenerator(rangeMax, rangeMin) {
    let a = Randomizer.nextInt(rangeMax, rangeMin);
    let b = Randomizer.nextInt(rangeMax, rangeMin);
    console.log(a, " ", b);
}

function displayTimer(calcTime) {
    let background = new Circle(50);
    let strtime = calcTime.toString();
    let timer = new Text(strtime, "Arial");
    console.log(calcTime, " ", strtime);
    background.setPosition(50, 200);
    background.setColor("#181F32");
    timer.setPosition(150, 200);
    setTimer(handleTime(calcTime), 100);
    if (calcTime <= 0) stopTimer(handleTime(calcTime, background, timer));
}

function handleTime(time, background, timer) {
    add(background);
    add(timer);
    if (time <= 5) background.setColor("orange");
    time -= 0.1;
    return time;
}

function calculateTimer() {

}

function canvasInterface() {
    let bg = new 
}


main();
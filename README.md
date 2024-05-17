# calc game


* JS Graphics => new Text(), new Rect()

* mouse or keyboard Interaction => keyboard input

* minimum 1 timer = calculation for rangeMax=10: ~5s per round 
    calculateTimer() => (binary - 1 closest to rangeMax [with while loop]) * (sqrt(rangeMax) - 1)

* functions, parameters & return values => 
    canvasInterface() :
        minus1Heart();
        happyPass(),
    randomint(range? [ranges gapping above 500 are not allowed]),
    guessCheck(), 
    displayTimer(slow? average? fast?; 
                game over scene going down - .move[x,y])
                
* control structures => rounds per game (5) - while true, guess check - ifelse,


### For each of your ideas, state the following information:

#### the title of your project 
=> Living Calculator

#### the goal of your project (What does it do? Pretend you are giving a summary to sell your idea.) 
=> The aim of the project is to fresh the brains of a student to calculate basic arithmetic calculations in seconds, just like a real calculator!

#### how the project will meet the requirements. What components will you use and what will their purpose be? 
=> I labeled every requirement with the components that fulfil the gamifying experience of a player. The components are described briefly as follows:
1) The canvas of the game: an interface for the whiteboard, your answer box, game over screen
2) Range specification for the random integers to pop up for your next brain stimuli.
3) Timer display of a given time to calculate the problem that is calculated for the best experience.
4) The answers are typed via keyboard that can be displayed on the actual game screen, too!
5) After inputted your answers, checking your guess will show the result: if you succeeded, have a whale of time; if you failed, your one of 3 Minecraft hearts will be decreased!
6) 5 rounds, results, and wanna play again?!

#### how the user will interact with the program. Which piece(s) of the program will they press and what will the effect be? 
=> The interaction process is pretty straightforward. It only takes you to type your guess via keyboard that is real-time displayed on the scene. Eventually, it impacts your livingness throughout the 5 round game by checking your answers with the actual calculations.

## Your presentation should

#### State the title of your program 
=> CalcIt!
#### State your name(s) 
=> My name is Arnar!
#### Explain what your program does 
=> This simple game introduces us to an asteroid where we are initially living. However, some comet is on the way to hit our asteroid which would cause massive destruction. That is why there is a simple arithmetic calculations to be solved to stop the comet.
#### Explain how the user interacts with the program
=> In the console, as you're given a problem, you should be able to type your answer in the console.
#### Describe the most challenging part of the program for your team and how you overcame the problem 
=> To be honest, it should be handling the time updating per 100 miliseconds. Some logical code should be written to get it to working which I did.
#### Include screenshots, gifs, and/or video of your program for the audience to refer to, in case they can’t actually use your program
=> 









const chalk = require('chalk');//Austin Casey
const log = console.log;//CIS-131
const chalkAnimation = require('chalk-animation');//11/16/2020
log(chalk.white('Once there was a little boy and his pet rabbit.'));
setTimeout(() => {
    log(chalk.white('The rabbit would ')+chalk.bold.white('HOP'));
}, 1000); //Set timeouts so the story will appear line by line.
setTimeout(() => {
    log(chalk.bold.white(' and HOP'));
}, 2000);
setTimeout(() => {
    log(chalk.bold.white(' and HOP...'));
}, 3000);
setTimeout(() => {
    log(chalk.white('When the rabbit would get tired, the boy would feed him '+chalk.yellow('CARROTS.')));
}, 4000);
setTimeout(() => {
    log(chalk.yellow('But eventually the boy ran out of carrots...'));
}, 5000);
setTimeout(() => {
    log(chalk.white('The rabbit got ')+chalk.red('hungrier...'));
}, 6000);
setTimeout(() => {
    log(chalk.red(chalkAnimation.pulse('and HUNGRIER...')));
}, 7000);
setTimeout(() => {
    log(chalk.white('Eventually the rabbit got so '+chalk.red('hungry ')));
}, 8000);
setTimeout(() => {
    log(chalk.red(chalkAnimation.glitch('he ate the boy.')));
}, 9000);
setTimeout(() => {
log(chalk.bgWhite.black.bold('Rabbits,')+chalk.bgWhite.black.bold.italic('NOT EVEN ONCE.'));
}, 10000); // This line won't show after Chalk animations runs.
//This is supposed to be a pretend PSA on why not to have rabbits but I can't seem to get the two packages to play nice. It may just be Chalk Animations by itself after testing though.
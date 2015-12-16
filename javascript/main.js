/*
Play sequence for level:
1. Get level
2. Make sequence
3. Play sequence

*/

//get level
// var level = 1;
//if sequence clicked = levelSequence
//  level++

/* -----------------------------------------------------
--------------make sequence for a given level-----------
--------------------------------------------------------*/

function getSequence() {
//return array with 3 zeros and 1 randomly placed one.
    var sequence = [0,0,0,0];
    myLocation = Math.floor( Math.random()*4);
    sequence[myLocation] = 1;
    return sequence;
}

function createLevel(level) {
    levelSequence = [];
    for (i = 0; i < level; i++) {
        var oneSequence = getSequence();
        levelSequence.push(oneSequence);
    }
    return levelSequence
}
//-----------------------------------------------------------

/*-----------------------------------------------------------
-------onClick Play Game changes background color-----------
------------of game button with value of 1-------------------
------------------------------------------------------------*/
var currentLevel = 4;
// set currentLevelSequence to [1,0,0,0] for trial purposes
// var currentLevelSequence = [[1,0,0,0], [1,0,0,0]];
var currentLevelSequence = createLevel(currentLevel);
console.log(currentLevelSequence);


//On click play game button, causes buttons to change background color
// Do not know how to make this happen sequentially
$('.button-start').on('click', function() {
    console.log('you clicked me!');
    console.log(currentLevelSequence)
    for (var i = 0; i < currentLevelSequence.length; i++) {
        console.log('This is current sequence: ' + currentLevelSequence[i]);
        var sequenceArray = currentLevelSequence[i];
        var buttonSelector = getButton(sequenceArray);
        changeButtonColor(buttonSelector);
    };
});

// Return text for buttonSelector based on index of 1 in sequenceArray
// Use as argument for changeButtonColor
function getButton(sequenceArray) {
    var whichButton;
    if (sequenceArray[0] === 1) {
        whichButton = '.button-blue';
    } else if (sequenceArray[1] === 1) {
        whichButton = '.button-green';
    } else if (sequenceArray[2] === 1) {
        whichButton = '.button-yellow';
    } else if (sequenceArray[3] === 1) {
        whichButton = '.button-red';
    }
    return whichButton;
}

// Change background color of element with buttonSelector class
//takes getButton output
function changeButtonColor(buttonSelector) {
    var $button = $(buttonSelector),
    x = 500,
    originalColor = $button.css('background');

    $button.css('background', 'purple');
    setTimeout(function() {
    $button.css('background', originalColor);
    }, x);
}

function getUserSequence() {
    var userSequence = [];
    var countClicks = 0;
    $('.button-blue').on('click', function(){
        console.log('You clicked blue!');
        // var blue = [1,0,0,0];
        userSequence.push('blue');
        countClicks++;
        console.log(userSequence, countClicks);
        if (currentLevelSequence[(countClicks - 1)] == [1, 0, 0, 0]) {
            console.log('Right!');
        } else {
            console.log(currentLevelSequence[(countClicks-1)]);
        };
        // console.log(userSequence);
    });

    $('.button-yellow').on('click', function(){
        console.log('You clicked yellow!');
        // var blue = [1,0,0,0];
        userSequence.push('yellow');
        countClicks++;
        console.log(userSequence, countClicks);
    });

    $('.button-red').on('click', function(){
        console.log('You clicked red!');
        // var blue = [1,0,0,0];
        userSequence.push('red');
        countClicks++;
        console.log(userSequence, countClicks);
    });

    $('.button-green').on('click', function(){
        console.log('You clicked green!');
        // var green = [1,0,0,0];
        userSequence.push('green');
        countClicks++;
        console.log(userSequence, countClicks);
    });
    return userSequence;
    console.log(userSequence);
    console.log(countClicks);

};

// if # user clicks == level, compare userSequence to levelSequence
    // if (countClicks === currentLevel) {
    // console.log(userSequence);
    // }


thisUserSequence = getUserSequence();
console.log(thisUserSequence);

/*-------------------------------------------------
-------------Record user clicks--------------------
--------------------------------------------------*/
// var userSequence = [];
// $('.button-blue').on('click', function(){
//     console.log('You clicked blue!');
//     // var blue = [1,0,0,0];
//     userSequence.push('blue');
//     // console.log(userSequence);
// });

// $('.button-yellow').on('click', function(){
//     console.log('You clicked yellow!');
//     // var blue = [1,0,0,0];
//     userSequence.push('yellow');
//     // console.log(userSequence);
// });

// $('.button-red').on('click', function(){
//     console.log('You clicked red!');
//     // var blue = [1,0,0,0];
//     userSequence.push('red');
//     // console.log(userSequence);
// });

// $('.button-green').on('click', function(){
//     console.log('You clicked green!');
//     // var green = [1,0,0,0];
//     userSequence.push('green');
//     console.log(userSequence);
// });
//_____________________________________________
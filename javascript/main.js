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

"use strict";


    /* -----------------------------------------------------
    --------------make sequence for a given level-----------
    --------------------------------------------------------*/
    //gameSequence is array of numbers between 0-3 which represents
    //the colors;
    var gameSequence = [];
    var status = false;
    var colors = [
        'blue',
        'green',
        'yellow',
        'red'
    ]
    var turns = 0;

    function getRandomColorNumber() {
        return Math.floor(Math.random() * 4);
    }

    function addNewSequence(colorNumber, element) {

        gameSequence.push(colorNumber);
        turns++;

    }



    var buttonsGroup = document.querySelector('button');
    var buttonsGroup = $('button');
    var animateTurns = 0;

    buttonsGroup.on('animationend', function(e) {
        console.log('what is event in animationend', e);
        // this.classList.remove('blink');
        $(this).removeClass('blink');

        animateTurns = animateTurns + 1;
        console.log('what is animateTurns', animateTurns);
        console.log('what is sequence', gameSequence[animateTurns]);
        triggerColor(gameSequence[animateTurns], $('.' + colors[animateTurns]));

    });

    buttonsGroup.on('webkitAnimationEnd', function(e) {
        console.log('what is event in animationend webkit', e);
        $(this).removeClass('blink');
        animateTurns = animateTurns + 1;
        triggerColor(gameSequence[animateTurns], $('.' + colors[animateTurns]));
    });




    function triggerColor(colorNum) {
        console.log("testing", colorNum);
        var color = colors[colorNum];
        var target = $('.' + color);
        target.addClass('blink');
    }




    function addNewTurn(element) {

        addNewSequence(getRandomColorNumber(), element);

        //just fire animation once;
        triggerColor(gameSequence[animateTurns], $('.' + colors[animateTurns]));
        //iterate thru existing sequence + new sequence just added above


    }


    function setNewGame() {
        gameSequence = null;
        gameSequence = [];
        addNewTurn($(this));
    }


    function isProceed() {

    }

    function isUserSequenceCorrect(userColorNum, userTurn) {
        return (gameSequence[userTurn - 1] === userColorNum);
    }



    function getColorNumber(domClasses, colors) {
        var colorNum;
        // iterate through all the css classes
        for (var i = 0; i < domClasses.length; i++) {
            //indexOf returns an array position or -1 for not exit

            //colorNum is going to grab either -1 or the index position
            colorNum = colors.indexOf(domClasses[i]);

            if (colorNum >= 0) {
                return colorNum;
            }
        }
    }

    function endGame() {
        alert('you lose');
    }


    function colorClick() {

        //returns an array of classes;
        //goal on click, find out what color button I am
        //step 1: grab all the classes of this button

        var classes = $(this)[0].classList;

        //step 2: find out what the color number is of this number
        //because this is what the user pressed;
        var colorNum = getColorNumber(classes, colors);


        //animation via transition
        triggerColor(colorNum);

        //step 3: 
        var correct = isUserSequenceCorrect(colorNum, turns);

        //step 4: if the user pressed the correct color, proceed to next turn;
        if (correct) {
            addNewTurn()
            console.log('what is new turn', turns);
        } else {
            endGame();
        }
    }

    $('.color-button').on('click', colorClick)
    $('.button-start').on('click', setNewGame);

    // initialize buttons
    // 
    function createButtons() {

        var button;
        for (var i = 0; i < colors.length; i++) {
            button = '<article class="button-container"><button class="mdl-button color-button' + ' ' + colors[i] + '"></button></article>';
            $('.game').prepend(button);
            console.log(button);
        }
    }

###
game is memory game where user is asked to remember a sequence of events, in this case the sequence in which four buttons light up.

####Array of arrays
1. Start with array that says which button is lit.:

sequence1 = ['button1', 'button2', 'button3', 'button4']

-each element of the array can have a value of 0 or 1, but only one element of the array can have the value of 1.

Ex:
[0, 0, 1, 0] would correlate to the third button lighting up

With [0, 1, 0, 0], the second button would light up.

However, [1, 1, 0, 0] would not be valid.

2. Next, create an array of these configurations.

trial = ['sequence1', 'sequence2', 'sequence3']


To create each level's array:
-create a randomly generated sequence for each level
if level = 1: 
	create 1 sequence
if level = 2:
	create 2 sequences



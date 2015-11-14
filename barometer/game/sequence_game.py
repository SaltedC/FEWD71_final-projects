import random

# Random number generator from 0 to 3.  The element at the index generated will = 1, all others = 0
location = random.randint(0,3)

# array = [0]*4
# array[location] = 1


def getSequence():
	location = random.randint(0,3)
	sequence = [0]*4
	sequence[location] = 1
	return sequence

def makeLevel(level):
	levelSequence = [getSequence()] * level
	return levelSequence

print makeLevel(4)
print makeLevel(7)
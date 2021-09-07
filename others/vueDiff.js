// real dom
a b d

// old virtual dom
a b d

// new virtual dom
a c d b

step1:

oldS = a
oldE = d
newS = a
newE = b

oldS === newS
oldS++;
newS++;

real dom: a b d

step2:

oldS = b
oldE = d
newS = c
newE = b

oldS === newE
oldS++;
newE--;

real dom: a d b

step3:

oldS = d
oldE = d
newS = c
newE = d

oldE--;
newE--;

real dom: a d b

step4:
oldS < oldE;

newS = c;
newE = c;

real dom: a c d b

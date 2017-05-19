/*
The Age Calculator

Want to find out how old you'll be? Calculate it!

-Store your birth year in a variable.
-Store a future year in a variable.
-Calculate your 2 possible ages for that year based on the stored values.
For example, if you were born in 1988, then in 2026 you'll be either 37 
or 38, depending on what month it is in 2026.
-Output them to the screen like so: "I will be either NN or NN in YYYY", 
-substituting the values.
*/

var birthyear = 2002;
var presentyear = 2017;
var ageAfterBirthday = presentyear - birthyear;
document.write("i will be either "+ageAfterBirthday+" or "+
	(ageAfterBirthday-1) +" in "+presentyear+ "<br>" );


/*
The Fortune Teller

Why pay a fortune teller when you can just program your fortune yourself?

-Store the following into variables: 
number of children, partner's name, geographic location, job title.
-Output your fortune to the screen like so: "You will be a X in Y,
 and married to Z with N kids."
*/

var NumberOfChildren = " no ";
var partnerName = " no one ";
var GeographicLocation = " Dade city " + "FL ";
var  JobTitle = "coder";

document.write(" you will be a " + JobTitle + " in " + GeographicLocation +
 " and married to " + partnerName + " with " + NumberOfChildren + " kids. ");










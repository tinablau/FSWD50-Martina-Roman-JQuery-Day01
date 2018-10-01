/*
 * My jQuery selectors
 *
 * Apply a style such as a yellow background to the following elements.
 * Test your selectors one at a time.
 */


// $("p").css("background-color", "yellow");

// all p elements


// $("#intro").css("background-color", "yellow");

// the p element with an ID of "intro"


// $(".note").css("background-color", "yellow");

// all elements with a class of "note"

// $("div.note").css("background-color", "yellow");

// all DIV elements with a class of note

//$("article > p").css("background-color", "yellow");

// all p elements in the article element

//$("p:last-child").css("background-color", "yellow");

// the last element in any section which is a p tag


//$("p:first").css("background-color", "yellow");

// the first paragraph on the page

//$("p a").css("background-color", "yellow");
// all p elements which have a link

//$("ul li ul li:nth-of-type(2)").css("background-color", "yellow");
// the second li within nested ul element
//p:nth-of-type(2)").css("background-color", "yellow");
//$("p:nth-of-type(3)").css("background-color", "yellow");

// shorter version:

//$("p:nth-child(n+2)").css("background-color", "yellow");
// every second and third p element

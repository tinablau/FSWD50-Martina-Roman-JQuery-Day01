$("form").submit(function(e) {

	e.preventDefault();
	
});

// $("form").remove();
// removed form

var newDiv = $('<div></div><div></div><div></div><div></div><div></div>');
$("article").prepend(newDiv);

$("article div").addClass("box");

$("a").attr('href', 'http://www.codefactory.wien');


$("#msg").val("Search for..."); 


$()
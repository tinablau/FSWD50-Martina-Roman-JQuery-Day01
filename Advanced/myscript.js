$(document).ready(function(){
	$("a").attr("href", "http://www.codefactory.wien/")

$("code").css("color", "red");

$ ("ol > li").css("background-color" , "#2a7b90")

$ ("textarea").prepend("Express your opinion")

$ ("img").attr("src" , "https://www.codefactory.wien/wp-content/uploads/2018/03/codefactory-vienna-footer-h.png")

$("blockquote").css({"background-color" : "orange" , "font-style" : "italic"});

$ ("#logo").css({"color" : "black"})
$ (".gray").css({"color" : "white"})

$ (".date").remove()

$(".sidemenu:eq(0)").append("<li>New Items</li>");
$(".sidemenu:eq(0)").append("<li>Order Template</li>");
$(".sidemenu:eq(0)").append("<li>Contact us</li>");

$("#sidebar > p:eq(0)").replaceWith("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");


//li><a href="#TemplateInfo">Template Info</a></li>
	




    // it will activate when the DOM has been fully loaded  
    // so please write within this function your queries
});
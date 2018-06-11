//check off specific todos by clicking
$("ul").on("click", "li", function() {
	//if li is grey then turn it black
	$(this).toggleClass("completed");
});

//click on X to delete line
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

//make input create new todo
$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		//storing input in var
		var todoText = $(this).val();
		$(this).val("");
		//cretae new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
	}
});

$("#plus").on("click", function() {
	$("input[type='text']").fadeToggle();
})
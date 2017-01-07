// Check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
})

// Adding new todo
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//extract text and clear out input
		var todoText = $(this).val();
		$(this).val("");
		//add new li
		$("ul").append("<li><span>X</span> " + todoText + "</li>");
	}
})
jQuery(function() {
	$("#answer").keypress(function(e) {
		if (e.which == 13) {
			e.preventDefault();

			alert($("#answer").html());
		}
	});
});
/* JavaScript file for YouTube Comment Visualizer */

var links = [];

function clear() {
	links = [];
}

$("#submit").click(function () {
	clear();
	$(".infield").each(function() {
		links.push($(this).val());
	});
	// Error checking here
	document.location.href = "data.html";
});
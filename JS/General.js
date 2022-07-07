function Homepage_redirect() {
	window.location.href = "/";
}

var origTitle = document.title;
function oldTitle() {
	document.title = origTitle;
}
function newTitle() {
	document.title = origTitle + " -WerdeXD";
}
window.onblur = newTitle;
window.onfocus = oldTitle;

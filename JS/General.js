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
function search(val) {
  
  window.open("https://www.google.com/search?q=" + val,"_self");
}
const Gsearch = document.getElementById("Search");
Gsearch.addEventListener("keyup", function (event) {
  
  if (event.key === "Enter") {
    event.preventDefault();
    search(document.getElementById("Search").value);
  }
});

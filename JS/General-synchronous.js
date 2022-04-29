var origTitle = document.title;function oldTitle() {document.title = origTitle;};function newTitle() {document.title = origTitle+" -WerdeXD";};window.onblur = newTitle;window.onfocus = oldTitle;
function search(){
  var search = document.getElementById('User').value;
  window.open("https://www.google.com/search?q="+search,"_blank")
}
const User2 = document.getElementById("User");
User2.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
   event.preventDefault();
   search()
  }
});
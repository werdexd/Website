var origTitle = document.title;function oldTitle() {document.title = origTitle;};function newTitle() {document.title = origTitle+" -WerdeXD";};window.onblur = newTitle;window.onfocus = oldTitle;
var User;
function kk(){
    User = document.getElementById('User');
    document.cookie=User.value
    alert("You typed:\n"+User.value);
}
const User2 = document.getElementById("User");
User2.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
   event.preventDefault();
   kk()
  }
});
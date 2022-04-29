function Homepage_redirect(){window.location.href="/";}
const body = document.getElementById("BOdY");
document.addEventListener('keydown', (event) => {
//    if (event.key=="b"||event.key=="B"){
//       console.log(`"${event.key}" was pressed activating secret style...(btw if your seeing the code of this i really dont care about this part)`)
//        body.style.background="gainsboro center top url(/Assets/Images/Website/Backgrounds/Ben.jpg) no-repeat local"
//        body.style.color="red"
//    }
    if (event.key=="R"){
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ","_blank")
        console.log("R pressed")
    }
  }, false);
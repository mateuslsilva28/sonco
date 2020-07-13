const toggle = document.querySelector("#toggle")
const menu = document.querySelector("#menuMobile")
const close = document.querySelector("#close");

let screenHeight
let screenWidth

toggle.addEventListener("click", ()=>{
    console.log(screenWidth + "+" + screenHeight)
    if(screenWidth <=799){
        console.log(screenWidth + "+" + screenHeight)
        menu.style = "left: 0px";
        menu.style.height = (screenHeight + 50)+"px"
        
        close.addEventListener("click", ()=> menu.style="left:-600px")
    }
})

window.addEventListener("load", ()=>{
    screenHeight = screen.height;
    screenWidth = screen.width
})

window.addEventListener('resize', device());
  
  function device(){
      screenWidth = screen.width;
      screenHeight = screen.height;
      console.log(screenWidth + "+" + screenHeight)
  }
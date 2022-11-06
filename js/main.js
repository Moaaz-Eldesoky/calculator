let display= document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"))

buttons.map(button=>{
    button.addEventListener("click",(e)=>{
        
        switch(e.target.innerText){
            case "C":
                display.innerText=0;
                break;
            case "←":
                console.log("removing...")
                display.innerText =display.innerText.toString().split('').slice(0, -1).join('');
                if (display.innerText==""){
                    display.innerText=0;
                }
                break;
            case "=":
                try{
                    display.innerText = eval(display.innerText);
                }
                catch{
                    display.innerText="error...";
                }
                break;
            default:
                display.innerText==0?display.innerText=e.target.innerText:display.innerText+=e.target.innerText;
        }
    })
})

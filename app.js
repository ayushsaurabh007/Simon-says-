let start = false;
let level = 0; 

let system = [];
let user = [];
const color = ["blue" , "red", "purple" , "yellow"];

let h2 = document.querySelector("h2")


document.addEventListener("keypress",function(){
    if(start == false){
       
        start = true ;
        levelUp();
    }

})



function levelUp(){
    level ++; 
    user=[];
    h2.innerText=`Level ${level}`;

    let rand = Math.floor ((Math.random())*4);
    let randcolor = color[`${rand}`];
    let btn = document.querySelector(`.${randcolor}`);

    system.push(randcolor);
    console.log(system);
    btnFlash(btn);
}

function btnPress(){
    
    let btn = this;
    btnFlashuser(btn);

    userColor = btn.getAttribute("id");
    user.push(userColor);
    console.log(`user ${user}`);
    check(user.length-1);
}

function check (idx){         //this will check the answer 
   
    if (user[idx] === system[idx ]){
        if(user.length == system.length){
            setTimeout(levelUp,500);
        }
    }else{
        h2.innerText = "Game Over ! press any key to start again ";
        restart();
    }
}




let allBtns = document.querySelectorAll (".bttn");
for (btn of allBtns){
    btn.addEventListener("click" , btnPress);
}




// a function to do the blink action 

function btnFlash(btn){
    btn.classList.add("blink");
    setTimeout(function(){
        btn.classList.remove("blink")
    },100);
}
function btnFlashuser(btn){
    btn.classList.add("blink-user");
    setTimeout(function(){
        btn.classList.remove("blink-user")
    },100);
}



function restart (){
    system = [];
    level = 0;
    user = [];
    start = false;

}
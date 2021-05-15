

let bat=document.getElementsByClassName("bat");
let bowl=document.getElementsByClassName("bowl");
let ar=document.getElementsByClassName("ar");

function toggle(className, displayState){
    var elements = document.getElementsByClassName(className);

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = displayState;
    }
}



function allplayersdisplaynone(){
    toggle("bat","none");
    toggle("bowl","none");
    toggle("ar","none");
}
allplayersdisplaynone();
toggle("bat","block");

document.getElementById("batting").addEventListener("click",()=>{
    console.log("bat activated");
    allplayersdisplaynone();
    toggle("bat","block");
});
document.getElementById("bowling").addEventListener("click",()=>{
    allplayersdisplaynone();
    toggle("bowl","block");
});
document.getElementById("allrounder").addEventListener("click",()=>{
    allplayersdisplaynone();
    toggle("ar","block");
});


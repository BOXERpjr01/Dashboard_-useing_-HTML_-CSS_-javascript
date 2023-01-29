function myMenu(){
    document.getElementById("Tab-menu").classList.toggle("show");
}
// it the part of sidbare
function myButton(){
    document.getElementById("Tab-menu").style.width="200px";
    document.getElementById("Btn").style.display="none";
}

function closesidebare(){
    document.getElementById("Tab-menu").style.width="0";
    document.getElementById("Btn").style.display="block";
}


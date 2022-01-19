function pagealert(){
    alert("Your cart is empty");
}

function remove(){
    var myobj = document.getElementById("delete");
    myobj.remove();
}

console.log("page loaded...");


function hover(element) {
    element.setAttribute('src', "succulents-2.jpg");
}

function unhover(element) {
    element.setAttribute('src', "succulents-1.jpg");
}
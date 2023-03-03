function makeRed(){
    document.body.style.backgroundColor = "red";
    document.getElementById("heading").innerText = "Testing Event Onclick";
}

// function makeGreen(){
//     document.body.style.backgroundColor = "green";
//     document.getElementById("heading").innerText = "success button clicked";
// }

const myEvent = document.getElementById("blue-btn");
myEvent.addEventListener("click", function(){
    document.body.style.backgroundColor = "tomato";
    document.getElementById('h2-container').innerText = "Hello Teddy"
})
document.getElementById("btn-success").addEventListener("click", function(){
        document.body.style.backgroundColor = "black";
        document.getElementById('h2-container').innerText = "ghunghur";
});


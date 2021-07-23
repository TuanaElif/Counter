//initial value
let count = 0;
//select value and buttons
var value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn){
    btn.addEventListener("click", function (e) {
        const class_names = e.currentTarget.classList;

        //change value
        if(class_names.contains("decrease")) {
            count--;
        } else if (class_names.contains("reset")){
            count = 0;
        } else {
            count++;
        }

        //change colour
        if(count > 0){
            value.style.color = "green";
        }else if(count == 0){
            value.style.color = "black";
        }else {
            value.style.color = "red";
        }
        value.textContent = count;
    });
});
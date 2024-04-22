

let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

let btn = document.querySelector("button");
btn.addEventListener("click", ()=>{
    if(inputs.value == ""){
        alert("please enter the task");

    } else{
        let newele = document.createElement("ul");
        newele.innerHTML = `${inputs.value}<i class="fa-solid fa-trash"></i>`;
        text.appendChild(newele);
        inputs.value = "";  

        let rev = newele.querySelector("i");
        rev.addEventListener("click",function remove(){
            newele.remove();
        });
    }

   
});

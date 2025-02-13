
let button = document.getElementById("button");

button.addEventListener("click" , function(){

    let value = document.getElementById("input").value;

    if(value == ""){
        alert("please inter text")
    }else{
        let newitem = document.createElement("div");

        newitem.classList.add("item");
    
        newitem.textContent = value;
    
        let itemlist = document.getElementById("itemlist");
    
        itemlist.appendChild(newitem);
    
    
        let deleted = document.createElement("button");
        deleted.classList.add("remove");

        let trashicon = document.createElement("i");
        trashicon.classList.add("fas" , "fa-trash-alt");
        deleted.appendChild(trashicon);
        deleted.addEventListener("click" , function(){
            newitem.remove()
        })
        newitem.appendChild(deleted);
    }
});
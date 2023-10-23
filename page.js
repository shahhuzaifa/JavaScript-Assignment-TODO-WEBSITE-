var list = document.getElementById("addli");
var input = document.getElementById("input");

function addbutton(){
    var abc = document.getElementById("input");
    if (abc.value == ""){
        alert("ENTER THE TASK FIRST ");
    }
    else{
    

        var li = document.createElement("ul");
        var litext = document.createTextNode(abc.value);
        li.appendChild(litext)
        list.appendChild(li)

       // delete btn here
      var deletebtn = document.createElement("button")
      var  deletetext = document.createTextNode("DELETE");
        deletebtn.appendChild(deletetext);
        deletebtn.setAttribute("class","btn")
        deletebtn.setAttribute("onclick","deletebtn(this)")

        // edit button here
        var editbtn = document.createElement("button");
        var edittext = document.createTextNode("EDIT");
        editbtn.appendChild(edittext);
        editbtn.setAttribute("class","btn")
        editbtn.setAttribute("onclick","editbtn(this)") 


        li.appendChild(deletebtn)
        li.appendChild(editbtn)
        console.log(list);
    
        

       
        abc.value="";
    

    }     
    
}

function deletebtn(abc){
    abc.parentNode.remove()
}
function editbtn(well){
    var edit = prompt("ENTER THE EDIT VALUE ", well.parentNode.firstChild.nodeValue)
    
    well.parentNode.firstChild.nodeValue = edit
    if ( edit == ""){
        alert("ENTER THE TASK FIRST ");
    }
    
}


function deleteall(){
      list.innerHTML=""
}

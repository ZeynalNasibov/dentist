function Reason(){

}

Reason.prototype.addRowToUI=function(newDent){
    console.log(newDent)
//     <!-- <tr>
//     <td></td>
//     <td></td>
//     <td></td>
//     <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
//   </tr> -->

const rowList=document.getElementById("rows");

rowList.innerHTML +=`
<tr>
     <td></td>
     <td class="lead">${newDent.title}</td>
     <td>${newDent.doctor}</td>
     <td>${newDent.reason}</td>
     <td><a href="#" id = "delete-film" class = "btn btn-danger">Sil</a></td>
   </tr>

`
}

Reason.prototype.clearlist=function(element1,element2,element3){
  element1.value="";
  element2.value=""
  element3.value=""
}

Reason.prototype.alermessage=function(message,type){
  const alert1=document.querySelector(".card-body");

  const div =document.createElement("div")
  div.className=`alert alert-${type}`
  div.textContent=message;

  alert1.appendChild(div)

  setTimeout(function(){
div.remove()
  },2000)
}
Reason.prototype.deleteformRe=function(element){
element.parentElement.parentElement.remove()
}

Reason.prototype.clearlistALLRe=function(){
  const rowList=document.getElementById("rows")
  // rowList.innerHTML=""
  while(rowList.firstElementChild !==null){
    rowList.firstElementChild.remove()
  }
}

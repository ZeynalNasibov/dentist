function LG(){


}

LG.prototype.addTolg=function(newlogin){

}

LG.prototype.alertmessage=function(message,type){
const aler1=document.querySelector(".form");

const div= document.createElement("div")
div.className=`alert alert-${type}`;
div.textContent=message;

aler1.appendChild(div)

setTimeout(function(){
div.remove()
},5000)

}
LG.prototype.clearElement=function(element1,element2,element3,element4,element5,element6,element7){
    element1.value="";
    element2.value="";
    element3.value="";
    element4.value="";
    element5.value="";
    element6.value="";
    element7.value="";
}
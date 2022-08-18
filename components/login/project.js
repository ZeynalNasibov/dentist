const name2=document.querySelector("#name1");
const surname=document.querySelector("#surname1")
const date=document.querySelector("#date1")
const email=document.querySelector("#email1")
const password=document.querySelector("#password1")
const phone=document.querySelector("#phone1")
const btn=document.querySelector("#button")
const textarea1=document.querySelector(".textarea")
const form = document.querySelector(".form")
const local=document.querySelector(".login")
eventListener();
const lg=new LG;
// const stor=new Storage;

function eventListener(){
btn.addEventListener("click",addLogin)
local.addEventListener("submit",addTO)
}

function addLogin(e){
    const name3=name2.value;
    const surname2=surname.value
    const date2=date.value;
    const email2=email.value;
    const password2=password.value;
    const phone2=phone.value;
    const textarea2=textarea1.value;

    if(name3==="" || surname2==="" || date2==="" || email2==="" || password2==="" || phone2==="" || textarea2===""){
        lg.alertmessage("Bütün xanaları doldurun...","danger")
    }else{
        const newlogin=new Login(name2,surname,date,email,password,phone )
        // stor.Addto(newlogin)

        lg.alertmessage("Məlumatlar yadda saxlanıldı...","success")
    }

    lg.clearElement(name2,surname,date,email,password,phone,textarea1)
    
  
    

    e.preventDefault()

}
function addTO(e){
    const value=form.value
    
    let todos;
    
    if(localStorage.getItem("todos")===null){
        todos=[]
    }else{
        todos=JSON.parse(localStorage.getItem("todos"))
    }
    todos.push(value)
 
    }
    localStorage.setItem("todos",JSON.stringify("todos"))
  


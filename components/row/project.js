const form =document.getElementById("film-form");
const titleElement = document.querySelector("#title")
const doctorElement=document.querySelector("#doctor");
const urlElement=document.querySelector("#reason")
const cardbody=document.querySelectorAll(".card-body")[1]
const clear=document.querySelector("#clear-films")

const re=new Reason();
// const storage=new Storage()


eventListener();

function eventListener(){
    form.addEventListener("submit",addRow)
    cardbody.addEventListener("click",deleteform)
    clear.addEventListener("click",clearlistALL)
}

function addRow(e){
   const title =titleElement.valeu;
   const doctor=doctorElement.value;
   const reason=urlElement.value;

    if(title===""|| doctor==="" || reason===""){
        re.alermessage("Bütün xanaları doldurun...","danger")
    }else{
        const newDent=new Dent(title, doctor, reason);
        re.alermessage("Qeydə alındınız...","success")
        // storage.addFormStorage(newDent)
        re.addRowToUI(newDent)
    }

    re.clearlist(titleElement,doctorElement,urlElement)
    e.preventDefault();
}

function deleteform(e){
if(e.target.id==="delete-film"){
    re.deleteformRe(e.target);
}
}

function clearlistALL(e){
    if(confirm("Silmek istəyirsiz ?")){
        re.clearlistALLRe();
    }
}
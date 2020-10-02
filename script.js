
let ul=document.querySelector(".list");
let logo=document.querySelectorAll(".fa-check");
let logoExit=document.querySelectorAll(".fa-times-circle");
let button=document.querySelector("button");
let mas=document.querySelectorAll(".mas");

button.addEventListener("click", function (e) {
    e.preventDefault();
    addTodo();
})
ul.addEventListener("click", function (e) {
     check(e);
  })
ul.addEventListener("click", function (e) {
    remove(e);
    })


    function remove(e){
    if (e.target.classList.contains('fa-times-circle')) {
        let liNauj=e.target.parentNode.parentNode.parentNode;
        let ulNauj=liNauj.parentNode;
        ulNauj.removeChild(liNauj);
        }    
}    
function check(e){
    if (e.target.classList.contains('fa-check')) {
        e.target.classList.toggle('check');
        e.target.parentElement.parentElement.classList.toggle("textDec");
        }   
}
function addTodo(){
    let d=new Date();
    let liAdd=document.createElement("LI");
    let p=document.createElement("P");
    p.classList.add("logo");
    p.innerHTML='<i class="fas fa-user-check"></i>';   
    liAdd.appendChild(p);
    for(var i=0; i<mas.length; i++){
        if(i===0){
            p=document.createElement("P");
            p.classList.add('item'+(i+1).toString());
            p.innerHTML='<span class="pl-2 pr-3">'+'<i class="fas fa-check"></i></span> '+mas[i].value;
            mas[i].value="";
            liAdd.appendChild(p);
        } 
         else {
            p=document.createElement("P");
            p.classList.add('item'+(i+1).toString(),"pl-1");
            p.innerHTML=mas[i].value;   
            if(mas[i].value==="High"){
                 p.innerHTML='<span class="pill high">'+mas[i].value+'</span>';
            } else if(mas[i].value==="Low"){
                p.innerHTML='<span class="pill low">'+mas[i].value+'</span>';
            } else if(mas[i].value==="Normal"){
                p.innerHTML='<span class="pill normal">'+mas[i].value+'</span>';
            }   
            if(!isNaN(mas[i].value)&&mas[i].value!==""){
                if(mas[i].value==="100")
                p.innerHTML=mas[i].value+"%"+'<span class="progression">'+'<span class="progression100"></span></span>';
                else if(mas[i].value==="75")
                p.innerHTML=mas[i].value+"%"+'<span class="progression">'+'<span class="progression75"></span></span>';
                 else if(mas[i].value==="50")
                p.innerHTML=mas[i].value+"%"+'<span class="progression">'+'<span class="progression50"></span></span>';
                else if(mas[i].value==="25")
                p.innerHTML=mas[i].value+"%"+'<span class="progression">'+'<span class="progression25"></span></span>';
                else if(mas[i].value==="0")
                p.innerHTML=mas[i].value+"%"+'<span class="progression">'+'<span class="progression0"></span></span>';
            }
                         
            mas[i].value="";
            liAdd.appendChild(p);
        }
    }
    p=document.createElement("P");
    p.classList.add('item6',"pl-1");
    p.innerHTML=d.toLocaleString()+'<span class="exit">'+'<i class="far fa-times-circle"></i></span>';;
    liAdd.appendChild(p);
    liAdd.classList.add("li");
    liAdd.appendChild(p);
    ul.appendChild(liAdd);
};


    
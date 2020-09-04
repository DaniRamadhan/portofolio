const CACHE ="username";

function checkStorage(){
    return typeof(Storage) !== "undefined"
}
function setSessionStorage(name){
    if (checkStorage) {
        if (sessionStorage.getItem(CACHE) === null) {
            sessionStorage.setItem(CACHE, name);
        }else {
            console.log("not found")
        }
    }
}

// batas function
if (sessionStorage.getItem(CACHE) === null) {
    const firstName = prompt('Perkenalkan namaku Dani. nama kamu siapa?'); 
    setSessionStorage(firstName);
}
const setName = document.querySelector(".name");
setName.innerHTML=sessionStorage.getItem(CACHE);


let run = document.querySelector('.konten-hidden');
const schoolContent= document.querySelector("#konten-sekolah");
schoolContent.addEventListener("click", function(event) {
    run.style.display = "block";
    schoolContent.innerHTML = "";
});

let run2 =document.querySelector(".konten-hidden2")
const trought = document.querySelector(".trought")
trought.addEventListener("click", function(event) {
    if (run2.style.display === "none") {
        run2.style.display ="block";
    } else {
        run2.style.display ="none";
    }
});

let run3 = document.querySelector('.konten-hidden3');
const fiturContent= document.querySelector(".ribet3");
fiturContent.addEventListener("click", function(event) {
    run3.style.display = "block";
    fiturContent.innerHTML = "";
});
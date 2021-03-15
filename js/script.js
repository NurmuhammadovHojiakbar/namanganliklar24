let searchBtn=document.querySelector(".search-btn");
let search=document.querySelector(".search");
searchBtn.onclick=function(){
    search.classList.toggle("display-off");
    search.classList.toggle("display-on");
}
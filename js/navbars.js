var navIcon =document.getElementById("navbar");
var mobileLink = document.getElementById("link");
var logo = document.getElementById("logo");

navIcon.addEventListener("click",function(){

    if(mobileLink.style.display == "none"){
        logo.style.marginRight = "60vw";
        mobileLink.style.display = "block";  
    }else{
        logo.style.marginRight = "0px";
        mobileLink.style.display = "none"; 
    }
})
/*

document.getElementsByClassName("read-more")[0].addEventListener("click,(e) > {

})*/
var navIcon =document.getElementById("navbar");
var mobileLink = document.getElementById("link");
var logo = document.getElementById("logo");

navIcon.addEventListener("click",function(){
   
    if(mobileLink.style.display == "block"){
        
        logo.style.marginRight = "0px";
        mobileLink.style.display = "none"; 
    }else{
        
        logo.style.marginRight = "60vw";
        mobileLink.style.display = "block";  
    }
})
/*

document.getElementsByClassName("read-more")[0].addEventListener("click,(e) > {

})*/
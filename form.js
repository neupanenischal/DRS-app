
const fname=document.getElementById("firstname");
const lname=document.getElementById("lastname");
const email=document.getElementById("email");
const form=document.getElementById("form");

form.addEventListener("submit",(e)=>{
    let errormessage=[]
    if(firstname==null|| firstname==""){
        message.push("Please enter first name");
    }
    if (lastname==null|| lastname==""){
        message.push("Please enter last name");
    }
    if (firstname.length<3||lastname.length<3){
        message.push("Please enter valid length");
    }
    e.preventDefault();
});
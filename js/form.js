const btnNew = document.getElementById("submit")
btnNew.style.display="none"


//this function validates an email address example@test.com
//this function retuns true if email matches the defined parttern
const validateEmail = (email) => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 
    return String(email)
    //convert to lowercase
      .toLowerCase()
    //check if email match the pattern
      .match(validRegex);
  };


function valForm(){ 
    //set default error to false
    let error = false
    const uname = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if(!uname){
        //change error status to true is value is empty
        error === true 
        return false
    } 
    if(!email){
        //change error status to true is value is empty
        error === true
        document.getElementById("emailError").innerHTML="please, write a valid Email-address"
        return false ;
    }else if(email && email !== "" && !validateEmail(email)) {
        document.getElementById("emailError").innerHTML="Invalid email address"
    }
    console.log("errrrrrrrr", validateEmail(email))
    if(!phone){
        //change error status to true is value is empty
        error === true 
        return false
    }else if(!/[0-9]/.test(phone)){
        // The / at both ends mark the start and end of the regex
        // The ^ and $ at the ends is to check the full string than for partial matches
        // \d* looks for multiple occurrences of number charcters
        error === true
        document.getElementById("phoneError").innerHTML="Invalid phone number"
        return false
    }

     if(!message || message===""){
        //change error status to true is value is empty
        error === true
        return false
    } 

    if(error ===false){
        //if no error occur display button
        btnNew.style.display="block"
    }
}
 


 
const form = document.getElementById("contactForm")
form.addEventListener("submit", (e) => {
   e.preventDefault()
   console.log(e)
//   const btnBg =  e.target[4].style.backgroundColor="yellow"
//   const btn =  e.target[1].style.backgroundColor="#000"
//   const btnb =  e.target[0].style.borderColor="red"
 
   // start form validation
  
}) 
 
 

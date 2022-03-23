const btnNew = document.getElementById("submit")
btnNew.style.display="none"


const form = document.getElementById("contactForm")
let error = false
let uname = null
let email = null
let phone = null
let message = null
var data = []

document.getElementById("name").addEventListener("keyup", (e)=>{
    console.log(e.target.value) 
    data.push({uname : e.target.value })  
})

document.getElementById("email").addEventListener("keyup", (e)=>{
    console.log(e.target.value) 
    data.push({email : e.target.value }) 
})

document.getElementById("phone").addEventListener("keyup", (e)=>{
    console.log(e.target.value) 
    data.push({phone : e.target.value }) 
})

document.getElementById("message").addEventListener("keyup", (e)=>{
    console.log(e.target.value)
   
    data.push({message : e.target.value }) 
})


if (uname !==null ){
    btnNew.style.display="block"
}  else{
    console.log(8)
}
 

form.addEventListener("submit", (e) => {
   e.preventDefault()
  const btnBg =  e.target[4].style.backgroundColor="yellow"
  const btn =  e.target[1].style.backgroundColor="#000"
  const btnb =  e.target[0].style.borderColor="red"

// const btnNew = document.getElementById("submit")
// // btnNew.style.display="none"
//    console.log(e) 

   // start form validation
  const name = e.target.name.value
  if(name === ""){
      document.getElementById("nameError").innerHTML="Field cannot be empty"
  } 

  const email = e.target.email.value
  if(email === ""){
      document.getElementById("emailError").innerHTML="please, write a valid Email-address"
  }

  const phone = e.target.phone.value
  if(phone === ""){
      document.getElementById("phoneError").innerHTML= "please, input phone-number"
  }
  
  const message = e.target.message.value
  if(message === ""){
    document.getElementById("messageError").innerHTML="Field cannot be empty"
} 


})
//Adding onChange event listener
 
 


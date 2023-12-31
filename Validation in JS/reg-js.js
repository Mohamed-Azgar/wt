const form = document.querySelector('#form')
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const phnum = document.querySelector('#phnum');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();
    }
})

function validateInputs(){
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phnumVal = phnum.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success = true

    if(usernameVal === ''){
        success = false;
        setError(username,'username is required')
    }
    else{
        
        setSuccess(username)
    }

    
    if(emailVal===''){
        success = false;
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        success = false;
        setError(email,'Please Enter A Valid Email ID')
    }
    else{
      
        setSuccess(email)
    }


    if(phnumVal === ""){
        success= false;
        setError(phnum,'Moblile Number is reqired')
    }
    else if (!validatePhnum(phnumVal)){
        success = false;
        setError(phnum,'Please Enter A Valide Mobile Number')
    }
    else{
        setSuccess(phnum)
    }
    
    

    if(passwordVal === ''){
        success = false;
        setError(password,'Password Is Required')
    }
    else if(passwordVal.lenght<8){
        success = false;
        setError(password,'Password Must Be Atleast 8 Chracters')
    }
    else{
        
        setSuccess(password)
    }


    if(cpasswordVal === ''){
        success = false;
        setError(cpassword,'Confirm your password')
    }
    else if(cpasswordVal!==passwordval){
        success = false;
        setError(cpassword,"Password Did Not Match")
    }
    else{
       
        setSuccess(cpassword)
    }

    return success;


}


function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
}



const validatePhnum = (phnum) =>{
    return String(phnum)
    .match(/^\d{10}$/);
}
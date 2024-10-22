const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

let passwordOne = document.getElementById("pswd-one")
let passwordTwo = document.getElementById("pswd-two")
let passwordLength = 15
const pswdBtn = document.getElementById("make-pswd")
const pswdContainers = document.createElement('span')

pswdBtn.addEventListener("click", renderPswd)// or is it generatePswd renderPswd? 



function generatePswd() {

  for (let j = 1; j <= 2; j++){

  let password = "";
    for (let i = 0; i <= passwordLength; i++) {
        const randomPswd = Math.floor(Math.random() * characters.length);
        password += characters[randomPswd, randomPswd + 1];
      }
    
      //return password
      //document.getElementById(pswdContainers).innerHTML = password;

      console.log(password) //this function is working. Just need to render it in the span
      //passwordOne.textContent = password[j];
      //pswdContainers.innerHTML = password
      }  
 }

function renderPswd () {
  let result = generatePswd()
  let finalResult = document.getElementById("pswd-one")

  finalResult.value = result;
}


 //let div = document.createElement("div")
//div.append("Some text")


 //stretch goal-copy to clipboard
 //function copyPassword() {
 // let copyText = document.getElementById("password");
 // copyText.select();
  //document.execCommand("copy");  
//}


  //function getGeneratePassword() {
    // Displays the message in the messageEl using messageEl.textContent
    //passwordOne.innerHTML = `<input type="text" id="1" value="${generatePswd()}" onclick="copyToClipboard(1)" />/readonly>
   // `;
   // passwordTwo.innerHTML = `<input type="text" id="2" value="${generatePswd()}" onclick="copyToClipboard(2)" readonly>
    //`;
    // Call changeColorPasswords() function
   // changeColorPasswords();
//  }


//stretch goal is to copy to clipboard

// Creates a function copyToClipboard() that copies selected password just clicking on hit
//function copyToClipboard(index) {
    //const copyText = document.getElementById(index).value;
    //navigator.clipboard.writeText(copyText).then(() => {
      // Alert the user that the action took place.
      // Nobody likes hidden stuff being done under the hood!
      //alert("Copied to clipboard");
    //});
  //}



  const generatePasswordBtn = document.querySelector('.generate-passwords-btn')
const displayPasswords = document.querySelector('.display-passwords-container')
const displayPassword =document.querySelectorAll('.pw-display')
const changePasswordLength = document.querySelector('.change-password-length')

 

const characters =[
    'A','B','C','D','E','F','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','n','o','p','q','r','s','t','u','v','w','x','y','z','*','&','$','#','!','?','<','>','+'
    ]
    
    
 //extra code below.   
function generatePassword(num=8){
  const pwArr =[]
      
    for(let j=1; j <=4; j++){
           let resultStr=""
      for(let i=1; i <= num; i++){
    let randomIndex = Math.floor(Math.random() * characters.length) 
    resultStr += characters[randomIndex]
   }
         pwArr.push(resultStr) 
      }
       return pwArr
     }
     
   let num = changePasswordLength.min 
   changePasswordLength.value = num
   changePasswordLength.addEventListener('input' , () =>  num = changePasswordLength.value)
   
     
 function renderPassword(){
    let passwords =  generatePassword(num)
   //console.log(passwords)
   //console.log(displayPassword)
for(let i=0; i < displayPassword.length; i++){
    
   displayPassword[i].textContent = passwords[i]
   
}
  
}

generatePasswordBtn.addEventListener('click' , renderPassword)  
const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordOne = document.getElementById("pswd-one");
let passwordTwo = document.getElementById("pswd-two");
let passwordLength = 15;
const pswdBtn = document.getElementById("make-pswd");
//const pswdContainers = document.createElement("generatedPassword");

function generatePswd() {
  let password1 = "";
  let password2 = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomPswd1 = Math.floor(Math.random() * characters.length);
    const randomPswd2 = Math.floor(Math.random() * characters.length);
    password1 += characters[randomPswd1];
    password2 += characters[randomPswd2];
  }
  console.log(password1, password2);
  passwordOne.innerHTML = password1;
  passwordTwo.innerHTML = password2;
}

pswdBtn.addEventListener("click", generatePswd);

//stretch goal-copy to clipboard
//function copyPassword() {
// let copyText = document.getElementById("password");
// copyText.select();
//document.execCommand("copy");
//}

function copyText(index) {
  let copyText = document.getElementById(generatePswd1);
  copyText.select();
  document.execCommand("copy");
  alert("Copied to clipboard");
}

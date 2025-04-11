/*const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const num = '0123456789';
const symbol = '!@#$%^&*()+_=?><{}';

const allChars = upperCase + lowerCase + num + symbol

function createPassword() {
    let password = '';
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += num[Math.floor(Math.random() * num.length)]
    password += symbol[Math.floor(Math.random() * symbol.length)]

    while(length > password.length) {

        password += allChars[Math.floor(Math.random() * allChars.length)]
        

    }

    passwordBox.value = password 

} */




    const passwordbox = document.getElementById("password")
    const length = 12
    const upperCase = 'ABCEDFGHIJKLMNOPQURSTUVWXYZ'
    const lowerCase = 'abcdefghijklmnopqrstuwxyz'
    const symbol = '!@#$%^&*'
    const num = '123456789'
    const allChars = upperCase + lowerCase + symbol + length

    function CreatePassword()  {
      let password = ""
        password += upperCase[Math.floor(Math.random() * upperCase.length)]
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
        password += num[Math.floor(Math.random() * num.length)]
        password += symbol[Math.floor(Math.random() * symbol.length)]
    

    while(length > password.length) {

        password += allChars[Math.floor(Math.random() * allChars.length)]
        
    }


}

function copyPassword() {
    const password = passwordbox.value

navigator.clipboard.writeText(password).then(()=> {
    alert("Password Copied")
}).catch(err => {
    console.log("Failed to copy", err);
    alert("failed to copy passowrd")
})
}
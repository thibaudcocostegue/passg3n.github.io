let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', ';', ':', ',', '.', '<', '>', '?', '/'];

let password = [];
function generatePassword() {

    let passwordLength = document.getElementById('passwordLength').value;
    let includeSpecial = document.getElementById('includeSpecial').checked;
    let includeNumbers = document.getElementById('includeNumbers').checked;
    let includeUpper = document.getElementById('includeUpper').checked;

    let password = [];


    for (let i = 0; i < passwordLength; i++) {
        choose = Math.floor(Math.random() * 3);
        if (choose == 0) {
            password.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
        } else if (choose == 1 && includeNumbers) {
            password.push(number[Math.floor(Math.random() * number.length)]);
        } else if (choose == 2 && includeSpecial) {
            password.push(special[Math.floor(Math.random() * upper.length)]);
        }
        else if (choose == 2 && includeUpper) {
            password.push(special[Math.floor(Math.random() * special.length)]);
        }else {
            i--;
        }
        
    }
    let passwordString = password.join('');
    document.getElementById('password').value = passwordString;
}

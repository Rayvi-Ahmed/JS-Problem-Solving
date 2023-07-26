
function generateRandomPassword(length) {
    const allCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';

    const passwordArray = Array.from({ length }, () => allCharacters[Math.floor(Math.random() * allCharacters.length)]);
    console.log(passwordArray)
    const password = passwordArray.join('');

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()\-_=+\[\]{}|;:,.<>?]/.test(password);

    if (!(hasUppercase && hasLowercase && hasNumber && hasSpecialChar)) {
        return generateRandomPassword(length);
    }

    return password;
}


const passwordLength = 8;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);

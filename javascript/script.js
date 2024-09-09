document.getElementById('generate-btn').addEventListener('click', function() {
    const lengthInput = document.getElementById('password-length');
    const passwordLength = parseInt(lengthInput.value, 10) || 12; // Tamanho da senha
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:',.<>?/";
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    const passwordField = document.getElementById('password');
    passwordField.value = password;
});

document.getElementById('copy-btn').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
});

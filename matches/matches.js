
 // 🔹 Кодовое слово зашифровано (Base64 для простоты, но можно использовать AES)
const encryptedCode = "SUktMjEwODI1LTI0MDgyNS1FWUU="; 

function decryptCode() {
    return atob(encryptedCode); // 🔹 Расшифровка кода
}

function checkSecretCode() {
    const correctCode = decryptCode(); // 🔹 Получаем реальное кодовое слово
    const userInput = document.getElementById("userInput").value.trim();

    if (userInput === correctCode) {
        document.getElementById("resultMessage").innerHTML = `
            ✅ <strong>Поздравляем!</strong> Кодовое слово верное! 🎉
            📩 Отправь его на <strong>therakenshinional@gmail.com</strong>, чтобы получить приз!
        `;
    } else {
        document.getElementById("resultMessage").innerText = "❌ Неверный код. Попробуйте снова!";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const secretCodeField = document.getElementById("secretCode");

    // Убираем поле при загрузке, если оно видно
    secretCodeField.classList.add("hidden");

    document.querySelector("h1").addEventListener("click", function () {
        secretCodeField.classList.toggle("visible");
    });
});

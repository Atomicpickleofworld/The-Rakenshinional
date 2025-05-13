function updateTimer() {
    const startDate = new Date("2025-05-24T08:00:00Z"); // 11:00 МСК (UTC+3)
    const endDate = new Date("2025-05-27T19:00:00Z"); // 22:00 МСК (UTC+3)
    const now = new Date();

    console.log("Текущее время:", now); // Проверяем, какая дата сейчас

    if (now >= endDate) {
        document.getElementById("timer").innerHTML = "Ожидайте следующих анонсов турниров!";
        return;
    }

    if (now >= startDate) {
        document.getElementById("timer").innerHTML = "Турнир начался!";
        return;
    }

    const diff = startDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = 
        `${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
}

setInterval(updateTimer, 1000);
updateTimer();



document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("burgerOverlay");
    overlay.style.display = "none"; // Скрываем меню при загрузке страницы
});

function toggleMenu() {
    const overlay = document.getElementById("burgerOverlay");

    if (overlay.style.display === "none" || overlay.style.display === "") {
        overlay.style.display = "flex"; // Показываем меню
    } else {
        overlay.style.display = "none"; // Закрываем меню
    }
}
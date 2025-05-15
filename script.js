function updateTimer() {
    const startDate = new Date("2025-05-24T08:00:00Z");
    const endDate = new Date("2025-05-27T19:00:00Z"); 
    const now = new Date();

    console.log("Текущее время:", now); 

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
    overlay.style.display = "none"; 
});

function toggleMenu() {
    const overlay = document.getElementById("burgerOverlay");

    if (overlay.style.display === "none" || overlay.style.display === "") {
        overlay.style.display = "flex"; 
    } else {
        overlay.style.display = "none"; 
    }
}





document.addEventListener("DOMContentLoaded", getRandomPhrase);

function getRandomPhrase() {
    const phrases = [
        "Только великие могут постичь тайны Rakenshinional!",
        "Сила воли важнее силы GPU!",
        "Вперёд, к вершинам кибер-мира!",
        "Жизнь — это игра, и ты выбираешь свой путь!",
        "Кто сказал, что лошади не летают.",
        "Сходи траву потрогать!",
        "Не клацай много!",
        "Держи спину ровно!"
    ];

    const secretPhrases = [
        "0J7QvSDQv9GA0LjQtNC10YIg0Lgg0L3QtSDRgdC60LDQttC10YIsIDIxLjA4LjI1==",
        "тхрчф ухнйжч, февлфежу тулфчйц",
        "🎭 Ты видишь эту фразу? Значит, тебе доверена тайна Rakenshinional!",
        "⏳ Время летит, но тебе выпал шанс узнать нечто особенное...",
        "Собери же! Это глупое послание не дает покоя.",
        "Base64,Caesar...",
        "Секретная фраза! Шанс на одну равен 1%, попробуй еще!"
    ];

    const chance = Math.floor(Math.random() * 100); 
    console.log("Случайное число:", chance); 

    let phrase;
    if (chance < 1) { 
        phrase = secretPhrases[Math.floor(Math.random() * secretPhrases.length)];
    } else {
        phrase = phrases[Math.floor(Math.random() * phrases.length)];
    }

    console.log("Выбранная фраза:", phrase); 
    document.getElementById("randomPhraseContainer").innerText = phrase;
}
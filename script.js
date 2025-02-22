function createBackgroundStars() {
    const starsContainer = document.querySelector('.stars');
    const numberOfStars = 200;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.setProperty('--twinkle-duration', `${Math.random() * 3 + 2}s`);
        starsContainer.appendChild(star);
    }
}

function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    const eventDate = new Date("March 5, 2025 11:15:00").getTime();

    function updateTime() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance <= 0) {
            countdownElement.innerHTML = "The event has started!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateTime();
    setInterval(updateTime, 1000);
}

createBackgroundStars();
updateCountdown();

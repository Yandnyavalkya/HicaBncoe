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
    const eventDate = new Date();
    eventDate.setDate(eventDate.getDate() + 6);
    eventDate.setHours(0, 0, 0, 0);
    
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
        addCountdownStars();
    }

    updateTime();
    setInterval(updateTime, 1000);
}

function addCountdownStars() {
    const countdown = document.getElementById('countdown');
    const star = document.createElement('div');
    star.className = 'countdown-star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    countdown.appendChild(star);
    setTimeout(() => star.remove(), 2000);
}

createBackgroundStars();
updateCountdown();

function startCountdown() {
    const eventDate = new Date('March 5, 2025 11:00:00').getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

startCountdown();


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
    const eventDate = new Date("March 5, 2025 11:30:00").getTime();
    
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
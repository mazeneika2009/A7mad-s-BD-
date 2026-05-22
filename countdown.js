const targetDate = new Date('May 23, 2026 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const countdownContainer = document.getElementById('countdown');
    const enterBtn = document.getElementById('enter-btn');
    const title = document.getElementById('title');

    if (distance < 0) {
        if (countdownContainer) countdownContainer.style.display = 'none';
        if (enterBtn) {
            enterBtn.style.display = 'inline-block';
            if (!enterBtn.classList.contains('revealed')) {
                gsap.from(enterBtn, { opacity: 0, scale: 0.5, duration: 1, ease: "elastic.out(1, 0.5)" });
                enterBtn.classList.add('revealed');
            }
        }
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysElement) daysElement.textContent = days.toString().padStart(2, '0');
    if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
    if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
    if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

document.getElementById('enter-btn').addEventListener('click', () => {
    gsap.to('body', {
        opacity: 0,
        duration: 1,
        onComplete: () => {
            window.location.href = 'second.html';
        }
    });
});

// Floating background elements
function createFloating() {
    const floatingElements = ['⭐', '✨', '🚀', '⚡', '💙'];
    const element = document.createElement('div');
    element.style.position = 'fixed';
    element.textContent = floatingElements[Math.floor(Math.random() * floatingElements.length)];
    element.style.left = Math.random() * 100 + 'vw';
    element.style.top = '110vh';
    element.style.fontSize = (Math.random() * 20 + 20) + 'px';
    element.style.pointerEvents = 'none';
    document.body.appendChild(element);

    gsap.to(element, {
        y: -window.innerHeight - 200,
        x: (Math.random() - 0.5) * 200,
        rotation: Math.random() * 360,
        duration: Math.random() * 5 + 5,
        ease: "none",
        onComplete: () => element.remove()
    });
}
setInterval(createFloating, 1000);

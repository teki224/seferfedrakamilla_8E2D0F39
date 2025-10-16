function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    const themeButton = document.getElementById('theme-toggle');
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    themeButton.textContent = newTheme === 'dark' ? 'Világos mód' : 'Sötét mód';
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const themeButton = document.getElementById('theme-toggle');
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeButton.textContent = savedTheme === 'dark' ? 'Világos mód' : 'Sötét mód';
}

function calculateGreyhoundTime(distance) {
    const averageSpeed = 64;
    const timeInHours = distance / averageSpeed;
    const timeInMinutes = timeInHours * 60;
    
    if (timeInMinutes < 60) {
        return timeInMinutes.toFixed(1) + " perc";
    } else {
        const hours = Math.floor(timeInMinutes / 60);
        const minutes = (timeInMinutes % 60).toFixed(0);
        return hours + " óra " + minutes + " perc";
    }
}

function calculateHumanAge(dogAge) {
    if (dogAge <= 0) return 0;
    if (dogAge === 1) return 15;
    if (dogAge === 2) return 24;
    return 24 + (dogAge - 2) * 5;
}

const distanceInput = document.getElementById('distance-input');
const timeResult = document.getElementById('time-result');

if (distanceInput) {
    distanceInput.addEventListener('input', function() {
        const distance = parseFloat(this.value);
        if (distance > 0) {
            const time = calculateGreyhoundTime(distance);
            timeResult.textContent = "Egy agár " + distance + " km-t megtenne " + time + " alatt.";
        } else {
            timeResult.textContent = "";
        }
    });
}

const dogAgeInput = document.getElementById('dog-age-input');
const humanAgeResult = document.getElementById('human-age-result');

if (dogAgeInput) {
    dogAgeInput.addEventListener('input', function() {
        const dogAge = parseInt(this.value);
        if (dogAge > 0) {
            const humanAge = calculateHumanAge(dogAge);
            humanAgeResult.textContent = "Ez emberi évben: " + humanAge + " év.";
        } else {
            humanAgeResult.textContent = "";
        }
    });
}

loadTheme();
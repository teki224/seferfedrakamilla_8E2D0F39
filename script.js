function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton();
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButton();
}

function updateThemeButton() {
    const themeButton = document.getElementById('theme-toggle');
    if (themeButton) {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        themeButton.textContent = currentTheme === 'dark' ? 'Világos mód' : 'Sötét mód';
    }
}

function calculateGreyhoundTime(distance) {
    const averageSpeed = 64;
    const timeInHours = distance / averageSpeed;
    const timeInMinutes = timeInHours * 60;
    if (timeInMinutes < 60) {
        return "Ezt a távot " + timeInMinutes.toFixed(1) + " perc alatt tenne meg egy agár.";
    } else {
        const hours = Math.floor(timeInMinutes / 60);
        const minutes = (timeInMinutes % 60).toFixed(0);
        return "Ezt a távot " + hours + " óra " + minutes + " perc alatt tenne meg egy agár.";
    }
}

function calculateHumanAge(dogAge) {
    if (dogAge <= 0) return 0;
    if (dogAge === 1) return 15;
    if (dogAge === 2) return 24;
    return 24 + (dogAge - 2) * 5;
}

function checkQuizAnswers() {
    let score = 0;
    const form = document.getElementById('adoption-quiz');
    const resultDiv = document.getElementById('quiz-result');
    const checklistDiv = document.getElementById('requirement-checklist');
    const questions = ['q1', 'q2', 'q3', 'q4', 'q5'];
    let allAnswered = true;
    
    for (let i = 0; i < questions.length; i++) {
        const answer = form.querySelector(`input[name="${questions[i]}"]:checked`);
        if (!answer) {
            allAnswered = false;
            break;
        }
    }
    
    if (!allAnswered) {
        resultDiv.innerHTML = '<p class="quiz-result error">Kérlek, válaszolj minden kérdésre!</p>';
        checklistDiv.innerHTML = '';
        return;
    }
    
    questions.forEach(function(q) {
        const answer = form.querySelector(`input[name="${q}"]:checked`);
        if (answer) {
            score += parseInt(answer.value);
        }
    });
    
    let message = '';
    let cssClass = '';
    
    if (score >= 20) {
        message = '<h3>Kiválóan felkészültél! 🎉</h3><p>Minden szempontból készen állsz egy agár örökbefogadására. Vedd fel a kapcsolatot egy helyi agár mentő szervezettel!</p>';
        cssClass = 'excellent';
    } else if (score >= 15) {
        message = '<h3>Jó úton haladsz! 👍</h3><p>Alapvetően felkészültél, de érdemes még többet megtudni az agarak speciális igényeiről.</p>';
        cssClass = 'good';
    } else if (score >= 10) {
        message = '<h3>További felkészülés szükséges 📚</h3><p>Van néhány terület, amin javítanod kell, mielőtt örökbefogadsz.</p>';
        cssClass = 'insufficient';
    } else {
        message = '<h3>Nem ajánlott az örökbefogadás most 🚫</h3><p>Jelenleg nem rendelkezel az alapfeltételekkel egy agár biztonságos gondozásához.</p>';
        cssClass = 'insufficient';
    }
    
    resultDiv.innerHTML = `<div class="quiz-result ${cssClass}"><p><strong>Összpontszám:</strong> ${score} / 25</p>${message}</div>`;
    
    const checklist = [];
    const q1 = form.querySelector('input[name="q1"]:checked').value;
    const q2 = form.querySelector('input[name="q2"]:checked').value;
    const q3 = form.querySelector('input[name="q3"]:checked').value;
    const q4 = form.querySelector('input[name="q4"]:checked').value;
    const q5 = form.querySelector('input[name="q5"]:checked').value;
    
    checklist.push({label: 'Bekerített terület vagy park', ok: parseInt(q1) >= 3});
    checklist.push({label: 'Naponta elérhető idő a kutyára', ok: parseInt(q2) >= 3});
    checklist.push({label: 'Kutyatartási tapasztalat', ok: parseInt(q3) >= 3});
    checklist.push({label: 'Ismered az agarak speciális igényeit', ok: parseInt(q4) >= 3});
    checklist.push({label: 'Megfelelő anyagi háttér', ok: parseInt(q5) >= 3});
    
    checklistDiv.innerHTML = '<h4>Követelmény-ellenőrző lista</h4>';
    const ul = document.createElement('ul');
    
    for (let i = 0; i < checklist.length; i++) {
        const li = document.createElement('li');
        li.textContent = checklist[i].label + ' — ';
        const span = document.createElement('span');
        span.textContent = checklist[i].ok ? 'Megfelel' : 'Hiányzik / fejlesztendő';
        li.appendChild(span);
        ul.appendChild(li);
    }
    
    checklistDiv.appendChild(ul);
    
    const recommendations = document.createElement('div');
    recommendations.innerHTML = '<h5>Ajánlott lépések</h5>';
    const recList = document.createElement('ol');
    
    if (score >= 20) {
        const li1 = document.createElement('li');
        li1.textContent = 'Felvenni a kapcsolatot egy helyi agár mentő szervezettel.';
        recList.appendChild(li1);
    } else {
        if (!checklist[0].ok) {
            const li = document.createElement('li');
            li.textContent = 'Keress bekerített futtatási lehetőséget, vagy biztosíts biztonságos futóteret.';
            recList.appendChild(li);
        }
        if (!checklist[1].ok) {
            const li = document.createElement('li');
            li.textContent = 'Vizsgáld meg a napi időbeosztásodat.';
            recList.appendChild(li);
        }
        if (!checklist[3].ok) {
            const li = document.createElement('li');
            li.textContent = 'Olvass utána az agarak hidegérzékenységének és vékony bőrének.';
            recList.appendChild(li);
        }
        const liVet = document.createElement('li');
        liVet.textContent = 'Kezdj el önkénteskedni egy menhelyen vagy mentőnél.';
        recList.appendChild(liVet);
    }
    
    recommendations.appendChild(recList);
    checklistDiv.appendChild(recommendations);
}

function findFastestRacer() {
    const tableBody = document.getElementById('racing-table-body');
    if (!tableBody) return;
    
    const rows = tableBody.querySelectorAll('tr');
    if (!rows.length) return;
    
    let fastestName = '';
    let fastestSpeed = -Infinity;
    
    rows.forEach(function(r) {
        const cols = r.querySelectorAll('td');
        if (cols.length < 5) return;
        
        const name = cols[0].textContent.trim();
        const speed = parseFloat(cols[4].textContent.trim()) || 0;
        
        if (speed > fastestSpeed) {
            fastestSpeed = speed;
            fastestName = name;
        }
    });
    
    const highlight = document.getElementById('fastest-racer');
    if (highlight) {
        highlight.innerHTML = `<p><strong>Leggyorsabb versenyző:</strong> ${fastestName} — csúcssebesség: ${fastestSpeed} km/h</p>`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadTheme();
    
    const themeButton = document.getElementById('theme-toggle');
    if (themeButton) {
        themeButton.addEventListener('click', toggleTheme);
    }
    
    const distanceInput = document.getElementById('distance-input');
    const timeResult = document.getElementById('time-result');
    if (distanceInput && timeResult) {
        distanceInput.addEventListener('input', function() {
            const val = parseFloat(distanceInput.value);
            if (isNaN(val) || val <= 0) {
                timeResult.textContent = '';
            } else {
                timeResult.textContent = calculateGreyhoundTime(val);
            }
        });
    }
    
    const dogAgeInput = document.getElementById('dog-age-input');
    const humanAgeResult = document.getElementById('human-age-result');
    if (dogAgeInput && humanAgeResult) {
        dogAgeInput.addEventListener('input', function() {
            const val = parseFloat(dogAgeInput.value);
            if (isNaN(val) || val <= 0) {
                humanAgeResult.textContent = '';
            } else {
                humanAgeResult.textContent = calculateHumanAge(Math.floor(val)) + ' emberi év';
            }
        });
    }
    
    findFastestRacer();
    
    const quizSubmit = document.getElementById('quiz-submit');
    if (quizSubmit) {
        quizSubmit.addEventListener('click', checkQuizAnswers);
    }
});
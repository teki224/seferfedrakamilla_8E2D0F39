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

loadTheme();
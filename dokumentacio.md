# 🐾 Agár Kutyafajta Weboldal

## 🎯 Téma
A weboldal az agár kutyafajtáról szól. Bemutatja az agarakat, gondozásukat, eredetüket és versenyzési múltjukat.

## 🛠️ Technológiák
- **HTML**
- **CSS**
- **JavaScript**
- **Bootstrap** (CSS keretrendszer)

## 🧩 Funkciók és részek

### 🏠 Főoldal (`index.html`)
- Bemutatja az agarakat, mint a világ leggyorsabb kutyáit.
- Képek bemutatása egy futó sávval (`<marquee>`).
- Kalkulátor, amely kiszámolja, mennyi idő alatt tenné meg egy agár a megadott távolságot.
- Kutya-ember év kalkulátor, amely az agár életkorát alakítja át emberi évekbe.

### 🐶 Gondozás oldal (`care.html`)
- Táplálkozás, testmozgás és ápolás szempontjából összefoglalja az agarak gondozását.
- Kvíz, amely segít eldönteni, hogy az illető felkészült-e egy agár örökbefogadására.

### 🏁 Eredet és Versenyzés oldal (`origin.html`)
- Az agarak ősi eredetét, a versenyzés típusait és a modern korban betöltött szerepüket mutatja be.
- Táblázat híres versenyző agarak adataival.
- A leggyorsabb versenyző kiválasztása és megjelenítése.

## 📜 JavaScript függvények

- `toggleTheme()`: Világos és sötét mód váltása.
- `loadTheme()`: A felhasználó által választott téma betöltése a `localStorage`-ból.
- `calculateGreyhoundTime(distance)`: Kiszámolja, mennyi idő alatt futna meg egy agár egy adott távolságot.
- `calculateHumanAge(dogAge)`: Kiszámolja, hány emberi évnek felel meg az agár kora.
- `checkQuizAnswers()`: Kiértékeli a kvíz válaszait, és megjeleníti az eredményt.
- `findFastestRacer()`: Kiválasztja a leggyorsabb versenyzőt a táblázatból.

## 🧮 Programozási tételek és elemek

- **Aritmetikai műveletek**: pl. sebesség számítás, életkor átváltás.
- **Logikai műveletek**: feltételek ellenőrzése a kvízben és a téma váltásnál.
- **Elágazás**: `if-else` szerkezetek a függvényekben.
- **Tömb**: a kvíz kérdéseinek tárolása, a versenyzők adatainak tömbbe gyűjtése.
- **Ciklus**: a kvíz kérdéseinek végigjárása, a versenyzők adatainak ciklusban történő feldolgozása.
- **Függvény**: több függvény is definiálva van.
- **Programozási tétel**: maximum kiválasztás a `findFastestRacer` függvényben.

## 📱 Megjegyzés
A weboldal reszponzív, és AI felhasználásával készült (GPT-5, Claude Sonnet 4.5, DeepSeek-V3.2.).

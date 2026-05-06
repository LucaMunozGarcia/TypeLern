# ⌨ TypeMaster

Ein minimalistisches Tipp-Übungstool für GitHub Pages. Kein Build-Schritt, kein Framework — reines HTML, CSS und JavaScript.

## Features

- **Übungsauswahl** mit Filter nach Schwierigkeitsgrad
- **Tipp-Interface** mit Echtzeit-Feedback (grün = richtig, rot = falsch)
- **Virtuelle Tastatur** — die nächste Taste leuchtet auf
- **Live-Statistiken** — WPM, Genauigkeit, Fehler, Timer
- **Tipps-Spalte** — dynamische Hinweise basierend auf deiner Performance
- **Ergebnis-Screen** mit animierten Stats und Balken
- **Eigene Übungen** — einfach neue JSON-Dateien im `exercises/`-Ordner anlegen

## Projektstruktur

```
typemaster/
├── index.html          ← Übungsauswahl
├── type.html           ← Tipp-Interface
├── result.html         ← Ergebnis-Anzeige
├── style.css           ← Globales Dark-Theme
├── app.js              ← Gemeinsame Utilities
├── exercises/
│   ├── grundlagen.json
│   ├── zahlen.json
│   ├── saetze.json
│   ├── code.json
│   └── zitat.json
└── README.md
```

## Eigene Übung hinzufügen

Neue Datei in `exercises/` anlegen, z.B. `meine-uebung.json`:

```json
{
  "id": 6,
  "title": "Mein Text",
  "description": "Beschreibung der Übung.",
  "level": "medium",
  "time": 90,
  "text": "Der Text der abgetippt werden soll steht hier."
}
```

Dann den Dateinamen in `index.html` im Array `EXERCISE_FILES` hinzufügen:

```js
const EXERCISE_FILES = [
  'exercises/grundlagen.json',
  // ...
  'exercises/meine-uebung.json'  // ← hier eintragen
];
```

## GitHub Pages aktivieren

1. Repository auf GitHub erstellen (Public)
2. Alle Dateien hochladen (oder per `git push`)
3. **Settings → Pages → Source: `main` branch** → Save
4. Deine Seite ist live unter: `https://DEINNAME.github.io/REPONAME`

## Level-Werte

| Wert | Bedeutung |
|------|-----------|
| `easy` | Einfach — Grundbuchstaben |
| `medium` | Mittel — Groß/Klein, Satzzeichen |
| `hard` | Schwer — Code, Sonderzeichen |

## Lokales Testen

Da Übungen per `fetch()` geladen werden, brauchst du einen lokalen Server:

```bash
# Python 3
python -m http.server 8080

# Node.js (npx)
npx serve .
```

Dann im Browser: `http://localhost:8080`

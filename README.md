# Pizzeria Da Nonno Marco — Sito vetrina (demo)

Sito dimostrativo di 4 pagine: Home, Menù, Chi Siamo, Contatti.

## Struttura dei file

```
pizzeria-demo/
├── index.html          (Home)
├── menu.html           (Menù)
├── chi-siamo.html      (Chi Siamo)
├── contatti.html       (Contatti)
├── style.css           (stili)
├── script.js           (menu mobile + form demo)
└── assets/img/         (foto: da sostituire con foto reali)
```

## Come pubblicarlo su GitHub Pages (gratis)

1. **Crea un account** su https://github.com (se non ce l'hai già).

2. **Crea un nuovo repository** (pulsante "New"):
   - Nome: ad esempio `pizzeria-demo`
   - Spunta "Public" (i repository privati non funzionano con GitHub Pages nel piano gratuito)
   - Clicca "Create repository"

3. **Carica i file**: nella pagina del repository clicca su
   "uploading an existing file" (oppure "Add file" > "Upload files")
   e trascina TUTTO il contenuto della cartella `pizzeria-demo`
   (i 4 file .html, style.css, script.js e la cartella assets).
   Poi clicca "Commit changes".

4. **Attiva GitHub Pages**: vai su "Settings" > "Pages" (menu a sinistra):
   - Sotto "Source" seleziona il branch "main" e la cartella "/ (root)"
   - Clicca "Save"

5. **Aspetta 1-2 minuti** e il sito sarà online all'indirizzo:
   `https://TUO-USERNAME.github.io/pizzeria-demo/`

## Come aggiornarlo in futuro

- Piccole modifiche: su GitHub apri il file, clicca sull'icona della matita, modifica, "Commit changes".
- Modifiche grandi: ricarica i file aggiornati con "Upload files" sovrascrivendo i vecchi.

## Note

- Le foto sono stock di prova: sostituiscile con foto reali della pizzeria
  caricandole in `assets/img/` con gli stessi nomi di file.
- Il form contatti è solo dimostrativo (non invia email). Per un form reale
  servirebbe un servizio come Formspree (gratuito) o un backend.

---
Creato con Kimi 🍕

# Z-Astro-Calculator

**Strumento di calcolo per astrofotografi — Tool for astrophotographers**

---

## 🇮🇹 Italiano

### Cos'è

Z-Astro-Calculator è un file HTML standalone progettato per astrofotografi. Calcola pixel scale, FOV, risoluzione teorica, crop factor e altri parametri ottici fondamentali per pianificare sessioni di ripresa.

### Funzionalità principali

| Funzione | Descrizione |
|---|---|
| **Pixel Scale e FOV** | Calcolo automatico da diametro, focale, pixel size e risoluzione sensore |
| **Barlow e riduttori** | Da 0.5× a 5×, con indicazione del cambio di focale effettiva |
| **Modalità PRO** | Selezione lunghezza d'onda (nm) per il calcolo di Rayleigh con luce specifica (Ha, OIII, SII, NIR…) |
| **Analisi campionamento** | Zone ottimali Nyquist per planetario e deep sky con indicatore visivo (ottimale / sottocampionato / sovracampionato) |
| **Risoluzione lunare** | km/pixel e FOV sulla superficie lunare a distanza configurabile |
| **Preset fotocamere** | 65+ modelli precaricati (ZWO, PlayerOne, QHY, ToupTek, Aiptek, Moravian, Atik, Canon EOS, Nikon DSLR) |
| **Visible Objects Tonight** | DSO visibili (130+ oggetti tra Messier, NGC e IC) da qualsiasi posizione, con ricerca città autocomplete (250+ città) |
| **Polar Alignment** *(beta)* | Diagramma interattivo per posizionamento Polaris sul reticolo. Calcola l'angolo orario da data, ora e posizione. Dati epoca 2025. |
| **Coordinate Converter** | Conversione decimale ↔ DMS con trasferimento diretto ai campi di calcolo |
| **Avvisi sui valori** | Messaggi contestuali quando si inseriscono valori fuori dai range tipici dell'astrofotografia |
| **4 lingue** | Italiano · English · Español · Русский |
| **Dark mode** | Automatica |

> ⓘ App in revisione continua — alcune funzionalità sono ancora in fase di verifica.

### Novità v1.4

- 💾 **Setup salvato automaticamente** — diametro, focale, pixel size, sensore, Barlow, città, timezone, DST e lingua vengono ricordati tra una sessione e l'altra
- 🌐 **Lingua di default: inglese** — la preferenza viene ricordata tra sessioni
- 🔭 **Database DSO ampliato** — da 108 a 130 oggetti (aggiunti 22 Messier rilevanti per l'astrofotografia)
- ⚠️ **Avviso integrità file** — messaggio visibile se i marker di paternità vengono manomessi
- 🔗 **Footer aggiornato** — link a Home, Privacy (nostra) e MIT License
- 📄 **Licenza MIT** aggiunta al repository

### Come usarla

**File scaricabile (consigliato per uso offline totale)**
Scarica `Z-Astro-Calculator.html` dalla sezione [Releases](https://github.com/astrozullo/Z-Astro-Calculator/releases) e aprilo con qualsiasi browser. Funziona sempre, anche senza connessione, anche sul WiFi del telescopio.

**Versione web (GitHub Pages)**
Apri [astrozullo.github.io/Z-Astro-Calculator](https://astrozullo.github.io/Z-Astro-Calculator) dal browser. Dopo la prima visita con internet, funziona anche offline grazie al service worker.

### Privacy e requisiti

- ✅ **Nessun dato raccolto** — il file non trasmette nulla, niente analytics, niente cookie
- ✅ **Funziona offline** — zero dipendenze esterne, nessuna connessione richiesta
- ✅ **Multipiattaforma** — Chrome, Firefox, Safari, Edge su Windows, macOS, Linux, Android, iOS
- ✅ **File singolo** — un solo `.html`, niente cartelle, niente installazione
- ✅ **Open source** — codice leggibile direttamente nel browser (`Ctrl+U`)

> 🔒 **Versione GitHub Pages** — al primo accesso GitHub riceve l'IP del visitatore (come qualsiasi sito web). Un service worker mette in cache i file localmente per l'uso offline. Il setup e la preferenza di lingua sono salvati in localStorage sul dispositivo. Nessun dato viene trasmesso all'autore.

> 🔒 **Pulsante "Check for new release"** — cliccando vieni reindirizzato alla pagina GitHub delle release. GitHub riceve il tuo IP come con qualsiasi link aperto nel browser. Il tool stesso non invia nulla automaticamente.

### Licenza

Distribuito sotto licenza **MIT** — Copyright (c) 2026 Andrea Zullo
Vedi il file [LICENSE](LICENSE) per il testo completo.

---

## 🇬🇧 English

### What is it

Z-Astro-Calculator is a standalone HTML file designed for astrophotographers. It calculates pixel scale, FOV, theoretical resolution, crop factor and other fundamental optical parameters for planning imaging sessions.

### Key features

| Feature | Description |
|---|---|
| **Pixel Scale & FOV** | Automatic calculation from diameter, focal length, pixel size and sensor resolution |
| **Barlow & reducers** | From 0.5× to 5×, showing effective focal length change |
| **PRO Mode** | Wavelength selection (nm) for Rayleigh limit with specific light (Ha, OIII, SII, NIR…) |
| **Sampling analysis** | Nyquist optimal zones for planetary and deep sky with visual indicator (optimal / undersampled / oversampled) |
| **Lunar resolution** | km/pixel and FOV on the lunar surface at configurable distance |
| **Camera presets** | 65+ preloaded models (ZWO, PlayerOne, QHY, ToupTek, Aiptek, Moravian, Atik, Canon EOS, Nikon DSLR) |
| **Visible Objects Tonight** | DSO objects visible (130+ Messier, NGC and IC objects) from any location, with city autocomplete search (250+ cities) |
| **Polar Alignment** *(beta)* | Interactive diagram for positioning Polaris on the polar scope reticle. Calculates hour angle from date, time and location. Epoch 2025 data. |
| **Coordinate Converter** | Decimal ↔ DMS conversion with direct transfer to calculation fields |
| **Input warnings** | Contextual messages when physically unlikely values are entered |
| **4 languages** | Italiano · English · Español · Русский |
| **Dark mode** | Automatic |

> ⓘ App under continuous development — some features are still being verified.

### What's new in v1.4

- 💾 **Setup auto-saved** — diameter, focal length, pixel size, sensor, Barlow, city, timezone, DST and language are remembered between sessions
- 🌐 **Default language: English** — preference is remembered between sessions
- 🔭 **Expanded DSO database** — from 108 to 130 objects (added 22 Messier objects relevant to astrophotography)
- ⚠️ **File integrity warning** — visible message if authorship markers are tampered with
- 🔗 **Updated footer** — links to Home, Privacy (ours) and MIT License
- 📄 **MIT License** added to the repository

### How to use

**Downloadable file (recommended for full offline use)**
Download `Z-Astro-Calculator.html` from the [Releases](https://github.com/astrozullo/Z-Astro-Calculator/releases) section and open it with any browser. Works always, even without a connection, even on telescope WiFi networks.

**Web version (GitHub Pages)**
Open [astrozullo.github.io/Z-Astro-Calculator](https://astrozullo.github.io/Z-Astro-Calculator) in your browser. After the first visit with internet, it works offline too thanks to the service worker.

### Privacy and requirements

- ✅ **No data collected** — the file transmits nothing, no analytics, no cookies
- ✅ **Works offline** — zero external dependencies, no internet connection required
- ✅ **Cross-platform** — Chrome, Firefox, Safari, Edge on Windows, macOS, Linux, Android, iOS
- ✅ **Single file** — one `.html` file, no folders, no installation
- ✅ **Open source** — code is readable directly in the browser (`Ctrl+U`)

> 🔒 **GitHub Pages version** — on first access GitHub receives the visitor's IP address (as with any website). A service worker caches files locally for offline use. Setup and language preference are saved in localStorage on the device. No data is transmitted to the author.

> 🔒 **"Check for new release" button** — clicking it redirects you to the GitHub releases page. GitHub receives your IP as with any link opened in the browser. The tool itself sends nothing automatically.

### License

Released under the **MIT License** — Copyright (c) 2026 Andrea Zullo
See the [LICENSE](LICENSE) file for the full text.

---

## Autore / Author

**Andrea Zullo** — [Astronomia Spiccia](https://www.instagram.com/astronomiaspiccia/)
[ORCID: 0009-0006-6178-7654](https://orcid.org/0009-0006-6178-7654)
✉ zullo.spacehistory@gmail.com

**Contributors:** Davide Lavarini, Mattia Cipriani

---

## Formule / Formulas

```
pixel scale = 206.265 × pixel(µm) / focal(mm)
Dawes       = 116 / D
Rayleigh    = 1.22 × λ / D
Nyquist     = seeing/4 – seeing/2
```

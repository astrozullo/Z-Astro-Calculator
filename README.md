# Z-Astro-Calculator

**Strumento di calcolo per astrofotografi — Tool for astrophotographers**

---

## 🇮🇹 Italiano

### Cos'è

Z-Astro-Calculator è un tool standalone progettato per astrofotografi. Calcola pixel scale, FOV, risoluzione teorica, crop factor e altri parametri ottici fondamentali per pianificare sessioni di ripresa.

### Funzionalità principali

| Funzione | Descrizione |
|---|---|
| **Pixel Scale e FOV** | Calcolo automatico da diametro, focale, pixel size e risoluzione sensore |
| **Barlow e riduttori** | Da 0.5× a 5×, con indicazione del cambio di focale effettiva |
| **Modalità PRO** | Selezione lunghezza d'onda (nm) per il calcolo di Rayleigh con luce specifica (Ha, OIII, SII, NIR…) |
| **Analisi campionamento** | Zone ottimali Nyquist per planetario e deep sky con indicatore visivo (ottimale / sottocampionato / sovracampionato) |
| **Risoluzione lunare** | km/pixel e FOV sulla superficie lunare a distanza configurabile |
| **Preset fotocamere** | 64 modelli precaricati (ZWO, PlayerOne, QHY, ToupTek, Aiptek, Moravian, Atik, Canon EOS, Nikon DSLR) |
| **Visible Objects Tonight** | DSO visibili (129 oggetti tra Messier, NGC e IC) da qualsiasi posizione, con ricerca città autocomplete (516 città) |
| **Polar Alignment** *(beta)* | Diagramma interattivo per posizionamento Polaris sul reticolo. Calcola l'angolo orario da data, ora e posizione. Dati epoca 2025. |
| **Coordinate Converter** | Conversione decimale ↔ DMS con trasferimento diretto ai campi di calcolo |
| **Avvisi sui valori** | Messaggi contestuali quando si inseriscono valori fuori dai range tipici dell'astrofotografia |
| **4 lingue** | Italiano · English · Español · Русский |
| **Dark mode** | Automatica |

> ⓘ App in revisione continua — alcune funzionalità sono ancora in fase di verifica.

### Novità v1.5

- 🔧 **Rimosso il fattore di controllo paternità dal calcolo** — la pixel scale ora è sempre `206.265 × pixel / focale`, senza alcun coefficiente correttivo. Il messaggio di avviso sull'integrità resta, ma non altera più i risultati
- 🐛 **M110 duplicato eliminato** — il database DSO passa da 130 record (129 unici) a 129 record corretti
- 📱 **Installazione come app** — manifest e icone aggiunti: su Android e su Chrome/Edge desktop l'app si installa dalla home page
- 🔒 **Rimosso Google Fonts dalla home page** — ora nessun file del progetto contatta server di terze parti
- 🌐 **Service worker riscritto** — la home page funziona offline anche aperta dalla URL principale, e gli aggiornamenti arrivano subito quando c'è connessione
- 📊 **Conteggi corretti** nella documentazione (64 fotocamere, 129 oggetti, 516 città)

### Come installarla su Android

**1. Come app (consigliato)**
1. Apri [astrozullo.github.io/Z-Astro-Calculator](https://astrozullo.github.io/Z-Astro-Calculator) con **Chrome**
2. Tocca il menu **⋮** in alto a destra
3. Tocca **Installa app** (oppure **Aggiungi a schermata Home**)
4. Conferma: l'icona compare nella home del telefono

Dopo il primo avvio funziona anche senza connessione.

**2. Come file singolo**
1. Tocca **Download HTML for offline use** sulla home page
2. Accetta il download: il file finisce in **Download**
3. Tocca il file e aprilo con **Chrome**

Funziona senza alcuna connessione, WiFi del telescopio compreso.

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

Z-Astro-Calculator is a standalone tool designed for astrophotographers. It calculates pixel scale, FOV, theoretical resolution, crop factor and other fundamental optical parameters for planning imaging sessions.

### Key features

| Feature | Description |
|---|---|
| **Pixel Scale & FOV** | Automatic calculation from diameter, focal length, pixel size and sensor resolution |
| **Barlow & reducers** | From 0.5× to 5×, showing effective focal length change |
| **PRO Mode** | Wavelength selection (nm) for Rayleigh limit with specific light (Ha, OIII, SII, NIR…) |
| **Sampling analysis** | Nyquist optimal zones for planetary and deep sky with visual indicator (optimal / undersampled / oversampled) |
| **Lunar resolution** | km/pixel and FOV on the lunar surface at configurable distance |
| **Camera presets** | 64 preloaded models (ZWO, PlayerOne, QHY, ToupTek, Aiptek, Moravian, Atik, Canon EOS, Nikon DSLR) |
| **Visible Objects Tonight** | DSO objects visible (129 Messier, NGC and IC objects) from any location, with city autocomplete search (516 cities) |
| **Polar Alignment** *(beta)* | Interactive diagram for positioning Polaris on the polar scope reticle. Calculates hour angle from date, time and location. Epoch 2025 data. |
| **Coordinate Converter** | Decimal ↔ DMS conversion with direct transfer to calculation fields |
| **Input warnings** | Contextual messages when physically unlikely values are entered |
| **4 languages** | Italiano · English · Español · Русский |
| **Dark mode** | Automatic |

> ⓘ App under continuous development — some features are still being verified.

### What's new in v1.5

- 🔧 **Authorship-check factor removed from the maths** — pixel scale is now always `206.265 × pixel / focal length`, with no correction coefficient. The file integrity notice remains, but it no longer alters any result
- 🐛 **Duplicate M110 removed** — the DSO database goes from 130 records (129 unique) to 129 correct ones
- 📱 **Installable as an app** — manifest and icons added: on Android and on desktop Chrome/Edge the app installs straight from the home page
- 🔒 **Google Fonts removed from the home page** — no file in the project now contacts any third-party server
- 🌐 **Service worker rewritten** — the home page works offline from the main URL too, and updates arrive immediately when a connection is available
- 📊 **Corrected counts** in the documentation (64 cameras, 129 objects, 516 cities)

### How to install it on Android

**1. As an app (recommended)**
1. Open [astrozullo.github.io/Z-Astro-Calculator](https://astrozullo.github.io/Z-Astro-Calculator) in **Chrome**
2. Tap the **⋮** menu, top right
3. Tap **Install app** (or **Add to Home screen**)
4. Confirm: the icon appears on your home screen

It works offline after the first launch.

**2. As a single file**
1. Tap **Download HTML for offline use** on the home page
2. Accept the download: the file lands in **Downloads**
3. Tap the file and open it with **Chrome**

Works with no connection at all, telescope WiFi included.

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

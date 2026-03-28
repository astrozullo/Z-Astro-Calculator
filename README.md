# Z-Astro-Calculator

**Strumento di calcolo per astrofotografi** — Tool for astrophotographers

---

## 🇮🇹 Italiano

### Cos'è
Z-Astro-Calculator è un file HTML standalone progettato per astrofotografi. Calcola pixel scale, FOV, risoluzione teorica, crop factor e altri parametri ottici fondamentali per pianificare sessioni di ripresa.

### Funzionalità principali
- **Pixel scale e FOV** — calcolo automatico da diametro, focale, pixel size e risoluzione sensore
- **Barlow e riduttori** — da 0.5× a 5×, con indicazione del cambio di focale effettiva
- **Modalità PRO** — selezione lunghezza d'onda (nm) per il calcolo del limite di Rayleigh con luce specifica (Ha, OIII, SII, NIR, ecc.)
- **Analisi campionamento** — zone ottimali Nyquist per planetario e deep sky con indicatore visivo (ottimale / sottocampionato / sovracampionato)
- **Risoluzione lunare** — km/pixel e FOV sulla superficie lunare a distanza configurabile
- **Preset fotocamere** — 65+ modelli precaricati (ZWO, PlayerOne, QHY, ToupTek, Aiptek, Moravian, Atik, Canon EOS, Nikon DSLR)
- **Visible Objects Tonight** — calcola gli oggetti DSO (100+ tra Messier e NGC) visibili da qualsiasi posizione geografica in una data e ora specifiche, con ricerca città autocomplete (200+ città nel database)
- **Polar Alignment** *(beta)* — diagramma interattivo per il posizionamento di Polaris sul reticolo del polare. Calcola automaticamente l'angolo orario in base a data, ora e posizione. Dati riferiti all'epoca 2025 — aggiornamenti previsti.
- **Coordinate Converter** — conversione decimale ↔ DMS integrata, con trasferimento diretto ai campi di calcolo
- **4 lingue** — Italiano, English, Español, Русский
- **Dark mode** automatica

> ⓘ App in revisione continua — alcune funzionalità sono ancora in fase di verifica.

### Privacy e requisiti
- ✅ **Nessun dato raccolto** — il file non trasmette nulla, non ha analytics, non ha cookie
- ✅ **Funziona offline** — non richiede connessione internet, zero dipendenze esterne
- ✅ **Multipiattaforma** — funziona su qualsiasi browser moderno (Chrome, Firefox, Safari, Edge) su Windows, macOS, Linux, Android, iOS
- ✅ **File singolo** — un solo file `.html`, niente cartelle, niente installazione
- ✅ **Open source** — codice leggibile e ispezionabile direttamente nel browser (Ctrl+U)

### Come si usa
Scarica `Z-Astro-Calculator.html` dalla sezione [Releases](https://github.com/astrozullo/Z-Astro-Calculator/releases) e aprilo con qualsiasi browser. Fine.

### Autore
Andrea Zullo — [Astronomia Spiccia](https://www.instagram.com/astronomiaspiccia/)  
ORCID: [0009-0006-6178-7654](https://orcid.org/0009-0006-6178-7654)  
zullo.spacehistory@gmail.com

Contributors: Davide Lavarini, Mattia Cipriani

---

## 🇬🇧 English

### What is it
Z-Astro-Calculator is a standalone HTML file designed for astrophotographers. It calculates pixel scale, FOV, theoretical resolution, crop factor and other fundamental optical parameters for planning imaging sessions.

### Key features
- **Pixel scale and FOV** — automatic calculation from diameter, focal length, pixel size and sensor resolution
- **Barlow and reducers** — from 0.5× to 5×, showing effective focal length change
- **PRO mode** — wavelength selection (nm) for Rayleigh limit calculation with specific light (Ha, OIII, SII, NIR, etc.)
- **Sampling analysis** — Nyquist optimal zones for planetary and deep sky with visual indicator (optimal / undersampled / oversampled)
- **Lunar resolution** — km/pixel and FOV on the lunar surface at configurable distance
- **Camera presets** — 65+ preloaded models (ZWO, PlayerOne, QHY, ToupTek, Aiptek, Moravian, Atik, Canon EOS, Nikon DSLR)
- **Visible Objects Tonight** — calculates which DSO objects (100+ Messier and NGC) are visible from any location on a given date and time, with city autocomplete search (200+ cities in database)
- **Polar Alignment** *(beta)* — interactive diagram for positioning Polaris on the polar scope reticle. Automatically calculates the hour angle from date, time and location. Data based on epoch 2025 — updates planned.
- **Coordinate Converter** — decimal ↔ DMS conversion built in, with direct transfer to calculation fields
- **4 languages** — Italiano, English, Español, Русский
- **Automatic dark mode**

> ⓘ App under continuous development — some features are still being verified.

### Privacy and requirements
- ✅ **No data collected** — the file transmits nothing, has no analytics, no cookies
- ✅ **Works offline** — no internet connection required, zero external dependencies
- ✅ **Cross-platform** — works on any modern browser (Chrome, Firefox, Safari, Edge) on Windows, macOS, Linux, Android, iOS
- ✅ **Single file** — one `.html` file, no folders, no installation
- ✅ **Open source** — code is readable and inspectable directly in the browser (Ctrl+U)

### How to use
Download `Z-Astro-Calculator.html` from the [Releases](https://github.com/astrozullo/Z-Astro-Calculator/releases) section and open it with any browser. That's it.

### Author
Andrea Zullo — [Astronomia Spiccia](https://www.instagram.com/astronomiaspiccia/)  
ORCID: [0009-0006-6178-7654](https://orcid.org/0009-0006-6178-7654)  
zullo.spacehistory@gmail.com

Contributors: Davide Lavarini, Mattia Cipriani

---

*Formulas: pixel scale = 206.265 × pixel(µm) / focal(mm) · Dawes = 116/D · Rayleigh = 1.22 × λ / D · Nyquist: seeing/4 – seeing/2*

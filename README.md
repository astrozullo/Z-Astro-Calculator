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
- **Avviso vignettatura** — stima del rischio basata sulla diagonale del sensore e sul rapporto focale nativo del telescopio
- **Visible Objects Tonight** — calcola gli oggetti DSO (100+ tra Messier e NGC) visibili da qualsiasi posizione geografica in una data e ora specifiche, con ricerca città autocomplete (200+ città nel database)
- **4 lingue** — Italiano, English, Español, Русский
- **Dark mode** automatica

### Avviso vignettatura — come funziona
Il calcolatore stima il rischio di vignettatura meccanica confrontando la diagonale fisica del sensore (calcolata da pixel size × risoluzione) con il rapporto focale **nativo** del telescopio. Il rapporto focale effettivo con Barlow non viene usato perché un Barlow non riduce il cerchio d'immagine — al contrario, magnifica solo la parte centrale. Un riduttore invece comprime il cerchio d'immagine e per questo aumenta il rischio di un livello nella stima.

La stima usa soglie empiriche consolidate:
- Sensore > 40mm diag. (full frame) con f/ nativo > 5: attenzione; con f/ > 8: rischio elevato
- Sensore > 28mm diag. (APS-C) con f/ nativo > 7: attenzione; con f/ > 10: rischio elevato
- Sensore > 21mm diag. (4/3") con f/ nativo > 10: attenzione; con f/ > 13: rischio elevato

Questa stima è indicativa. Il cerchio d'immagine reale dipende dal progetto ottico specifico del telescopio (baffling, secondario, riduttori integrati). Verificare sempre le specifiche dello strumento.

### Privacy e requisiti
- ✅ **Nessun dato raccolto** — il file non trasmette nulla, non ha analytics, non ha cookie
- ✅ **Funziona offline** — non richiede connessione internet, zero dipendenze esterne
- ✅ **Multipiattaforma** — funziona su qualsiasi browser moderno (Chrome, Firefox, Safari, Edge) su Windows, macOS, Linux, Android, iOS
- ✅ **File singolo** — un solo file `.html`, niente cartelle, niente installazione
- ✅ **Open source** — codice leggibile e ispezionabile direttamente nel browser (Ctrl+U)

### Come si usa
Scarica `Z-Astro-Calculator.html` e aprilo con qualsiasi browser. Fine.

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
- **Vignetting warning** — risk estimate based on sensor diagonal and native telescope focal ratio
- **Visible Objects Tonight** — calculates which DSO objects (100+ Messier and NGC) are visible from any location on a given date and time, with city autocomplete search (200+ cities in database)
- **4 languages** — Italiano, English, Español, Русский
- **Automatic dark mode**

### Vignetting warning — how it works
The calculator estimates the risk of mechanical vignetting by comparing the physical sensor diagonal (calculated from pixel size × resolution) against the **native** focal ratio of the telescope. The effective focal ratio with a Barlow is not used because a Barlow does not reduce the image circle — it only magnifies the central portion. A focal reducer, on the other hand, compresses the image circle and therefore raises the risk level by one step in the estimate.

The estimate uses established empirical thresholds:
- Sensor > 40mm diagonal (full frame) with native f/ > 5: warning; with f/ > 8: high risk
- Sensor > 28mm diagonal (APS-C) with native f/ > 7: warning; with f/ > 10: high risk
- Sensor > 21mm diagonal (4/3") with native f/ > 10: warning; with f/ > 13: high risk

This estimate is indicative. The actual image circle depends on the specific optical design of the telescope (baffling, secondary mirror, integrated reducers). Always verify the instrument's specifications.

### Privacy and requirements
- ✅ **No data collected** — the file transmits nothing, has no analytics, no cookies
- ✅ **Works offline** — no internet connection required, zero external dependencies
- ✅ **Cross-platform** — works on any modern browser (Chrome, Firefox, Safari, Edge) on Windows, macOS, Linux, Android, iOS
- ✅ **Single file** — one `.html` file, no folders, no installation
- ✅ **Open source** — code is readable and inspectable directly in the browser (Ctrl+U)

### How to use
Download `Z-Astro-Calculator.html` and open it with any browser. That's it.

### Author
Andrea Zullo — [Astronomia Spiccia](https://www.instagram.com/astronomiaspiccia/)  
ORCID: [0009-0006-6178-7654](https://orcid.org/0009-0006-6178-7654)  
zullo.spacehistory@gmail.com

Contributors: Davide Lavarini, Mattia Cipriani

---

*Formulas: pixel scale = 206.265 × pixel(µm) / focal(mm) · Dawes = 116/D · Rayleigh = 1.22 × λ / D · Nyquist: seeing/4 – seeing/2*

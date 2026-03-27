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
- **4 lingue** — Italiano, English, Español, Русский
- **Dark mode** automatica

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
- **Visible Objects Tonight** — calculates which DSO objects (100+ Messier and NGC) are visible from any location on a given date and time, with city autocomplete search (200+ cities in database)
- **4 languages** — Italiano, English, Español, Русский
- **Automatic dark mode**

### How to use
Download `Z-Astro-Calculator.html` and open it with any browser. That's it.

### Author
Andrea Zullo — [Astronomia Spiccia](https://www.instagram.com/astronomiaspiccia/)  
ORCID: [0009-0006-6178-7654](https://orcid.org/0009-0006-6178-7654)  
zullo.spacehistory@gmail.com

Contributors: Davide Lavarini, Mattia Cipriani

---

*Formulas: pixel scale = 206.265 × pixel(µm) / focal(mm) · Dawes = 116/D · Rayleigh = 1.22 × λ / D · Nyquist: seeing/4 – seeing/2*

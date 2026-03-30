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
| **Visible Objects Tonight** | DSO visibili (100+ Messier e NGC) da qualsiasi posizione, con ricerca città autocomplete (200+ città) |
| **Polar Alignment** *(beta)* | Diagramma interattivo per posizionamento Polaris sul reticolo. Calcola l'angolo orario da data, ora e posizione. Dati epoca 2025. |
| **Coordinate Converter** | Conversione decimale ↔ DMS con trasferimento diretto ai campi di calcolo |
| **Avvisi sui valori** | Messaggi contestuali quando si inseriscono valori fuori dai range tipici dell'astrofotografia |
| **4 lingue** | Italiano · English · Español · Русский |
| **Dark mode** | Automatica |

> ⓘ App in revisione continua — alcune funzionalità sono ancora in fase di verifica.

### Novità v1.3

- 🐛 **Fix convertitore DMS→Decimale** — i minuti e i secondi venivano ignorati in presenza di gradi diversi da zero. Errore risolto.
- 💬 **Avvisi contestuali** — messaggi sui campi di input per valori fuori dai range tipici dell'astrofotografia
- ✨ **Campo Diametro migliorato** — la validazione avviene all'uscita dal campo, senza interferire durante la digitazione

### Privacy e requisiti

- ✅ **Nessun dato raccolto** — il file non trasmette nulla, niente analytics, niente cookie
- ✅ **Funziona offline** — zero dipendenze esterne, nessuna connessione richiesta
- ✅ **Multipiattaforma** — Chrome, Firefox, Safari, Edge su Windows, macOS, Linux, Android, iOS
- ✅ **File singolo** — un solo `.html`, niente cartelle, niente installazione
- ✅ **Open source** — codice leggibile direttamente nel browser (`Ctrl+U`)

### Come si usa

Scarica `Z-Astro-Calculator.html` dalla sezione [Releases](https://github.com/astrozullo/Z-Astro-Calculator/releases) e aprilo con qualsiasi browser. Fine.

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
| **Visible Objects Tonight** | DSO objects visible (100+ Messier & NGC) from any location, with city autocomplete search (200+ cities) |
| **Polar Alignment** *(beta)* | Interactive diagram for positioning Polaris on the polar scope reticle. Calculates hour angle from date, time and location. Epoch 2025 data. |
| **Coordinate Converter** | Decimal ↔ DMS conversion with direct transfer to calculation fields |
| **Input warnings** | Contextual messages when physically unlikely values are entered |
| **4 languages** | Italiano · English · Español · Русский |
| **Dark mode** | Automatic |

> ⓘ App under continuous development — some features are still being verified.

### What's new in v1.3

- 🐛 **Fix DMS→Decimal converter** — minutes and seconds were being ignored when degrees were non-zero. Bug resolved.
- 💬 **Contextual input warnings** — messages on input fields for values outside typical astrophotography ranges
- ✨ **Diameter field improved** — validation now triggers on focus loss, without interfering while typing

### Privacy and requirements

- ✅ **No data collected** — the file transmits nothing, no analytics, no cookies
- ✅ **Works offline** — zero external dependencies, no internet connection required
- ✅ **Cross-platform** — Chrome, Firefox, Safari, Edge on Windows, macOS, Linux, Android, iOS
- ✅ **Single file** — one `.html` file, no folders, no installation
- ✅ **Open source** — code is readable directly in the browser (`Ctrl+U`)

### How to use

Download `Z-Astro-Calculator.html` from the [Releases](https://github.com/astrozullo/Z-Astro-Calculator/releases) section and open it with any browser. That's it.

---

🔒 Privacy — Check for new release

Quando clicchi il pulsante "Check for new release", vieni reindirizzato alla pagina GitHub delle release. In quel momento GitHub riceve il tuo indirizzo IP, come accade con qualsiasi link che apri nel browser. Nessun altro dato viene trasmesso. Il tool stesso non invia nulla — né automaticamente né in background.

---

🔒 Privacy — Check for new release

When you click the "Check for new release" button, you are redirected to the GitHub releases page. At that point GitHub receives your IP address, as happens with any link you open in a browser. No other data is transmitted. The tool itself sends nothing — neither automatically nor in the background.

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

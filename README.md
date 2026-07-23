# Z-Astro-Calculator

**Strumento di calcolo per astrofotografi — Tool for astrophotographers**

Pixel scale · FOV · Campionamento · Risoluzione lunare
Offline · File singolo · Installabile come app e aggiornamento manuale in-app · Open source

[**Apri il calcolatore →**](https://astrozullo.github.io/Z-Astro-Calculator) · [Scarica il file](https://github.com/astrozullo/Z-Astro-Calculator/releases/latest/download/Z-Astro-Calculator.html) · [Changelog](https://github.com/astrozullo/Z-Astro-Calculator/releases)

---

## 🇮🇹 Italiano

### Cos'è

Z-Astro-Calculator è un tool standalone progettato per astrofotografi. Calcola pixel scale, FOV, risoluzione teorica, crop factor e altri parametri ottici fondamentali per pianificare sessioni di ripresa.

Funziona anche offline. Tutti i calcoli avvengono nel browser, sul tuo dispositivo.

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
| **Setup ricordato** | Diametro, focale, pixel size, sensore, Barlow, città, timezone, DST e lingua restano salvati tra una sessione e l'altra |
| **4 lingue** | Italiano · English · Español · Русский |
| **Dark mode** | Automatica |

> ⓘ App in revisione continua — alcune funzionalità sono ancora in fase di verifica.

### Come si usa

Tre modi, tutti equivalenti nei risultati. Scegli in base a come lavori sul campo.

#### 1. Dal browser

Apri [astrozullo.github.io/Z-Astro-Calculator](https://astrozullo.github.io/Z-Astro-Calculator).
Dopo la prima visita con connessione funziona anche offline, grazie al service worker.

#### 2. Installandola come app (Android, Chrome, Edge)

1. Apri [astrozullo.github.io/Z-Astro-Calculator](https://astrozullo.github.io/Z-Astro-Calculator) con **Chrome**
2. Tocca il menu **⋮** in alto a destra
3. Tocca **Installa app** (oppure **Aggiungi a schermata Home**)
4. Conferma: l'icona compare tra le tue app

Da lì si apre a schermo intero e funziona senza connessione.
Su iPhone e iPad: pulsante **Condividi** → **Aggiungi a Home**.

#### 3. Scaricando il file singolo

1. Scarica [`Z-Astro-Calculator.html`](https://github.com/astrozullo/Z-Astro-Calculator/releases/latest/download/Z-Astro-Calculator.html) dalla sezione [Releases](https://github.com/astrozullo/Z-Astro-Calculator/releases)
2. Aprilo con qualsiasi browser, con un doppio clic o toccandolo

Un solo file, nessuna cartella, nessuna installazione. È la via più robusta per l'uso in postazione: funziona anche agganciato al WiFi del telescopio, senza internet.

### Privacy e requisiti

- ✅ **Nessun dato raccolto** — niente analytics, niente cookie, niente tracciamento
- ✅ **Zero risorse esterne** — nessun font, script o immagine caricato da server di terze parti
- ✅ **Funziona offline** — nessuna connessione richiesta, aggiornamento con pulsante manuale
- ✅ **Multipiattaforma** — Chrome, Firefox, Safari, Edge su Windows, macOS, Linux, Android, iOS
- ✅ **Open source** — codice leggibile direttamente nel browser (`Ctrl+U`)

> 🔒 **Versione GitHub Pages** — al primo accesso GitHub riceve l'IP del visitatore, come qualsiasi sito web. Un service worker mette in cache i file localmente per l'uso offline. Setup e preferenza di lingua sono salvati in localStorage sul dispositivo. Nessun dato viene trasmesso all'autore.

> 🔒 **Pulsante "Check for new release"** — cliccando viene verificato se ci sono aggiornamenti.

Testo completo: [Privacy Policy](https://astrozullo.github.io/Z-Astro-Calculator/privacy.html)

### Versioni

Il changelog di ogni versione sta nella pagina [Releases](https://github.com/astrozullo/Z-Astro-Calculator/releases).

### Licenza

Distribuito sotto licenza **MIT** — Copyright (c) 2026 Andrea Zullo
Vedi il file [LICENSE](LICENSE) per il testo completo.

---

## 🇬🇧 English

### What is it

Z-Astro-Calculator is a standalone tool designed for astrophotographers. It calculates pixel scale, FOV, theoretical resolution, crop factor and other fundamental optical parameters for planning imaging sessions.

Every calculation runs in your browser, on your own device.

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
| **Setup remembered** | Diameter, focal length, pixel size, sensor, Barlow, city, timezone, DST and language are kept between sessions |
| **4 languages** | Italiano · English · Español · Русский |
| **Dark mode** | Automatic |

> ⓘ App under continuous development — some features are still being verified.

### How to use it

Three ways, all giving the same results. Pick the one that suits how you work in the field.

#### 1. In the browser

Open [astrozullo.github.io/Z-Astro-Calculator](https://astrozullo.github.io/Z-Astro-Calculator).
After the first visit with a connection it works offline too, thanks to the service worker.

#### 2. Installed as an app (Android, Chrome, Edge)

1. Open [astrozullo.github.io/Z-Astro-Calculator](https://astrozullo.github.io/Z-Astro-Calculator) in **Chrome**
2. Tap the **⋮** menu, top right
3. Tap **Install app** (or **Add to Home screen**)
4. Confirm: the icon appears among your apps

From there it opens full screen and runs with no connection.
On iPhone and iPad: **Share** button → **Add to Home Screen**.

#### 3. As a single downloaded file

1. Download [`Z-Astro-Calculator.html`](https://github.com/astrozullo/Z-Astro-Calculator/releases/latest/download/Z-Astro-Calculator.html) from the [Releases](https://github.com/astrozullo/Z-Astro-Calculator/releases) section
2. Open it with any browser, by double-clicking or tapping it

One file, no folders, no installation. This is the most robust option at the telescope: it works even while connected to the mount's own WiFi, with no internet at all.

### Privacy and requirements

- ✅ **No data collected** — no analytics, no cookies, no tracking
- ✅ **Zero external resources** — no font, script or image loaded from third-party servers
- ✅ **Works offline** — no internet connection required
- ✅ **Cross-platform** — Chrome, Firefox, Safari, Edge on Windows, macOS, Linux, Android, iOS
- ✅ **Open source** — code is readable directly in the browser (`Ctrl+U`)

> 🔒 **GitHub Pages version** — on first access GitHub receives the visitor's IP address, as with any website. A service worker caches files locally for offline use. Setup and language preference are saved in localStorage on the device. No data is transmitted to the author.

> 🔒 **"Check for new release" button** — clicking it redirects you to the GitHub releases page. The tool sends nothing automatically.

Full text: [Privacy Policy](https://astrozullo.github.io/Z-Astro-Calculator/privacy.html)

### Versions

The changelog for each version lives on the [Releases](https://github.com/astrozullo/Z-Astro-Calculator/releases) page.

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

Z-ASTRO-CALCULATOR
============================================================

STRUMENTO DI CALCOLO PER ASTROFOTOGRAFI — Tool for astrophotographers

============================================================

🇮🇹 ITALIANO
============================================================

COS'È
============================================================
Z-Astro-Calculator è un file HTML standalone progettato per astrofotografi. Calcola pixel scale, FOV, risoluzione teorica, crop factor e altri parametri ottici fondamentali per pianificare sessioni di ripresa.

FUNZIONALITÀ PRINCIPALI
============================================================
- PIXEL SCALE E FOV — calcolo automatico da diametro, focale, pixel size e risoluzione sensore
- BARLOW E RIDUTTORI — da 0.5× a 5×, con indicazione del cambio di focale effettiva
- MODALITÀ PRO — selezione lunghezza d'onda (nm) per il calcolo del limite di Rayleigh con luce specifica (Ha, OIII, SII, NIR, ecc.)
- ANALISI CAMPIONAMENTO — zone ottimali Nyquist per planetario e deep sky con indicatore visivo (ottimale / sottocampionato / sovracampionato)
- RISOLUZIONE LUNARE — km/pixel e FOV sulla superficie lunare a distanza configurabile
- PRESET FOTOCAMERE — 65+ modelli precaricati (ZWO, PlayerOne, QHY, ToupTek, Aiptek, Moravian, Atik, Canon EOS, Nikon DSLR)
- VISIBLE OBJECTS TONIGHT — calcola gli oggetti DSO (100+ tra Messier e NGC) visibili da qualsiasi posizione geografica in una data e ora specifiche, con ricerca città autocomplete (200+ città nel database)
- POLAR ALIGNMENT (beta) — diagramma interattivo per il posizionamento di Polaris sul reticolo del polare. Calcola automaticamente l'angolo orario in base a data, ora e posizione. Dati riferiti all'epoca 2025 — aggiornamenti previsti.
- COORDINATE CONVERTER — conversione decimale ↔ DMS integrata, con trasferimento diretto ai campi di calcolo
- AVVISI SUI VALORI — messaggi contestuali quando si inseriscono valori fisicamente improbabili, per evitare errori di input
- 4 LINGUE — Italiano, English, Español, Русский
- DARK MODE automatica

  ⓘ App in revisione continua — alcune funzionalità sono ancora in fase di verifica.

NOVITÀ v1.3
============================================================
- Fix convertitore DMS→Decimale: i minuti e i secondi venivano ignorati in presenza di gradi diversi da zero. Errore risolto.
- Avvisi contestuali sui campi di input per valori fuori dai range tipici dell'astrofotografia
- Comportamento del campo Diametro migliorato: la validazione avviene all'uscita dal campo, senza interferire durante la digitazione

PRIVACY E REQUISITI
============================================================
- ✅ NESSUN DATO RACCOLTO — il file non trasmette nulla, non ha analytics, non ha cookie
- ✅ FUNZIONA OFFLINE — non richiede connessione internet, zero dipendenze esterne
- ✅ MULTIPIATTAFORMA — funziona su qualsiasi browser moderno (Chrome, Firefox, Safari, Edge) su Windows, macOS, Linux, Android, iOS
- ✅ FILE SINGOLO — un solo file `.html`, niente cartelle, niente installazione
- ✅ OPEN SOURCE — codice leggibile e ispezionabile direttamente nel browser (Ctrl+U)

COME SI USA
============================================================
Scarica `Z-Astro-Calculator.html` dalla sezione Releases (https://github.com/astrozullo/Z-Astro-Calculator/releases) e aprilo con qualsiasi browser. Fine.

AUTORE
============================================================
Andrea Zullo — Astronomia Spiccia (https://www.instagram.com/astronomiaspiccia/)
ORCID: 0009-0006-6178-7654 (https://orcid.org/0009-0006-6178-7654)
zullo.spacehistory@gmail.com

Contributors: Davide Lavarini, Mattia Cipriani

============================================================

🇬🇧 ENGLISH
============================================================

WHAT IS IT
============================================================
Z-Astro-Calculator is a standalone HTML file designed for astrophotographers. It calculates pixel scale, FOV, theoretical resolution, crop factor and other fundamental optical parameters for planning imaging sessions.

KEY FEATURES
============================================================
- PIXEL SCALE AND FOV — automatic calculation from diameter, focal length, pixel size and sensor resolution
- BARLOW AND REDUCERS — from 0.5× to 5×, showing effective focal length change
- PRO MODE — wavelength selection (nm) for Rayleigh limit calculation with specific light (Ha, OIII, SII, NIR, etc.)
- SAMPLING ANALYSIS — Nyquist optimal zones for planetary and deep sky with visual indicator (optimal / undersampled / oversampled)
- LUNAR RESOLUTION — km/pixel and FOV on the lunar surface at configurable distance
- CAMERA PRESETS — 65+ preloaded models (ZWO, PlayerOne, QHY, ToupTek, Aiptek, Moravian, Atik, Canon EOS, Nikon DSLR)
- VISIBLE OBJECTS TONIGHT — calculates which DSO objects (100+ Messier and NGC) are visible from any location on a given date and time, with city autocomplete search (200+ cities in database)
- POLAR ALIGNMENT (beta) — interactive diagram for positioning Polaris on the polar scope reticle. Automatically calculates the hour angle from date, time and location. Data based on epoch 2025 — updates planned.
- COORDINATE CONVERTER — decimal ↔ DMS conversion built in, with direct transfer to calculation fields
- INPUT WARNINGS — contextual messages when physically unlikely values are entered, to prevent input errors
- 4 LANGUAGES — Italiano, English, Español, Русский
- AUTOMATIC DARK MODE

  ⓘ App under continuous development — some features are still being verified.

WHAT'S NEW IN v1.3
============================================================
- Fix DMS→Decimal converter: minutes and seconds were being ignored when degrees were non-zero. Bug resolved.
- Contextual warnings on input fields for values outside typical astrophotography ranges
- Diameter field behaviour improved: validation now triggers on focus loss, without interfering while typing

PRIVACY AND REQUIREMENTS
============================================================
- ✅ NO DATA COLLECTED — the file transmits nothing, has no analytics, no cookies
- ✅ WORKS OFFLINE — no internet connection required, zero external dependencies
- ✅ CROSS-PLATFORM — works on any modern browser (Chrome, Firefox, Safari, Edge) on Windows, macOS, Linux, Android, iOS
- ✅ SINGLE FILE — one `.html` file, no folders, no installation
- ✅ OPEN SOURCE — code is readable and inspectable directly in the browser (Ctrl+U)

HOW TO USE
============================================================
Download `Z-Astro-Calculator.html` from the Releases section (https://github.com/astrozullo/Z-Astro-Calculator/releases) and open it with any browser. That's it.

🔒 Privacy — Check for new release

Quando clicchi il pulsante "Check for new release", vieni reindirizzato alla pagina GitHub delle release. In quel momento GitHub riceve il tuo indirizzo IP, come accade con qualsiasi link che apri nel browser. Nessun altro dato viene trasmesso. Il tool stesso non invia nulla — né automaticamente né in background.

---

🔒 Privacy — Check for new release

When you click the "Check for new release" button, you are redirected to the GitHub releases page. At that point GitHub receives your IP address, as happens with any link you open in a browser. No other data is transmitted. The tool itself sends nothing — neither automatically nor in the background.


AUTHOR
============================================================
Andrea Zullo — Astronomia Spiccia (https://www.instagram.com/astronomiaspiccia/)
ORCID: 0009-0006-6178-7654 (https://orcid.org/0009-0006-6178-7654)
zullo.spacehistory@gmail.com

Contributors: Davide Lavarini, Mattia Cipriani

============================================================

Formulas: pixel scale = 206.265 × pixel(µm) / focal(mm) · Dawes = 116/D · Rayleigh = 1.22 × λ / D · Nyquist: seeing/4 – seeing/2

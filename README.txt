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
- VISIBLE OBJECTS TONIGHT — DSO visibili (130+ oggetti tra Messier, NGC e IC) da qualsiasi posizione, con ricerca città autocomplete (250+ città)
- POLAR ALIGNMENT (beta) — diagramma interattivo per il posizionamento di Polaris sul reticolo del polare. Calcola automaticamente l'angolo orario in base a data, ora e posizione. Dati epoca 2025.
- COORDINATE CONVERTER — conversione decimale ↔ DMS integrata, con trasferimento diretto ai campi di calcolo
- AVVISI SUI VALORI — messaggi contestuali quando si inseriscono valori fisicamente improbabili
- 4 LINGUE — Italiano, English, Español, Русский (preferenza salvata tra sessioni)
- DARK MODE automatica

  ⓘ App in revisione continua — alcune funzionalità sono ancora in fase di verifica.

NOVITÀ v1.4
============================================================
- Setup salvato automaticamente — diametro, focale, pixel size, sensore, Barlow, città, timezone, DST e lingua vengono ricordati tra una sessione e l'altra
- Lingua di default: inglese. La preferenza viene ricordata tra sessioni.
- Database DSO ampliato: da 108 a 130 oggetti (aggiunti 22 Messier rilevanti per l'astrofotografia)
- Avviso integrità file: messaggio visibile se i marker di paternità vengono manomessi
- Footer aggiornato: link a Home, Privacy (nostra) e MIT License
- Licenza MIT aggiunta al repository

COME SI USA
============================================================
File scaricabile (consigliato per uso offline totale):
Scarica Z-Astro-Calculator.html dalla sezione Releases
(https://github.com/astrozullo/Z-Astro-Calculator/releases)
e aprilo con qualsiasi browser. Funziona sempre, anche senza connessione,
anche sul WiFi del telescopio.

Versione web (GitHub Pages):
https://astrozullo.github.io/Z-Astro-Calculator
Dopo la prima visita con internet, funziona anche offline
grazie al service worker.

PRIVACY E REQUISITI
============================================================
- ✅ NESSUN DATO RACCOLTO — il file non trasmette nulla, niente analytics, niente cookie
- ✅ FUNZIONA OFFLINE — zero dipendenze esterne, nessuna connessione richiesta
- ✅ MULTIPIATTAFORMA — Chrome, Firefox, Safari, Edge su Windows, macOS, Linux, Android, iOS
- ✅ FILE SINGOLO — un solo .html, niente cartelle, niente installazione
- ✅ OPEN SOURCE — codice leggibile direttamente nel browser (Ctrl+U)

Versione GitHub Pages: al primo accesso GitHub riceve l'IP del visitatore.
Un service worker mette in cache i file localmente. Il setup e la preferenza
di lingua sono salvati in localStorage sul dispositivo. Nessun dato viene
trasmesso all'autore.

Pulsante "Check for new release": cliccando vieni reindirizzato alla pagina
GitHub delle release. Il tool stesso non invia nulla automaticamente.

LICENZA
============================================================
Distribuito sotto licenza MIT — Copyright (c) 2026 Andrea Zullo
https://github.com/astrozullo/Z-Astro-Calculator/blob/main/LICENSE

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
- VISIBLE OBJECTS TONIGHT — DSO objects visible (130+ Messier, NGC and IC objects) from any location, with city autocomplete search (250+ cities)
- POLAR ALIGNMENT (beta) — interactive diagram for positioning Polaris on the polar scope reticle. Automatically calculates the hour angle from date, time and location. Epoch 2025 data.
- COORDINATE CONVERTER — decimal ↔ DMS conversion built in, with direct transfer to calculation fields
- INPUT WARNINGS — contextual messages when physically unlikely values are entered
- 4 LANGUAGES — Italiano, English, Español, Русский (preference saved between sessions)
- AUTOMATIC DARK MODE

  ⓘ App under continuous development — some features are still being verified.

WHAT'S NEW IN v1.4
============================================================
- Setup auto-saved — diameter, focal length, pixel size, sensor, Barlow, city, timezone, DST and language are remembered between sessions
- Default language: English. Preference is remembered between sessions.
- Expanded DSO database: from 108 to 130 objects (added 22 Messier objects relevant to astrophotography)
- File integrity warning: visible message if authorship markers are tampered with
- Updated footer: links to Home, Privacy (ours) and MIT License
- MIT License added to the repository

HOW TO USE
============================================================
Downloadable file (recommended for full offline use):
Download Z-Astro-Calculator.html from the Releases section
(https://github.com/astrozullo/Z-Astro-Calculator/releases)
and open it with any browser. Works always, even without a connection,
even on telescope WiFi networks.

Web version (GitHub Pages):
https://astrozullo.github.io/Z-Astro-Calculator
After the first visit with internet, it works offline too
thanks to the service worker.

PRIVACY AND REQUIREMENTS
============================================================
- ✅ NO DATA COLLECTED — the file transmits nothing, no analytics, no cookies
- ✅ WORKS OFFLINE — no internet connection required, zero external dependencies
- ✅ CROSS-PLATFORM — Chrome, Firefox, Safari, Edge on Windows, macOS, Linux, Android, iOS
- ✅ SINGLE FILE — one .html file, no folders, no installation
- ✅ OPEN SOURCE — code is readable and inspectable directly in the browser (Ctrl+U)

GitHub Pages version: on first access GitHub receives the visitor's IP address.
A service worker caches files locally for offline use. Setup and language
preference are saved in localStorage on the device. No data is transmitted
to the author.

"Check for new release" button: clicking it redirects you to the GitHub
releases page. The tool itself sends nothing automatically.

LICENSE
============================================================
Released under the MIT License — Copyright (c) 2026 Andrea Zullo
https://github.com/astrozullo/Z-Astro-Calculator/blob/main/LICENSE

AUTHOR
============================================================
Andrea Zullo — Astronomia Spiccia (https://www.instagram.com/astronomiaspiccia/)
ORCID: 0009-0006-6178-7654 (https://orcid.org/0009-0006-6178-7654)
zullo.spacehistory@gmail.com

Contributors: Davide Lavarini, Mattia Cipriani

============================================================

Formulas: pixel scale = 206.265 × pixel(µm) / focal(mm) · Dawes = 116/D · Rayleigh = 1.22 × λ / D · Nyquist: seeing/4 – seeing/2

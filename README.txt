Z-ASTRO-CALCULATOR
============================================================

STRUMENTO DI CALCOLO PER ASTROFOTOGRAFI - Tool for astrophotographers

Pixel scale . FOV . Campionamento . Risoluzione lunare
Offline . File singolo . Installabile come app . Open source

Apri il calcolatore:  https://astrozullo.github.io/Z-Astro-Calculator
Scarica il file:      https://github.com/astrozullo/Z-Astro-Calculator/releases/latest/download/Z-Astro-Calculator.html
Changelog:            https://github.com/astrozullo/Z-Astro-Calculator/releases

============================================================

ITALIANO
============================================================

COS'E'
------------------------------------------------------------
Z-Astro-Calculator e' un tool standalone progettato per astrofotografi.
Calcola pixel scale, FOV, risoluzione teorica, crop factor e altri parametri
ottici fondamentali per pianificare sessioni di ripresa.

Non richiede installazione, account o connessione. Tutti i calcoli avvengono
nel browser, sul tuo dispositivo.

FUNZIONALITA' PRINCIPALI
------------------------------------------------------------
- PIXEL SCALE E FOV - calcolo automatico da diametro, focale, pixel size e
  risoluzione sensore
- BARLOW E RIDUTTORI - da 0.5x a 5x, con indicazione del cambio di focale
  effettiva
- MODALITA' PRO - selezione lunghezza d'onda (nm) per il calcolo del limite di
  Rayleigh con luce specifica (Ha, OIII, SII, NIR, ecc.)
- ANALISI CAMPIONAMENTO - zone ottimali Nyquist per planetario e deep sky con
  indicatore visivo (ottimale / sottocampionato / sovracampionato)
- RISOLUZIONE LUNARE - km/pixel e FOV sulla superficie lunare a distanza
  configurabile
- PRESET FOTOCAMERE - 64 modelli precaricati (ZWO, PlayerOne, QHY, ToupTek,
  Explore Scientific, Canon EOS, Nikon DSLR, Sony, Moravian, Atik)
- VISIBLE OBJECTS TONIGHT - DSO visibili (129 oggetti tra Messier, NGC e IC) da
  qualsiasi posizione, con ricerca citta' autocomplete (516 citta')
- POLAR ALIGNMENT (beta) - diagramma interattivo per il posizionamento di
  Polaris sul reticolo del polare. Calcola l'angolo orario da data, ora e
  posizione. Dati epoca 2025.
- COORDINATE CONVERTER - conversione decimale <-> DMS integrata, con
  trasferimento diretto ai campi di calcolo
- AVVISI SUI VALORI - messaggi contestuali quando si inseriscono valori
  fisicamente improbabili
- SETUP RICORDATO - diametro, focale, pixel size, sensore, Barlow, citta',
  timezone, DST e lingua restano salvati tra una sessione e l'altra
- AGGIORNAMENTO MANUALE - l'app si aggiorna solo premendo il pulsante in fondo
  alla pagina; al termine un banner mostra le novita' della versione
- 4 LINGUE - Italiano, English, Espanol, Russkij
- DARK MODE automatica

  App in revisione continua: alcune funzionalita' sono ancora in fase di
  verifica.

COME SI USA
------------------------------------------------------------
Tre modi, tutti equivalenti nei risultati. Scegli in base a come lavori sul
campo.

1) DAL BROWSER
   Apri https://astrozullo.github.io/Z-Astro-Calculator
   Dopo la prima visita con connessione funziona anche offline, grazie al
   service worker. Da quel momento l'app viene servita sempre dalla cache
   locale: per riceverne una versione piu' recente premi "Aggiorna all'ultima
   versione" in fondo alla pagina.

2) INSTALLANDOLA COME APP (Android, Chrome, Edge)
   1. Apri https://astrozullo.github.io/Z-Astro-Calculator con Chrome
   2. Tocca il menu tre puntini in alto a destra
   3. Tocca "Installa app" (oppure "Aggiungi a schermata Home")
   4. Conferma: l'icona compare tra le tue app
   Da li' si apre a schermo intero e funziona senza connessione.
   Su iPhone e iPad: pulsante Condividi -> Aggiungi a Home.

3) SCARICANDO IL FILE SINGOLO
   1. Scarica Z-Astro-Calculator.html dalla sezione Releases
      https://github.com/astrozullo/Z-Astro-Calculator/releases
   2. Aprilo con qualsiasi browser, con un doppio clic o toccandolo
   Un solo file, nessuna cartella, nessuna installazione. E' la via piu'
   robusta per l'uso in postazione: funziona anche agganciato al WiFi del
   telescopio, senza internet.

PRIVACY E REQUISITI
------------------------------------------------------------
- NESSUN DATO RACCOLTO - niente analytics, niente cookie, niente tracciamento
- ZERO RISORSE ESTERNE - nessun font, script o immagine caricato da server di
  terze parti
- FUNZIONA OFFLINE - nessuna connessione richiesta
- MULTIPIATTAFORMA - Chrome, Firefox, Safari, Edge su Windows, macOS, Linux,
  Android, iOS
- OPEN SOURCE - codice leggibile direttamente nel browser (Ctrl+U)

Versione GitHub Pages: al primo accesso GitHub riceve l'IP del visitatore, come
qualsiasi sito web. Un service worker mette in cache i file localmente per l'uso
offline; da li' in poi l'app e' servita sempre dalla cache e aprirla non
contatta alcun server. Setup e preferenza di lingua sono salvati in localStorage
sul dispositivo. Nessun dato viene trasmesso all'autore.

Pulsante "Aggiorna all'ultima versione": l'aggiornamento avviene solo se premi
il pulsante in fondo alla pagina; in quel momento i file vengono riscaricati da
GitHub Pages. L'app non effettua nessun'altra richiesta di rete e non invia
nulla automaticamente.

Testo completo:
https://astrozullo.github.io/Z-Astro-Calculator/privacy.html

VERSIONI
------------------------------------------------------------
Il changelog di ogni versione sta nella pagina Releases:
https://github.com/astrozullo/Z-Astro-Calculator/releases

LICENZA
------------------------------------------------------------
Distribuito sotto licenza MIT - Copyright (c) 2026 Andrea Zullo
https://github.com/astrozullo/Z-Astro-Calculator/blob/main/LICENSE

============================================================

ENGLISH
============================================================

WHAT IS IT
------------------------------------------------------------
Z-Astro-Calculator is a standalone tool designed for astrophotographers. It
calculates pixel scale, FOV, theoretical resolution, crop factor and other
fundamental optical parameters for planning imaging sessions.

No installation, no account, no connection required. Every calculation runs in
your browser, on your own device.

KEY FEATURES
------------------------------------------------------------
- PIXEL SCALE AND FOV - automatic calculation from diameter, focal length,
  pixel size and sensor resolution
- BARLOW AND REDUCERS - from 0.5x to 5x, showing effective focal length change
- PRO MODE - wavelength selection (nm) for Rayleigh limit calculation with
  specific light (Ha, OIII, SII, NIR, etc.)
- SAMPLING ANALYSIS - Nyquist optimal zones for planetary and deep sky with
  visual indicator (optimal / undersampled / oversampled)
- LUNAR RESOLUTION - km/pixel and FOV on the lunar surface at configurable
  distance
- CAMERA PRESETS - 64 preloaded models (ZWO, PlayerOne, QHY, ToupTek, Explore
  Scientific, Canon EOS, Nikon DSLR, Sony, Moravian, Atik)
- VISIBLE OBJECTS TONIGHT - DSO objects visible (129 Messier, NGC and IC
  objects) from any location, with city autocomplete search (516 cities)
- POLAR ALIGNMENT (beta) - interactive diagram for positioning Polaris on the
  polar scope reticle. Calculates the hour angle from date, time and location.
  Epoch 2025 data.
- COORDINATE CONVERTER - decimal <-> DMS conversion built in, with direct
  transfer to calculation fields
- INPUT WARNINGS - contextual messages when physically unlikely values are
  entered
- SETUP REMEMBERED - diameter, focal length, pixel size, sensor, Barlow, city,
  timezone, DST and language are kept between sessions
- MANUAL UPDATE - the app updates only when you press the button at the bottom
  of the page; a banner then shows what's new in that version
- 4 LANGUAGES - Italiano, English, Espanol, Russkij
- AUTOMATIC DARK MODE

  App under continuous development: some features are still being verified.

HOW TO USE IT
------------------------------------------------------------
Three ways, all giving the same results. Pick the one that suits how you work
in the field.

1) IN THE BROWSER
   Open https://astrozullo.github.io/Z-Astro-Calculator
   After the first visit with a connection it works offline too, thanks to the
   service worker. From then on the app is always served from the local cache:
   to get a newer version, press "Update to the latest version" at the bottom
   of the page.

2) INSTALLED AS AN APP (Android, Chrome, Edge)
   1. Open https://astrozullo.github.io/Z-Astro-Calculator in Chrome
   2. Tap the three-dot menu, top right
   3. Tap "Install app" (or "Add to Home screen")
   4. Confirm: the icon appears among your apps
   From there it opens full screen and runs with no connection.
   On iPhone and iPad: Share button -> Add to Home Screen.

3) AS A SINGLE DOWNLOADED FILE
   1. Download Z-Astro-Calculator.html from the Releases section
      https://github.com/astrozullo/Z-Astro-Calculator/releases
   2. Open it with any browser, by double-clicking or tapping it
   One file, no folders, no installation. This is the most robust option at the
   telescope: it works even while connected to the mount's own WiFi, with no
   internet at all.

PRIVACY AND REQUIREMENTS
------------------------------------------------------------
- NO DATA COLLECTED - no analytics, no cookies, no tracking
- ZERO EXTERNAL RESOURCES - no font, script or image loaded from third-party
  servers
- WORKS OFFLINE - no internet connection required
- CROSS-PLATFORM - Chrome, Firefox, Safari, Edge on Windows, macOS, Linux,
  Android, iOS
- OPEN SOURCE - code is readable directly in the browser (Ctrl+U)

GitHub Pages version: on first access GitHub receives the visitor's IP address,
as with any website. A service worker caches files locally for offline use; from
then on the app is always served from that cache and opening it contacts no
server. Setup and language preference are saved in localStorage on the device.
No data is transmitted to the author.

"Update to the latest version" button: updates happen only when you press the
button at the bottom of the page; at that moment the files are re-downloaded
from GitHub Pages. The app makes no other network requests and sends nothing
automatically.

Full text:
https://astrozullo.github.io/Z-Astro-Calculator/privacy.html

VERSIONS
------------------------------------------------------------
The changelog for each version lives on the Releases page:
https://github.com/astrozullo/Z-Astro-Calculator/releases

LICENSE
------------------------------------------------------------
Released under the MIT License - Copyright (c) 2026 Andrea Zullo
https://github.com/astrozullo/Z-Astro-Calculator/blob/main/LICENSE

============================================================

AUTORE / AUTHOR
============================================================
Andrea Zullo - Astronomia Spiccia
https://www.instagram.com/astronomiaspiccia/
ORCID: 0009-0006-6178-7654  (https://orcid.org/0009-0006-6178-7654)
zullo.spacehistory@gmail.com

Contributors: Davide Lavarini, Mattia Cipriani

============================================================

FORMULE / FORMULAS
============================================================
pixel scale = 206.265 x pixel(um) / focal(mm)
Dawes       = 116 / D
Rayleigh    = 1.22 x lambda / D
Nyquist     = seeing/4 - seeing/2

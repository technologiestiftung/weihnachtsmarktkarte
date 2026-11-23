# Datenaufbereitung Weihnachtsmarkt-Finder

Die Märkte stammen aus dem Meldeformular der Senatsverwaltung:
<https://www.berlin.de/sen/web/service/maerkte-feste/formular.230156.php>

Das Notebook lädt diese Daten über die API, bereitet sie für die Karte auf und
vergleicht sie mit der Datei, die gerade live ist. Live gestellt wird immer von Hand.

## Ordner

```
data_processing/
  markets_dataProcessing.ipynb   API laden → Report, Update-Datei, todo.csv
  UMBW.csv                       Bahnhöfe (VBB), für die Spalten train / short_distance
  reports/                       Vergleichsreports (vergleich_report_TTMMJJ/)
  archive/2025/                  finale Daten und Arbeitsstände der Saison 2025
  archive/2024_und_aelter/       ältere Daten und Skripte
public/
  markets_<SAISON>.csv           die Datei, die die Karte anzeigt
```

`todo.csv` ist eine Arbeitsdatei und nicht im Repository.

## Umgebung

Das Notebook braucht pandas und geopandas. Als Kernel die Conda-Umgebung **`geo`**
wählen (in VS Code oben rechts: *Select Another Kernel → Python Environments → geo*).

## Einstellungen

Ganz oben im Notebook, Zelle „Einstellungen“:

- `SAISON` – z. B. `2026`
- daraus abgeleitet:
  - `PREV_FILE` = `archive/<SAISON-1>/markets_<SAISON-1>_final.csv` (Vorjahr, für Bilder,
    Filter und englische Texte)
  - `LIVE_FILE` = `../public/markets_<SAISON>.csv` (aktuelle Live-Datei)

Die Zelle zeigt an, ob beide Dateien vorhanden sind.

## Ablauf (erster Durchlauf und jedes Update)

1. **`markets_dataProcessing.ipynb`** komplett ausführen (*Restart & Run All*).
   Das Notebook
   - lädt alle Märkte aus der API,
   - wandelt Datum, Wochentage und Öffnungszeiten um,
   - erkennt `barrierefrei` und `immer-kostenlos` über Stichwörter,
   - sucht Bahnhöfe im Umkreis von 400 m,
   - übernimmt aus der Vorjahresdatei Bild, `shortname`, `international`, `action`
     und `bemerkungen_en`, wenn id **und** Name gleich sind,
   - vergleicht das Ergebnis mit der Live-Datei und schreibt
     - den Report `reports/vergleich_report_TTMMJJ/`:
       `added_rows.csv` (neue Märkte), `removed_rows.csv` (nicht mehr in der API),
       `modified_cells.csv` (geänderte Felder; `herkunft` „API“ = Veranstalter hat etwas
       geändert, „manuell“ = meist eine eigene Handkorrektur),
     - die **Update-Datei `markets_<SAISON>_update_TTMMJJ.csv`**: die Live-Datei
       unverändert (inkl. Handkorrekturen und entfernter Märkte) plus die neuen Märkte,
     - `todo.csv` (siehe unten).

   Gibt es noch keine Live-Datei (Saisonstart), gelten alle Märkte als neu und die
   Update-Datei enthält alle Märkte.
2. **`todo.csv`** in Excel öffnen und abarbeiten. Die Korrekturen in der
   **Update-Datei** eintragen (nicht in Excel bearbeiten, sondern z. B. in VS Code):
   - `neu`: Markt komplett prüfen,
   - `geändert`: die Felder in `geaenderte_felder` mit dem Report vergleichen und bei
     Bedarf übernehmen,
   - `entfernt`: bei Bedarf `ignore = 1` setzen.
3. **Live stellen:** die geprüfte Update-Datei von Hand nach `public/markets_<SAISON>.csv`
   kopieren (vorhandene Datei ersetzen).

**Wichtig:** Die Update-Datei wird bei jedem Durchlauf neu aus der Live-Datei erzeugt.
Korrekturen, die nur in einer Update-Datei stehen und nicht live gestellt wurden,
sind beim nächsten Durchlauf nicht mehr drin.

## To-do-Liste

`todo.csv` prüft die Update-Datei, also das, was live gehen würde. Sortiert nach
`status`: neu → geändert → entfernt → unverändert. Pro Prüfgrund eine Spalte mit „x“:

| Spalte | Bedeutung |
|---|---|
| `datum_pruefen` | `von`/`bis` nicht im Format TT.MM.JJ |
| `oeffnungszeit_fehlt` | mindestens ein Wochentag ohne Zeit |
| `oeffnungszeiten_mehrzeilig` | Text auf mehreren Zeilen: Zeiten je Wochentag, `closed-exc`, `hours-exc` prüfen (das Skript nimmt nur die erste Zeitangabe) |
| `eintritt_erwaehnt` | „Eintritt“ im Text, aber nicht als kostenlos erkannt |
| `barrierefrei_nur_wc` | barrierefrei nur wegen barrierefreier WCs/Toiletten |
| `barrierefrei_verneint` | z. B. „nicht vollständig barrierefrei“ (auf 0 gesetzt) |
| `neu_oder_umbenannt` | nicht im Vorjahr (oder anderer Name): `international`/`action` setzen |
| `ort_fehlt` / `website_fehlt` | nur PLZ ohne Ort / keine Website |
| `kein_bild` / `kein_englischer_text` | Platzhalterbild / kein englischer Text (weniger wichtig) |

## Von Hand gepflegt

Format der Spalten: siehe [public/README.md](../public/README.md).
Für „keine Ausnahme“ steht in `closed-exc` und `hours-exc` immer `0`, nicht ein leeres Feld.
Bilder liegen in `public/images/`, in `image` steht nur der Dateiname.

## Neue Saison vorbereiten

1. Live-Datei der alten Saison nach `archive/<Jahr>/markets_<Jahr>_final.csv` verschieben.
2. Im Notebook `SAISON` erhöhen.
3. `src/lib/loadMapData.js`: Pfad auf `public/markets_<SAISON>.csv` setzen.
4. Solange noch keine Daten da sind: `underConstruction` in `pages/index.tsx`
   auf `true` setzen und die Texte in `src/lib/getText.tsx` (`infoConstruction`)
   anpassen. Bis zum Start zeigt die Karte die finale Datei des Vorjahrs
   (als `public/markets_<SAISON>.csv` kopieren).
5. Prüfen, ob die API schon Daten der neuen Saison liefert
   (Jahreszahlen in `von`), bevor das Notebook ausgeführt wird.
6. Beim ersten echten Durchlauf darf noch **keine** Live-Datei mit Vorjahresdaten
   unter `public/markets_<SAISON>.csv` liegen – sonst würden bei wiederkehrenden IDs
   die alten Daten behalten. Die Datei also vorher löschen bzw. umbenennen.

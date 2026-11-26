# Data Processing

This folder contains the data pipeline for the Berliner Weihnachtsmarktkarte. It turns the official list of Berlin Christmas markets into the CSV file displayed by the map and helps maintainers review changes before they go live.

## Context

Most markets are registered by their organisers through a [reporting form](https://www.berlin.de/sen/web/service/maerkte-feste/formular.230156.php) of the Senatsverwaltung für Wirtschaft, Energie und Betriebe (Senate Department for Economics, Energy and Public Enterprises). The registered markets are published on berlin.de and are available as GeoJSON:

```
https://www.berlin.de/sen/web/service/maerkte-feste/weihnachtsmaerkte/index.php/index/all.geojson?q=
```

Not every market is registered there. Additional markets are researched by the maintainers, e.g. on the [Hauptstadtportal](https://www.berlin.de/weihnachtsmarkt/#halle), and **added to the CSV file manually** (see [Adding markets manually](#adding-markets-manually)).

The notebook fetches the API data, prepares it for the map and compares it with the file that is currently live. **Publishing is always a manual step**, so no data reaches the map without being reviewed.

## Project structure

```
data_processing/
├── markets_dataProcessing.ipynb   # main notebook: fetch → report, update file, todo.csv
├── UMBW.csv                       # VBB station data for the train / short_distance columns
├── reports/                       # comparison reports (vergleich_report_DDMMYY/)
└── archive/
    ├── 2025/                      # final data and intermediate versions of the 2025 season
    └── 2024_und_aelter/           # older data and scripts

public/
└── markets_<SEASON>.csv           # the file displayed by the map
```

`todo.csv` is a working file and is not tracked in the repository.

## Getting started

### Requirements

The notebook requires Python with [pandas](https://pandas.pydata.org/), [GeoPandas](https://geopandas.org/), [Shapely](https://shapely.readthedocs.io/) and [requests](https://requests.readthedocs.io/).

We use a Conda environment called `geo` that contains all of these. In VS Code, select it via *Select Another Kernel → Python Environments → geo*.

### Configuration

All settings are in the cell *Einstellungen* at the top of the notebook:

| Variable | Description |
| --- | --- |
| `SAISON` | Current season, e.g. `2026` |
| `PREV_FILE` | Derived: `archive/<SAISON-1>/markets_<SAISON-1>_final.csv`. Final file of the previous season, used to carry over images, filters and English texts |
| `LIVE_FILE` | Derived: `../public/markets_<SAISON>.csv`. The file currently displayed by the map |

The cell reports whether both files exist.

## Workflow

The same workflow applies to the first run of a season and to every update.

### 1. Run the notebook

Run `markets_dataProcessing.ipynb` from top to bottom (*Restart & Run All*). The notebook:

- fetches all markets from the berlin.de API,
- converts dates, weekdays and opening hours into the format the map expects,
- detects `barrierefrei` (accessible) and `immer-kostenlos` (always free) via keywords,
- finds train stations within a 400 m radius (`short_distance`, `train`),
- carries over `image`, `shortname`, `international`, `action` and `bemerkungen_en` from the previous season if **both** id and name match,
- compares the result with the live file and writes three outputs:

| Output | Content |
| --- | --- |
| `reports/vergleich_report_DDMMYY/` | `added_rows.csv` (new markets), `removed_rows.csv` (no longer in the API), `modified_cells.csv` (changed fields; `herkunft` = `API` means the organiser changed something, `manuell` usually means a manual correction of ours) |
| `markets_<SEASON>_update_DDMMYY.csv` | The live file unchanged (including manual corrections and removed markets) plus all new markets |
| `todo.csv` | Checklist of markets to review manually (see [Review checklist](#review-checklist)) |

If no live file exists yet (start of the season), all markets are treated as new and the update file contains all of them.

### 2. Review the changes

Work through `todo.csv` and enter corrections in the **update file**, either in a text editor such as VS Code or in Excel:

- `neu` (new): check the market completely,
- `geändert` (changed): compare the fields listed in `geaenderte_felder` with the report and adopt them if necessary,
- `entfernt` (removed): set `ignore = 1` if the market should no longer be shown.

This is also the moment to add markets from other sources (see [Adding markets manually](#adding-markets-manually)).

### 3. Restore the map format (only after editing in Excel)

If you edited the update file in Excel, restore the format the map expects before publishing. See [Editing in Excel](#editing-in-excel).

### 4. Publish

Copy the reviewed update file to `public/markets_<SEASON>.csv`, replacing the existing file.

> [!IMPORTANT]
> The update file is regenerated from the live file on every run. Corrections made in an update file that was never published will be lost on the next run.

## Adding markets manually

Markets that are not part of the API are researched by the maintainers and added as new rows to the **update file**. Because the update file is always generated from the live file, manually added markets are kept in all following runs.

When adding a market:

- **`id`:** use the next free number of **200 or higher**. IDs below 200 are reserved for markets from the API.
- **`datenquelle`:** `Berlin Open Data` marks markets from the API. For manually added markets, note where the information comes from, e.g. `hauptstadtportal` or `Eigenrecherche` (own research).
- **`lat` / `lng`:** add coordinates manually, e.g. from OpenStreetMap.
- Fill in all other columns in the format described in [Data format](#data-format), including the columns the notebook usually calculates (`train`, `short_distance`, `barrierefrei`, `immer-kostenlos`).

Manually added markets are not updated automatically. If their details change, update them by hand.

## Editing in Excel

Excel saves CSV files with `;` as delimiter, a byte order mark (BOM) and partly with four-digit years. To make the file readable for the map, run the following command from the repository root **before publishing**. Replace the file name at the end with your update file:

```bash
conda run -n geo python -c "
import pandas as pd, sys
f = sys.argv[1]
d = pd.read_csv(f, sep=None, engine='python', dtype=str, keep_default_na=False, encoding='utf-8-sig')
d = d.apply(lambda s: s.str.strip())
for c in ['von', 'bis', 'closed-exc', 'hours-exc']:
    d[c] = d[c].str.replace(r'(\d{1,2}\.\d{1,2}\.)20(\d\d)\b', r'\1\2', regex=True)
for c in ['closed-exc', 'hours-exc']:
    d.loc[d[c] == '', c] = '0'
for c in ['lat', 'lng']:
    d[c] = d[c].str.replace(',', '.')
d.to_csv(f, index=False, sep=',')
print('ok:', len(d), 'markets')
" data_processing/markets_2026_update_DDMMYY.csv
```

The command:

- trims whitespace,
- shortens years (`24.12.2026` → `24.12.26`),
- sets empty `closed-exc` / `hours-exc` to `0`,
- converts decimal commas in coordinates to points,
- saves with `,` as delimiter and without BOM.

When working in Excel:

- Save as **"CSV UTF-8 (Comma delimited)"**, otherwise umlauts will break.
- Excel may corrupt values in ways the command cannot repair:
  - coordinates turned into dates (`13.4` → "13. Apr"),
  - decimal points read as thousands separators (`52.5183` → `525.183`),
  - `0` turned into a date (`00.01.00`).

  Check `lat`, `lng` and `closed-exc` in a text editor after saving.

## Review checklist

`todo.csv` checks the update file, i.e. exactly what would go live. Rows are sorted by `status` (`neu` → `geändert` → `entfernt` → `unverändert`). Each check has its own column, marked with `x`:

| Column | Meaning |
| --- | --- |
| `datum_pruefen` | `von` / `bis` is not in the format `DD.MM.YY` |
| `oeffnungszeit_fehlt` | At least one weekday has no opening hours |
| `oeffnungszeiten_mehrzeilig` | Opening hours span several lines. Check the weekday columns, `closed-exc` and `hours-exc`, as the script only uses the first time it finds |
| `eintritt_erwaehnt` | "Eintritt" (admission) is mentioned, but the market was not detected as free |
| `barrierefrei_nur_wc` | Marked as accessible only because of accessible toilets |
| `barrierefrei_verneint` | Accessibility is negated, e.g. "nicht vollständig barrierefrei" (set to `0`) |
| `neu_oder_umbenannt` | Not in the previous season (or renamed): set `international` / `action` |
| `ort_fehlt` / `website_fehlt` | Postcode without city / no website |
| `kein_bild` / `kein_englischer_text` | Placeholder image / no English text (lower priority) |

## Data format

The columns of the live file are documented in [public/README.md](../public/README.md). In addition:

- Weekday columns (`Mo` … `So`) contain either `0` (closed) or a time range such as `14:00 - 21:00`. If only a start time is known (e.g. `16:00`), the market is not shown by the "open late" filter.
- `closed-exc` and `hours-exc` contain `0` if there are no exceptions. They must never be empty.
- Images are stored in `public/images/`. The `image` column only contains the file name.

## Preparing a new season

1. Move the live file of the previous season to `archive/<YEAR>/markets_<YEAR>_final.csv`.
2. Increase `SAISON` in the notebook.
3. Update the path in `src/lib/loadMapData.js` to `public/markets_<SEASON>.csv`.
4. As long as no data is available, set `underConstruction` in `pages/index.tsx` to `true` and adjust the texts in `src/lib/getText.tsx` (`infoConstruction`). Until the season starts, the map shows the final file of the previous year (copied to `public/markets_<SEASON>.csv`).
5. Before running the notebook, check that the API already returns data for the new season (year in `von`).
6. Before the first real run, make sure **no** live file with last year's data is located at `public/markets_<SEASON>.csv`. Otherwise, the old data would be kept for recurring IDs. Delete or rename the file beforehand.

## Data sources and licence

| Data | Source | Licence |
| --- | --- | --- |
| Christmas markets (API) | [berlin.de](https://www.berlin.de/sen/web/service/maerkte-feste/weihnachtsmaerkte/), Senatsverwaltung für Wirtschaft, Energie und Betriebe | CC BY |
| Christmas markets (manual) | [Hauptstadtportal berlin.de](https://www.berlin.de/weihnachtsmarkt/#halle) and own research | – |
| Train stations | `UMBW.csv`, Verkehrsverbund Berlin-Brandenburg (VBB) | see [VBB open data](https://daten.berlin.de/datensaetze/https-vbb-live-exozet-com-media-download-2035) |

If you reuse the processed data, please credit the Senatsverwaltung für Wirtschaft, Energie und Betriebe as the source of the original data.

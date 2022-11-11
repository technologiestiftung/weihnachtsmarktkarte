![](https://img.shields.io/badge/Built%20with%20%E2%9D%A4%EF%B8%8F-at%20Technologiestiftung%20Berlin-blue)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-9-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

# <I>Berliner Weihnachtsmarktkarte<I>

The <I>Berliner Weihnachtsmarktkarte<I> (Berlin Christmas market map) is an interactive web map of Berlin showing all christmas markets based on an open data set with further informations about opening dayy and times, special attractions or entry fees. This map will show the potential of maybe unexpected open data with some funny gadgets like the snowflake function. We wish you a charming exploration of the berlin christmas markets and merry christmas.

<!--

How to:

- You dont need to use every section. Only the ones that apply to your project.
- Adjust the files on .github/ISSUE_TEMPLATE/* how you need them
- Adjust the file on .github/CODEOWNERS to match your team
- If you use staging and main branches use this template for .github/renovate.json


```json
{
   "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": [
    "@inpyjamas"
  ],
    "baseBranches": [
    "staging"
  ]
}
```

Bonus:

Use all-contributors

npx all-contributors-cli check
npx all-contributors-cli add ff6347 doc

You can use it on GitHub just by commeting on PRs and issues:

```
@all-contributors please add @ff6347 for infrastructure, tests and code
```
Read more here https://allcontributors.org/


Get fancy shields at https://shields.io
 -->

## Context
   
Year after year the Senatsverwaltung für Wirtschaft, Energie und Betriebe (Senate Department for Economy, Energy and businesses) publishs an open dataset about christmas markets. This year the Open Data Informationsstelle Berlin (ODIS) looked a bit deeper into the data and decides to develop an interactive map with this interesting data. It does exist an overview about christmas markets on the official website of berlin called Das offizielle Hauptstadtporal, though the informations are only discoverable under individual articles. One key function of the map is to filter for specific searches. Which christmas markets are open on my desired date? Which are completly free? And can you show me only international christmas markets on the map? This map gives an answer to all these and allows you to plan the visit ahead. Additionally you can see public transport stations and public toilets nearby. With one click via the share function, you can share your favorite christmas market with others.

This application is completely based on open data. Open data is now an important part of Berlin's administrative activities and not only creates transparency and openness, but also enables analysis and applications like this to explore the city and come together for pre-christmas time. 
You can find more open data at the Berlin Open Data Portal.

## Tech stack
   
This website is a NextJS app configured with:

Typescript
Linting with ESLint
Formatting with Prettier
Linting, typechecking and formatting on by default using husky for commit hooks
Testing with Jest and react-testing-library
   
## Data
This repository contains the original data for the Erfrischungskarte, as well as the code used to estimate hourly values for cold wind volume and temperature.

The Wind_Temperature folder contains the raw (values for specific hours) and clean data (quantiles for all hours from 9:00 to 21:00), in a Geojson format, for wind and temperature. The folder also encompasses a R code (Kaltluftvolum_Lufttemperatur.R) used to compute the estimates and quantiles for all hours.

The POI's folder contains the raw point data (pools, green areas, picnic tables, etc.) as well as a Geojson file containing all data points (erfrischungskarte_poi.geojson).

Original data sources

The information on temperature and cold air is based on processed climate model data from the Berlin Senatsverwaltung für Stadtentwicklung und Wohnen. For both topics, data is available for different times of the day. These data were interpolated to obtain data for each hour of the day. The shadows were calculated from a digital terrain model. The map is supplemented by points of interests, i.e. places that could be interesting in connection with the data. These come from various sources: The coordinates of the green spaces were created from a data set on the public green space inventory. This is maintained by the district street and green space offices and made available on the Berlin geodata portal. The locations of the fountains can also be found in the geodata portal and are part of the extensive ATKIS dataset, which is regularly updated by the district surveying offices. The locations of bathing places come from the State Office for Health and Social Affairs (LaGeSo). The information on outdoor swimming pools and indoor swimming pools is currently only available as a list via Berlin.de. They were transferred into a geodata set by means of webscraping. Benches, picnic tables and drinking fountains were exported from Open Street Map, a freely accessible collection of geodata.
   
## Prerequisites

## Installation

## Usage or Deployment

## Development

## Tests

## Contributing

Before you create a pull request, write an issue so we can discuss your changes.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://fabianmoronzirfas.me/"><img src="https://avatars.githubusercontent.com/u/315106?v=4?s=64" width="64px;" alt="Fabian Morón Zirfas"/><br /><sub><b>Fabian Morón Zirfas</b></sub></a><br /><a href="https://github.com/technologiestiftung/weihnachtsmarktkarte/commits?author=ff6347" title="Documentation">📖</a></td>
      <td align="center"><a href="http://vogelino.com"><img src="https://avatars.githubusercontent.com/u/2759340?v=4?s=64" width="64px;" alt="Lucas Vogel"/><br /><sub><b>Lucas Vogel</b></sub></a><br /><a href="https://github.com/technologiestiftung/weihnachtsmarktkarte/commits?author=vogelino" title="Documentation">📖</a></td>
      <td align="center"><a href="http://www.awsm.de"><img src="https://avatars.githubusercontent.com/u/434355?v=4?s=64" width="64px;" alt="Ingo Hinterding"/><br /><sub><b>Ingo Hinterding</b></sub></a><br /><a href="https://github.com/technologiestiftung/weihnachtsmarktkarte/commits?author=Esshahn" title="Documentation">📖</a></td>
      <td align="center"><a href="https://github.com/m-b-e"><img src="https://avatars.githubusercontent.com/u/36029603?v=4?s=64" width="64px;" alt="Max B. Eckert"/><br /><sub><b>Max B. Eckert</b></sub></a><br /><a href="#data-m-b-e" title="Data">🔣</a></td>
      <td align="center"><a href="https://github.com/Lisa-Stubert"><img src="https://avatars.githubusercontent.com/u/61182572?v=4?s=64" width="64px;" alt="Lisa-Stubert"/><br /><sub><b>Lisa-Stubert</b></sub></a><br /><a href="https://github.com/technologiestiftung/weihnachtsmarktkarte/commits?author=Lisa-Stubert" title="Code">💻</a> <a href="https://github.com/technologiestiftung/weihnachtsmarktkarte/commits?author=Lisa-Stubert" title="Documentation">📖</a></td>
      <td align="center"><a href="https://hanshack.com/"><img src="https://avatars.githubusercontent.com/u/8025164?v=4?s=64" width="64px;" alt="Hans Hack"/><br /><sub><b>Hans Hack</b></sub></a><br /><a href="https://github.com/technologiestiftung/weihnachtsmarktkarte/commits?author=hanshack" title="Code">💻</a> <a href="https://github.com/technologiestiftung/weihnachtsmarktkarte/commits?author=hanshack" title="Documentation">📖</a></td>
      <td align="center"><a href="https://fhp.incom.org/profile/9200/projects"><img src="https://avatars.githubusercontent.com/u/46717848?v=4?s=64" width="64px;" alt="anna"/><br /><sub><b>anna</b></sub></a><br /><a href="#design-annameide" title="Design">🎨</a> <a href="#ideas-annameide" title="Ideas, Planning, & Feedback">🤔</a></td>
    </tr>
    <tr>
      <td align="center"><a href="https://github.com/ester-t-s"><img src="https://avatars.githubusercontent.com/u/91192024?v=4?s=64" width="64px;" alt="Ester"/><br /><sub><b>Ester</b></sub></a><br /><a href="#data-ester-t-s" title="Data">🔣</a></td>
      <td align="center"><a href="https://github.com/KlemensM"><img src="https://avatars.githubusercontent.com/u/98896505?v=4?s=64" width="64px;" alt="KlemensM"/><br /><sub><b>KlemensM</b></sub></a><br /><a href="#ideas-KlemensM" title="Ideas, Planning, & Feedback">🤔</a> <a href="#data-KlemensM" title="Data">🔣</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Content Licencing

## Credits

<table>
  <tr>
    <td>
      Made by <a href="https://citylab-berlin.org/de/start/">
        <br />
        <br />
        <img width="200" src="https://citylab-berlin.org/wp-content/uploads/2021/05/citylab-logo.svg" />
      </a>
    </td>
    <td>
      A project by <a href="https://www.technologiestiftung-berlin.de/">
        <br />
        <br />
        <img width="150" src="https://citylab-berlin.org/wp-content/uploads/2021/05/tsb.svg" />
      </a>
    </td>
    <td>
      Supported by <a href="https://www.berlin.de/rbmskzl/">
        <br />
        <br />
        <img width="80" src="https://citylab-berlin.org/wp-content/uploads/2021/12/B_RBmin_Skzl_Logo_DE_V_PT_RGB-300x200.png" />
      </a>
    </td>
  </tr>
</table>

## Related Projects

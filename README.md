![](https://img.shields.io/badge/Built%20with%20%E2%9D%A4%EF%B8%8F-at%20Technologiestiftung%20Berlin-blue)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-9-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

# Berliner Weihnachtsmarktkarte

The Berliner Weihnachtsmarktkarte (Berlin Christmas market map) is an interactive web map of Berlin showing all christmas markets 2022 based on an open dataset. You can filter the markets by date and opening hours and also by marktes with no entry fee or with a special focus like international or design marktes. Additional the map points locations of public toilets and benches. As a further example this map makes the meaning of open data clear by exploring the city in a new way. We wish you a charming exploration of the berlin christmas markets and merry christmas.



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
   
Year after year the Senatsverwaltung für Wirtschaft, Energie und Betriebe (Senate Department for Economy, Energy and businesses) publishs an open dataset about christmas markets. This year the Open Data Informationsstelle Berlin (ODIS) looked a bit deeper into the data and built an interactive map allowing the visitors to explore berlin christmas markets in anew way. It does exist an overview about christmas markets on the official website of berlin called Das offizielle Hauptstadtporal, though these informations are only discoverable under individual articles. One key function of the map is to filter by individual interests: Which christmas markets are open on my desired date? Which are completly free? And can you show me only international christmas markets on the map? This map gives an answer to all these questions and allows you to plan the visit ahead. Additionally you can see public transport stations, public toilets and benches nearby. With one click via the share function, you can share your favorite christmas market with others.

This application is almost completely based on open data. Open data is now an important part of Berlin's administrative activities and not only creates transparency and openness, but also enables analysis and applications like this to explore the city and come together for pre-christmas time. 
You can find more open data at the Berlin Open Data Portal.



## Tech stack
   
   
## Data
This repository contains the original data for the berliner weihnachtsmarktkarte.

Original data sources

The informations on the christmas marktes is based on an open dataset at the berlin open data portal, which is annually updated by the Senatsverwaltung für Wirtschaft, Energie und Betriebe. The information on design cristmas markets is currently only available as a list via Berlin.de. They were transferred into a geodata set by means of webscraping. The locations of the public toilets can also be found in the berlin open data portal, which is regularly updated by the Senatsverwaltung für Umwelt, Mobilität, Verbraucher- und Klimaschutz. The locations of public transports are inculede in the map basis called basemap.The benches were exported from Open Street Map, a freely accessible collection of geodata.
   
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
      <a href="https://odis-berlin.de">
        <br />
        <br />
        <img width="200" src="https://logos.citylab-berlin.org/logo-odis-berlin.svg" />
      </a>
    </td>
    <td>
      Together with: <a href="https://citylab-berlin.org/en/start/">
        <br />
        <br />
        <img width="200" src="https://logos.citylab-berlin.org/logo-citylab-berlin.svg" />
      </a>
    </td>
    <td>
      A project by: <a href="https://www.technologiestiftung-berlin.de/en/">
        <br />
        <br />
        <img width="150" src="https://logos.citylab-berlin.org/logo-technologiestiftung-berlin-en.svg" />
      </a>
    </td>
    <td>
      Supported by: <a href="https://www.berlin.de/rbmskzl/en/">
        <br />
        <br />
        <img width="80" src="https://logos.citylab-berlin.org/logo-berlin-senweb-de.svg"/>
      </a>
    </td>
  </tr>
</table>

## Related Projects

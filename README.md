![](https://img.shields.io/badge/Built%20with%20%E2%9D%A4%EF%B8%8F-at%20Technologiestiftung%20Berlin-blue)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-9-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

# Berliner Weihnachtsmarktkarte
**This application is a prototype. It may contain errors and small bugs. If you notice something you can report an Issue. Thank you!**

The Berliner Weihnachtsmarktkarte (Berlin Christmas market map) is an interactive web map of Berlin showing all christmas markets 2023 based on an open dataset. You can filter the markets by date and opening hours and also by marktes with no entry fee or with a special focus like international or design marktes. As a further example this map makes the meaning of open data clear by exploring the city in a new way. We wish you a charming exploration of the berlin christmas markets and merry christmas.

![Map](/public/socialimage.jpg)

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
   
Year after year the Senatsverwaltung für Wirtschaft, Energie und Betriebe (Economics, Energy and Public Enterprises) publishs an open dataset about [christmas markets](https://daten.berlin.de/datensaetze/berliner-weihnachtsm%C3%A4rkte). This year the [Open Data Informationsstelle Berlin (ODIS)](https://odis-berlin.de) looked a bit deeper into the data and built an interactive map allowing the visitors to explore berlin christmas markets in a new way. It does exist an overview about christmas markets on the official website of berlin called Das offizielle Hauptstadtporal, though these informations are only discoverable under individual articles. One key function of the map is to filter by individual interests: Which christmas markets are open on my desired date? Which are completly free? And can you show me only international christmas markets on the map? This map gives an answer to all these questions and allows you to plan the visit ahead. Additionally you can see public transport stations and public toilets nearby on the map. With one click via the share function, you can share your favorite christmas market with others.

This application is almost completely based on open data. Open data is now an important part of Berlin's administrative activities and not only creates transparency and openness, but also enables analysis and applications like this to explore the city and come together for pre-christmas time. 
You can find more open data at the [Berlin Open Data Portal](https://daten.berlin.de).

   
## Data
This repository contains the original data for the Berliner Weihnachtsmarktkarte.

Original data sources

The informations on the [christmas marktes is based on an open dataset](https://daten.berlin.de/datensaetze/berliner-weihnachtsmärkte) at the berlin open data portal, which is annually updated by the Senatsverwaltung für Wirtschaft, Energie und Betriebe. The information on design cristmas markets is currently only available as a list via Berlin.de. They were transferred into a geodata set by means of webscraping. The locations of the public toilets can also be found in the berlin open data portal, which is regularly updated by the Senatsverwaltung für Umwelt, Mobilität, Verbraucher- und Klimaschutz.
   
## Tech stack

This website is a NextJS app configured with:

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)

## Project structure

Basic Next.js app

## Getting started

### Requirements

#### Node.js

This project is a Next.js app which requires you to have [Node.js](https://nodejs.org/en/) installed.


### Installation

Clone the repository to your local machine:

```bash
git clone git@github.com:berlin/weihnachtsmarktkarte.git
```

Move into the repository folder:

```bash
cd weihnachtsmarktkarte
```

Make sure you use the Node.js version specified in `.nvmrc`. Find out which Node version you're currently on with:

```bash
node --version
```

If this version differs from the one specified in `.nvmrc`, please install the required version, either manually, or using a tool such as [nvm](https://github.com/nvm-sh/nvm), which allows switching to the correct version via:

```bash
nvm use
```

With the correct Node version, install the dependencies:

```bash
npm install
```

Because the map uses a basemap from maptiler (https://www.maptiler.com/), you will need to provide connection details in your environment. In this repository you can find a file `.env.example`. Duplicate this file and name it `.env`. 

In `.env` you must enter the connection details to the Maptiler style file as suggested in `.env.example`.  If you do not know how to obtain the necessary details, please ask a repository maintainer for access. You can also use other basemaps by providing your own style file.  

You are now ready to start a local development server on http://localhost:3000 via:

```bash
npm run dev
```

## Input Data 

The required input data is documented [here](./public/README.md).

## Workflow

New features, fixes, etc. should always be developed on a separate branch:

- In your local repository, checkout the `main` branch.
- Run `git checkout -b <name-of-your-branch>` to create a new branch (ideally following [Conventional Commits guidelines](https://www.conventionalcommits.org)).
- Make your changes
- Push your changes to the remote: `git push -u origin HEAD`
- Open a pull request.

You can commit using the `npm run cm` command to ensure your commits follow our conventions.

## Deployment

The app is deployed to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Map

The basemap style was created with maptiler (https://www.maptiler.com/). The dark map style that is used in the application is located in our repo under: 
./resources/mapstyle.json. If you would like to use this particular style feel free to copy it. Please note, that you would need to update the MAPKEY with your own project's mapkey.   

## Page analytics

We use [Matomo](https://matomo.org/) for website analytics. Matomo is respectful of the users' privacy, the page visits are tracked anonymously.

In the production environment, a `NEXT_PUBLIC_MATOMO_URL` and `NEXT_PUBLIC_MATOMO_SITE_ID` is configured for this purpose.

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

The Christmas market data used is under CC-BY license. We have processed and enriched the data for this application. If you use this dataset processed by us, you must indicate that the original raw data came from the Senatsverwaltung für Wirtschaft, Energie und Betriebe (Senate Department for Economics, Energy and Public Enterprises).

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
       Supported by: <a href="https://www.berlin.de/senatskanzlei/">
        <br />
        <br />
        <img width="80" src="https://logos.citylab-berlin.org/logo-berlin-senatskanzelei-en.svg"/>
      </a>
    </td>
  </tr>
</table>

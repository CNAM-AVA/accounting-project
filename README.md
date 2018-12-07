## Objectif
- Plan comptable général / recherche
- Ammortissement des immobilisations

# accounting-project
Accounting project - CNAM

## Installation & run

Install npm dependencies
```
npm install
```
Run local development server (localhost:3000)
```
npm run dev
```

## Architecture

The following architecture is a good approach to build a Next.JS app. Are listed the different project's folders and how they should be used.

- ### pages/

Group all the different pages of the application (eg: about, home, ...).

- ### static/

Group the resources of the project, wheter they are styles, images, etc.

- ### components/

Group the components of the project. A React component can be imported several times inside the **pages** and can take various form (eg: navbar, specific button, specific input, ...).

- ### layouts/

Group the layouts of the project. Layout are often represented as header, footer, etc.

## Configuration

Coming soon:
 - server.js
 - custom package.json
 - next.config.js
 - "build" folder for deployments

## Commit guidelines

 Each commit should be written according to the following template:
 ```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
 ```

Where the body provides a more detailed description of the commit.
The footer part should point to issues which this commit closes.

Below are the possible types and scopes:
### Type

- <b>build</b>: Changes that affect the build system
- <b>docs</b>: Documentation
- <b>trad</b>: Translations
- <b>fix</b>: Bug fixes
- <b>style</b>: Style related changes
- <b>feat</b>: New feature implementation
- <b>refactor</b>: Code refactor

### Scope - optional

- <b>animation</b>
- <b>forms</b>
- <b>routes</b>
- <b>core</b>
- <b>upgrade</b>
- <b>packaging</b> npm packages, etc.

# Projet React avec Brunch ?

## NPM

1. `npm init` ou `yarn init` (option `-y` pour valider toutes les options d'un coup) initialiser le projet
2. Ajouter des dépendances `yarn add ....` (option `--dev` pour une dép de dev) ou `npm install ....` (option `--save` pour une dép de projet ou `--save-dev` pour un dép de dev)

## Modules à installer

### Développement

#### Brunch

> bundler : compiler le code, rassembler le code, optimiser le code, ... Construire le projet

- brunch
- auto-reload-brunch
- stylus-brunch
- postcss-brunch@0.5.0
- autoprefixer

```
yarn add --dev brunch auto-reload-brunch postcss-brunch@0.5.0 autoprefixer stylus-brunch
```

#### Babel

> Transpileur : interpréter et de convertir notre code en version compatible avec les navigateurs

- babel-brunch(https://github.com/babel/babel-brunch)
- babel-eslint
- babel-preset-env
- babel-preset-react
- babel-plugin-transform-class-properties
- babel-plugin-transform-object-rest-spread

```
yarn add --dev https://github.com/babel/babel-brunch.git babel-eslint babel-plugin-transform-class-properties babel-plugin-transform-object-rest-spread babel-preset-env babel-preset-react
```

#### ESLint

> Linter : facilite l'écriture du code en venant valider les saisies à la volée pour nous informer de potentielles erreurs ou inconsistances

- eslint
- eslint-config-airbnb
- eslint-import-resolver-node
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-react

```
yarn add --dev eslint eslint-config-airbnb eslint-import-resolver-node eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```

#### Tests

> Tests unitaires : micro test sur des fragments de code

- mocha
- chai
- enzyme
- enzyme-adapter-react-16
- jsdom
- babel-register
- babel-resolver

```
yarn add --dev mocha chai enzyme react-test-renderer jsdom enzyme-adapter-react-16 babel-register babel-resolver
```

### Prod

#### React

- react
- react-dom
- prop-types

```
yarn add react react-dom prop-types
```

#### Babel

- babel-polyfill

```
yarn add babel-polyfill
```

#### Redux

- redux
- react-redux

```
yarn add redux react-redux
```

#### Les bonus

- react-router-dom : Gérer un router et la navigation via l'historique (SPA)
- axios : requêtes
- classnames : gestionnaire de classes CSS
- slugify : générateur de slug
- socket.io : gestionnaire de webSockets
- react-icons : librairies d'icones en composant
- uuid : générateur d'id unique

## Scripts NPM

### Usuels

- `start` : lancer le projet (avec brunch en mode "surveillant")

`brunch watch --server`

- `build` : construire le projet pour la production

`brunch build --production`

- `lint` : déclencher eslint, faire le tour de tous les fichiers du projet pour y détecter d'éventuelles erreurs. Avec une option spéciale eslint peut corriger des erreurs de présentation

`eslint --fix .`

### Tests

- `test` : lancement de mocha sur des fichiers.

`mocha tests/**/*.test.js`

alternative avec un setup `mocha tests/.setup.js tests/**/*.test.js`

- `test:one` : lancement de mocha sur un fichier

`mocha tests/.setup.js $1`

> `yarn test:one tests/store/reducer.test.js`

## Fichiers et dossiers

### L'arborescence

- `app` : le dossier de travail de Brunch
- `app/assets` : le dossier avec les assets, c'est-à-dire les fichiers qui ne doivent pas être compilés
- `app/src` : le dossier de nos fichiers js
- `app/src/components` : nos composants de présentations (et les fichiers css/stylus liés à ces composants)
- `app/src/containers` : nos containers redux (avec connect de react-redux)
- `app/src/store` : notre store redux, avec reducers, actions creators, middleware, etc.
- `app/styles` : le dossier pour nos fichiers css globaux
- `tests` : le dossier avec tous les tests, dedans on reprend l'arborescence de `app/src/`

### Les fichiers de config

- `.babelrc` : config de babel, pour dire ce qu'on va compiler (quel preset, quel plugin…)
- `.eslintrc` : pour se faire crier dessus :) la config d'ESLint
- `.eslintignore` : pour pas se faire crier dessus dans certains dossiers
- `.gitignore` : on ignore les fichiers que je ne veux pas commiter
- `.stylintrc` : pour se faire crier dessus aussi en Stylus
- `brunch-config.js` : config de brunch, qui nous permet d'indiquer à quel endroit on veut compiler + la config de modules…
- `tests/.setup.js` : le fichier qui permet d'utiliser babel (pour compiler le ES201x) et jsdom (pour simuler un navigateur)

## Compiler en prod

Il suffit de se servir de `brunch build --production`

mais il est possible d'améliorer encore un peu

- clean-css-brunch : nettoyer le CSS
- uglify-js-brunch : minification avancée du JS
- imagemin-brunch : alléger les visuels

```
yarn add --dev clean-css-brunch uglify-js-brunch imagemin-brunch
```

Il est même possible de require automatiquement les modules de démarage de l'app, plus de `<script> require('src/index')....`

```js
// Default behaviour.
modules: {
  autoRequire: {
    'javascripts/app.js': ['app', 'foo']
  }
}
```

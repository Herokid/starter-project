
# Starter project
There is a basic main project structure for vanilla js projects.

## Installation
```console
npm install
```

## NPM Scripts
### Watch

To activate the webpack watch without having to start any web server you must run:
```console
npm run watch
```

### Dev server

To launch the webpack dev server you must run:
```console
npm run dev
```

### Build

To launch the webpack dev server you must run:
```console
npm run dev
```

## Styles (with sass)
SASS code is in src/scss folder.<br>
[src/index.js](src/index.js) imports src/scss/styles.css file

```js
..
import  './scss/styles.scss'
..
```

## Javascript
This project structure is designed to instantiate a javascript object associated with each page, which we will call *'page objects'*.

### How works with *'page objects'*.
In the [src/es6/pages](src/es6/pages) folder we have the *'page objects'*, in this case [default.js](src/es6/pages/default.js) and [home.js](src/es6/pages/home.js) (which inherits from [default.js](src/es6/pages/default.js).

We also have a file in [src/es6/pages.js](src/es6/pages.js) that contains all these *'page objects'*.

```js
'use strict';

import  Default  from  './pages/default'
import  Home  from  './pages/home'

const  pages  = {
   default: Default,
   home: Home
} 

export  default  pages
```

If for example we want our main index.html to instantiate the [*'Home page object'*](src/es6/pages.home.js), what we have to do is simply indicate the value "home" in the *"data-page"* attribute of the *"body"*.

In order to make this dynamic we use the *templateParameters* parameter of the [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) plugin options.
```js
...
new  HtmlWebpackPlugin(
{
   templateParameters: { page: 'home' },
   template: './src/index.html'
})
...
```

In the [html template](src/index.html) we apply this value to the *data-page* html5 attribute as shown below.
```html
...
<body data-page="<%= page %>">
   <h1>Starter project</h1>
</body>
...
```

With this, the [main app javascript file](src/es6/app/app.js) can decide which object to instantiate.

```js
'use strict';

import  Pages  from  './pages'

class  App {
   constructor() {
      const  _  =  this;
      const  pageReference  =  document.body.dataset.page;
      const  page  =  Pages[pageReference] ||  Pages['default'];
      new  page();
   }
};

export  default  App;
```

All the specific logic of each class is therefore in the corresponding *'page object'*.
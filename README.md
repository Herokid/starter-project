
# Starter project
There is a basic main project structure for vanilla js projects.

## Installation
```console
npm install
```

## Styles (with sass)
SASS code is in src/scss folder.
src/index.js import src/scss/styles.css file
```js
import  './scss/styles.scss'
```

## Javascript
This project structure is designed to instantiate a javascript object associated with each page, which we will call 'page object'.

### How works with 'page objects'.
In the "src/es6/pages" folder we have the 'page objects', in this case default.js and home.js (which inherits from default.js).
We also have a file in src/es6/pages.js that contains all these 'page objects'.

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

If for example we want our main index.html to instantiate the "Home" object (src/es6/pages.home.js), what we have to do is simply indicate the value "home" in the *"data-page"* attribute of the *"body"*.

In order to make this dynamic we use the "templateParameters" parameter of the "html-webpack-plugin" plugin options.
```js
...
new  HtmlWebpackPlugin(
{
   templateParameters: { page: 'home' },
   template: './src/index.html'
})
...
```

In the html(src/index.html) template we apply this value to the *"data-page"* attribute as shown below..
```html
...
<body  data-page="<%= page %>">
   <h1>Starter project</h1>
</body>
...
```

With this, the main javascript file (src/es6/app/app.js) can decide which object to instantiate.

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

All the specific logic of each class is therefore in the corresponding 'page object'
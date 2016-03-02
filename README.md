# Wut?
So I applied to this company and they made me do a test (this app), but they didn't like it. I think it's pretty cool for a project made in a couple days so I'm sharing it to the world.

The app is the front end for a store with social features, meaning the user receives products and also _interesting pictures_, so in some cases you won't see a price on the item.

It was made with AngularJS 1.4 using ES6/ES2015 transpiled with Babel, it has a basic implementation of infinite scrolling, it has i18n with Angular Translate (multi language!) and uses some cool toasts (with toastr).

The random names for the items come from a random string matching in the API and the cool images come from [unsplash.it](https://unsplash.it).


## About the app
The boilerplate code comes from a yeoman generator, [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular). It has all the necessary gulp tasks for AngularJS injection, templating and minification, as well as stylus compiling and injection; it has linting for stylus and AngularJS JavaScript.

I used flexbox for the "grid system", the _library_ I created can be found in `/src/app/components/flex-helpers.styl`.

The app has **i18n**, it includes the languages english and spanish. You'll see it in english by default, however if you want to check how it looks like in spanish just go ahead and edit `src/app/index.config.js` and change `$translateProvider.preferredLanguage('en');` to `$translateProvider.preferredLanguage('es');`

### Requirements
You'll need to have:
 - Nodejs 4+
 - Bower
 - Gulp

### Installing the Dependencies
 - `npm install`
 - `bower install`

## Running the app

### Starting the API

`Note: As long as I can keep the API running on Redhat's Openshift, you don't need to start the local server.`

Go to ./api and run `node api.js`, it will start a web server listening on the **port 9000**, make sure it's free.

Its a simple express server with two routes that just return a different amout of items when requested.

### In development mode
`gulp serve`
This will open the app in development mode on (**localhost:3000**)[http://localhost:3000]

### In development mode
`gulp build`
This will create a `dist/` folder with all the static assets minified and ready for prime time, you can then enter the folder and start an http server.

## Testing
Unit tests: `gulp test`
End to End tests: `gulp protractor`
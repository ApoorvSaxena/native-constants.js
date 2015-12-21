native-constants.js
=====
*Access unpolluted Native Constants in JavaScript*
***

native-constants.js is a light-weight library to access unpolluted Native Constants in JavaScript.

It is written with an aim to allow access to unpolluted native constants which are often polluted by page owners(in case you are loading your script on someone else's page) or third party scripts(in case you are a page owner).

Usage
-----

```
// May God have mercy on the devil that wrote this code
JSON = "foo"

// Output as it shouldn't be
console.log(JSON.stringify({})); // Uncaught TypeError: JSON.stringify is not a function

// Use Native Constants Library on the same webpage

// Here's the call to your angel
var JSON = NativeConstants.get('JSON')

// Output as it should be
console.log(JSON.stringify({})); // outputs "{}"

```

Installation
-----

**native-constants.js** is *just 437 bytes* minified & gzipped.

- Bower: `bower install native-constants`
- NPM: `npm install native-constants`
- [Download zip](https://github.com/ApoorvSaxena/native-constants.js/archive/master.zip).

**Note**: **native-constants.js** supports AMD and commonJS module pattern out of the box.

Browser Support
-----

**native-constants.js** works amazingly on all browsers.

Contributing
-----

Interested in contributing features and fixes?

[Read more on contributing](./CONTRIBUTING.md).

Changelog
-----

See the [Changelog](https://github.com/ApoorvSaxena/native-constants.js/wiki/Changelog)

License
-----

Copyright (c) 2015 Apoorv Saxena, http://apoorv.pro
Licensed under the [MIT license](http://opensource.org/licenses/MIT).
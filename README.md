# broonline

Fun project for tracking the use of broon sauce at chippies.

[![Build Status](https://img.shields.io/travis/neocotic/broonline/develop.svg?style=flat-square)](https://travis-ci.org/neocotic/broonline)
[![Dependency Status](https://img.shields.io/david/neocotic/broonline.svg?style=flat-square)](https://david-dm.org/neocotic/broonline)
[![Dev Dependency Status](https://img.shields.io/david/dev/neocotic/broonline.svg?style=flat-square)](https://david-dm.org/neocotic/broonline#info=devDependencies)

## Install

Before you can install the website locally you'll need to install the following prerequisites first:

- [Git](http://git-scm.com)
- [Node.js](https://nodejs.org) (at least v0.12)
- [Bower](http://bower.io)
- [Grunt](http://gruntjs.com)
- [mongoDB](https://www.mongodb.org)

Once you have mongoDB running locally, create a user with read/write access for a database which will be used by this
website.

You'll need to have the following environment variables set;

<table>
  <tr>
    <th>Name</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>MONGOLAB_URI</td>
    <td>mongodb://username:password@localhost:27017/database</td>
  </tr>
  <tr>
    <td>NEW_RELIC_APP_NAME</td>
    <td>thebroonline</td>
  </tr>
  <tr>
    <td>NEW_RELIC_LOG</td>
    <td>stdout</td>
  </tr>
  <tr>
    <td>NEW_RELIC_LOG_LEVEL</td>
    <td>info</td>
  </tr>
  <tr>
    <td>SESSION_SECRET</td>
    <td>secret</td>
  </tr>
</table>

Once you've done all of that, you can just checkout the code and then install it with the following commands;

``` bash
$ git clone https://github.com/neocotic/broonline.git
$ cd broonline
$ npm install
```

## Running

You just need to run the following command;

``` bash
$ node index.js
```

## Contributing

If you want to contribute to the website (legend!), please make sure you read through the following documentation first;

https://github.com/neocotic/broonline/raw/master/CONTRIBUTING.md

## Bugs

If you have any problems with the website or would like to see the changes currently in development you can do so here;

https://github.com/neocotic/broonline/issues

## License

See [LICENSE.md](https://github.com/neocotic/broonline/raw/master/LICENSE.md) for more information on our MIT license.

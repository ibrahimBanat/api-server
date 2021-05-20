<img src="./assets/api1.png" alt="Logo of the project" align="right" width="50px
" height="50px" />

# api-server &middot; [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![Node Js](https://img.shields.io/npm/v/node?label=Node%20Js&style=plastic)](http://makeapullrequest.com) ![example branch parameter](https://github.com/github/docs/actions/workflows/node.js.yml/badge.svg?branch=main)

Dynamic API Phase 3: Add Persistence (Database) to the API

swap out the in-memory data models used in the previous lab for Mongo database models.

## Tests & Deployment

[Workflow Actions](https://github.com/ibrahimBanat/api-server/actions)\
[deployment](https://api-server-dev.herokuapp.com/)

to start the test run:

```sell
npm test
```

## Installing / Getting started

A quick introduction of the minimal setup you need to get a hello world up &
running.

```shell
git clone git@github.com:ibrahimBanat/api-server.git
```

then change directory to:

```shell
cd api-server
```

install dependancies:

```shell
npm install
```

you should have [MongoDB](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_footprint_row_search_core_brand_atlas_desktop&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624584&gclid=Cj0KCQjw7pKFBhDUARIsAFUoMDaTnJoj_iQtmpKu72lEvyHV9FjKr4BRbK-2UAGpJA7LI0aBgzkBx6gaAlDQEALw_wcB) installed in your machine, and start your DB using the command: it should give you `ok` status.

```shell
sudo service mongodb start
```

you should create `.env` file and add the mongo db connection string: it should look this

```shell
MONGOOSE_URI = mongodb://localhost:27017/data
```

last thing, use `npm start` to start the application.

## Files Structure

```bash
    .
├── LICENSE
├── README.md
├── __tests__
│   └── server.test.js
├── assets
│   ├── api-server.PNG
│   └── api1.png
├── index.js
├── package-lock.json
├── package.json
└── src
    ├── error-handlers
    │   ├── 404.js
    │   └── 500.js
    ├── middleware
    │   ├── logger.js
    │   └── validator.js
    ├── models
    │   ├── clothes.js
    │   ├── dataMngr.js
    │   └── food.js
    ├── routes
    │   ├── clothes.js
    │   └── food.js
    └── server.js
```

## Test Coverage

![](./assets/api-server.PNG)

## UML Diagram

![](./assets/basic-api-server.PNG)

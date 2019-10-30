# ts-wdio5-mocha-simple

Simple WDIO tests using Mocha with TypeScript

## Install

```bash
npm install
```

## Run
To run all tests with wdio.sauce.conf.js you can do:
```
npm run test:sauce
```

To run a specific test you can do:

```bash
npm run test:sauce -- --spec=./tests/the-internet-login.ts
```

To use a different config file you can run:

```bash
npm test -- wdio.sauce-rdc.conf.js
```
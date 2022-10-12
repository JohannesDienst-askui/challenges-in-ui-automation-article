# Challenges in UI Automation Article Companion Repository
This repository serves as the basis the article series **Challenges in UI Automation**.

## Cypress

The testspec is located under `cypress/cypress/e2e/spec.cy.js`

Run the tests from your terminal

```shell
cd cypress
npm install
npm run test
```

See the [cypress docs](https://docs.cypress.io/) for more information.

## Taiko

The testspec is located under `taiko/test.js`

```shell
cd taiko
npm install
npm run test
```

See the [Taiko docs](https://docs.taiko.dev/) for more information.

## askui

> Make sure to open the _minimalExamplePage.html_ in a browser and tab into the browser immediately after starting the test!

> You have to create a acces token to use askui (Free for usage!). See [this section of the docs](https://docs.askui.com/docs/general/Getting%20Started/getting-started#access-token) for how to do it.

Run the tests from your terminal

```shell
cd askui
npm install

## May take a while
## First the UI Controller for your OS is downloaded!
npm run test
```

See the [askui docs](https://docs.askui.com/) for more information.

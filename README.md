# redux-shopping-cart
##In the app i used boilerplate with vite.js (bundler), typeScript, react, redux, react-redux, redux-tool-kit, css modules, 
 
main.tsx is the whole app wrapper, providing redux store to the app

App.tsx renders the whole app using modern syntax of react-router

In the app folder contains api.ts which have the interface of product {id: 1, name: string, price: number, imageURL>} and function that fetch json from public folder,
hooks.ts used for customize react-redux hooks with types

in the store.ts stored reducer object with keys, that get reducers from slices (product reducers, cart reducers) and then use configureStore (redux toolkit alternative of createStore)
for creating store that can combine our slices (like combineReducers), then export a function for faking store for tests.

in test-utils.tsx we describe wrapper function that wrap components in provider and router to test components work, in the next function we take as a parameter fake store data also to test cart component

##Inner components logic you can read from components comments

##To run puppeteer tests you need to wright in the terminal: npm run preview and then start the test

##To run non puppeteer tests simply npm run dev and then proceed with it

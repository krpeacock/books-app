Hosted page: https://brave-babbage-164a61.netlify.com/

## Books App Readme

### Installation

> This project was built with Node v. 8.9.4 and Yarn 1.5.1.
>
> To install, run `npm install` or `yarn` inside the directory.
>
> Running `yarn start` will start up the development server.
>
> Running `yarn build` will generate static production code in the dist directory.

### App structure

This app uses hyper-minimalist html, and renders all of its content out of React. I chose to go with React after starting out in vanilla JavaScript because I wanted to use JavaScript to control all of my markup, and the code wasn't looking clean or easy to read.

The entry point of the app is in `index.js`, which then imports `App.js` and the rest of the application.

### Features

The app has a mobile-first layout, designed around a single-column layout. The page loads 10 books to start, and then uses a generator to feed 10 more books into the page whenever the user scrolls to the bottom of their current feed.

In addition, the website meets baseline accessibility standards and can be navigated by keyboard.

---

## Next Steps

The next major feature I would add is a search bar, along with a form to filter by author, country and language.

After that, I would add a backend with a GraphQL server to support the service with truly asynchronous fetching of the books instead of loading all of them into memory on page load. With only 100 books, it's not a big deal to load it all upfront, but this pattern with the generator requests can be easily converted into a fetch request that is highly scaleable.

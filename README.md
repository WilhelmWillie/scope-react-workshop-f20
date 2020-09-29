# Scope React Workshop Fall 2020

**Slides** [Drive link](https://docs.google.com/presentation/d/1C_yjSqrvyWyTQ4AtXtzEPuW_1cF4BfNIbvEuzQU8dJk/edit?usp=sharing)

This repo is for a workshop ran by me for [USC Scope](http://scopeusc.com/). This workshop is intended to teach the fundamentals of React, one of the most popular UI frameworks used for building web and mobile apps. 

During my workshop, I'll walk through some introductory slides to introduce some key concepts, then I'll be doing some live coding. If you fall behind or can't make the workshop, this README will cover the steps I'm following.

## What This Repository Contains

This repository contains a README (what you're reading) which has step-by-step instructions and explanations for code I'll run through during my workshop. It also contains a finished project called `shopping-cart`. This is a polished version of what we'll be building in this workshop with some additional comments. If you get lost and/or want to try running it, make sure you go through the pre-requisites (to install the right software), then run the following:

```
cd shopping-cart # Make sure you're in the shopping-cart folder
yarn install # Install the necessary packages
yarn start # Start the React app
```

Your browser should open up to `localhost:3000` where you'll see the finished app live.

## Pre-Requisites

This workshop is meant to be beginner friendly but some development experience is expected. You hopefully have some experience with HTML/CSS and/or beginner JavaScript. Also, it's very important to make sure you install Node.js and npm on your computer. Node.js' website can be found [here](https://nodejs.org/en). MacOS installation instructions [here](https://nodejs.org/en/download/package-manager/#macos). Windows installation instructions [here](https://nodejs.org/en/download/package-manager/#windows).

**Again, make sure you have installed Node.js and npm.** To make sure it's been installed, run the following commands:

```
node --version
npm --version
```

Your Node version should be >= 8.10 and your npm verssion >= 5.6

Node is a JavaScript runtime that lets you run JavaScript outside of the browser. npm is a package manager that lets you import third party dependencies into your projects. Once you have `node` and `npm` installed, run the following:

```
npm install -g yarn
```

That will install `yarn`, another package manager, onto your machine. `yarn` is an alternative to `npm` that is preferred by some engineers ([read more here](https://engineering.fb.com/web/yarn-a-new-package-manager-for-javascript/)). We'll be using `yarn` to run our React app.

## Getting Started

If you can run `yarn --version`, you're ready to get started! First of all, open up Terminal and `cd` to a folder you feel comfortable doing dev work in. Then run the following:

`npx create-react-app shopping-cart` (Feel free to replace `shopping-cart` with whatever folder name you want)

This will run the `create-react-app` package CLI tool and will generate a starter React app in the folder `shopping-cart`. `create-react-app` provides a solid boilerplate to get started doing React development. If you want to read more about it, check out [the documentation](https://reactjs.org/docs/create-a-new-react-app.html). It supports a lot of great stuff out of the box and so unless you're doing something more complicated, you likely won't need to modify or touch any build settings/configuration. 

Once your `shopping-cart` app is created, `cd shopping-cart` and run `yarn start`

Your browser should open to `localhost:3000` where you can see a running React app! Now this is just a boilerplate app so it's pretty basic but nonetheless, congrats you've run (maybe) your first React app. 

## Next Steps: Stylesheet

Now, this workshop focuses on the fundamentals of React. I want to focus on some of the important things like props and state, so I'll be providing a stylesheet for you to use throughout this workshop. Go ahead and replace the entire contents of `App.css` with the following:

```css
* {
  box-sizing: border-box;
}

h1,h2,h3,h4,h5,h6 {
  margin: 0;
}

h2 {
  font-size: 20px;
}

h3 {
  font-size: 16px;
  font-weight: 400;
}

body {
  background: #243748;
}

.container {
  display: flex;
  flex-direction: row;
  width: 92.5%;
  max-width: 960px;
  margin: 48px auto;
  padding: 32px;
  background-color: #FFFFFF;
  justify-content: space-between;
  align-items: flex-start;
}

/* Items Grid */
.items {
  flex-basis: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.items .item {
  padding: 16px;
  border: 1px solid #DEDEDE;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.items .item button {
  padding: 12px 16px;
  margin-top: 16px;
  background: #f39c12;
  border: none;
  color: #FFFFFF;
  width: 100%;
  cursor: pointer;
}

.items .item button:hover {
  background: #c67f0f;
}

/* Shopping Cart */
.cart {
  flex-basis: 47.5%;
  padding: 24px;
  border: 1px solid #DEDEDE;
}

.cart-entry {
  width: 100%;
  padding: 16px 0;
  border-bottom: 1px solid #DEDEDE;
}

.cart-total {
  font-size: 20px;
  margin-top: 16px;
}
```

We'll be using these class names and elements to build our interface and don't want to get too caught up in the styling. Once you save, your `localhost:3000` app might look weird but don't worry, we'll be fleshing that out and fixing it up.

## Next steps: App.js

App.js is the file responsible for our main application component. Like I mentioned in the slides, React apps are made up of components which make up a component tree. The `App` component in App.js is the root component for the entire application. You'll also notice `index.js` which is the main setup file. This attaches our React app to the HTML file (`public/index.html`). You shouldn't really have to touch `index.js` so we'll ignore that and focus on `App.js`.

Let's go ahead and strip away the boilerplate code so App.js looks like the following:

```jsx
import React from 'react';

import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
```

If you click save, the React app should reload and you should see a blank app with a blue background and a header that says "Hello world". Go ahead and modify the "Hello world" text and watch the app respond to your saved changes! Note: reminder that we're using the styles I set up earlier for you.

Let's go ahead and modify the return statement of this function so that it looks like the following:

```jsx
return (
  <div className="container">
    <div className="items">
      <div className="item">
        <h2>Cracking the Coding Interview</h2>
        <h3>20</h3>
        <button>Add to Cart</button>
      </div>
    </div>

    <div className="cart">
      <h1>Shopping Cart</h1>

      <div className="cart-entry">
        <h2>Cracking the Coding Interview</h2>
        <h3>20</h3>
      </div>

      <h2 className="cart-total">Total Cost: $20</h2>
    </div>
  </div>
);
```

Here we're building the basic interface for our app. We'll extrapolate parts of this interface into re-usable components and will then make it a bit more dynamic with `state`.

## Re-usable Components

Let's go ahead and split off our "items" into a re-usable component. We'll make a `<CatalogItem>` component that takes in props (properties) so we can re-use the same interface for different pieces of data.

Right above `function App()`, insert the following:

```jsx
function CatalogItem(props) {
  return (
    <div className="item">
      <h2>{props.title}</h2>
      <h3>{props.price}</h3>
      <button onClick={props.handleClick}>Add to Cart</button>
    </div>
  )
}
```

This will define a `CatalogItem` component that will take props and render it into some HTML. We can then use this component like so:

```jsx
<CatalogItem 
  title="Airpods" 
  price={250} 
  handleClick={() => {
    alert('Hello');
  }}
/>
```

Here we are passing in a title, Airpods, the price, 250, and for now a function that alerts the window. Let's use this component in our `App` component. Go ahead and update our return statement so it looks like:

```jsx
return (
  <div className="container">
    <div className="items">
      <CatalogItem
        title="Cracking the Coding Interview"
        price={20}
        handleClick={() => {
          alert('Helo');
        }}
      />
    </div>

    <div className="cart">
      <h1>Shopping Cart</h1>

      <div className="cart-entry">
        <h2>Cracking the Coding Interview</h2>
        <h3>20</h3>
      </div>

      <h2 className="cart-total">Total Cost: $20</h2>
    </div>
  </div>
);
```

When you save, you should see nothing visible change but this time, we're using a re-usable component. Now we can have multiple catalog items that look the same, just with their data tweaked! Go ahead and copy/paste a few more `CatalogItem` components and modify the data to see changes reflected live. 

Now that's great, but we can be smarter. Let's say we had a list of JavaScript objects that looked like the following:

```jsx
export default [
  {
    title: "PS5",
    price: 500
  },
  {
    title: "Airpods",
    price: 250
  },
  {
    title: "Socks",
    price: 25
  },
  ...
]
```

We should be able to generate a list of components automatically... cause we're programmers! So we'll do just that.

Make a new file in `src` and call it `catalog.js` (`src/catalog.js`). Paste the following in:

```js
export default [
  {
    title: "PS5",
    price: 500
  },
  {
    title: "Airpods",
    price: 250
  },
  {
    title: "Socks",
    price: 25
  },
  {
    title: "Bitcoin",
    price: 10000
  },
  {
    title: "USC 1yr Tuition",
    price: 59260
  },
  {
    title: "Arizona Iced Tea",
    price: 1
  },
  {
    title: "Cracking the Coding Interview",
    price: 20
  },
  {
    title: "Soylent Pack of 12",
    price: 40
  },
  {
    title: "Allbirds",
    price: 95
  }
]
```

Here, we're using the import/export features of ES6 so we can contrl this data in a separate file.

In `App.js`, add this line somewhere in the import section:

```jsx
import catalog from './catalog';
```

Next, in our `function App`, insert this right before the `return` statement:

```jsx
const catalogItems = catalog.map((item) => {
  return (
    <CatalogItem
      title={item.title}
      price={item.price}
      handleClick={
        () => {
          alert(item.title, item.price);
        }
      }
    />
  )
});
```

What we're doing here is importing our data list as a variable `catalog`. Then we use the ES6 array function `.map()` which generates a new array. `.map` takes in a function that defines how we "map" or transform the original data to something new. Here we are mapping each item entry to an instance of the `CatalogItem` component. We store this new map into `catalogItems`. Now to render, we want to update our return statement so that it looks like the following:

```jsx
return (
  <div className="container">
    <div className="items">
      {catalogItems}
    </div>

    <div className="cart">
      <h1>Shopping Cart</h1>

      <div className="cart-entry">
        <h2>Cracking the Coding Interview</h2>
        <h3>20</h3>
      </div>

      <h2 className="cart-total">Total Cost: $20</h2>
    </div>
  </div>
);
```

Note how we embed variables using curly brackets. This works for literal values, renderable items (components, `null`, `undefined`) or arrays that contain renderable items. If you save the app, you should see a grid of items being rendered. If you modify some of the data in `src/catalog.js`, you'll be able to add/modify/remove items to your pleasing. Now this is cool, but we want to do something actionable and dynamic. Up until now, it's been mostly static. Let's add some dynamic `state` and interactability into our app!

## State!
# Introduction

To save time on setup, I've went with `create-react-app` which includes webpack
configuration as well as comes with Babel support out of the box.

However, I ran eject on it so that I can customize it further.

[Create React App](https://github.com/facebookincubator/create-react-app)

## Setup

Assuming you have yarn installed, you can simply run `yarn` or `npm install`.

## Linting

This project uses `eslint` for code linting and is a customized version of
Airbnb's eslint config.

Prettier is also used for auto-formatting along with eslint integration.

## CSS

Although the assignment guidelines include sass, I've decided not to go with
Sass and remain with PostCss which comes with `create-react-app`.

### TODOS (Things I'd do with more time)

* `package.json` cleanup
  * The generated package.json file doesn't split devDependencies. I would clean
    this up.
* Module resolver for both css and babel
  * To avoid ugly relative imports eg. `../../../components`
* Use variables for colors and type
* Use constants with key/values for genre and filtering

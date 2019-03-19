# Style Guidelines for SASS

## What is this?

This is an example project for you to reference when setting up a new web app using React and/or Sass. Alternatively, you can follow the [installation](#installation) steps below on your own project.

## Why do I need this?

This is to help engineers and designers setup style related tools, and follow a convention for the project. This makes the project more maintainable in the future.

## Tech & Ideologies Used

1. [React](https://github.com/facebook/create-react-app)
2. [Sass](https://sass-lang.com/)
3. [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) + [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)
4. [Modern Normalize](https://github.com/sindresorhus/modern-normalize)
5. [React Bootstrap](https://react-bootstrap.github.io/)
6. [BEM](http://getbem.com/naming/)

## <a name="installation"></a>Installation

### 1. Bootstrap your web project using [`create-react-app`](https://github.com/facebook/create-react-app).

- `npx create-react-app my-app`
- `cd my-app`
- `npm start`

### 2. Install Sass

- Install Node Sass: `npm install node-sass --save`
- Now you can rename `src/App.css` to `src/App.scss`
- Update the import in `src/App.js` from: `import './App.css';` to: `import './App.scss';`
- Restart the server and you should see your styles being imported as Sass!

### 3. Create a `styles` folder

This will be the folder where all global style references and declarations will live. Eg: global variables, mixins, framework styles, etc.

- Create a `styles` folder inside the `src` directory
- Create an empty `index.scss` file inside the folder you just created.
- Update the import in `src/index.js` from: `import './index.css';` to: `import './styles/index.scss';`
  - Note: You can now delete `src/index.css`
- Create a `.env` folder at the root of your project and add this to the new file:
  `SASS_PATH=node_modules:src/styles`. This let's you use relative imports in your `.scss` files.
- Restart the server

### 4. Adopt or define a folder structure convention

Whether it's via [SMACCS](https://smacss.com/book/categorizing), [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/), [RSCSS](https://rscss.io/), [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) or something else, every new project should follow a consistent folder structure.

For this example, we've picked a mix of [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) and [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/). Atomic for our component/page scoped styles, and ITCSS for our global styles.

ITCSS suggests a sane way to separate global styles based on specificity, reach, and explicitness. **[For more info on ITCSS, please read this](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)**. We're only going to be using 2 principles of ITCSS, `settings`, and `generic` since Atomic deals with the rest.

### 5. Implement the global styles structure

#### Settings

- Create the `settings` folder inside of our `src/styles` directory. The `settings` folder contains fonts, colors definitions, mixins, etc.
- Create a `_variables.scss` partial that lives inside the `src/settings` folder.
- Create a `_mixins.scss` partial that lives inside the `src/settings` folder. ITCSS puts this in it's own `tools` folder, however we're going to combine that with settings so we can import just 1 file when we're working at the component level.

  - Note: if you want to bring in your own font declarations, we recommend creating a `_fonts.scss` file in this folder, and declaring your font there.

- Create a `settings.scss` inside the `src/settings` folder that imports the two files we just created above:
  ```scss
  @import './variables';
  @import './mixins';
  ```
- Update our `styles/index.scss` file to import the file we just created:
  ```scss
  @import './variables';
  ```

#### Generic

This is where we import reset and/or normalize styles, box-sizing definition, CSS frameworks etc. **If you are using a framework, remember to include your reset/normalize styles BEFORE you import your framework.**

### 6. Normalize browser styles

For this project, we're going to install [`modern-normalize`](https://github.com/sindresorhus/modern-normalize). This normalizes default browser styles, and sets the `box-sizing` to `border-box` .

- Run `npm install modern-normalize --save`
- Add this to the end of `styles/index.scss`:
  ```scss
    ..
    @import '~modern-normalize/modern-normalize';
    ..
  ```
- Note the use of `~` before the package name, this will look for the path within the `node_modules` directory.

### 7. Install a CSS framework

We've picked Bootstrap for this project, and since we're using React, we'll bring in [React Bootstrap](https://react-bootstrap.github.io/).

- Run `npm install react-bootstrap bootstrap --save`
- Add this to the end of `styles/index.scss`:
  ```scss
    ..
    @import '~bootstrap/scss/bootstrap';
    ..
  ```
- Note: If you need to customize the default Bootstrap theme, create a `_custom.scss` file inside the `styles/settings` folder, and import that **before** you import the Bootstrap styles.

### 8. Setup the Atomic structure

Atomic Design's ideologies categorize styles via `atoms`, `molecules`, `organisms`, `templates`, and `pages`. **[For detailed info on what these categorizes really mean, please read this](http://bradfrost.com/blog/post/atomic-web-design/)**.

- Create each category folder in the `src` directory (`atoms`, `molecules`, `organisms`, `templates`, and `pages`).

### 9. Create your first `atom`

We're going to create a `Button` atom that uses Bootstrap's button, but has custom styles.

- Create a new file called `button.jsx` inside the `src/atoms` directory.

  ```jsx
  import React from 'react'
  import * as BootstrapButton from 'react-bootstrap/Button'

  export function Button(props) {
    return (
      <BootstrapButton className="brand-button">{props.title}</BootstrapButton>
    )
  }
  ```

- Next replace the contents of `App.jsx` (you can delete the `App.test.js`, `logo.svg`, files too):

  ```jsx
  import React, { Component } from 'react'
  import { Button } from './atoms/button'

  class App extends Component {
    render() {
      return <Button />
    }
  }

  export default App
  ```

- Go to `http://localhost:3000/` and you should see your new button rendered on the page!

### 10. Add styles to your `atom`

Now we're going to add component level styled to our new `Button` component.

- Create a new file inside `atoms` called `button.scss`
- At the top of the `button.jsx` file, import the Sass file:
  ```jsx
    import React, { Component } from 'react'
    import { Button } from './atoms/button'
    import './button.scss'
    ...
  ```
- Open `button.scss` and import the global variables and mixins:
  ```scss
  @import 'settings/settings';
  ```
- Create an accented button inside `button.jsx`:
  ```jsx
  ..
  export function AccentButton(props) {
    return (
      <BootstrapButton className="brand-button brand-button--accent">
        {props.title}
      </BootstrapButton>
    )
  }
  ```
- Render our new `AccentButton` in `App.js`:

  ```jsx
  import React, { Component } from 'react'
  import { Button, AccentButton } from './atoms/button'

  class App extends Component {
    render() {
      return (
        <>
          <Button title={'Button'} />
          <AccentButton title={'Accent Button'} />
        </>
      )
    }
  }

  export default App
  ```

- Start writing your styles for the `Button` component. We recommend following [BEM](http://getbem.com/naming/) when naming your classes. **If you don't know what BEM is, please [read this](http://getbem.com/naming/)**.

  ```scss
  .brand-button {
    padding: 1rem;

    &--accent {
      // BEM 'Modifier' class
      background-color: $brand-accent; // Comes from 'styles/settings/settings.scss'
      border-color: $brand-accent;

      @include hover() {
        background-color: black;
        border-color: black;
      }
    }
  }
  ```

  Note: we recommend keeping nesting to a max of 2 levels if possible. We also recommend using BEM classnames for **all** selectors where possible. Eg: prefer `.title--2 {}` instead of `h2 {}`. This keeps styles more maintainable and less specific.

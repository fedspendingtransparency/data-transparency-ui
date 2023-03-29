# Data Transparency User Interface (UI) Component Library

## Storybook Documentation
[https://fedspendingtransparency.github.io/data-transparency-ui/?path=/story/introduction--page](https://fedspendingtransparency.github.io/data-transparency-ui/?path=/story/introduction--page)

## Installation Instructions
Install our library using npm:

```shell
    npm i fedspendingtransparency/data-transparency-ui#v_._._
```

Import our components like this:

```javascript
    import { Table } from 'data-transparency-ui';
```

To see our exported components, [see our type definition file.](https://github.com/fedspendingtransparency/data-transparency-ui/blob/master/index.d.ts).

The purpose of this project is to give visibility into the patterns built into the 
[Broker](https://broker.usaspending.gov/) and [USASpending](https://usaspending.gov/) UI and their corresponding technical implementations.
These implementations, referred to as UI Components, exist outside of the USASpending
and Broker codebase.

With this visibility & independence, the following benefits arise:

- UI/UX & Development Teams can identify a one-to-one relationship between designs and their implementations in code.
- USASpending & Broker can reuse the same code.
- Integration with these components within USASpending and Broker will result in the ability to redesign or improve these components
in a single place and then see those changes propagated throughout the website immediately.

[Here is a current status report on USASpending and Broker Integration](https://github.com/fedspendingtransparency/data-act-documentation/blob/data-transparency-ui/frontend_apps/component-library-integration-status.md).
## Pre-install advisory
- It is advised that consumers of this project add `"preinstall": "npx npm-force-resolutions@0.0.3"` to the package.json of the project that uses this library. Users must also add the appropriate `"resolutions"` section to their package.json as well. Doing the aforementioned steps will help resolve any security vulnerabilities from `npm audit`
## UI/UX & Development Collaboration Process

The below info-graphic displays how the UI/UX and Development Teams will iteratively work together to identify new components for this library.

<img src={infoGraphic} alt="Data Transparency USASpending.gov logo" />

## Component Library Contribution

We use [storybook](https://github.com/storybookjs/storybook) to demonstrate our library of components and their technical implementations.
This open-source project has nearly 1K contributors and is constantly improving.

### Creating a New Story for a Component

We use the [Component Story Format](https://storybook.js.org/docs/formats/component-story-format/) to demonstrate our components. Once
Storybook supports `mdx` format for stories, we will migrate to that to achieve greater customization over our stories.

Currently, we are using the following Storybook features to display our current implementation:

- [Mobile Responsiveness](https://github.com/storybookjs/storybook/tree/master/addons/viewport)
- [Docs](https://github.com/storybookjs/storybook/tree/master/addons/docs)

### Technical Directions for Adding New Components

When adding a new component to this library, please follow the below guide:
- Build storybook artifacts and Component's CSS by running `npm run build`
    - Storybook build artifacts are compiled in `docs/` and deployed using GitHub Pages once merged to the master branch
    - Component CSS is compiled to `dist/`
- Export the new component in `index.js`
- Consult the storybook documentation

### Integration Testing w/ your Local Environment using NPM Link or NPM pack

Please note in the directions below, the "consumer-context" is the application that you're using with the Data Transparency User Interface Component Library.  So if you are using this library with the USAspending application, the consumer context is usaspending.

To test components locally in the context it will be used either use `npm link`:

1. Navigate to the `data-transparency-ui/` root.
2. Change "main": "dist/index.js" in the package.json file to "main": "index.js"
3. Run npm link
4. Run npm link path/to/your/<consumer-context>/node_modules/react (example npm link ../<consumer-context>/node_modules/react; to integrate with usaspending.gov use `npm link ../usaspending-website/node_modules/react`)
5. Navigate to the consumer context directory (ie. for usaspending.gov the consumer context directory is "usaspending-website")
6. Run npm link data-transparency-ui

OR use `npm pack`:

1. Navigate to the `data-transparency-ui/` root.
2. Run npm pack (a .tgz package will be created in the root directory)
3. Navigate to your consumer-context directory (for usaspending.gov, navigate to `usaspending-website/` root)
4. npm install `../data-transparency-ui/<nameofzippeddtuipackage.tgz`)


Now, when you start your local development server in your consumer context, you will be using your local clone of this repository. 🙌

### Node Version

Current node version is v14

Step by step Electron application setup (from scratch, no boilerplates).

While boilerplates help getting started with new technology stacks, projects sooner or later outgrow the initial assumptions made by these boilerplates. At this time one has to learn and understand the underlying tools anyway. For professional, long-lived software projects, there is no easy way. Rather than re-iterating the same copy/paste setup processes (with the same mistakes and false understandings), it makes a lot of sense to really understand what the essential parts are in a stack and how they work together. It is probably slower to have initial success, but pays out in the long run.

So, instead of using `create-react-app`, which is really nice to start non-Electron projects, this project does it the hard way. Also we want to setup Babel and Webpack suitable for Electron (e.g. no ES6 -> ES5 transpiling necessary and proper `electron-renderer` target to support ES6 import of native Electron/Node.js modules). Finally, boilerplates add at least one additional layer of abstraction, which comes with a slew of dependencies. For long-lived projects, updating these dependencies leads to high maintenance costs and a higher risks that dependencies become outdated or are no longer supported.

Contains:
* [Simple application](https://github.com/electron/electron-quick-start) (slightly modified)
* Create binary releases for Windows and macOS
* Leaflet map integration
* Source Map creation

Dependencies:
* __electron@5.0.0__ (develop): 145 packages from 141 contributors
* __electron-builder@20.39.0__ (develop): 175 packages from 107 contributors
* __react@16.8.6__ (runtime): 6 packages from 2 contributors
* __react-dom@16.8.6__ (runtime): 1 package
* __webpack@4.30.0__ (develop): 390 packages from 218 contributors
* __webpack-cli@3.3.1__ (develop): 26 packages from 21 contributors
* __@babel/core@7.4.4__ (develop): 23 packages from 46 contributors
* __@babel/preset-env@7.4.4__ (develop): 80 packages from 14 contributors
* __@babel/preset-react@7.0.0__ (develop): 7 packages from 1 contributor
* __babel-loader@8.0.5__ (develop): 15 packages from 11 contributors
* __leaflet@1.4.0__ (runtime): 1 package
* __style-loader@0.23.1__ (develop): 1 package from 1 contributor
* __css-loader@2.1.1__ (develop): 15 packages from 11 contributors
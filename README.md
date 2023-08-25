# DD Custom Plugin

Starter project for a custom Pixel Game Maker MV plugin using the Dank Developer framework.

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

1.  Ensure [Node.js](https://nodejs.org/en/download) is installed.
2.  Any IDE you are comfortable with. This project comes with some [sample settings](./.vscode/sample.settings.json) for use with [VSCode](https://code.visualstudio.com/download).

### Installation

1.  [Download](https://github.com/kidthales/dd-framework/archive/refs/heads/main.zip) the Dank Developer framework and extract the folder to your workspace.
2.  [Download](https://github.com/kidthales/dd-custom-plugin/archive/refs/heads/main.zip) this project and also extract the folder to your workspace.
3.  We should now have a directory structure similar to:
    ```
    my-workspace/
     ├──dd-custom-plugin-main/  * our custom plugin
     └──dd-framework-main/      * dank developer framework
    ```
    Open a shell and navigate to our custom plugin directory & install dependencies:
    ```
    cd /path/to/my-workspace/dd-custom-plugin-main && npm install
    ```

## Usage

> This is an example plugin that provides action commands & link conditions to manage a 'count' value stored in the plugin's internal data.

> You can use this project as template/starter for your own custom plugin & take advantage of the Dank Developer framework features.

Make some updates to the plugin name, description, etc:

-   [package.json](./package.json)
    -   Update `name` value.
    -   Update `description` value.
-   [webpack.config.js](./webpack.config.js)
    -   Update the `pluginName` variable.
-   [src/locale.js](./src/locale.js)
    -   Update `PLUGIN_*` values.

### Build

Bundle the plugin into a single file & output to `dist/`:

```
npm run build
```

The output file can then be imported into the PGMMV editor. If this plugin depends on the APIs provided by other plugins, please ensure they are also imported.

## Acknowledgments

-   [dd-framework](https://github.com/kidthales/dd-framework)

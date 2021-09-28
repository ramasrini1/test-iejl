# How to Setup Visual Studio Code

Please use Visual Studio Code for all development. This will ensure all developers have environments that are synced and will make future debugging smoother for everyone.

## How to Install

You can install Visual Studio directly from the main application website [here](https://code.visualstudio.com/download)

For Mac users, you can use [Homebrew](https://brew.sh) package manager to install the application.

`brew cask install ‘visual-studio-code’`

After you finish installing, go ahead and open up the IDE.
![screenshot](https://flaviocopes.com/vscode/vscode-first-screen.png)

## Configure for Web Development

Code in this repository is written primarily in JavaScript, but you may want to configure VSCode for PHP development as well.

### Step 1: Open the command palette

The follow command opens up the command palette:

```
MacOS: cmd + shift + p
win/linux: cntrl + shift + p
```

A dropdown will appear at the top of the IDE. You will use this often in VSCode.
![Visual Studio Code User Interface](https://code.visualstudio.com/assets/docs/getstarted/userinterface/commands.png)

### Step 2: Type _**Preferences: Open Settings(JSON)**_ into the search field

This will open a JSON file _settings.json_. This file is used to configure user settings.

![VS Code. How to open JSON settings with defaults - Stack Overflow](https://i.stack.imgur.com/cW8ch.png)

### Step 3: Paste settings into _settings.json_

To reduce the number of steps, please copy and paste the content from my gist into _settings.json_:
https://gist.github.com/laujonat/51f5013e82765ad01da88ebadd539851

Save your changes.

### Step 4: Install Extensions for React development

At the minimum, I would recommend you install the following extensions for web development.
To install extensions, you can follow the same process in steps 2 and 3.

#### Step 4.1

Open the command palette

```
MacOS: cmd + shift + p
win/linux: cntrl + shift + p
```

#### Step 4.2

Type _**Install Extensions**_ into the search field to open up a side panel on the left of the IDE.
![Create Your Own VS Code Extension • Nearsoft](https://cdn.nearsoft.com/uploads/2019/10/Create-Your-Own-VS-Code-Extension.png)

#### Step 4.3

Install the following extensions:

- [JavaScript ES6 Snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)
- [ES Lint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)

Your IDE should now be set up for React web development projects.

### Step 5: (Optional)

VS Code has a huge array of extensions available on their [marketplace](https://marketplace.visualstudio.com/vscode). As well as extensions, in 2017, [extension packs](https://code.visualstudio.com/docs/extensionAPI/extension-manifest#_extension-packs) became available. tl;dr, they're a grouping of extensions.

[Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) is a must have extension and I recommend installing it as your first extension. With this extension, you'll be able to backup most of your settings to a private gist. From there, restoring your settings is pretty easy. It's great for backing up settings as well as synching settings, which is what I do between my work and personal laptop.

### Node/JS

- [Node extension pack](https://marketplace.visualstudio.com/items?itemName=waderyan.nodejs-extension-pack) (must have)
- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)

### Formatting/Linting

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Prettify JSON](https://marketplace.visualstudio.com/items?itemName=mohsen1.prettify-json)
- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### CSS

- [IntelliSense for CSS class names](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
- [Color Picker](https://marketplace.visualstudio.com/items?itemName=anseki.vscode-color)
- [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)

### Debugging

The easiest way to get started with debugging is to press `F5` and VS Code will offer you debugging configurations to get set up with.

- [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)

### Git

- [Git extension pack](https://marketplace.visualstudio.com/items?itemName=donjayamanne.git-extension-pack) (must have)
- [Git Blame](https://marketplace.visualstudio.com/items?itemName=waderyan.gitblame)
- [gitflow](https://marketplace.visualstudio.com/items?itemName=vector-of-bool.gitflow)

### React

- [React Redux ES6 Snippets](https://marketplace.visualstudio.com/items?itemName=timothymclane.react-redux-es6-snippets)
- [Reactjs code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets)
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)

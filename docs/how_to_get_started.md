# How to Get Started

# Development Environment Setup

You will need to configure your developer environment locally before you can use this repository. By the end, you should have a working development environment and IDE for this guide.

## Prerequisites: Navigate the command Line

The instructions for how to use the command line differ slightly based on what operating system your computer uses: - [Command line instructions for Mac](https://www.macworld.co.uk/feature/mac-software/how-use-terminal-on-mac-3608274/) - [Command line instructions for Windows](https://www.lifewire.com/how-to-open-command-prompt-2618089) - [Command line instructions for Linux](https://www.howtogeek.com/140679/beginner-geek-how-to-start-using-the-linux-terminal/).

The IEJL frontend is written using Gatsby, which requires some command line knowledge in order to be productive.

## Step 1: Install Project Dependencies

### Step 1.1: Configure Node Environment

#### Option 1 (Recommended)

```
Node.js® is a JavaScript runtime built on  [Chrome's V8 JavaScript engine](https://v8.dev/).
```

You can follow the official documentation are https://nodejs.org/en/download/package-manager/ and follow the instructions for your operating system.

#### Option 2: Installing Node via Homebrew

Assuming you have Homebrew installed from Step 1, run the following

```
 brew install node
```

```
sudo apt-get install build-essential curl git m4 ruby texinfo libbz2-dev libcurl4-openssl-dev libexpat-dev libncurses-dev zlib1g-dev
```

#### Option 3 (Linux users only)

```
sudo apt-get install build-essential curl git m4 ruby texinfo libbz2-dev libcurl4-openssl-dev libexpat-dev libncurses-dev zlib1g-dev
```

#### Verify your installation

```
$ node -v
v7.7.2
```

```
$ npm -v
4.1.2
```

### Step 1.2: Install Package Managers

#### Yarn (Package Manager)

https://classic.yarnpkg.com/en/docs/getting-started

#### Nvm (Node Version Manager)

https://github.com/nvm-sh/nvm#installing-and-updating

#### Gatsby Environment (JAMstack)

https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli

## Step 2: Environment Setup (OS Specific)

### Option 1: Windows

This documentation will not cover Windows environments.

If you are using Windows (7, 8, 10, Vista), we recommend that you set up [Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/en-us/windows/wsl/install-win10) to avoid compatibility problems. This is entirely up to you, but the majority of documentation available for the technologies used in this repository are Linux-based environments.

If you insist on doing so, please follow the Gatsby guide for Windows.
https://www.gatsbyjs.com/docs/how-to/local-development/gatsby-on-windows/

#### Visual Studio Code

See the document `how_to_setup_vscode.md` or visit the official Microsoft guide [here](https://code.visualstudio.com/docs/setup/windows)

### Option 2: MacOS

This will give you a more advanced setup and these tools will require proper research to become more in touch with each of them. This documentation is purely to help you get started, but should provide an outline you can utilize across future projects.

#### Command Line Tools

Every developer utilizes _Command Line Tools_. A simple terminal command will allow you to download these. It will ask you to confirm after you have entered the command.

```
xcode-select --install
```

#### Homebrew

Copy and paste the following code into your terminal to install Homebrew.

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

#### Visual Studio Code

See the document `how_to_setup_vscode.md`

#### iTerm2 (Optional, but recommend)

Save yourself some trouble navigating the terminal with iTerm2. The interface is really intuitive and user-friendly. It has some really cool features, such as search, autocomplete, and paste history. The one feature that makes it a complete must-have for many is the split panes.

![](https://iterm2.com/img/screenshots/split_panes.png)

## Option 3: Ubuntu, Debian, and other `apt` based distros

If you are running Linux, most tools should be installed by default. To be safe, run the following command:

```
sudo apt-get install build-essential procps curl file git
```

By default, Linux should have necessary packages pre-installed

#### Visual Studio Code

See the document `how_to_setup_vscode.md`

## Step 3: Project Codebase

This guide assumes you have git setup correctly on your local environment. If not, please read the document `how_to_git`
https://github.com/iejl-cweb/cweb

### Step 3.1: Clone the repository

```
$ git clone  https://github.com/iejl-cweb/cweb
```

How to Get Started
Contributing to IEJL Frontend
Get a Browser (Chrome or Opera preferred)
Environment Setup
Configure IDE
Clone the project into your local environment
CI/CD Workflow
Submitting Changes
Code Maintenance
Get a Browser (Chrome or Opera preferred)
Environment Setup
Configure IDE
Clone the project into your local environment
CI/CD Workflow
Submitting Changes
Development Environment Setup
You will need to configure your developer environment locally before you can use this repository. By the end, you should have a working development environment and IDE for this guide.

Prerequisites: Navigate the command Line
The instructions for how to use the command line differ slightly based on what operating system your computer uses:

- Command line instructions for Mac
- Command line instructions for Windows
- Command line instructions for Linux.

The IEJL frontend is written using Gatsby, which requires some command line knowledge in order to be productive.

Step 1: Install Project Dependencies
Step 1.1: Configure Node Environment
Option 1 (Recommended)
Node.js® is a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/).
You can follow the official documentation are https://nodejs.org/en/download/package-manager/ and follow the instructions for your operating system.

Option 2: Installing Node via Homebrew
Assuming you have Homebrew installed from Step 1, run the following

brew install node
sudo apt-get install build-essential curl git m4 ruby texinfo libbz2-dev libcurl4-openssl-dev libexpat-dev libncurses-dev zlib1g-dev
Option 3 (Linux users only)
sudo apt-get install build-essential curl git m4 ruby texinfo libbz2-dev libcurl4-openssl-dev libexpat-dev libncurses-dev zlib1g-dev
Verify your installation
$ node -v
v7.7.2
$ npm -v
4.1.2
Step 1.2: Install Package Managers
Yarn (Package Manager)
https://classic.yarnpkg.com/en/docs/getting-started

Nvm (Node Version Manager)
https://github.com/nvm-sh/nvm#installing-and-updating

Gatsby Environment (JAMstack)
https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli

Step 2: Environment Setup (OS Specific)
Option 1: Windows
This documentation will not cover Windows environments.

If you are using Windows (7, 8, 10, Vista), we recommend that you set up Windows Subsystem for Linux (WSL) to avoid compatibility problems. This is entirely up to you, but the majority of documentation available for the technologies used in this repository are Linux-based environments.

If you insist on doing so, please follow the Gatsby guide for Windows.
https://www.gatsbyjs.com/docs/how-to/local-development/gatsby-on-windows/

Visual Studio Code
See the document how_to_setup_vscode.md or visit the official Microsoft guide here

Option 2: MacOS
This will give you a more advanced setup and these tools will require proper research to become more in touch with each of them. This documentation is purely to help you get started, but should provide an outline you can utilize across future projects.

Command Line Tools
Every developer utilizes Command Line Tools. A simple terminal command will allow you to download these. It will ask you to confirm after you have entered the command.

xcode-select --install
Homebrew
Copy and paste the following code into your terminal to install Homebrew.

/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
Visual Studio Code
See the document how_to_setup_vscode.md

iTerm2 (Optional, but recommend)
Save yourself some trouble navigating the terminal with iTerm2. The interface is really intuitive and user-friendly. It has some really cool features, such as search, autocomplete, and paste history. The one feature that makes it a complete must-have for many is the split panes.

Option 3: Ubuntu, Debian, and other apt based distros
If you are running Linux, most tools should be installed by default. To be safe, run the following command:

sudo apt-get install build-essential procps curl file git
By default, Linux should have necessary packages pre-installed

Visual Studio Code
See the document how_to_setup_vscode.md

Step 3: Project Codebase
This guide assumes you have git setup correctly on your local environment. If not, please read the document how_to_git
https://github.com/iejl-cweb/cweb

Step 3.1: Clone the repository
$ git clone https://github.com/iejl-cweb/cweb
Markdown selection 402 bytes 64 words 16 lines Ln 3, Col 0HTML 3748 characters 596 words 77 paragraphs
MENU
Main workspace not synced.

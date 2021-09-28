# Installation tips for using Windows Subsystem for Linux (WSL) using Ubuntu 18.04 LTS

## and also setting up to do some blockchain development

Preparing for web development using WSL, I have taken from other sources and condensed it to save some time.
This intends to be a quick setup guide, if you want and in-depth explanation go ahead and open the links at the bottom.
I do not intend to take credit from them, links will be at the bottom.

**How to enable this feature**

1. Go into "Turn Windows features on or off" and scroll down to Windows Subsystem for Linux and check the box.
   _You will need to restart your PC_
2. Go to the windows store and search for 'ubuntu' select and install Ubuntu 18.04 LTS
3. Now when you search for 'ubuntu' you will be able to launch a new bash terminal
4. Setup your username and password

## Before anything else update your packages

1. `sudo apt-get update`
2. `sudo apt-get upgrade`

## Nodejs (v11.x)

1. `sudo apt-get install build-essential`
2. `curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -`
3. `sudo apt-get install -y nodejs`

_Check your installation by running_

`node -v`
`npm -v`

## Installing Yarn package manager (optional)

1. `curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -`
2. `echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list`
3. `sudo apt-get update && sudo apt-get install yarn`
   optional.
   If you are gonna use global packages run `export PATH="$(yarn global bin):$PATH"` to ensure being able to access them

**Restart your terminal now** (might not be needed, but I like to do it)

# To avoid typing the full path to your working directory, there are 2 options:

Choose the one that you like the most, **just one of these is needed**

## 1. Setting up a symbolic link

**This is useful to avoid entering your Windows path every time**

1. `ln -s /mnt/c/Users/<Insert your username>/<Your folder>/ ~/dev`
   So it looks something like this
   `ln -s /mnt/c/Users/roberto/Development/ ~/dev`

## 2. Modify your ~/.profile file

1. `cd ~`
2. `nano .profile`
3. navigate to the bottom of your file and paste the following:

```
# This allows you to switch between the Ubuntu root and your Windows Root.

# wr evaluates to the absolute path to your Windows user's root.
export wr=~/../../mnt/c/Users/<Windows Username>/<Working Folder>/

# This gives us a quick way of moving directly to the Windows root
alias cdwr='cd "$wr"'

# This brings you to your Windows Working directory immediatly when you open a new terminal.
cdwr
```

4. Close and save the file
5. Restart your terminal and you should be at your root folder

_Asumming you have VSCode already installed_
**Remember that since VSCode requires a GUI, you must install it through Windows**
Open a new terminal and run `code .` This will open a VSCode windows inside your working directory.
You are now ready to start doing `npm init` or `yarn init`

**I almost forgot** setup VSCode to use WSL as default terminal.

1. Open VSCode
2. Open the command palette `ctrl + shift + p`
3. Type _default shell_
4. Select _WSL Bash_

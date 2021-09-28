# How to use Git

## Git Setup

### Step 1: Verify Git Installation

Check git is installed on your machine, for this open your terminal and run this command.

`git –version`

If git is installed you can see the version of the git. If git is not installed the click this [link](https://git-scm.com/downloads) and download git according to your OS and install it.

### Step 2: Configure git settings globally

Configure GitHub username and email. Run these commands one by one in your terminal

`git config --global user.name “github_username”`

`git config --global user.email “github_email_address”`

### You should use SSH to connect to Github

## [Generating a new SSH key](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key)

1.  Open Git Bash.

2.  Paste the text below, substituting in your GitHub email address.

    ```shell
    $ ssh-keygen -t ed25519 -C "your_email@example.com"
    ```

    **Note:** If you are using a legacy system that doesn't support the Ed25519 algorithm, use:

    ```shell
    $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
    ```

    This creates a new ssh key, using the provided email as a label.

    ```shell
    > Generating public/private ed25519 key pair.
    ```

3.  When you're prompted to "Enter a file in which to save the key," press Enter. This accepts the default file location.

    ```shell
    > Enter a file in which to save the key (/c/Users/you/.ssh/id_ed25519):[Press enter]
    ```

4.  At the prompt, type a secure passphrase. For more information, see ["Working with SSH key passphrases](https://docs.github.com/en/articles/working-with-ssh-key-passphrases)."

    ```shell
    > Enter passphrase (empty for no passphrase): [Type a passphrase]
    > Enter same passphrase again: [Type passphrase again]
    ```

## [Adding your SSH key to the ssh-agent](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)

Before adding a new SSH key to the ssh-agent to manage your keys, you should have checked for existing SSH keys and generated a new SSH key.

If you have [GitHub Desktop](https://desktop.github.com/) installed, you can use it to clone repositories and not deal with SSH keys.

1.  Ensure the ssh-agent is running. You can use the "Auto-launching the ssh-agent" instructions in "[Working with SSH key passphrases](https://docs.github.com/en/articles/working-with-ssh-key-passphrases)", or start it manually:

    ```shell
    # start the ssh-agent in the background
    $ eval "$(ssh-agent -s)"
    > Agent pid 59566
    ```

2.  Add your SSH private key to the ssh-agent. If you created your key with a different name, or if you are adding an existing key that has a different name, replace _id_ed25519_ in the command with the name of your private key file.

    ```shell
    $ ssh-add ~/.ssh/id_ed25519
    ```

3.  Add the SSH key to your account on GitHub. For more information, see "[Adding a new SSH key to your GitHub account](https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)."

### Step 3:

Create a folder and named it as you wish or open your project folder. And open the terminal in that folder and run this command.

`git init`

This command initializes an empty git repository.

** Note that terminal should be opened in working git initialized folder**

## Step 4: Add files to Staging area

To add all the files in staging area run this command in your terminal.

`git add .`

To add specific file in staging area run this command.

`git add filename`

## Step 5: Check status of the files

By running this command, you will get the details which files are untracked, modified and in staging area.

`git status`

Now you will see that your files are in **staging area**.

## Step: 6 Commit your changes

Now to commit your files run this command in terminal

`git commit -m “Descriptive Comment about your changed files”`

## Step 7: Check your remote origin

Run this command in your terminal. If remote URL is configured, this command lists the URLs of the remote connection.

`git remote -v`

If this command not show the Repo URLs OR SSH address then add the remote origin.

## Step 8: Add remote origin

Until now all of your files and changes are stored locally in your PC. To push your changes to GitHub repository you need to configure **GitHub repository URL**. For this open your GitHub account and copy the http URL of your git repository.

![alt text](image.jpg)

And run this command.

`git remote add origin URL_OF_THE_RPO`

## Step 9: Push your changes to remote repository

Run this command to push your changes from local repository to remote repository.

`git push -u origin main`

Now all of your changes are pushed to remote repository.

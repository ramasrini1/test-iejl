# How to Contribute: Part 1

All version history is handled by git and hosted in our [repository](https://github.com/iejl-cweb/cweb)
The information in this document is particularly important because it serves as the foundation of software development projects, regardless of team size or technology stack.

## Continuous Integration and Continuous Delivery/Deployment

Here’s everything you need to know about CI/CD in order to contribute to the IEJL frontend.

We want to use best practices throughout development and will use a simplified CI/CD DevOps workflow.
CI/CD is an acronym for "Continuous Integration and Continuous Delivery/Deployment." (most often referred to as CI/CD).

## Step 1: Understand the CI/CD Pipeline

A Deployment pipeline is the process of taking code from version control and making it readily available to users of your application in an automated fashion. When a team of developers are working on projects or features they need a reliable and efficient way to build, test and deploy their work. Historically, this would have been a manual process involving lots of communication and a lot of human error.

The stages of a typical deployment pipeline are as follows.

We have three "tracks" in our pipeline. To keep things simple, most new developers will **only need to be concerned about one track.**

1. `develop` all unverified, untested code will go here.
2. `staging` all completed code that has not been shipped into production
3. `main` - we will determine a weekly or daily push cycle to migrate staging into production.

![enter image description here](https://i.imgur.com/lOTqaZh.png)

As a general guideline, all code changes will branch off from `develop`.

---

## Step 2: Install a GUI

Visualization is very important, even more so for beginners. I highly suggest using a GUI to navigate version history. There are a number of options to choose from: https://git-scm.com/downloads/guis

I recommend SourceTree, but any of the available options will serve its purpose.
![](https://wac-cdn.atlassian.com/dam/jcr:580c367b-c240-453d-aa18-c7ced44324f9/hero-mac-screenshot.png?cdnVersion=1693)

For others who want to use the command line, please continue reading.

## Step 2B: (Optional) Command Line

The result will be identical to that of step 2 for most new developers.

There are a number of benefits to using the command line and will not be covered for the scope of this tutorial. This is not recommended for beginners, but will be useful for project maintainers.

#### Step 2.1

Open up your git configuration file _`.gitconfig`_ located at the root of your harddrive.

```
### use nano if you prefer instead of vim
$ vim ~/.gitconfig`

### or

$ cd ~ # navigate to home
$ vim .gitconfig # open config
```

#### Step 2.2

Open up the following config file.

[![](https://github.githubassets.com/favicon.ico).gitconfig](https://github.com/laujonat/dotfiles/blob/master/git/.gitconfig)

Take the content and paste it into your IDE somewhere and replace the fields in `[user]`

#### Step 3.3

Copy and paste the file contents into _.gitconfig_
![enter image description here](https://i.imgur.com/zPFBz8Z.png)

Run the git command `lola` will now output the pipeline from your command line.

```
$ git lola
```

![enter image description here](https://i.imgur.com/KH1srm4.png)

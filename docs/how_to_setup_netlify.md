# How to setup Netlify

## Getting started on Netlify

#### Add your site to Netlify

![](https://cdn.netlify.com/cecd5004623205e93de7a840c2b47f1c5674e792/f667f/img/blog/add-new-project.png)

Creating a new site on Netlify is simple. Once you’ve logged in, you’ll be taken to https://app.netlify.com. If you’re just starting out, there’s only one option, Click the Add A New Project button shown above.

#### Step 2: Link to Your GitHub (or supported version-control tool of choice)

![](https://cdn.netlify.com/0a36819500c2254f84301d10e6ecbd1e0f20f143/c7374/img/blog/create-new-site.png)

Be sure to push your repo to GitHub, so that all we’ll need to do is link Netlify to GitHub. Click the GitHub button as illustrated in the screenshot above.

## Step 3: Authorize Netlify

![](https://cdn.netlify.com/0acaae3eeca45e37481187030ffc0c981ec2172e/e4fb0/img/blog/authorize-github.png)

It’s time to allow Netlify and GitHub to talk to each other. Clicking the Authorize Application button will do just that. Like it says in the image below, Netlify doesn’t store your GitHub access token on our servers. If you’d like to know more about the permissions Netlify requests and why we need them, you can visit our documentation on Git provider permissions.

## Step 4: Step 4: Select Your Repo

![](https://cdn.netlify.com/b429c96d703c49639ef0d78a789af4a656bb06dc/97b2e/img/blog/choose-repo.png)

Now that you’ve connected Netlify and GitHub, you can see a list of your Git repos. Choose the repo you’d like to deploy from the list.

## Step 5: Configure Your Settings

Here you can configure your options. Make sure your publish directory is where your public site files are placed after building the site (e.g. dist) and your build command is whatever you run to build the site (e.g. npm run build). Then click the Deploy site button to continue.

For this project, you want to set your build command to

```
yarn build
```

Publish directory

```
public
```

Branch to deploy

```
Production: main
```

## Step 6: Enable deploy for all branches

This enables the previews.

# How to Contribute: Part 2

## Step 3: Making Code Changes

Important! Be mindful of whether your local environment has the latest changes from Github. Be sure to periodically pull from the in the remote repository.

When you begin working, pull the latest changes by running the following

```
$ cd <project location>/cweb

# If you are not on the branch `develop`, checkout the branch
$ git checkout develop

# Pull remote changes to your local environment
$ git pull origin develop
```

The next step depends on where you left off the last time you were developing in the codebase.

## Step 4: Create a Branch

Working on it...

## Step 5: Make your changes

#### Add commits

Once your branch has been created, it's time to start making changes. Whenever you add, edit, or delete a file, you're making a commit, and adding them to your branch. This process of adding commits keeps track of your progress as you work on a feature branch.

Commits also create a transparent history of your work that others can follow to understand what you've done and why. Each commit has an associated commit message, which is a description explaining why a particular change was made. Furthermore, each commit is considered a separate unit of change. This lets you roll back changes if a bug is found, or if you decide to head in a different direction.

## Step 6: Commit your changes

```
# pull latest from develop before committing
$ git pull origin develop

# pull latest from develop before committing
$ git pull origin develop

$ git add .

$ git commit -m "use a good commit message"
```

## Submit Changes to Github

See document `how_to_submit_code.md`

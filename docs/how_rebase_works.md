# How Rebase Works

Visualizing how rebase works in git and how they are used in version history.

1.  `git checkout develop`

2.  `git pull --rebase` to make sure you have the latest version of `develop`

3.  `git checkout my-branch`

4.  `git rebase develop` Rebase this branch from `develop`

5.  Optionally, `git push --force` to update the branch on Github. This is useful for making sure it closes a pull request properly.

6.  `git checkout develop`

7.  `git merge --no-ff my-branch` ... merge the branch into `develop`, making sure there's a merge commit

## Visualizing how Rebase Works

If there have been commits to `develop` since the branch started, here is how the tree would look if just using `git merge my-branch`

```

o [develop] Merge branch 'my-branch' into develop

|\

o | commit to master 3

o | commit to master 2

o | commit to master 1

| o [feature/my-branch] commit to branch 3

| o commit to branch 2

| o commit to branch 1

|/

o commit to master

```

Or, worse, merge master into the branch then back into `develop`:

```

o [master] Merge branch 'feature/my-branch' into master

|\

| o [feature/my-branch] Merge branch master into 'feature/my-branch'

|/|

o | commit to master 3

o | commit to master 2

o | commit to master 1

| o commit to branch 3

| o commit to branch 2

| o commit to branch 1

|/

o commit to master

```

And using rebase:

```

o [master] Merge branch 'feature/my-branch' into master

|\

| o [feature/my-branch] commit to branch 3

| o commit to branch 2

| o commit to branch 1

|/

o commit to master 3

o commit to master 2

o commit to master 1

o commit to master

```

---
layout: post
title:  "Git - Cheat sheet"
date:   2018-08-01 09:00:00 +0100
categories: Git
---

## Create a repository

`git init [project-name]` - Creates a new, empty local *[project-name]* repository

`git clone [url]` - Downloads a project and its entire version history

## Stage files

`git status` - Gives a list of all the uncommitted changes

`git diff` - Shows file differences not yet staged

`git add [file]` - Stages only [file]

`git add -A` - Stages all files

`git reset [file]` - Unstages a file

## Commit and push changes

`git commit -m "message"` - Commits staged filles

`git push` - Pushes changes

`git tag [tag-name]` - Allows to add a tag name, useful for releases

## Pull changes from origin

`git fetch` - Gets latest changes from origin (don't merge)

`git pull` - Gets the latest changes from origin and merge

`git pull -rebase` - Gets the latest changes from origin and place changes on top

## Stash

`git stash` - Temporarily saves all uncommitted tracked files

`git stash list` - Shows list of stashes

`git stash pop` - Restores the most recently stashed files and removed them from the list of stashes

`git stash apply [optional-id-from-list]` - Applies the latest stashed contents, or a specifics one if use [optional-id-from-list]

`git stash drop [optional-id-from-list]` - Discards the most recently stashed files, or a specifics one if use [optional-id-from-list]

## Branches

`git branch` - Gives a list of all the local branches in the repo

`git branch -a` - Gives a list of all the local and remote branches in the repo

`git branch [new-branch]` - Creates a new branch named [new-branch]

`git checkout [branch-name]` - Switches to [branch-name]

`git merge [branch]` - Merges [branch] into the current branch

`git push origin --delete [branch-name]` - Deletes [branch-name] locally and remotely

`git push origin [branch1]:[branch2]` - Pushes [branch1] into [branch2]

## Resources

- [GIT CHEAT SHEET - GitHub](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf)
- [Git cheat sheet - Bitbucket](https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet)
- [Reference - git](https://git-scm.com/docs)
- [Git Cheat sheet - schotch](https://scotch.io/bar-talk/git-cheat-sheet)
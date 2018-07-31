---
layout: post
title:  "0 Git - Cheat sheet"
date:   2018-07-31 01:32:19 +0100
categories: Git
---

## Create a repository

`git init [project-name]` - Creates a new, empty local *[project-name]* repository

`git clone [url]` - Downloads a project and its entire version history

## Stage files

`git status` - Gives a list of all the uncommitted changes

`git add [file]` - Stages only [file]

`git add -a` - Stages all files

`git reset [file]` - Unstages a file

## Branches

`git branch` - Gives a list of all the local branches in the repo

`git branch -a` - Gives a list of all the local and remote branches in the repo

`git branch [new-branch]` - Creates a new branch named [new-branch]

`git checkout [branch-name]` - Switches to [branch-name]

`git merge [branch]` - Merges [branch] into the current branch

`git push origin --delete [branch-name]` - Deletes [branch-name] locally and remotely

## Resources

- [GIT CHEAT SHEET - GitHub](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf)
- [Git cheat sheet - Bitbucket](https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet)
- [Reference - git](https://git-scm.com/docs)
- [Git Cheat sheet - schotch](https://scotch.io/bar-talk/git-cheat-sheet)
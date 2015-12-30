# Angular Github Repo Display (AGRD)

Display files from a Github Repo on a site using AngularJS.

### Currently can display markdown files only

# Features

- Display markdown files pulled from github repo.
- Supports latex render using MathJax.
- Support relative links in markdown file.

# How to Use it

## Installation

First, download "angular-github-repo-display" and add it to your app.

**Warning**: AGRD depends on MathJax. Bower downloads around 50+ MB just for that :| So be a little bit patient.

    bower install angular-github-repo-display

Then add the module to your app.

    angular.module( "your-app", ["angular-github-repo-display"] );

## Fixing Route

Decide, on which route you want to display the github repo. Suppose, you decided, it will be on the following route:

    yourdomain.com/#/may/be/here

AGRD displays files from repo using the routes parameters. So it's important that we configure the route. Just add this:

    angular.module("your-app").configure ( function( $routeProvider){
            $routeProvider.when ( "/may/be/here/:filePath*", {
                    templateUrl: "SpecialTemplate.html"
            });
    });

So, just add ":filePath*" at the end of your desired route. `filePath` acts an parameter which AGRD uses to pull in files. And what about `specialTemplate`? That's coming next.

## SpecialTemplate

Add this directive in your SpecialTemplate view:

    <github-repo git-link="UserName/RepoName"></github-repo>

So what is happening? This directive is responsible for pulling files from github using API. But how is it going to know which repo to pull? Notice the "git-link" attribute there? That's what points to the git repo we want to pull.

For example, suppose we want to pull one of my other repo, then we put `git-link="forthright48/cpps101"`.

## Render Latex

AGRD uses MathJax to render latex. So just wrap your latex with $ sign. If you want to use $ sign literally, then you must delimit it by writing \\$.

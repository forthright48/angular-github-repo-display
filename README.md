# Not Ready Yet. Wait few more days.

# Angular Github Repo Display (AGRD)

Display files from a Github Repo on a site using AngularJS.

### Currently can display markdown files only


# How to Use it

## Dependencies

First, download "angular-github-repo-display" and add it to your app.

    angular.module( "your-app", ["f48-AGRD"] );

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

## How to Render Latex?

Github doesn't render latex, but can we? Yes. We can use MathJax. Just add this at the end of your html.

    <!-- MathJAX -->
    <script type="text/javascript" src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
    <script type="text/x-mathjax-config">
        MathJax.Hub.Config({
            tex2jax: {
                inlineMath: [ ['$','$'], ["\\(","\\)"] ],
                processEscapes: true
            }
        });
    </script>
